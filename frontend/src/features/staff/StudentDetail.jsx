import { useLocation } from "react-router-dom";
import { useStudentByID } from "../../hooks/adminHooks/useStudentByID";
import PersonaDetail from "./PersonalDetail";
import ResultTab from "./ResultTab";
export default function StudentDetail(){
    const location = useLocation();
    const {rollNumber} = location.state;
    const {data,error,isLoading,isError} = useStudentByID({rollNumber});
    if(isLoading){
        <h1>Loading....</h1>
    }
    console.log('here',data)

    if(!error && data && data.length >0){
        return(

            <div className="page-wrapper">
            <div className="content container-fluid">
               <div className="col-md-15">
<div className="card bg-white">
<div className="card-header">
<h5 className="card-title">Student Details</h5>
</div>
<div className="card-body">
<ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
<li className="nav-item"><a className="nav-link active" href="#solid-rounded-justified-tab1" data-bs-toggle="tab">General Details</a></li>
<li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab2" data-bs-toggle="tab">Results</a></li>
<li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab3" data-bs-toggle="tab">Attendance</a></li>
<li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab3" data-bs-toggle="tab">Fees</a></li>

</ul>
<div className="tab-content">
<div className="tab-pane show active" id="solid-rounded-justified-tab1">
<PersonaDetail
    info={data[0]}
/>
</div>
<div className="tab-pane" id="solid-rounded-justified-tab2">
    <ResultTab
    rollNumber={rollNumber}
    />
</div>
<div className="tab-pane" id="solid-rounded-justified-tab3">
        Attendance
 </div>
<div className="tab-pane" id="solid-rounded-justified-tab3">
            Fees
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        );
    }
    
}