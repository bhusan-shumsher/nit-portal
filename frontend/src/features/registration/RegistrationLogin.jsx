import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useLogin } from "../../hooks/registrationHooks/useLogin";
import Alert from "../../ui/Alert";
import Spinner  from "../../ui/Spinner";

export default function RegistrationLogin(){
    const {register, handleSubmit,formState} = useForm();
    const {errors} = formState;

    const {login,isLoading} = useLogin();
    function onSubmit(data){
        console.log(data);
        login(data);
    }

    function onError(errors){
        console.log(errors);
    }

    return(
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <div className="loginbox">
                        <div className="login-left">
                            <img className="img-fluid" src="/img/home.jpeg" alt="Logo"/>
                        </div>
                         <div className="login-right">
                            <div className="login-right-wrap">
                                 <h1>Welcome to NCIT</h1>
                                 <h2> New Student Registration Log in</h2>
                                <form onSubmit={handleSubmit(onSubmit,onError)}>
                                <div className="form-group">
                                <label>Username <span className="login-danger">*</span></label>
                                <input className="form-control" type="text" {...register('email',{
                                    required : 'Email is required'
                                } )}/>
                         </div>
                        <div className="form-group">
                            <label>Password <span className="login-danger">*</span></label>
                            <input className="form-control pass-input" type="password" {...register('password',{
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be atleast 6 character long'
                                }
                            })}/>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">
                            {!isLoading ? 'Login' : <Spinner/>}
                        </button>
                        </div>
                            </form>
                            
                    </div>
                   
                 </div>
                 
             </div>
             {errors?.email?.message && <Alert
                message={errors.email.message}
             /> }

             {errors?.password?.message && <Alert 
                            message= {errors.password.message}
                        /> }
            </div>
            </div>
        </div>
    );
}