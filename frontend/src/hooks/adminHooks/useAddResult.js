import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addResult as addResultApi } from "../../services/apiAdmin";
export function useAddResult(){
    const navigate = useNavigate();
    const {mutate: addResult, isLoading} = useMutation({
        mutationFn: (obj)=>addResultApi(obj),
        onSuccess: (data)=>{
            navigate('/department/add-result');
            toast.success('Result saved')
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error(err.message);
        }
    })
    return {addResult,isLoading}
}