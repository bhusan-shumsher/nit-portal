import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadSignature } from "../services/apiStudent";

export function useUploadSignature(){
    const navigate = useNavigate();
    const {mutate: uploadSig, isLoading} = useMutation({
        mutationFn: (info)=>uploadSignature(info),
        onSuccess: (data)=>{
            toast.success('Signature Saved!!');
            navigate('/student/dashboard');
        },
        onError: err=>{
            console.log('Error',err.message);
            // add toast
            toast.error(err.response.data.message);
        }
    })
    return {uploadSig,isLoading}
}