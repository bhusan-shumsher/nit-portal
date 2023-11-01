
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import Dropdown from '../../../ui/form-elements/Dropdown';
import TextBox from '../../../ui/form-elements/TextBox';
import { useBulkResult } from '../../../hooks/adminHooks/useBulkResult';

function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
        if(key === 'file'){
            console.log(value[0])
            formData.append('file', value[0]);
        }else{
            formData.append(key, value);

        }
    });
  
    return formData;
  }
export default function BulkResultUpload(){
    const [fileName, setFileName] = useState('');
    const {bulkResult, isLoading}  = useBulkResult();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      function onSubmit(data){
        const info = objectToFormData(data);
        bulkResult(info);
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
        <li className="breadcrumb-item active">Bulk Upload: Result</li>
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
        <Dropdown 
            label='Select Faculty'
            values = {[
                    {placeholder: 'BECE', value:'BECE'},
                    {placeholder: 'BESE', value: 'BESE'},
                    {placeholder: 'BEIT', value:'BEIT'},
                    {placeholder: 'BEELX', value:'BEELX'},
                    {placeholder: 'BECIVIL', value:'BECIVIL'},
                    {placeholder: 'BCA', value:'BCA'},
                    {placeholder: 'BBA', value:'BBA'}
            ]}
            isCompulsory={true}
            register={register}
            name='faculty'
            errors={errors}
        />

<Dropdown 
            label='Select Semester'
            values = {[
                {placeholder: 'I', value:1},
                    {placeholder: 'II', value: 2},
                    {placeholder: 'III', value:3},
                    {placeholder: 'IV', value: 4},
                    {placeholder: 'V', value: 5},
                    {placeholder: 'VI', value: 6},
                    {placeholder: 'VII', value:7},
                    {placeholder: 'VIII', value: 8}
            ]}
            isCompulsory={true}
            register={register}
            name='semester'
            errors={errors}
        />

        <TextBox 
                label='Year'
                placeholder='Year'
                isCompulsory={true}
                register={register}
                name='year'
                errors={errors}
            />

<Dropdown 
            label='Select Semester Type'
            values = {[
                {placeholder: 'SPRING', value:'SPRING'},
                    {placeholder: 'FALL', value: 'FALL'},
                    
            ]}
            isCompulsory={true}
            register={register}
            name='semesterType'
            errors={errors}
        />
            <div className="col-12 col-sm-4">
            <div className="form-group students-up-files">
            <label>Upload XLS File</label>
            <div className="uplod">
            <label className="file-upload image-upbtn mb-0">
            Choose File
             <input
                {...register('file',{required:true})}
                 type="file"
                 accept='.xls,.xlsx,.xlsb'
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
    )
}