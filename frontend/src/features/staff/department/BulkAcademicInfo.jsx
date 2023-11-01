import {useState} from 'react';
import {useForm} from 'react-hook-form';
import { useBulkSchoolInfo } from '../../../hooks/adminHooks/useBulkSchoolInfo';


function objectToFormData(obj) {
    const formData = new FormData();
  
    Object.entries(obj).forEach(([key, value]) => {
        if(key === 'file'){
            console.log(value[0])
            formData.append('file', value[0]);
        }
    });
  
    return formData;
  }
export default function BulkAcademicInfo(){
    const [fileName, setFileName] = useState('');
    const {bulkAddSchool, isLoading} = useBulkSchoolInfo();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      function onSubmit(data){
        const formData = objectToFormData(data);
        bulkAddSchool(formData);
      }       
       return (
            <div className="page-wrapper">
            <div className="content container-fluid">
            <div className="page-header">
            <div className="row align-items-center">
            <div className="col-sm-12">
            <div className="page-sub-header">
            <h3 className="page-title">Bulk Uploader</h3>
            <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="students.html">Department</a></li>
            <li className="breadcrumb-item active">Bulk Upload Student's School Information</li>
            </ul>
            </div>
            </div>
            </div>
            </div>
    
            <div className="row">
            <div className="col-sm-12">
            <div className="card comman-shadow">
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            <div className="col-12">
            <h5 className="form-title student-info">** Might cause data replication.Please double check before proceeding **<span></span></h5>
    
            </div>
                <div className="col-12 col-sm-4">
                <div className="form-group students-up-files">
                <label>Upload XLS File</label>
                <div className="uplod">
                <label className="file-upload image-upbtn mb-0">
                Choose File
                 <input
                    {...register('file',{required:true})}
                     type="file"
                     accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                     onChange={e=>{
                        e.preventDefault();
                        setFileName(e.target.files[0].name);
                     }}
                     />
                </label>
                {fileName}
                {errors.file? <p>File is required</p> : <></>}
                </div>
                </div>
                </div>
            <div className="col-12">
            <div className="student-submit">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </div>
            </div>
            </form>
            </div>
            </div>
    </div>
    </div>
            </div>
        </div>    );
}