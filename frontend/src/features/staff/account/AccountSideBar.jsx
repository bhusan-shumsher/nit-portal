
import {NavLink} from 'react-router-dom';

export default function AccountSideBar(){
    return(
<div className="sidebar" id="sidebar">
<div className="sidebar-inner slimscroll">
<div id="sidebar-menu" className="sidebar-menu">
<ul>
<li className="menu-title">
<span>Main Menu</span>
</li>
<li className="submenu active">
<NavLink to='/account/dashboard'><i className="feather-grid"></i> <span> Dashboard</span> <span className="menu-arrow"></span></NavLink>

</li>
<li className="submenu">
<a href="#"><i className="fas fa-clipboard"></i> <span> Invoices</span> <span className="menu-arrow"></span></a>
</li>
<li className="menu-title">
<span>Management</span>
</li>
<li className="submenu">
<a href="#"><i className="fas fa-file-invoice-dollar"></i> <span> Accounts</span> <span className="menu-arrow"></span></a>
<ul>
<li><a href="fees-collections.html">Fees Collection</a></li>
<li><a href="expenses.html">Expenses</a></li>
<li><a href="salary.html">Salary</a></li>
<li><a href="add-fees-collection.html">Add Fees</a></li>
<li><a href="add-expenses.html">Add Expenses</a></li>
<li><a href="add-salary.html">Add Salary</a></li>
</ul>
</li>

<li>
<a href="fees.html"><i className="fas fa-comment-dollar"></i> <span>Fees</span></a>
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

</ul>
</div>
</div>
</div>
    );
}