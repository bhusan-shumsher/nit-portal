import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useChangePassword } from "../../hooks/useChangePassword";
import Alert from "../../ui/Alert";
import Spinner  from "../../ui/Spinner";


export default function ChangePassword(){
    const {register, handleSubmit,formState} = useForm();
    const {errors} = formState;
    const {changePassword,isLoading} = useChangePassword();
    function onSubmit(data){
      changePassword(data);
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
                        <img className="img-fluid" src="/img/login.png" alt="Logo"/>
                    </div>
                     <div className="login-right">
                        <div className="login-right-wrap">
                             <h1>Welcome to NCIT</h1>
                             <h2>Change Password</h2>
                            <form onSubmit={handleSubmit(onSubmit,onError)}>
                            <div className="form-group">
                            <label>New Password <span className="login-danger">*</span></label>
                            <input className="form-control" type="password" 
                                {...register('password',{
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be atleast 6 character long'
                                    }
                                } )}
                            />
                     </div>
                    <div className="form-group">
                        <label>Confirm Password <span className="login-danger">*</span></label>
                        <input className="form-control pass-input" type="password"
                            {...register('confirmPassword',{
                                required: 'This is required',
                                validate: (value, formValues) => {
                                    if(value !== formValues.password){
                                        return 'Confirm password must be same as the above password'
                                    }
                                    return true
                                }       
                            })}
                        />
                    </div>
                    <div className="forgotpass">
                 
                     {/* <NavLink to='/forget-password'>Forgot Password?</NavLink> */}
                    </div>
                    <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                        Submit
                    </button>
                    </div>
                    </form>
                        
                </div>
               
             </div>
             
         </div>
         {errors?.password?.message && <Alert
                message={errors.password.message}
             /> }

             {errors?.confirmPassword?.message && <Alert 
                            message= {errors.confirmPassword.message}
                        /> }
        </div>
        </div>
    </div>
    );
}