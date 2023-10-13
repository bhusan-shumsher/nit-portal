import {useSchoolInfo} from '../../hooks/useSchoolnfo';
import BarChart from '../../ui/BarChart';
import DoughnutChart from '../../ui/DoughnutChart';
export default function Detail(){

    const {data,error,isError,isLoading} = useSchoolInfo();
    if(isLoading){
        return <h1>Loading</h1>
    }
    if(error){
        return <h1>Cant fetch data now</h1>
    }
    // ALSO CHECK FOR ERROR
    if(!isLoading && !isError && data.length !== 0){
        const {
            schoolName,secondaryLevelBoard,schoolYear,schoolSymbolNumber,schoolAddress,
            schoolTotalMarks, schoolObtainedMarks,schoolDivision,
            collegeName, collegeAddress,highSchoolBoard,highSchoolYear,highSchoolSymbolNumber,
            highSchoolTotalMarks,highSchoolObtainedMarks,highSchoolDivision
        } = data[0];
        return(
            // <div className="col-lg-8">
            <div className="student-personals-grp">
            <div className="card mb-0">
            <div className="card-body">
            <div className="heading-detail">
            <h4>Academic Background</h4>
            </div>
            <div className="hello-park">
            <h5>High School</h5>
            <h6>{collegeName},{collegeAddress}</h6>
            <div className="educate-year">
            <h6>Year: {highSchoolYear}</h6>
            <h6>Board: {highSchoolBoard}</h6>
            <h6>SymbolNumber: {highSchoolSymbolNumber}</h6>
            <h6>Division: {schoolDivision}</h6>
            <h6>Marks: {highSchoolObtainedMarks}/{highSchoolTotalMarks}</h6>
            </div>

            </div>
            <div className="hello-park">
            <h5>School</h5>
            <h6>{schoolName},{schoolAddress}</h6>
            <div className="educate-year">
            <h6>Year: {schoolYear}</h6>
            <h6>Board: {secondaryLevelBoard}</h6>
            <h6>SymbolNumber: {schoolSymbolNumber}</h6>
            <h6>Division: {highSchoolDivision}</h6>
            <h6>Marks: {schoolObtainedMarks}/{schoolTotalMarks}</h6>
            </div>
            </div>
            </div>
            </div>
            </div>
            // </div>
        );
    }
    
}