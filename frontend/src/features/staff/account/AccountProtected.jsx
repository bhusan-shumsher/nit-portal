
import {isAccount } from "../../../utils/decodeToken";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "../../../ui/Header";
import AccountSideBar from "./AccountSideBar";

function AccountProtectedRoute(){
    const account = isAccount();
    if(!account){
        return <Navigate to='/' />;
    // }else if(auth.token.isFirstTime){
    //     return <Navigate to='/change-password'/>;
    // }
    }else{
        return(
            <div >
                 <Header/>
                 <AccountSideBar/>
                <Outlet/>
            </div>
        );
    }
    
}


export default AccountProtectedRoute;