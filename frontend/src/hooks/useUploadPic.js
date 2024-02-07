import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadPic } from "../services/apiStudent";

export function useUploadPic(){
    const navigate = useNavigate();
    const {mutate: uploadPhoto, isLoading} = useMutation({
        mutationFn: (info)=>uploadPic(info),
        onSuccess: (data)=>{
            toast.success('Picture Saved!!');
            navigate('/student/dashboard');
        },
        onError: err=>{
            console.log('Error',err.message);
            // add toast
            toast.error(err.response.data.message);
        }
    })
    return {uploadPhoto,isLoading}
}