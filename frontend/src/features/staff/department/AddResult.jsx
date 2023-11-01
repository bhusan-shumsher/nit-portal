
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextBox from '../../../ui/form-elements/TextBox';
import Dropdown from '../../../ui/form-elements/Dropdown';
import {useState} from 'react'
import GradeSubmitList from './GradeSubmitList';
import { getObjectValue } from '../../../utils/getObjectValue';
import { sgpaCalc } from '../../../utils/sgpaCalc';
export default function AddResult(){
    const navigate = useNavigate();
    const [formStep, setFormStep] = useState(0);
    const completeFormStep = ()=>{
        setFormStep(current=> current + 1);
    }
    const backForm = ()=>{
        setFormStep(current=> current -1);
    }
  
    const renderButton = ()=>{
       if(formStep === 2){
            return(
                <div className="col-12">
                <div className="student-submit">
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    >Submit</button>
                </div>
                </div>
            )
        }else if(formStep === 1){
            return(
                <div className="col-12">
                <div className="student-submit">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={completeFormStep}>Next</button>

                </div>
                <div className="student-submit">
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={backForm}
                    >Back</button>

               
                </div>
                </div>
            )
        }else{
            return(
                <div className="col-12">
                <div className="student-submit">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={completeFormStep}
                    >Next</button>
               </div>
                </div>
            );
        }
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const keys = Object.keys(data.name);
        var grades = new Array();
        keys.forEach(key=>{
            var value = new Object()
            value.subject = getObjectValue(key,data.name);
            value.grade = getObjectValue(key,data.marks);
            value.courseCode = getObjectValue(key,data.code);
            value.creditHour = getObjectValue(key,data.hour);
            grades.push(value);
        })
        const object = {
            examRollNumber : data.examRollNumber,
            rollNumber: data.rollNumber,
            semester: data.semester,
            grades: grades,
            semesterType: data.semesterType,
            faculty: data.faculty,
            year: data.year,
            sgpa: sgpaCalc(grades)
        }
        console.log(object);
        const sgpa = sgpaCalc(grades);
        console.log('sgpa',sgpa)
        navigate('/department/verify-result',{state:{object}});
      }
    const values = watch(['semester','faculty']);
    return(
        <div className="page-wrapper">
                <div className="content container-fluid">
                <div className="page-header">
                <div className="row align-items-center">
                <div className="col-sm-12">
                <div className="page-sub-header">
                <h3 className="page-title">Add Result</h3>
                <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="students.html">Department</a></li>
                <li className="breadcrumb-item active">Add Result</li>
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
                <h5 className="form-title student-info">Student Information <span></span></h5>
                </div>
                {values.semester}
                {formStep === 0 && 
                    <section>
                         <Dropdown 
            label='Select Semster'
            values = {[
                {placeholder: 'I', value:'1'},
                    {placeholder: 'II', value: '2'},
                    {placeholder: 'III', value:'3'},
                    {placeholder: 'IV', value:'4'},
                    {placeholder: 'V', value:'5'},
                    {placeholder: 'VI', value:'6'},
                    {placeholder: 'VII', value:'7'},
                    {placeholder: 'VIII', value:'8'}

            ]}
            isCompulsory={true}
            register={register}
            name='semester'
            errors={errors}
        />
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
            label='Select Semster Type'
            values = {[
                {placeholder: 'SPRING', value:'SPRING'},
                    {placeholder: 'FALL', value: 'FALL'}
            ]}
            isCompulsory={true}
            register={register}
            name='semesterType'
            errors={errors}
        />
        <TextBox 
                label='Year' 
                placeholder='Enter Year'
                register={register}
                name='year'
                errors={errors}

            />

                    </section>
                }
               
                {formStep === 1 && 
                     <section>
                         <TextBox 
                    label='NCIT Roll'
                    placeholder='Enter NCIT Roll Number'
                    isCompulsory={true}
                    register={register}
                    name='rollNumber'
                    errors={errors}
                />
                < TextBox 
                    label='Exam Roll Number'
                    placeholder='Exam Roll Number'
                    isCompulsory={true}
                    register={register}
                    errors={errors}
                    name='examRollNumber'
                />
                    </section>}
                {formStep === 2 && 
                    <section>
                        <GradeSubmitList 
                           semester = {values[0]}
                           faculty={values[1]}
                           register={register}
                           errors={errors}
                        />
                    </section>
                }
               
               {renderButton()}
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




