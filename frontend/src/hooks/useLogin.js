import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {login as loginApi} from '../services/apiAuth';
export function useLogin(){
    const navigate = useNavigate();
    const {mutate: login, isLoading} = useMutation({
        mutationFn: ({email,password})=>loginApi({email,password}),
        onSuccess: (data)=>{
            console.log(data.isFirstTime);
            localStorage.setItem('token',JSON.stringify(data));
            // if(data.isFirstTime){
            //     return navigate('/change-password',{replace: true})
            // }
            console.log(data);
            navigate('/student/dashboard',{replace: true})
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error('Wrong email or password');
        }
    })
    return {login,isLoading}
}