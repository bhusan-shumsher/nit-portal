import {useSearchStudent} from '../../hooks/adminHooks/useSearchStudent';
import { useForm } from "react-hook-form";
import {useState} from 'react'
import Spinner from '../../ui/Spinner';
import ShowStudent from './ShowStudent';
export default function ListStudent(){
    const {register, handleSubmit,formState} = useForm();
    const [enabled, setEnabled] = useState(false);
    const [values,setValues] = useState({});
    const {data,isLoading,error,isError} = useSearchStudent(values,{enabled:false});

    if(isLoading){
        return(
            <div className="page-wrapper">
            <div className="content container-fluid">
                <Spinner/>
            </div>
            </div>
        );
    }
    function onSubmit(data){
        if(data.semester === '0'){
            delete data.semester;
        }
        if(data.faculty === '0'){
            delete data.faculty;
        }
        setValues(data);
        setEnabled(true);        
    }
    function onError(){

    }
    console.log(data);
    return(

        <div className="page-wrapper">
<div className="content container-fluid">

<div className="page-header">
<div className="row">
<div className="col-sm-12">
<div className="page-sub-header">
<h3 className="page-title">Students</h3>
<ul className="breadcrumb">
<li className="breadcrumb-item"><a href="students.html">Student</a></li>
<li className="breadcrumb-item active">All Students</li>
</ul>
</div>
</div>
</div>
</div>
<form onSubmit={handleSubmit(onSubmit,onError)}>
<div className="student-group-form">
<div className="row">
<div className="col-lg-2 col-md-6">
<div className="form-group">
<input type="text" 
    className="form-control" 
    placeholder="Search by Roll"
    {...register('rollNumber')}
    />
</div>
</div>
<div className="col-lg-2 col-md-6">
<div className="form-group">
<input type="text" className="form-control" placeholder="Search by Name"
{...register('studentName')}
/>
</div>
</div>
<div className="col-lg-2 col-md-6">
<div className="form-group">
<select type="text" className="form-control"
    {...register('faculty')}
>
    <option value='0'>All Faculty</option>
    <option value="BESE">BESE</option>
    <option value="BEIT">BEIT</option>
    <option value="BECE">BECE</option>
    <option value="BEELX">BEELX</option>
</select>
</div>

</div>
<div className="col-lg-2 col-md-6">
<div className="form-group">
<select type="text" className="form-control" {...register('semester')}>
    <option value='0'>All Semester</option>
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

<div className="col-lg-2 col-md-6">
<div className="form-group">
<input type="text" className="form-control" placeholder="Search by +2"
{...register('collegeName')}
/>
</div>
</div>
{/* ////////////// */}
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
<div className="card card-table comman-shadow">
<div className="card-body">
    {error && <h1>Cant fetch data now</h1>}
    {data && enabled && <ShowStudent students={data}/>}
</div>
</div>
</div>
</div>
</div>

</div>
    );
}