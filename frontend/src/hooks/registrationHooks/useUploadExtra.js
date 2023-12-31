import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadExtra } from "../../services/apiRegistration";

export function useUploadExtra(){
    const navigate = useNavigate();
    const {mutate: saveExtra, isLoading} = useMutation({
        mutationFn: (info)=>uploadExtra(info),
        onSuccess: (data)=>{
            toast.success('Data Saved!!');
            navigate('/new-student/generate-form');
        },
        onError: err=>{
            console.log('Error',err.message);
            // add toast
            toast.error(err.response.data.message);
        }
    })
    return {saveExtra,isLoading}
}