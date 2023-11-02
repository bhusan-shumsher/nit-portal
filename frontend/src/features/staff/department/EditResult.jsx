
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextBox from '../../../ui/form-elements/TextBox';
import Dropdown from '../../../ui/form-elements/Dropdown';
import {useState} from 'react'
import { getObjectValue } from '../../../utils/getObjectValue';
import { sgpaCalc } from '../../../utils/sgpaCalc';
import EditResultForm from '../../../ui/EditResultForm';
import { useEditResult } from '../../../hooks/adminHooks/useEditResult';

export default function EditResult(){
    const navigate = useNavigate();
    const [formStep, setFormStep] = useState(0);
    const {editResult,isLoading} = useEditResult();
    const completeFormStep = ()=>{
        setFormStep(current=> current + 1);
    }
    
    const renderButton = ()=>{
       if(formStep === 1){
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
        }else{
            return(
                <div className="col-12">
                <div className="student-submit">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={completeFormStep}>Next</button>

                </div>
                </div>
            )
        }
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        console.log(data);
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
            rollNumber: data.rollNumber,
            semester: data.semester,
            grades: grades,
            sgpa: sgpaCalc(grades)
        }
        editResult(object);
      }
    const values = watch(['semester','rollNumber']);
    return(
        <div className="page-wrapper">
                <div className="content container-fluid">
                <div className="page-header">
                <div className="row align-items-center">
                <div className="col-sm-12">
                <div className="page-sub-header">
                <h3 className="page-title">Edit Result</h3>
                <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="students.html">Department</a></li>
                <li className="breadcrumb-item active">Edit Result</li>
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
                <h5 className="form-title student-info">Result  <span></span></h5>
                </div>
                {values.semester}
                {formStep === 0 && 
                    <>
                        <TextBox 
                label='College Roll Number' 
                placeholder='Enter College Roll Number'
                register={register}
                name='rollNumber'
                errors={errors}

            />
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
                
                    </>
                }
               
                {formStep === 1 && 
                    <EditResultForm
                        register={register}
                        errors={errors}
                        semester={values[0]}
                        rollNumber={values[1]}
                    />
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




