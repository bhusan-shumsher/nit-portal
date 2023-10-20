import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { bulkUploadStudent } from "../../services/apiAdmin";

export function useBulkUploadStudent(){
    const navigate = useNavigate();
    const {mutate: bulkUpload, isLoading} = useMutation({
        mutationFn: (info)=>bulkUploadStudent(info),
        onSuccess: (data)=>{
            toast.success(data.message);
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error(err.response.data.message);
        }
    })
    return {bulkUpload,isLoading}
}