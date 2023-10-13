
import { useCurrentSubject } from "../../hooks/useCurrentSubject";
import TableRow from "../../ui/TableRow";
export default function CurrentSubject(){
    const {data,isLoading,error,isError} =useCurrentSubject();
    if(isLoading){
        return <h1>Loadin Data</h1>
    }
    return(
        <>
        <div className="page-wrapper">
<div className="content container-fluid">

<div className="page-header">
<div className="row align-items-center">
<div className="col">
<h3 className="page-title">Subjects</h3>
<ul className="breadcrumb">
<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
<li className="breadcrumb-item active">Subjects</li>
</ul>
</div>
</div>
</div>

<div className="student-group-form">
<div className="row">
<div className="col-lg-3 col-md-6">
<div className="form-group">
<input type="text" className="form-control" placeholder="Search by ID ..."/>
</div>
</div>
<div className="col-lg-3 col-md-6">
<div className="form-group">
<input type="text" className="form-control" placeholder="Search by Name ..."/>
</div>
</div>
<div className="col-lg-4 col-md-6">
<div className="form-group">
<input type="text" className="form-control" placeholder="Search by className ..."/>
</div>
</div>
<div className="col-lg-2">
<div className="search-student-btn">
<button type="btn" className="btn btn-primary">Search</button>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-sm-12">
<div className="card card-table">
<div className="card-body">

<div className="page-header">
<div className="row align-items-center">
<div className="col">
<h3 className="page-title">Subjects</h3>
</div>

</div>
</div>

<div className="table-responsive">
<table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
<thead className="student-thread">
<tr>
<th>
<div class="form-check check-tables">
<input class="form-check-input" type="checkbox" value="something"/>
</div>
</th>
<th>Code</th>
<th>Name</th>
<th>Credit Hour</th>
<th class="text-end">Action</th>
</tr>
</thead>
<tbody>
{ data.map((subject,index)=>{
    return <TableRow 
        subjectCode = {subject.courseCode}
        subjectName ={subject.subjectName}
        creditHour ={subject.creditHour}
        key={index}/>
})}
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

        </>
       
    )
}