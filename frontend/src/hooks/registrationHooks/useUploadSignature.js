import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadSignature } from "../../services/apiRegistration";

export function useUploadSignature(){
    const navigate = useNavigate();
    const {mutate: saveSignature, isLoading} = useMutation({
        mutationFn: (info)=>uploadSignature(info),
        onSuccess: (data)=>{
            toast.success('Data Saved!!');
            navigate('/new-student/upload-supporting-docs');
        },
        onError: err=>{
            console.log('Error',err.message);
            // add toast
            toast.error(err.response.data.message);
        }
    })
    return {saveSignature,isLoading}
}