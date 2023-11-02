import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { editResult as editResultApi } from "../../services/apiAdmin";


export function useEditResult(){
    const navigate = useNavigate();
    const {mutate: editResult, isLoading} = useMutation({
        mutationFn: (obj)=>editResultApi(obj),
        onSuccess: (data)=>{
            navigate('/department/dashboard');
            toast.success('Edited Successfully!')
        },
        onError: err=>{
            toast.error(err.message);
        }
    })
    return {editResult,isLoading}
}