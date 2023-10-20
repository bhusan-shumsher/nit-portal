
import {Navigate, Outlet} from 'react-router-dom';
import { decodeToken } from '../../../utils/decodeToken';
import Header from '../../../ui/Header';
import DepartmentSideBar from './DepartmentSideBar';
import { toast } from "react-hot-toast";

const DepartmentRoles = ['BECE','BESE','BEIT','BEELX','BECIVIL','BBA','BCA','admin'];
function DepartmentProtectedRoute(){
    const role = decodeToken();
    if(!DepartmentRoles.includes(role)){
        toast.error('you dont have permission to access this route')
        return <Navigate to='/' />;

    // }else if(auth.token.isFirstTime){
    //     return <Navigate to='/change-password'/>;
    // }
    }else{
        return(
            <div >
                 <Header/>
                 <DepartmentSideBar/>
                <Outlet/>
            </div>
        );
    }
    
}


export default DepartmentProtectedRoute;