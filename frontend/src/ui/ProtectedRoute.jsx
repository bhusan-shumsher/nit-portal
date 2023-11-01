
import {Navigate, Outlet} from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import { isTokenExpired } from '../utils/decodeToken';
import { toast } from 'react-hot-toast';
function ProtectedRoute(){
    let auth = {'token' : JSON.parse(localStorage.getItem('token'))};

    if(!auth.token){
        return <Navigate to='/' />;
    // }else if(auth.token.isFirstTime){
    //     return <Navigate to='/change-password'/>;
    // }
    }
    if(!isTokenExpired()){
        toast.error('session expired')
        return <Navigate to ='/'/>
    }
    else{
        return(
            <div >
                <Header/>
                <SideBar/>
                <Outlet/>
            </div>
        );
    }
    
}


export default ProtectedRoute;