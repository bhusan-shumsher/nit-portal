import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { bulkUploadSchoolInfo } from "../../services/apiAdmin";

export function useBulkSchoolInfo(){
    const navigate = useNavigate();
    const {mutate: bulkAddSchool, isLoading} = useMutation({
        mutationFn: (info)=>bulkUploadSchoolInfo(info),
        onSuccess: (data)=>{
            toast.success(data.message);
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error(err.response.data.message);
        }
    })
    return {bulkAddSchool,isLoading}
}