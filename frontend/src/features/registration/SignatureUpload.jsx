
import {useForm} from 'react-hook-form';
import { useUploadSignature } from '../../hooks/registrationHooks/useUploadSignature';

export default function SignatureUpload(){
    const {saveSignature, isLoadinf} = useUploadSignature();
    function objectToFormData(obj) {
        const formData = new FormData();
        Object.entries(obj).forEach(([key, value]) => {
            if(key === 'file'){
                formData.append('file', value[0]);
            }else{
                formData.append(key, value);
    
            }
        });
      
        return formData;
      }
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
      } = useForm()
      const onSubmit = (data) => {
        console.log(data);
        const formData = objectToFormData(data);  
        saveSignature(formData);
      }
    return(
        <div className="content container-fluid">
                <div className="page-header">
                <div className="row align-items-center">
                <div className="col-sm-12">
                <div className="page-sub-header">
                <h3 className="page-title">Add School Info</h3>
                <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="students.html">Student</a></li>
                <li className="breadcrumb-item active">Add School Info</li>
                </ul>
                </div>
                </div>
                </div>
                </div>
    
                <div className="row">
                <div className="col-sm-12">
                <div className="card comman-shadow">
                <div className="card-body">
                <div className="row">
                <div className="col-12">
                <h5 className="form-title student-info">Univeristy Registration <span></span></h5>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

        
                    <div class="form-group row">
                        <label class="col-form-label col-md-2">Signature(image file)</label>
                        <div class="col-md-6">
                        <input 
                            class="form-control" 
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            {...register("file", { required: true })}
                            />
                        </div>
                        {errors.file && <span>This field is required</span>}

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
    
                 </form>
                </div>
               
            </div>
            </div>
            </div>
            </div>
                </div>
         </div>
    );
}