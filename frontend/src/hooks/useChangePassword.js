import {  useMutation } from "@tanstack/react-query";
import {changePassword as changePasswordAPI} from '../services/apiAuth';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useChangePassword(){
    const navigate = useNavigate();
    const {mutate: changePassword, isLoading} = useMutation({
        mutationFn: ({password,confirmPassword})=>changePasswordAPI({password, confirmPassword}),
        onSuccess: ()=>{
            toast.success('Password changed successfully. Please login with new password')
            localStorage.removeItem('token');
            navigate('/student/login',{replace: true})
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error(err.message);
        }
    })
    return {changePassword,isLoading}
};