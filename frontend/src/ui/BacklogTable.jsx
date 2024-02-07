

export default function BacklogTable({subjects}){
    return (
        <div className="col-lg-10">
<div className="card">
<div className="card-header">
<h5 className="card-title">Back Subjects</h5>
</div>
<div className="card-body">
<div className="table-responsive">
<table className="table table-hover mb-0">
<thead>
<tr>
<th>Code</th>
<th>Course Name</th>
<th>Credit Hour</th>
<th>Remark</th>
</tr>
</thead>
<tbody>
{ subjects.map(sub=>{
        return <SubjectRow data={sub}/>
    })
}
</tbody>
</table>
</div>
</div>
</div>
</div>
    )
};


function SubjectRow ({data}){
    return (
    <tr>
    <td>{data.courseCode}</td>
    <td>{data.subject}</td>
    <td>{data.creditHour}</td>
    <td>Retake</td>
    </tr>
    )
};
