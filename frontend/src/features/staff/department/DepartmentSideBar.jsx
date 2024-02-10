
import {NavLink} from 'react-router-dom';

export default function DeparmentSideBar(){
    return(
<div className="sidebar" id="sidebar">
<div className="sidebar-inner slimscroll">
<div id="sidebar-menu" className="sidebar-menu">
<ul>
<li className="menu-title">
<span>Main Menu</span>
</li>
<li className="submenu active">
<NavLink to='/department/dashboard'><i className="feather-grid"></i> <span> Dashboard</span> <span className="menu-arrow"></span></NavLink>

</li>
{/* <li className="submenu">
<NavLink to='/student/result'><i className="fas fa-chalkboard-teacher"></i> <span> Result</span> <span className="menu-arrow"></span></NavLink>

</li> */}

{/* <li className="submenu">
<NavLink to='/student/exam-form'><i className="fas fa-chalkboard-teacher"></i> <span> Exam Form</span> <span className="menu-arrow"></span></NavLink>

</li> */}
<li className="menu-title">
<span>Management</span>
</li>
<li className="submenu">
<NavLink to='/department/add-new-student'><i className="fas fa-file-invoice-dollar"></i> <span> Add New Student</span> <span className="menu-arrow"></span></NavLink>
</li>
<li className="submenu">
<NavLink to='/department/add-school-info'><i className="fas fa-file-invoice-dollar"></i> <span> Add School Info</span> <span className="menu-arrow"></span></NavLink>
</li>
<li className="submenu">
<NavLink to='/department/add-result'><i className="fas fa-file-invoice-dollar"></i> <span> Add Result</span> <span className="menu-arrow"></span></NavLink>
</li>
<li className="menu-title">
<span>Bulk Upload</span>
</li>
<li className="submenu">
<NavLink to='/department/bulk-upload-student'><i className="fas fa-file-invoice-dollar"></i> <span>Bulk Student Upload</span> <span className="menu-arrow"></span></NavLink>
</li>
<li className="submenu">
<NavLink to='/department/bulk-school-info'><i className="fas fa-file-invoice-dollar"></i> <span> Bulk School Info</span> <span className="menu-arrow"></span></NavLink>
</li>
<li className="submenu">
<NavLink to='/department/bulk-result-upload'><i className="fas fa-file-invoice-dollar"></i> <span> Bulk Result Upload</span> <span className="menu-arrow"></span></NavLink>
</li>
<li className="menu-title">
<span>Bulk Upload</span>
</li>
<li>
<NavLink to='/department/edit-result'><i className="fas fa-file-invoice-dollar"></i> <span>Edit Result</span> <span className="menu-arrow"></span></NavLink>
</li>
<li>
<NavLink to='/department/form-submitted'><i className="fas fa-file-invoice-dollar"></i> <span>Form Submitted</span> <span className="menu-arrow"></span></NavLink>
</li>
</ul>
</div>
</div>
</div>
    );
}