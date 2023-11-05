import {useState} from 'react';
import {useForm} from 'react-hook-form';
import { useUpdateBacklogs } from '../../../hooks/adminHooks/useUpdateBacklogs';

export default function BackPaperUpload(){
    const [fileName, setFileName] = useState('');
    const {updateBacklogs,isLoading} = useUpdateBacklogs();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      function onSubmit(data){
        const formData = new FormData();
        formData.append('file',data.file[0]);
        updateBacklogs(formData);
      }    
    return(
        <div className="page-wrapper">
            <div className="content container-fluid">
            <div className="page-header">
            <div className="row align-items-center">
            <div className="col-sm-12">
            <div className="page-sub-header">
            <h3 className="page-title">Bulk Uploader</h3>
            <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="students.html">Department</a></li>
            <li className="breadcrumb-item active">Bulk Update Back Paper</li>
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
        </div>  
    );
}