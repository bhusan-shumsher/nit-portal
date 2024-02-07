
const fs = require("fs");
const path = require("path");
const puppeteer = require('puppeteer');
const handlebars = require("handlebars");
const User = require('../models/user');
const util = require('../utils/array-padding');


exports.generateForm = async (req,res,next)=>{
try{

// get roll number
const {rollNumber,faculty} = req; 
 const personalData = await User.find({rollNumber});
 if(personalData.length === 0){
    throw new Error('cant fetch your details now. Try again later');
 }
 if(!personalData[0].image){
    throw new Error('cant load your photo.please check your pic')
 }
 if(!'data' in personalData[0].image ){
    throw new Error('Upload pic before submitting form');
 }
// get current sem, ern 
const data = await User.aggregate([
    {$match:{rollNumber}},
    {$lookup:{
        from: 'results',
        localField: 'rollNumber',
        foreignField: 'rollNumber',
        as: 'examRollNumber'
    }},
    {$set:{
        examRollNumber: {
            $arrayElemAt: ['$examRollNumber.examRollNumber',0]
        }
    }}
]);

if(!data){
    res.status(500).send({message: 'cant process now'});
}
const date = new Date();
const dateStamp = date.getDate() + '-' + (date.getMonth() +1) +'-' + date.getFullYear();
const regularSubjects = util.arrayPadding(req.body.formData.regularSubjects,10);
const backSubjects = util.arrayPadding(req.body.formData.backSubjects, 8);
const newData = new Object();
newData.backSubjects = backSubjects;
newData.regularSubjects = regularSubjects;
newData.allSubjects = removeEmptyObjects(regularSubjects).concat(renameKey(removeEmptyObjects(backSubjects)));
newData.firstName = data[0].firstName;
newData.lastName = data[0].lastName;
newData.middleName = data[0].middleName;
newData.faculty = data[0].faculty;
newData.examRollNumber = data[0].examRollNumber;
newData.totalBackDue = removeEmptyObjects(backSubjects).length * 500;
newData.date = dateStamp;
newData.image = `data:${personalData[0].image.contentType};base64,${toBase64(personalData[0].image.data)}`;
newData.logo = logoToBase64('src/template/logo.jpg')
const templateHtml = fs.readFileSync(path.join(process.cwd(), 'src/template/entranceCard.html'), 'utf8');
    handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
// new page 
const subRegHtml = fs.readFileSync(path.join(process.cwd(), 'src/template/subReg.html'), 'utf8');
    handlebars.registerHelper("inc", function(value, optionSub)
{
    return parseInt(value) + 1;
});
//SEONDARY PAGE
const secondaryHtml = fs.readFileSync(path.join(process.cwd(), 'src/template/secondaryForm.html'), 'utf8');
    handlebars.registerHelper("inc", function(value, optionSub)
{
    return parseInt(value) + 1;
});
var template = handlebars.compile(templateHtml);
	var html = template(newData);

    var pdfPath = path.join('form');
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],

		headless: 'new'
	});
    var page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await page.emulateMediaType('screen');
 
    // create a folder 
    console.log(__dirname);
    try{
        if(!fs.existsSync(`src/submitted-form/${faculty}/${personalData[0].email}`)){
            fs.mkdirSync(`src/submitted-form/${faculty}/${personalData[0].email}`);
        }
    }catch(err){
        console.log(err)
    }

    // Downlaod the PDF
  const pdf = await page.pdf({
    path: `src/submitted-form/${faculty}/${personalData[0].email}/${faculty}-${rollNumber}.pdf`,
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });

//   Close the browser instance
//   await browser.close();

  // duplicate code 
  var template = handlebars.compile(subRegHtml);
	var html = template(newData);

    var pdfPath = path.join('form');
    const browserTwo = await puppeteer.launch({
        args: ['--no-sandbox'],

		headless: 'new'
	});
    var page = await browserTwo.newPage();
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await page.emulateMediaType('screen');
 
    // create a folder 
    try{
        if(!fs.existsSync(`src/submitted-form/${faculty}/${personalData[0].email}`)){
            fs.mkdirSync(`src/submitted-form/${faculty}/${personalData[0].email}`);
        }
    }catch(err){
        console.log(err)
    }

    // Downlaod the PDF
  const pdfTwo= await page.pdf({
    path: `src/submitted-form/${faculty}/${personalData[0].email}/${faculty}-${rollNumber}-subReg.pdf`,
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });
//AGAIN DUP CODE
var template = handlebars.compile(secondaryHtml);
	var html = template(newData);

    var pdfPath = path.join('form');
    const browserThree = await puppeteer.launch({
        args: ['--no-sandbox'],

		headless: 'new'
	});
    var page = await browserThree.newPage();
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await page.emulateMediaType('screen');
 
    // create a folder 
    console.log(__dirname);
    try{
        if(!fs.existsSync(`src/submitted-form/${faculty}/${personalData[0].email}`)){
            fs.mkdirSync(`src/submitted-form/${faculty}/${personalData[0].email}`);
        }
    }catch(err){
        console.log(err)
    }

    // Downlaod the PDF
  const pdfThree = await page.pdf({
    path: `src/submitted-form/${faculty}/${personalData[0].email}/${faculty}-${rollNumber}-subRegII.pdf`,
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });
//   Close the browser instance
  await browser.close();
  res.status(200).send({message:'success !'});
}catch(err){
    return res.status(501).send({message: err.message});
}
}



exports.downloadForm = async (req,res,next)=>{
    const {rollNumber,faculty,email} = req;
    const fileDir = path.join('src','submitted-form',`${faculty}`,`${email}`);
    const absPath = path.resolve(fileDir);

    const stream = fs.createReadStream(absPath+`/${faculty}-${rollNumber}.pdf`);
    try{
        res.set({
            'Content-Disposition': `attachment; filename='hello.pdf'`,
            'Content-Type': 'application/pdf',
          });
          stream.pipe(res);
    
    }catch(err){
        console.log(err)
    }
}


const renameKey= (back)=>{
    back = back.map(function (obj) {
 
        // Assign new key
        obj['subjectName'] = obj['subject'];
        // Delete old key
        delete obj['subject']; 
        obj['remark'] = 'Retake';
        return obj;
    });
    return back;
}

// remove empty object

function removeEmptyObjects(array) {
    const newArray = array.filter(element => {
      if (Object.keys(element).length !== 0) {
        return true;
      }
  
      return false;
    });
  
    return newArray;
  }
  


const toBase64=(data)=>{
    const base64 = btoa(String.fromCharCode(... new Uint8Array(data)));
    return base64;
}

function logoToBase64(filePath) {
    const img = fs.readFileSync(filePath);
  
    return 'data:image/png;base64,'+ Buffer.from(img).toString('base64');
  }