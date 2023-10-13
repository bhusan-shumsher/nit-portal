
import {Navigate, Outlet} from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
function ProtectedRoute(){
    let auth = {'token' : JSON.parse(localStorage.getItem('token'))};

    if(!auth.token){
        return <Navigate to='/' />;
    // }else if(auth.token.isFirstTime){
    //     return <Navigate to='/change-password'/>;
    // }
    }else{
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