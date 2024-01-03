
import {Controller, useForm} from 'react-hook-form';
import { useState } from 'react';
import LongTextBox from "./formui/LongTextBox";
import { DatePicker } from 'antd';
import Dropdown  from './formui/DropDown';
// import NepaliDate from 'nepali-date-converter'
import { useSaveRegDetails } from '../../hooks/registrationHooks/useSaveRegDetails';
import Spinner from '../../ui/Spinner';
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
export default function RegistrationForm(){
    const [formStep, setFormStep] = useState(0);
    const [controlledDate, setControlledDate] = useState(null);
    const {saveDetails, isLoading} = useSaveRegDetails();
    const completeFormStep = () => {
        setFormStep(cur => cur + 1)
    }

    const goBack = () =>{
        setFormStep( cur => cur -1);
    }
    // const {addStudent, isLoading} = useAddNewStudent();

    const onChange = (date, dateString) => {
        console.log( dateString);
        setControlledDate(date);
      };


    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch
      } = useForm()
      const onSubmit = (data) => {
        console.log(data);
        const formData = objectToFormData(data);  
        saveDetails(formData);
      }
      if(isLoading){
        <div className="page-wrapper">
            <div className="content container-fluid">
                <Spinner/>
            </div>
        </div>
    }
    
    return(
        // <div className="page-wrapper">
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

        {formStep === 0 && (
            <section>
            <h5 className="form-title student-info">Student Information <span></span></h5>
            <Dropdown
                label='Faculty'
                placeholder='Select Faculty'
                values={[
                    {placeholder: 'BECE', value:'BECE'},
                    {placeholder: 'BESE', value: 'BESE'},
                    {placeholder: 'BEIT', value:'BEIT'},
                    {placeholder: 'BEELX', value:'BEELX'},
                    {placeholder: 'BECIVIL', value:'BECIVIL'},
                    {placeholder: 'BCA', value:'BCA'},
                    {placeholder: 'BBA', value:'BBA'}
                ]}
                register = {register}
                name='program'
                errors={errors}
            />
            <Dropdown
                label='Title'
                placeholder='Select Title'
                values={[
                    {placeholder: 'Mr.', value:'MR'},
                    {placeholder: 'Ms.', value: 'MS'},
                    {placeholder: 'Mrs.', value:'MRS'},
                ]}
                register = {register}
                name='title'
                errors={errors}
            />
                <LongTextBox 
                    label='Full Name'
                    placeholder='Full Name'
                    isCompulsory={true}
                    register={register}
                    name='fullName'
                    errors={errors}
                />
    
            <LongTextBox 
                    label='पुरा नाम (देवानगरी)'
                    placeholder='पुरा नाम (देवानगरी)'
                    isCompulsory={true}
                    register={register}
                    name='fullNameDevanagari'
                    errors={errors}
                />
    
                <LongTextBox 
                    label="Father's Name"
                    placeholder="Father's Name"
                    isCompulsory={true}
                    register={register}
                    name='fatherName'
                    errors={errors}
                />
                <LongTextBox 
                    label="Mother's Name"
                    placeholder="Mother's Name"
                    isCompulsory={true}
                    register={register}
                    name='motherName'
                    errors={errors}
                />

                <LongTextBox 
                    label="Nationality"
                    placeholder="Nationality"
                    isCompulsory={true}
                    register={register}
                    name='nationality'
                    errors={errors}
                />

            <LongTextBox 
                    label="Religion"
                    placeholder="Religion"
                    isCompulsory={true}
                    register={register}
                    name='religion'
                    errors={errors}
                />
             <LongTextBox 
                    label="Ethinicity"
                    placeholder="Ethinicity"
                    isCompulsory={true}
                    register={register}
                    name='ethinicity'
                    errors={errors}
                />
                   <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={completeFormStep}
                        >
                            Next
                        </button>

            </section>
        )}
        {formStep === 1 && (
            <section>
                 <h5 className="form-title student-info">Student Address <span></span></h5>
                 <LongTextBox 
                    label="Town/Village"
                    placeholder="Town/Village"
                    isCompulsory={true}
                    register={register}
                    name='townVillage'
                    errors={errors}
                />
                <LongTextBox 
                    label="Ward Number"
                    placeholder="Ward Number"
                    isCompulsory={true}
                    register={register}
                    name='wardNum'
                    errors={errors}
                />
                <LongTextBox 
                    label="District"
                    placeholder="District"
                    isCompulsory={true}
                    register={register}
                    name='district'
                    errors={errors}
                />

            <LongTextBox 
                    label="Province/Zone"
                    placeholder="Province/Zone"
                    isCompulsory={true}
                    register={register}
                    name='zone'
                    errors={errors}
                />

                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={completeFormStep}
                        >
                            Next
                        </button>

                        <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={goBack}
                        >
                            Back
                        </button>
            </section>
        )

        }
        {formStep === 2 && (
            <section>
                <h5 className="form-title student-info">Secondary Level or Equivalent <span></span></h5>
                <LongTextBox 
                    label="School Name"
                    placeholder="School Name"
                    isCompulsory={true}
                    register={register}
                    name='schoolName'
                    errors={errors}
                />
                <LongTextBox 
                    label="Board/University"
                    placeholder="Board/Univeristy"
                    isCompulsory={true}
                    register={register}
                    name='secondaryBoard'
                    errors={errors}
                />

            <LongTextBox 
                    label="Year"
                    placeholder="Year"
                    isCompulsory={true}
                    register={register}
                    name='secondaryYear'
                    errors={errors}
                />
            
            <LongTextBox 
                    label="Total Marks/Grade"
                    placeholder="Total Marks/Grade"
                    isCompulsory={true}
                    register={register}
                    name='secondaryTotalMarks'
                    errors={errors}
                />
            
            <LongTextBox 
                    label="Marks/Grade Obtained"
                    placeholder="Marks/Grade Obtained"
                    isCompulsory={true}
                    register={register}
                    name='secondaryMarksObtained'
                    errors={errors}
                />
            
            <Dropdown
                label='Division'
                placeholder='Select Division'
                values={[
                    {placeholder:'Select One', value:''},
                    {placeholder: 'Distinction', value:'Distinction'},
                    {placeholder: 'First', value: 'First'},
                    {placeholder: 'Second', value:'Second'},
                    {placeholder: 'Third', value:'Third'}
                ]}
                register = {register}
                name='secondaryDivision'
                errors={errors}
            />

            <LongTextBox 
                    label="Symbol/Roll Number"
                    placeholder="Symbol/Roll Number"
                    isCompulsory={true}
                    register={register}
                    name='secondarySymbol'
                    errors={errors}
                />

                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={completeFormStep}
                        >
                            Next
                        </button>

                        <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={goBack}
                        >
                            Back
                        </button>
            </section>
        )}
    
    {formStep === 3 && (
        <section>
        <h5 className="form-title student-info">High School or Equivalent <span></span></h5>
        <LongTextBox 
                    label="College Name"
                    placeholder="college Name"
                    isCompulsory={true}
                    register={register}
                    name='plusTwoName'
                    errors={errors}
                />
        <LongTextBox 
            label="High School Board/University"
            placeholder="High School Board/Univeristy"
            isCompulsory={true}
            register={register}
            name='plusTwoBoard'
            errors={errors}
        />

    <LongTextBox 
            label="High School Year"
            placeholder="High School Year"
            isCompulsory={true}
            register={register}
            name='plusTwoYear'
            errors={errors}
        />
    
    <LongTextBox 
            label=" High School Total Marks/Grade"
            placeholder="High School Total Marks/Grade"
            isCompulsory={true}
            register={register}
            name='plusTwoTotalMarks'
            errors={errors}
        />
    
    <LongTextBox 
            label="High School Marks/Grade Obtained"
            placeholder="High School Marks/Grade Obtained"
            isCompulsory={true}
            register={register}
            name='plusTwoMarksObtained'
            errors={errors}
        />
    
    <Dropdown
        label='High School Division'
        placeholder='Select Division'
        values={[
                    {placeholder:'Select One', value:''},
                    {placeholder: 'Distinction', value:'Distinction'},
                    {placeholder: 'First', value: 'First'},
                    {placeholder: 'Second', value:'Second'},
                    {placeholder: 'Third', value:'Third'}
        ]}
        register = {register}
        name='plusTwoDivision'
        errors={errors}
    />

    <LongTextBox 
            label="High School Symbol/Roll Number"
            placeholder="Symbol/Roll Number"
            isCompulsory={true}
            register={register}
            name='plusTwoSymbol'
            errors={errors}
        />

            <button 
                type="button" 
                className="btn btn-primary"
                onClick={completeFormStep}
                >
                    Next
                </button>
            
                <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={goBack}
                        >
                            Back
                        </button>
    </section>
    )}
    {formStep === 4 && (
        <section>
            <h5 className="form-title student-info">Date of Birth (English) <span></span></h5>
            <div class="col-lg-10">
            <Controller 
                control={control}  
                name="dobEnglish" 
                render={({field})=>{
                    return  <DatePicker
                        placeholder='Select DoB'
                        onChange={(date)=>{
                            field.onChange(date)
                        }}
                        value={field.value}
                />
                }}
             />   
           </div>
            <br/>
            <br/>

            <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={completeFormStep}
                        >
                            Next
                        </button>
                        <div/>
                        <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={goBack}
                        >
                            Back
                        </button>
        </section>
    )}
    {formStep === 5 && (
        <section>
           {/* <div className="col-12 col-sm-4">
            <div className="form-group students-up-files">
            <label>Upload Recent PP Size Photo</label>
            <div className="uplod">
            <label className="file-upload image-upbtn mb-0">
            Choose File
             <input
                {...register('file')}
                 type="file"/>
            </label>
            </div>
            </div>
            </div> */}
            <div className="form-group row">
                        <label className="col-form-label col-md-2">PP Photo</label>
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
            <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={goBack}
                        >
                            Back
                        </button>
<button 
                        type="submit" 
                        className="btn btn-primary"
                        >
                            submit
                        </button>
        </section>
    )}
    

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



// function toNepali(date){
//     var nepali =  new NepaliDate(date);
//     console.log(nepali.getBS());
//     return nepali.getBS().year +"-" +(nepali.getBS().month +1 ) +"-"+ nepali.getBS().date;
// ;}