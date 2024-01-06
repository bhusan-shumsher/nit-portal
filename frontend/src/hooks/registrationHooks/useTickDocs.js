import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { tickDocs } from "../../services/apiRegistration";

export function useTickDocs(){
    const navigate = useNavigate();
    const {mutate: tick, isLoading} = useMutation({
        mutationFn: (values)=>tickDocs(values),
        onSuccess: (data)=>{
           
            navigate('/new-student/generate-form',{replace: true})
        },
        onError: err=>{
            // add toast
            toast.error('Unable to save');
        }
    })
    return {tick,isLoading}
}