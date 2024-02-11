import { useForm } from "react-hook-form";

import {useState} from 'react'
import { useFilterBySubmission } from "../../../hooks/adminHooks/useFilterBySubmission";
export default function ListFormSubmitted(){
    const {register, handleSubmit,formState} = useForm();
    const [enabled, setEnabled] = useState(false);
    const [values,setValues] = useState([]);
    const {data,isLoading,error,isError} = useFilterBySubmission(values,{enabled:false});

    function onSubmit(formdata){
           console.log(formdata);
           setValues(formdata);
           setEnabled(true);
    }
    function onError(){

    }
    // console.log(data);
    if(isLoading){
        return(
            <div className="main-wrapper">
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <h4>Data Loading ....</h4>
                    </div>

                </div>
            </div>
        );
    }
    return(
        <div className="main-wrapper">
                    <div className="page-wrapper">
        <div className="content container-fluid">

            <div className="page-header">
            <div className="row align-items-center">
            <div className="col">
            <h3 className="page-title">Exam Form Sumission List</h3>
            <ul className="breadcrumb">
            <li className="breadcrumb-item">Dashboard</li>
            <li className="breadcrumb-item active">Exam Form Submitted</li>
            </ul>
            </div>
            </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit,onError)}>
<div className="student-group-form">
<div className="row">

<div className="col-lg-2 col-md-6">
<div className="form-group">
<select type="text" className="form-control"
    {...register('type')}
>
<option value='SUBMITTED'>Submitted</option>
    <option value="NOT-SUBMITTED">Not Submitted</option>
</select>
</div>

</div>
<div className="col-lg-2 col-md-6">
<div className="form-group">
<select type="text" className="form-control" {...register('currentSemester')}>
    <option value='1'>1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
</select></div>
</div>

<div className="col-lg-2">
<div className="search-student-btn">
<button type="btn" className="btn btn-primary">Search</button>
</div>
</div>
{/* /////// */}
</div>
</div>
</form>

            <div className="row">
            <div className="col-sm-12">
            <div className="card card-table">
            <div className="card-body">

                    <div className="table-responsive">
                    <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                    <thead className="student-thread">
                    <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>Semester</th>
                    <th className="text-end">Status</th>
                    </tr>
                    </thead>
                                    <tbody>
                                    {data?showList(data):null}
                                    </tbody>
                    </table>
                    </div>
            </div>
            </div>
            </div>
            </div>
        </div>

                    </div>
        </div>
    );
}

function showList(students){
    if(students.length < 1){
        return (<h5>No Students</h5>);
    }
    else{
            
            return students.map((st,index)=>{
                return(
                    <tr keys={index}>
                <td>{st.rollNumber}</td>
                <td>
                    <a>{st.firstName} {st.middleName} {st.lastName}</a>
                </td>
                <td>{st.currentSemester}</td>
                <td className="text-end">
                {st.formSubmitted ?<span className="badge badge-success">Submitted</span>: 
                    <span className="badge badge-danger">Unsubmitted</span>
                }
                </td>
</tr>
                );
            })
    }
}