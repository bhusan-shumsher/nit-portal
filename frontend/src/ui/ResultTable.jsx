

export default function ResultTable(props){
    const {result} = props;
    const {_id} = result;
    const grades = result.grades;
    const data = grades.map(d=>{
        return d.result;
    })
    const [sgpa] = grades.map(d=>{
        return d.sgpa
    })
    return(
        <div class="row">
    <div class="col-lg-10">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Semester {_id}</h5>
    </div>
    <div class="card-body">
    <div class="table-responsive">
    <table class="table table-hover mb-0">
    <thead>
    <tr>
    <th>Course Code </th>
    <th>Subject Name</th>
    <th>Grade</th>
    <th>Remarks</th>
    </tr>
    </thead>
    <tbody>
    
   
    {data.map(r=>{
        return <ResultRow value={r}/>
    })}
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><b>SGPA: {sgpa}</b></td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
</div>
</div>
</div>
    );
};

 function ResultRow({value}){
    
    return value.map(r=>{
        return(
            <tr>
            <td></td>
            <td>{r.subject}</td>
            <td><p style={{color: r.grade ==='F' ? 'red':'black' }}>{r.grade}</p></td>
            <td>{r.grade==='CNR' ? 'Course Not Registered': ''}</td>

        </tr>
        );
    })
    
}