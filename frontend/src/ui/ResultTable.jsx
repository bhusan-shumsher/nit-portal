

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
        <div className="row">
    <div className="col-lg-10">
    <div className="card">
    <div className="card-header">
    <h5 className="card-title">Semester {_id}</h5>
    </div>
    <div className="card-body">
    <div className="table-responsive">
    <table className="table table-hover mb-0">
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
        if('subject' in r && 'creditHour' in r){
            return(
                <tr>
                <td>{r.courseCode}</td>
                <td>{r.subject}</td>
                <td><p style={{color: r.grade ==='F' ? 'red':'black' }}>{r.grade}</p></td>
                <td>{r.grade==='CNR' ? 'Course Not Registered': ''}</td>
    
            </tr>
            );
        }
        
    })
    
}