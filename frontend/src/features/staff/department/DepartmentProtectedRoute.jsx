
import {Navigate, Outlet} from 'react-router-dom';
import { decodeToken } from '../../../utils/decodeToken';
import Header from '../../../ui/Header';
import DepartmentSideBar from './DepartmentSideBar';

const DepartmentRoles = ['BECE','BESE','BEIT','BEELX','BECIVIL','BBA','BCA'];
function DepartmentProtectedRoute(){
    const role = decodeToken();
    if(!DepartmentRoles.includes(role)){
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