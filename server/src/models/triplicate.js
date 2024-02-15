const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const triplicateSchema = new Schema({
   semester:{
      type: Number,
      min: 1
      },
   faculty:{
      type: String,
      enum:['BECE','BESE','BEELX','BCA','BBA','BEIT','BECIVIL']
   },
   rollNumber:{
    type: String,
    trim: true
   },
   examRollNumber:{
    type: String,
    trim: true
   },
   puRegistrationNumber:{
      type: String,
      trim: true
   },
   backSubjects: [
     {
        subject: {type:String,trim:true},
        grade: {type: String,trim:true},
        courseCode: {type: String,trim:true},
        creditHour:{type: String,trim:true}
     }
   ],
   regularSubjects:[
    {
        subject: {type:String,trim:true},
        grade: {type: String,trim:true},
        courseCode: {type: String,trim:true},
        creditHour:{type: String,trim:true}
     }
   ],
   backCount:{type: Number}
});


module.exports = mongoose.model('Triplicate',triplicateSchema);
