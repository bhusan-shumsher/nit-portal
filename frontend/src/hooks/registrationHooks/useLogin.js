import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {login as registrationLoginApi} from '../../services/apiRegistration';
export function useLogin(){
    const navigate = useNavigate();
    const {mutate: login, isLoading} = useMutation({
        mutationFn: ({email,password})=>registrationLoginApi({email,password}),
        onSuccess: (data)=>{
            console.log(data.isFirstTime);
            localStorage.setItem('token',JSON.stringify(data));
            // if(data.isFirstTime){
            //     return navigate('/change-password',{replace: true})
            // }
            console.log(data);
            navigate('/new-student/registration-form',{replace: true})
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error('Wrong email or password');
        }
    })
    return {login,isLoading}
}