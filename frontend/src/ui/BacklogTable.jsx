

export default function BacklogTable({subjects}){
    
    return (
        <div class="col-lg-10">
<div class="card">
<div class="card-header">
<h5 class="card-title">Back Subjects</h5>
</div>
<div class="card-body">
<div class="table-responsive">
<table class="table table-hover mb-0">
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
    <td>'CMM'</td>
    <td>{data.subject}</td>
    <td></td>
    <td>Retake</td>
    </tr>
    )
};
