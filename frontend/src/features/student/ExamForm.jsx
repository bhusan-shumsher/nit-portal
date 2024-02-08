
import './form.css';
import styled, {css}from 'styled-components';
import {useCurrentFailList} from '../../hooks/useCurrentFailList';
import { useCurrentSubject } from '../../hooks/useCurrentSubject';
import { useFeeStatus } from '../../hooks/useFeeStatus';
import RegularSubjectTable  from '../../ui/RegularSubjectTable';
import BacklogTable from '../../ui/BacklogTable';
import {useState} from 'react';
import { useExamForm } from '../../hooks/useExamForm';
import Spinner from '../../ui/Spinner';
import { toast } from "react-hot-toast";
import { usePersonalInfo } from '../../hooks/usePersonalInfo';
const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
`;
const TD = styled.td`
border: 2px solid #2e5cb8;
padding: 2px 4px;
text-align: center;
`;

const TH = styled.th`
border: 2px solid #2e5cb8;
padding: 2px 4px;
text-align: center;
 ${(props)=>{
    css`
      width: ${props.width}
    `
 }}
`;

const TABLE = styled.table`
width: 100%;
border: 2px solid #2e5cb8;
border-collapse: collapse;
margin-top: 10px;
`;

const DIV = styled.div`
margin: 20px 30px;
color: #2e5cb8;
`;


export default function ExamForm(){

    const {data:backLogData,isLoading: backlogIsLoading,error:backlogError,isError:backlogIsError} = useCurrentFailList();
    const {data,isLoading: currentSubjectIsLoading,error,isError} = useCurrentSubject();
    const {data:userData,isLoading:userIsLoadin,error:userError,isError:userIsError} =usePersonalInfo();
    const {data:feeData, isLoading:feeLoading} = useFeeStatus();
    const [backLogs, setBackLogs] = useState([]);
    const [selected, setSelected] = useState(false);
    const {postForm,isLoading} = useExamForm();
    function onClick(e,back){
        if(e.target.checked){
            setBackLogs([
                ...backLogs,
                back
            ]);
            // console.log(backLogs.length);
        }else{
            const arr = backLogs.filter(b=> b._id !== back._id);
            setBackLogs(arr);
        } 

    }
    function onSubmit(e){
        e.preventDefault();
        if(backLogs.length > feeData.backsAllowed){
            toast.error('You are not allowed to fill these many backs!!');

        }else{
            setSelected(true);
        }

    }
    function submitForm(){
        const form = new Object();
        form.regularSubjects = data;
        form.backSubjects = backLogs;
        postForm(form);
    }
    if(isLoading || backlogIsLoading ){
        return(
            <div className="page-wrapper">
            <div className="content container-fluid">
                <Spinner/>
           </div>
           </div>
        );
       
    }
    if(userData.formSubmitted){
        return(
            <div class="page-wrapper">
<div class="content container-fluid">

<div class="page-header">
<div class="row">
<div class="col">
<h3 class="page-title">Exam Form</h3>
<ul class="breadcrumb">

</ul>
</div>
</div>
</div>

<div class="row">
<div class="col-sm-12">
    You have already submitted your form.
</div>
</div>
</div>
</div>
        );
    }
    if(!selected){
        return(
            <>
        <div class="page-wrapper">
<div class="content container-fluid">
<div class="page-header">
<div class="row">
<div class="col">
<h3 class="page-title">Please select</h3>
<ul class="breadcrumb">
<li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
<li class="breadcrumb-item active">Backlogs</li>
</ul>
</div>
</div>
</div>
        <div class="form-group row">
<label class="col-form-label col-md-2"> List of Backlogs</label>
<label><font color='red'> *You can choose maximum 5 subjects to retake. Retake will cost Rs. 500/Subject</font></label>
<br></br>
<div class="col-md-10">
        <form>
        {backLogData.map((backPaper,index)=>{
            // console.log('backpaper',backLogData);
            return <CheckBox 
                back={backPaper.grades} 
                semester ={backPaper.semester}
                key={index}
                onClick={onClick}
                />
     
    })}
            <button 
                class="btn btn-primary" 
                type="submit"
                onClick={e=>onSubmit(e)}
                >Continue</button>
               
        </form>  
</div>
</div>
</div>
</div>
    </>
        );
    }
       else{
            return( 
                <>
                <div className="page-wrapper">
                <div className="content container-fluid">
                  <DIV> 
                <div class="exam-header">
                {/* <img class="logo" src="university-logo.jpg" alt="University Logo"/> */}
                <div className="exam-info">
                    <span>POKHARA UNIVERSITY</span>
                    <span>Office of the Controller of Examinations</span>
                    <span style={{fontSize:"16px"}}>Semester/Trimester/Yearly Examinations</span>
                    <span style={{fontSize:"16px"}}>Entrance Card</span>
                    {!feeData.duePaid ? <font color='red'>You have outstanding due. Please contact the Account Section</font> : null}

                </div>
                {/* { userData.data.image ?<img class="logo" src={`data:${userData.data.image.contentType};base64,${toBase64(userData.data.image.data)}`} alt="PP Logo"/>: null} */}
            </div>
            
            <div class="cols">
            <RegularSubjectTable subjects={data}/>
            <BacklogTable subjects={backLogs}/>
            {feeData.duePaid ?
            <button 
                    className="btn btn-primary" 
                    type="submit"
                    onClick={submitForm}
                    >Continue</button>
                : <font color='red'>You Have Outstanding due left. Please contact the Account Section</font>
            }
        </div>
            </DIV> 
        </div>
        </div>
                </>
            ); 
        }
        
    
    
}




function CheckBox ({back,semester,onClick}){
    return (
        <div className="checkbox">
            <label>
            <input 
                type="checkbox"
                onChange={(e)=>onClick(e,back)}
             /> {back.subject} (Semester: {semester} | CourseCode: {back.courseCode})
            </label>
        </div>
    );
}



const toBase64=(data)=>{
    const base64 = btoa(String.fromCharCode(... new Uint8Array(data.data)));
    return base64;
}