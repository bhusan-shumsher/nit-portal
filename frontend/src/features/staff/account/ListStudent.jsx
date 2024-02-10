import { useMarkAsPaid } from "../../../hooks/accountHooks/useMarkAsPaid";

export default function ListStudent({students}){
    const {asPaid, isLoading} = useMarkAsPaid();

    function statusChange(rollNumber, status){
        asPaid({rollNumber,paidStatus:status})
    }
    if(students.length === 0){
        return <h2>No student</h2>
    }
    // console.log('here',students)
    return(
        <div className="row">
            <div className="col-sm-12">
            <div className="card card-table">
            <div className="card-body">
            <div className="table-responsive">
            <table className="table table-stripped table-hover datatable">
            <thead className="thead-light">
            <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Faculty</th>
            <th>Semester</th>
            <th>Verified By</th>
            <th>Status</th>
            <th class="text-end">Action</th>
            </tr>
            </thead>
            <tbody>
            {students.map(student=>{
                console.log(student)
                return <ShowList student={student} onClick={statusChange}/>
            })}
            </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

 function ShowList ({student,onClick}){
     return(
<tr>
            <td>
            {student.rollNumber}
            </td>
            <td>
            <h2 class="table-avatar">
            <a href="profile.html"> {student.firstName}</a>
            </h2>
            </td>
            <td>{student.faculty}</td>
            <td>{student.currentSemester}</td>
            <td>{student.verifiedBy}</td>
            {/* <span class="badge bg-success">Success</span> */}
            {/* /* danger for red */}
            {student.duePaid ? <td><span className="badge bg-success">Paid</span></td>:
                        <td><span className="badge bg-danger">Due</span></td>

 }
            {/* <td><span class="badge bg-success">{}</span></td> */}
            <td className="text-end">
            <button className="btn btn-sm btn-white text-success me-2"
            onClick={()=>onClick(student.rollNumber, 'true')}
            ><i className="far fa-edit me-1"></i> Mark as Paid</button>
            </td>
            </tr>
     );
    

 }