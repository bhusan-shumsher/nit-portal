import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { bulkUploadResult } from "../../services/apiAdmin";

export function useBulkResult(){
    const navigate = useNavigate();
    const {mutate: bulkResult, isLoading} = useMutation({
        mutationFn: (info)=>bulkUploadResult(info),
        onSuccess: (data)=>{
            toast.success(data.message);
            navigate('/department/dashboard')
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error(err.response.data.message);
        }
    })
    return {bulkResult,isLoading}
}