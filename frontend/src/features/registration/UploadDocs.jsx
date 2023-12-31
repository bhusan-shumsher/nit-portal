import { useState } from 'react';
import {useForm} from 'react-hook-form';

import { useUploadExtra } from '../../hooks/registrationHooks/useUploadExtra';

import FileInputField from './FileInputField';
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
export default function UploadDocs(){
    const {saveExtra, isLoading} = useUploadExtra();
    const completeFormStep = () => {
        setFormStep(cur => cur + 1)
    }

    const goBack = () =>{
        setFormStep( cur => cur -1);
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
        saveExtra(formData);
      }
    return(
        <div className="content container-fluid">
                <div className="page-header">
                <div className="row align-items-center">
                <div className="col-sm-12">
                
                </div>
                </div>
                </div>
    
                <div className="row">
                <div className="col-sm-12">
                <div className="card comman-shadow">
                <div className="card-body">
                <div className="row">
                <div className="col-12">
                <h5 className="form-title student-info">Upload Supporting Docs <span></span></h5>
                <h6>**Combine Citizenship, Transcripts, Migration Certificate and other relevant docs into a single image or pdf file**</h6>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <FileInputField fileType="Documents" register={register} errors={errors}/>
              <button type="submit" class="btn btn-primary">Submit</button>

             </form>
            </div>
            </div>
            </div>
            </div>
                </div>
         </div>
    );
}