import { NavLink } from "react-router-dom";
import { useLogout} from "../hooks/useLogout";
import { useBasicInfo } from "../hooks/adminHooks/useBasicInfo";
import Spinner from "./Spinner";
export default function Header(){
    const {logout} = useLogout();
    const {data, isLoading:basicInfoLoading} = useBasicInfo();
    
    if(basicInfoLoading){
        return (
            <Spinner/>
        );
    }
    return(
        <div className="header">
        <div className="header-left">
            <a href="index.html" className="logo">
                <img src="/img/ncitlogo.jpeg" alt="Logo"/>
            </a>
            <a href="index.html" className="logo logo-small">
                <img src="/img/ncitlogo.jpeg" alt="Logo" width="30" height="30"/>
            </a>
        </div>
        <div className="menu-toggle">
            <a href="javascript:void(0);" id="toggle_btn">
                <i className="fas fa-bars"></i>
            </a>
        </div>

        <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown me-2">
                <a href="#" className="dropdown-toggle nav-link header-nav-list" data-bs-toggle="dropdown">
                    <img src="/img/icons/header-icon-05.svg" alt=""/>
                </a>
                <div className="dropdown-menu notifications">
                    <div className="topnav-dropdown-header">
                        <span className="notification-title">Notifications</span>
                        <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                    </div>
                    <div className="noti-content">
                        <ul className="notification-list">
                            {/* TO SHOW THE NOTIFICATION */}
                            {/* <li className="notification-message">
                                <a href="#">
                                    <div className="media d-flex">
                                        <span className="avatar avatar-sm flex-shrink-0">
                                            <img className="avatar-img rounded-circle" alt="User Image"
                                                src="/img/profiles/avatar-02.jpg"/>
                                        </span>
                                        <div className="media-body flex-grow-1">
                                            <p className="noti-details"><span className="noti-title">Carlson Tech</span> has
                                                approved <span className="noti-title">your estimate</span></p>
                                            <p className="noti-time"><span className="notification-time">4 mins ago</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li> */}
                            
                        </ul>
                    </div>
                    {/* <div className="topnav-dropdown-footer">
                        <a href="#">View all Notifications</a>
                    </div> */}
                </div>
            </li>

            <li className="nav-item zoom-screen me-2">
                <a href="#" className="nav-link header-nav-list win-maximize">
                    <img src="/img/icons/header-icon-04.svg" alt=""/>
                </a>
            </li>

            <li className="nav-item dropdown has-arrow new-user-menus">
                <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                    <span className="user-img">
                        <img className="rounded-circle" src="/img/ncitlogo.jpeg" width="31"
                            alt="Soeng Souy"/>
                        <div className="user-text">
                            <h6>{data.firstName}</h6>
                            <p className="text-muted mb-0">{data.role}</p>
                        </div>
                    </span>
                </a>
                <div className="dropdown-menu">
                    <div className="user-header">
                        <div className="avatar avatar-sm">
                            <img src="/img/ncitlogo.jpeg" alt="User Image"
                             className="avatar-img rounded-circle"/>
                        </div>
                        <div className="user-text">
                            <h6>{data.firstName}</h6>
                            <p className="text-muted mb-0">{data.role}</p>
                        </div>
                    </div>
                    <button className="dropdown-item" onClick={logout}>Logout</button>
                </div>
            </li>

        </ul>

    </div>

    );
}