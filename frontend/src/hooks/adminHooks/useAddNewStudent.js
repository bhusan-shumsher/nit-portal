import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addNewStudent } from "../../services/apiAdmin";

export function useAddNewStudent(){
    const navigate = useNavigate();
    const {mutate: addStudent, isLoading} = useMutation({
        mutationFn: (info)=>addNewStudent(info),
        onSuccess: (data)=>{
            toast.success('new student added !!');
        },
        onError: err=>{
            // add toast
            toast.error(err.message);
        }
    })
    return {addStudent,isLoading}
}