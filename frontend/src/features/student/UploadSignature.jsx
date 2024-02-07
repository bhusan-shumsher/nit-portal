
import {useForm} from 'react-hook-form';
// import { useUploadPic } from '../../hooks/useUploadPic';
import { useUploadSignature } from '../../hooks/useUploadSignature';

export default function UploadSignature(){
    const {uploadSig, isLoading} = useUploadSignature();

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
      } = useForm()
      const onSubmit = (data) => {
        console.log(data);
        const formData = objectToFormData(data);  
        uploadSig(formData);
      }
    return(
  <div>      
<div className="page-wrapper">
<div className="content container-fluid">

<div className="page-header">
<div className="row">
<div className="col">
<h3 className="page-title">Upload Signature Specimen</h3>
<ul className="breadcrumb">
<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
<li className="breadcrumb-item active">Signature Upload</li>
</ul>
</div>
</div>
</div>

<div className="row">
<div className="col-sm-12">

<div className="card-body">
  <br/>
  <font color='red'>**Upload Your Signature Specimen. Only upload jpg/jpeg/png.</font>
  <br/>
  <font color='red'>** The size of the file should not exceed 5MB</font>
        <br/>
  <br/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <label className="col-form-label col-md-2">Upload Signature(image file)</label>
                        <div className="col-md-6">
                        <input 
                            className="form-control" 
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            {...register("file", { required: true })}
                            />
                        </div>
                        {errors.file && <span>This field is required</span>}

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
    
                 </form>
                </div>
</div>
</div>
</div>
</div>

</div>
    );
}