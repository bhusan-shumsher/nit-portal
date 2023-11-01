import Spinner from "../../../ui/Spinner";
import { useGetSubject } from "../../../hooks/adminHooks/useGetSubject";
import Dropdown from "../../../ui/form-elements/Dropdown";
import Label from "../../../ui/form-elements/Label";


export default function GradeSubmitList({semester,faculty,register,errors}){
    const {data,isLoading, error, isError} = useGetSubject({semester,faculty})
    if(isLoading){
        return <Spinner/>
    }
    if(data && data.hasOwnProperty('subjects') && data['subjects'].length >0){
        return(
        
            <>
                {showList(data.subjects,register,errors)}
            </>
        );
    }
    if(error){
        return(
            <h1>Cant fetch subject list now!!</h1>
        )
    }
    
}

function showList(data,register,errors){
    return data.map(subjects=>{
        return(
            <>
             <Label value={subjects.subjectName} register={register} name={`name.${subjects.subjectName}`} />
             <Label value={subjects.courseCode} register={register} name={`code.${subjects.subjectName}`} />
             <Label value={subjects.creditHour} register={register} name={`hour.${subjects.subjectName}`} />

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
                    {placeholder: 'D-', value:'D-'},
                    {placeholder: 'Fail', value:'F'},
                    {placeholder: 'CNR', value:'CNR'},
                    {placeholder: 'NQ', value:'NQ'},
                    {placeholder: 'Expelled', value:'Expelled'}
            ]}
            isCompulsory={true}
            register={register}
            name={`marks.${subjects.subjectName}`}
            errors={errors}
        />
            </>
            
        );
    })
}