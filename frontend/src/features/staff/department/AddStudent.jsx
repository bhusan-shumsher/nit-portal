
import {useForm} from 'react-hook-form';
import TextBox from "../../../ui/form-elements/TextBox";
import Dropdown from "../../../ui/form-elements/Dropdown";
import { useAddNewStudent } from '../../../hooks/adminHooks/useAddNewStudent';
import Spinner from '../../../ui/Spinner';

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
export default function AddNewStudent(){
    const {addStudent, isLoading} = useAddNewStudent();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const formData = objectToFormData(data);       
        addStudent(formData);
      }
    if(isLoading){
        <div className="page-wrapper">
            <div className="content container-fluid">
                <Spinner/>
            </div>
        </div>
    }
    return(
        <div className="page-wrapper">
            <div className="content container-fluid">
            <div className="page-header">
            <div className="row align-items-center">
            <div className="col-sm-12">
            <div className="page-sub-header">
            <h3 className="page-title">Add Students</h3>
            <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="students.html">Student</a></li>
            <li className="breadcrumb-item active">Add New Student</li>
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
            <TextBox 
                label='Roll Number'
                placeholder='Enter Roll Number'
                isCompulsory={true}
                register={register}
                name='rollNumber'
                errors={errors}
            />
            <TextBox 
                label='Email'
                placeholder='Enter Email'
                isCompulsory={true}
                register={register}
                name='email'
                errors={errors}

            />
            <TextBox 
                label='Password'
                placeholder='Enter Password'
                isCompulsory={true}
                register={register}
                name='password'
                errors={errors}

            />

            <TextBox 
                label='First Name' 
                placeholder='Enter First Name'
                isCompulsory={true}
                register={register}
                name='firstName'
                errors={errors}

            />
            <TextBox 
                label='Middle Name' 
                placeholder='Enter Middle Name'
                register={register}
                name='middleName'
                errors={errors}

            />
            <TextBox 
                label='Last Name' 
                placeholder='Enter Last Name'
                isCompulsory={true}
                register={register}
                name='lastName'
                errors={errors}

            />
             <TextBox
                label='Current Semester'
                placeholder='Enter Current semester'
                register={register}
                name='currentSemester'
                errors={errors}
            />

            <TextBox 
                label='Batch' 
                placeholder='Enter Batch'
                isCompulsory={true}
                register={register}
                name='batch'
                errors={errors}

            />
            <Dropdown
                label='Shift'
                placeholder='Select Shift'
                values={[
                    {placeholder: 'Day', value:'day'},
                    {placeholder: 'Morning', value: 'morning'}
                ]}
                register={register}
                errors={errors}
                name='shift'
            />
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
                name='faculty'
                errors={errors}
            />
           <TextBox 
                placeholder='Enter Nepali DOB'
                label='DOB Nepali'
                isCompulsory={true}
                register={register}
                name='dobNepali'
                errors={errors}

            />

            <TextBox 
                placeholder='Enter English DOB'
                label='DOB English'
                isCompulsory={true}
                register={register}
                name='dobEnglish'
                errors={errors}

            />
            
            <TextBox 
                label='Religion' 
                placeholder='Enter Religion'
                register={register}
                name='religion'
                errors={errors}

            />
            <TextBox 
                label='Nationality' 
                placeholder='Enter Nationality'
                isCompulsory={true}
                register={register}
                name='nationality'
                errors={errors}

            />
           
            
           <TextBox 
                label='Student Contact Number' 
                placeholder=' Student Contact Number'
                isCompulsory={true}
                register={register}
                name='studentContactNumber'
                errors={errors}

            />
            <TextBox 
                label='Father Contact Number' 
                placeholder=' Father Contact Number'
                isCompulsory={true}
                register={register}
                name='fatherContactNumber'
                errors={errors}

            />
            <TextBox 
                label='Mother Contact Number' 
                placeholder=' Mother Contact Number'
                isCompulsory={true}
                register={register}
                name='motherContactNumber'
                errors={errors}

            />
            <TextBox 
                label='Local Guardian Contact Number' 
                placeholder=' Local Guardian Contact Number'
                isCompulsory={true}
                register={register}
                name='guardianContactNumber'
                errors={errors}

            />
            <TextBox 
                label='Province' 
                placeholder='Enter Province'
                isCompulsory={true}
                register={register}
                name='address'
                errors={errors}

            />
            <TextBox 
                label='Town' 
                placeholder='Enter Town'
                isCompulsory={true}
                register={register}
                name='town'
                errors={errors}

            />
            <TextBox 
                label='District' 
                placeholder='Enter District'
                isCompulsory={true}
                register={register}
                name='district'
                errors={errors}

            />
            <TextBox 
                label='Zone' 
                placeholder='Enter Zone'
                isCompulsory={true}
                register={register}
                name='zone'
                errors={errors}

            />
            <TextBox 
                label='Ward Number' 
                placeholder='Enter Ward Number'
                isCompulsory={true}
                register={register}
                name='wardNumber'
                errors={errors}

            />

           
            <Dropdown
                label='Scholarship'
                placeholder='Select One'
                values={[
                    {placeholder: 'Yes', value:true},
                    {placeholder: 'No', value: false}
                ]}
                register ={register}
                name='isScholarship'
                errors={errors}
            />
            <div className="col-12 col-sm-4">
            <div className="form-group students-up-files">
            <label>Upload Student Photo (150px X 150px)</label>
            <div className="uplod">
            <label className="file-upload image-upbtn mb-0">
            Choose File
             <input
                {...register('file')}
                 type="file"/>
            </label>
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