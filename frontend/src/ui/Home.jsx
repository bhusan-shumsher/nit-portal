
import {NavLink} from 'react-router-dom';
import Spinner from '../ui/Spinner';
import Alert from '../ui/Alert';
export default function Home(){
    return(
        <>
        <div class="page-wrapper">
        <div class="content container-fluid">
            <img src='/img/logo1.png'/>
            <br/>
            <br/>
            <NavLink  to='/student/login'>Login Student</NavLink>
            <br/>
            <NavLink to='/staff/login'>Admin Login</NavLink>
            </div>
            </div>
        </>
    );
}