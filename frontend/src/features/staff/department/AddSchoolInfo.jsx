import {useForm} from 'react-hook-form';
import TextBox from '../../../ui/form-elements/TextBox';
import { useAddAcademicInfo } from '../../../hooks/adminHooks/useAddAcademicInfo';
export default function AddSchoolInfo(){
    const {addAcademic, isLoading} = useAddAcademicInfo();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        addAcademic(data);
      }
        return(
            <div className="page-wrapper">
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
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="col-12">
                <h5 className="form-title student-info">Student Information <span></span></h5>
                </div>
                <TextBox 
                    label='NCIT Roll Number'
                    placeholder='Enter NCIT Roll Number'
                    isCompulsory={true}
                    register={register}
                    name='rollNumber'
                    errors={errors}
                />
                < TextBox 
                    label='Secondary School Name'
                    placeholder='Enter Secondary School Name'
                    isCompulsory={true}
                    register={register}
                    errors={errors}
                    name='secondaryLevelBoard'
                />
                < TextBox 
                    label='Secondary Level Board'
                    placeholder='Enter Secondary Level Board'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='secondaryLevelBoard'
                />
                 < TextBox 
                    label='School Address'
                    placeholder='School Address'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='schoolAddress'
                />
                < TextBox 
                    label='School Passed Out Year'
                    placeholder='Enter School Passed Out Year'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='schoolYear'
                />
                < TextBox 
                    label='School Symbol Number'
                    placeholder='Enter School Symbol Number'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='schoolSymbolNumber'
                />
                < TextBox 
                    label='School Total Marks'
                    placeholder='Enter School Total Marks'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='schoolTotalMarks'
                />
               < TextBox 
                    label='School Obtained Marks'
                    placeholder='Enter School Obtained Marks'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='schoolObtainedMarks'
                />
                < TextBox 
                    label='School Division'
                    placeholder='Enter School Division'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='schoolDivision'
                />
                < TextBox 
                    label='High School Name'
                    placeholder='Enter High School Name'
                    isCompulsory={true}
                    register={register}
                    errors={errors}
                    name='collegeName'
                />
                < TextBox 
                    label='High School Board'
                    placeholder='Enter High School Board'
                    isCompulsory={true}
                    register={register}
                    errors={errors}
                    name='highSchoolBoard'
                />
                < TextBox 
                    label='High School Address'
                    placeholder='Enter High School Address'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='collegeAddress'
                />
                < TextBox 
                    label='High School Symbol Number'
                    placeholder='Enter High School Symbol Number'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='highSchoolSymbolNumber'
                />
                < TextBox 
                    label='High School Passed Out Year'
                    placeholder='Enter High School Passed Out Year'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='highSchoolYear'
                />
                < TextBox 
                    label='High School Total Marks'
                    placeholder='Enter High School Total Marks'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='highSchoolTotalMarks'
                />
                < TextBox 
                    label='High School Obtained Marks'
                    placeholder='Enter High School Obtained Marks'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='highSchoolObtainedMarks'
                />
                < TextBox 
                    label='High School Division'
                    placeholder='Enter High School Division'
                    isCompulsory={false}
                    register={register}
                    errors={errors}
                    name='highSchoolDivision'
                />
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