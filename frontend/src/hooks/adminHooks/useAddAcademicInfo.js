import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addAcademicInfo } from "../../services/apiAdmin";

export function useAddAcademicInfo(){
    const navigate = useNavigate();
    const {mutate: addAcademic, isLoading} = useMutation({
        mutationFn: (info)=>addAcademicInfo(info),
        onSuccess: (data)=>{
            toast.success('information saved !!');
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error(err.response.data.message);
        }
    })
    return {addAcademic,isLoading}
}