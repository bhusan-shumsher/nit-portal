
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
<li className="submenu">
<NavLink to='/student/result'><i className="fas fa-chalkboard-teacher"></i> <span> Result</span> <span className="menu-arrow"></span></NavLink>

</li>

<li className="submenu">
<NavLink to='/student/exam-form'><i className="fas fa-chalkboard-teacher"></i> <span> Exam Form</span> <span className="menu-arrow"></span></NavLink>

</li>
<li className="menu-title">
<span>Management</span>
</li>
<li className="submenu">
<NavLink to='/department/add-new-student'><i className="fas fa-file-invoice-dollar"></i> <span> Add New Student</span> <span className="menu-arrow"></span></NavLink>
</li>
<li className="submenu">
<NavLink to='/department/add-school-info'><i className="fas fa-file-invoice-dollar"></i> <span> Add School Info</span> <span className="menu-arrow"></span></NavLink>
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
<li>
<a href="holiday.html"><i className="fas fa-holly-berry"></i> <span>Holiday</span></a>
</li>
<li>
<a href="fees.html"><i className="fas fa-comment-dollar"></i> <span>Fees</span></a>
</li>
<li>
<a href="exam.html"><i className="fas fa-clipboard-list"></i> <span>Exam list</span></a>
</li>
<li>
<a href="event.html"><i className="fas fa-calendar-day"></i> <span>Events</span></a>
</li>
<li>
<a href="time-table.html"><i className="fas fa-table"></i> <span>Time Table</span></a>
</li>
<li>
<a href="library.html"><i className="fas fa-book"></i> <span>Library</span></a>
</li>
<li className="submenu">
<a href="#"><i className="fa fa-newspaper"></i> <span> Blogs</span>
<span className="menu-arrow"></span>
 </a>
</li>
<li className="submenu">
<a href="#"><i className="fas fa-shield-alt"></i> <span> Authentication </span> <span className="menu-arrow"></span></a>
<ul>
<li><a href="login.html">Login</a></li>
<li><a href="register.html">Register</a></li>
<li><a href="forgot-password.html">Forgot Password</a></li>
<li><a href="error-404.html">Error Page</a></li>
</ul>
</li>
<li>
<a href="blank-page.html"><i className="fas fa-file"></i> <span>Blank Page</span></a>
</li>
<li className="menu-title">
<span>Others</span>
</li>
<li>
<a href="sports.html"><i className="fas fa-baseball-ball"></i> <span>Sports</span></a>
</li>
<li>
<a href="hostel.html"><i className="fas fa-hotel"></i> <span>Hostel</span></a>
</li>
<li>
<a href="transport.html"><i className="fas fa-bus"></i> <span>Transport</span></a>
</li>




</ul>
</div>
</div>
</div>
    );
}