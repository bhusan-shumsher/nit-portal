
import { useGetResultBySem } from "../hooks/adminHooks/useGetResultBySem";
import Spinner from '../ui/Spinner';
import TextBox from "./form-elements/TextBox";
import Label from "./form-elements/Label";
import Dropdown from "./form-elements/Dropdown";



export default function EditReultForm ({register,errors,rollNumber,semester}){
    const {data,isLoading,error,isError} = useGetResultBySem({rollNumber,semester});
    if(isLoading){
        return <Spinner/>
    }
    console.log(data)
    if(Array.isArray(data) && data.length > 0){
        return(
            <>
              {showList(data[0]?.grades,register,errors)} 
              <br/>
               <TextBox 
                label='SGPA' 
                placeholder={data[0]?.sgpa}
                register={register}
                name='sgpa'
                errors={errors}
                />
            </>
        );
    }
    if(error){
        return <h5>Can't find the result of given student in the given semester</h5>
    }
    
}



function showList(data,register,errors){
    return data.map(subjects=>{
        return(
            <>
             <Label value={subjects.subject} register={register} name={`name.${subjects.subject}`} />
             <Label value={subjects.courseCode} register={register} name={`code.${subjects.subject}`} />
            <Label value={subjects.creditHour} register={register} name={`hour.${subjects.subject}`} isHidden={true} />
             

        <Dropdown 
            label='Select Grade'
            values = {[
                    {placeholder: 'A', value:'A'},
                    {placeholder: 'A-', value: 'A-'},
                    {placeholder: 'B+', value:'B+'},
                    {placeholder: 'B', value:'B'},
                    {placeholder: 'B-', value:'B-'},
                    {placeholder: 'C+', value:'C+'},
                    {placeholder: 'C', value:'C'},
                    {placeholder: 'C-', value:'C-'},
                    {placeholder: 'D+', value:'D+'},
                    {placeholder: 'D', value:'D'},
                    {placeholder: 'Fail', value:'F'},
                    {placeholder: 'CNR', value:'CNR'},
                    {placeholder: 'NQ', value:'NQ'},
                    {placeholder: 'Expelled', value:'Expelled'}
            ]}
            isCompulsory={true}
            register={register}
            name={`marks.${subjects.subject}`}
            errors={errors}
            defValue={subjects.grade}
        />
         
            </>
            
        );
    })
}