import {NavLink} from 'react-router-dom';


export default function SideBar(){
   
        return(
            <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
            <ul>
            <li className="menu-title">
            <span>Main Menu</span>
            </li>
            <li className="submenu active">
            <NavLink to='/student/dashboard'><i className="feather-grid"></i> <span> Dashboard</span> <span className="menu-arrow"></span></NavLink>
            
            </li>
            <li className="submenu">
            <NavLink to='/student/current-subject'><i className="fas fa-graduation-cap"></i> <span> Current Subjects</span> <span className="menu-arrow"></span></NavLink>
            </li>
            <li className="submenu">
            <NavLink to='/student/result'><i className="fas fa-chalkboard-teacher"></i> <span> Result</span> <span className="menu-arrow"></span></NavLink>
            
            </li>
            <li className="submenu">
            <NavLink to='/student/exam-form'><i className="fas fa-chalkboard-teacher"></i> <span> Exam Form</span> <span className="menu-arrow"></span></NavLink>
            </li>:           
            <li className="submenu">
            <NavLink to='/student/upload-pics'><i className="fas fa-chalkboard-teacher"></i> <span>Upload Pics</span> <span className="menu-arrow"></span></NavLink>
            </li>
            <li className="submenu">
            <NavLink to='/student/upload-signature'><i className="fas fa-chalkboard-teacher"></i> <span>Upload Signature</span> <span className="menu-arrow"></span></NavLink>
            </li>
            </ul>
            </div>
            </div>
            </div>
                );
    
}