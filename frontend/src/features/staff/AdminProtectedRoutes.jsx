
import {Navigate, Outlet} from 'react-router-dom';
import { decodeToken } from '../../utils/decodeToken';
import Header from '../../ui/Header';
import AdminSideBar from './AdminSideBar';
import { isTokenExpired } from '../../utils/decodeToken';
function ProtectedRoute(){
    const role = decodeToken();
    if(role !== 'admin'){
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
                 <AdminSideBar/>
                <Outlet/>
            </div>
        );
    }
    
}


export default ProtectedRoute;