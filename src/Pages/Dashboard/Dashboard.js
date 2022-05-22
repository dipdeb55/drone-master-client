import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-4xl text-green-500'>DashBoard</h1>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard' >My Orders</Link></li>
                        <li><Link to='/dashboard/reviews'>Reviews</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                        {<li><Link to='/dashboard/user'>All User</Link></li>}
                        {/* {<li><Link to='/dashboard/user'>All User</Link></li>} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;