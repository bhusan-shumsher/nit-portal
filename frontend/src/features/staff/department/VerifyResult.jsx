
import { useLocation } from "react-router-dom";
import { useAddResult } from "../../../hooks/adminHooks/useAddResult";
export default function VerifyResult(){
    const location = useLocation();
    const {addResult, isLoading} = useAddResult();
    const onSubmit=()=>{
        addResult(location.state.object);
    }
    return(
        <div className="page-wrapper">
                <div className="content container-fluid">
        <div className="page-header">
                {/* <div className="row align-items-center">
                <div className="col-sm-12">
                <div className="page-sub-header">
                <h3 className="page-title">Add Result</h3>
                <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="students.html">Department</a></li>
                <li className="breadcrumb-item active">Add Result</li>
                </ul>
                </div>
                </div>
                </div> */}
                </div>
        <div class="row">
    <div class="col-lg-9">
    <div class="card">
        <h4>Please Verify Before Submission</h4>
    <div class="card-header">
    <h6 class="card-title">CRN {location.state.object.rollNumber}</h6>
    </div>
    <div class="card-header">
    <h6 class="card-title">ERN {location.state.object.examRollNumber}</h6>
    </div>
    <div className="col-12">
                <div className="student-submit">
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={onSubmit}
                    >Submit</button>
                </div>
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
    
   
    {location.state.object.grades.map(r=>{
        return <ResultRow value={r}/>
    })}
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><b>SGPA: {location.state.object.sgpa}</b></td>
    </tr>
    </tbody>
    </table>
        </div>
    </div>
    
</div>
</div>

</div>
</div>

</div>
    );
}




function ResultRow(r){
    console.log(r);
        return(
            <tr>
            <td>{r.value.courseCode}</td>
            <td>{r.value.subject}</td>
            <td><p style={{color: r.grade ==='F' ? 'red':'black' }}>{r.value.grade}</p></td>
            <td>{r.grade==='CNR' ? 'Course Not Registered': ''}</td>

        </tr>
        );
  
    
}