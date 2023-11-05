import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBacklogs as updateBacklogsAPI } from "../../services/apiAdmin";

export function useUpdateBacklogs(){
    const navigate = useNavigate();
    const {mutate: updateBacklogs, isLoading} = useMutation({
        mutationFn: (file)=>updateBacklogsAPI(file),
        onSuccess: (data)=>{
            navigate('/department/dashboard');
            toast.success('Backlogs updated successfully!');
        },
        onError: err=>{
            toast.error(err.message);
        }
    })
    return {updateBacklogs,isLoading}
}