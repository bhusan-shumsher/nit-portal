import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { generateForm } from "../../services/apiRegistration";

export function useGenerateForm(){
    const navigate = useNavigate();
    const {mutate: generate, isLoading} = useMutation({
        mutationFn: ()=>generateForm(),
        onSuccess: (data)=>{
            navigate('/new-student/form-download',{replace: true})
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error('Unable to generate form');
        }
    })
    return {generate,isLoading}
}