import { useNavigate,Link } from "react-router-dom";

export default function ShowStudent({students}){
    if(students.length === 0){
        return <h1>No student</h1>
    }else{
        console.log(students)
        return (
            <>
    
            <div className="page-header">
                    <div className="row align-items-center">
                    <div className="col">
                    <h3 className="page-title">Students</h3>
                    </div>
    
                    </div>
            </div> 
    
     <div className="table-responsive">
    <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
    <thead className="student-thread">
    <tr>
    <th>Roll Number</th>
    <th>Name</th>
    <th>Faculty</th>
    <th>Semester</th>
    <th>Batch</th>
    <th className="text-end">Action</th>
    </tr>
    </thead>
        { students.map((student,index)=>{
            if(student.hasOwnProperty('info')){
                console.log('**',student.info)
                return <StudentRow data={student.info[0]} key={index}/>
            }
            console.log(student);
            return <StudentRow data={student} key={index}/>
        })}
    </table>
    </div> 
            </>
        );
    }
    
};

function StudentRow({data}){
    return (
        <tbody>
            <td>
               <Link
                to="/admin/student/details"
                state={{
                    rollNumber: data.rollNumber
                }}
               >{data.rollNumber}</Link> 
            </td>
    <td>
        <Link to="/admin/student/details"
            state={{
                rollNumber: data.rollNumber
            }}
        >
                {data.firstName} {data.middleName} {data.lastName}

        </Link>
    </td>
    <td>{data.faculty}</td>
    <td>{data.currentSemester}</td>
    <td>{data.batch}</td>
    <td className="text-end">
    <div className="actions ">
    <Link className="btn btn-sm bg-success-light me-2 "
        to="/admin/student/details"
        state={{
            rollNumber: data.rollNumber
        }}
    >
    <i className="feather-eye"></i>
    </Link>
    <Link className="btn btn-sm bg-danger-light"
        to="/admin/student/details"
        state={{
            rollNumber: data.rollNumber
        }}
    >
    <i className="feather-edit"></i>
    </Link>
    </div>
    </td>
        </tbody>
    );
}