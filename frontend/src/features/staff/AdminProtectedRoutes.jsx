
import {Navigate, Outlet} from 'react-router-dom';
import { decodeToken } from '../../utils/decodeToken';
import Header from '../../ui/Header';
import AdminSideBar from './AdminSideBar';
function ProtectedRoute(){
    const role = decodeToken();
    if(role !== 'admin'){
        return <Navigate to='/' />;
    // }else if(auth.token.isFirstTime){
    //     return <Navigate to='/change-password'/>;
    // }
    }else{
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