import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { saveRegDetails } from "../../services/apiRegistration";

export function useSaveRegDetails(){
    const navigate = useNavigate();
    const {mutate: saveDetails, isLoading} = useMutation({
        mutationFn: (info)=>saveRegDetails(info),
        onSuccess: (data)=>{
            toast.success('Data Saved!!');
            navigate('/new-student/signature-upload');
        },
        onError: err=>{
            console.log('Error',err.message);
            // add toast
            toast.error(err.response.data.message);
        }
    })
    return {saveDetails,isLoading}
}