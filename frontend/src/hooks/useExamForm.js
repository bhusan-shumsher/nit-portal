import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { postExamForm } from "../services/apiStudent";
export function useExamForm(){
    const navigate = useNavigate();
    const {mutate: postForm, isLoading} = useMutation({
        mutationFn: (formData)=>postExamForm(formData),
        onSuccess: (data)=>{
            toast.success('form successfully submitted');
            navigate('/student/form-success',{replace: true})
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error('cant submit form ');
        }
    })
    return {postForm,isLoading}
}