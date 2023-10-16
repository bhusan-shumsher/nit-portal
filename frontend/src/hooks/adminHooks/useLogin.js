import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {login as loginApi} from '../../services/apiAdmin';
import { decodeToken } from "../../utils/decodeToken";

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
            // if(decodeToken()){
            //     navigate('/admin/dashboard',{replace: true});
            // }else{
            //     navigate('/account/dashboard',{replace:true});
            // }
            const role = decodeToken();
            switch(role){
                case 'admin':
                    return navigate('/admin/dashboard',{replace:true});
                    break;
                case 'account':
                    return navigate('/account/dashboard',{replace: true});
                    break;
                // case 'se':
                case 'BECE':
                case 'BEELX':
                case 'BECIVIL':
                case 'BBA':
                case 'BCA':
                case 'BEIT':
                case 'BESE':
                    return navigate('/department/dashboard', {replace: true});
                    break;
                default:
                    toast.error('You dont have specific role to login');
                    navigate('/',{replace: true});
            }
        },
        onError: err=>{
            console.log('Error',err);
            // add toast
            toast.error('Wrong email or password');
        }
    })
    return {login,isLoading}
}