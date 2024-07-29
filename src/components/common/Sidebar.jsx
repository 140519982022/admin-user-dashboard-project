import React, { useEffect } from 'react';
import '../../assets/css/sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    useEffect(() => {
        const mobileScreen = window.matchMedia("(max-width: 990px)");

        const handleDropdownToggle = (event) => {
            const dropdown = event.currentTarget.closest(".dashboard-nav-dropdown");
            dropdown.classList.toggle("show");
        };

        const handleMenuToggle = () => {
            if (mobileScreen.matches) {
                document.querySelector(".dashboard-nav").classList.toggle("mobile-show");
            } else {
                document.querySelector(".dashboard").classList.toggle("dashboard-compact");
            }
        };

        const openAllDropdowns = () => {
            document.querySelectorAll(".dashboard-nav-dropdown").forEach(dropdown => {
                dropdown.classList.add("show");
            });
        };

        const closeAllDropdowns = () => {
            document.querySelectorAll(".dashboard-nav-dropdown").forEach(dropdown => {
                dropdown.classList.remove("show");
            });
        };

        document.querySelectorAll(".dashboard-nav-dropdown-toggle").forEach(element => {
            element.addEventListener("click", handleDropdownToggle);
        });

        const menuToggle = document.querySelector(".menu-toggle");
        if (menuToggle) {
            menuToggle.addEventListener("click", handleMenuToggle);
        }

        const openButton = document.querySelector("#open-all-dropdowns");
        if (openButton) {
            openButton.addEventListener("click", openAllDropdowns);
        }

        const closeButton = document.querySelector("#close-all-dropdowns");
        if (closeButton) {
            closeButton.addEventListener("click", closeAllDropdowns);
        }

        // Cleanup event listeners on component unmount
        return () => {
            document.querySelectorAll(".dashboard-nav-dropdown-toggle").forEach(element => {
                element.removeEventListener("click", handleDropdownToggle);
            });

            if (menuToggle) {
                menuToggle.removeEventListener("click", handleMenuToggle);
            }

            if (openButton) {
                openButton.removeEventListener("click", openAllDropdowns);
            }

            if (closeButton) {
                closeButton.removeEventListener("click", closeAllDropdowns);
            }
        };
    }, []);

    return (
        <div className='dashboard'>
            <div className="dashboard-nav">
                <header>
                    <a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a>
                    <Link to={'/dashboard'} className="brand-logo">
                        <i className="fas fa-anchor"></i> <span>Dashboard</span>
                    </Link>
                </header>
                <nav className="dashboard-nav-list">
                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-photo-video"></i> Courses </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <Link to={'/add-course'} className="dashboard-nav-dropdown-item"><li>Add Course</li></Link>
                            <Link to={'/view-course'} className="dashboard-nav-dropdown-item"><li>View Course</li></Link>
                        </div>
                    </div>
                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-users"></i> Videos </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <Link to={'/add-videos'} className="dashboard-nav-dropdown-item"><li>Add Videos</li></Link>
                            <Link to={'/view-videos'} className="dashboard-nav-dropdown-item"><li>View Videos</li></Link>
                        </div>
                    </div>
                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-money-check-alt"></i> Slides </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <Link to={'/add-slide'} className="dashboard-nav-dropdown-item"><li>Add Slides</li></Link>
                            <Link to={'/view-slide'} className="dashboard-nav-dropdown-item"><li>View Slides</li></Link>
                        </div>
                    </div>
                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-money-check-alt"></i> Team </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <Link to={'/add-team'} className="dashboard-nav-dropdown-item"><li>Add Team</li></Link>
                            <Link to={'/view-team'} className="dashboard-nav-dropdown-item"><li>View Team</li></Link>
                        </div>
                    </div>
                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-money-check-alt"></i> Users </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <Link to={'/view-users'} className="dashboard-nav-dropdown-item"><li>View User</li></Link>
                        </div>
                    </div>
                    <div className="nav-item-divider"></div>
                    <Link to={'/'} className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </Link>
                </nav>
            </div>
            <div className="dashboard-controls">
                <button id="open-all-dropdowns">Open All</button>
                <button id="close-all-dropdowns">Close All</button>
            </div>
        </div>
    );
}
