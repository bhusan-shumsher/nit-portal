
const GRADE_VALUE = Object.freeze({
   "A": 4.0,
   "A-": 3.7,
   "B+": 3.3,
   "B": 3.0,
   "B-": 2.7,
   "C+": 2.3,
   "C": 2.0,
   "C-": 1.7,
   "D+": 1.3,
   "D": 1,
   "NQ": 0,
   "Expelled": 0,
   "ABS": 0,
   "F": 0,
   "CNR": 0
});

export function sgpaCalc(gradeSheet){
    const failedList = ['F','NQ','ABS','CNR','EXP'];
    var hour = 0;
    var obtainedCredit = 0;
    var sgpa = 0.0;
    var fail = false;
    gradeSheet.forEach(obj=>{
    if(failedList.includes(obj['grade'])){
        fail = true;
    }else{
        obtainedCredit = GRADE_VALUE[obj['grade']] * Number(obj['creditHour']) + obtainedCredit;
        hour = hour +  Number(obj['creditHour']);
    }
 });
  if(fail){
    return 0.0;
  }else{
    console.log('totalhour',hour);
    sgpa = obtainedCredit/hour;
    console.log(sgpa);
    return sgpa.toFixed(2);
  }
 

}