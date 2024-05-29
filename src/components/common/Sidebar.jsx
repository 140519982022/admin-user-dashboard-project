import React, { useEffect } from 'react';
import '../../assets/css/sidebar.css';

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

        document.querySelector(".menu-toggle").addEventListener("click", handleMenuToggle);

        // Adding event listeners for the open/close all buttons
        document.querySelector("#open-all-dropdowns").addEventListener("click", openAllDropdowns);
        document.querySelector("#close-all-dropdowns").addEventListener("click", closeAllDropdowns);

        // Cleanup event listeners on component unmount
        return () => {
            document.querySelectorAll(".dashboard-nav-dropdown-toggle").forEach(element => {
                element.removeEventListener("click", handleDropdownToggle);
            });
            document.querySelector(".menu-toggle").removeEventListener("click", handleMenuToggle);
            document.querySelector("#open-all-dropdowns").removeEventListener("click", openAllDropdowns);
            document.querySelector("#close-all-dropdowns").removeEventListener("click", closeAllDropdowns);
        };
    }, []);

    return (
        <div className='dashboard'>
            <div className="dashboard-nav">
                <header>
                    <a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a>
                    <a href="#" className="brand-logo">
                        <i className="fas fa-anchor"></i> <span>BRAND</span>
                    </a>
                </header>
                <nav className="dashboard-nav-list">
                    <a href="#" className="dashboard-nav-item"><i className="fas fa-home"></i> Home </a>
                    {/* <a href="#" className="dashboard-nav-item active"><i className="fas fa-tachometer-alt"></i> Dashboard </a>
                    <a href="#" className="dashboard-nav-item"><i className="fas fa-file-upload"></i> Upload </a> */}
                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-photo-video"></i> Courses </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <a href="#" className="dashboard-nav-dropdown-item">Add Course</a>
                            <a href="#" className="dashboard-nav-dropdown-item">View Course</a>
                        </div>
                    </div>
                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-users"></i> Videos </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <a href="#" className="dashboard-nav-dropdown-item">All</a>
                            <a href="#" className="dashboard-nav-dropdown-item">Subscribed</a>

                        </div>
                    </div>
                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-money-check-alt"></i> Slides </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <a href="#" className="dashboard-nav-dropdown-item">All</a>
                            <a href="#" className="dashboard-nav-dropdown-item">Recent</a>
                            <a href="#" className="dashboard-nav-dropdown-item">Projections</a>
                        </div>
                    </div>

                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-money-check-alt"></i> Team </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <a href="#" className="dashboard-nav-dropdown-item">All</a>
                            <a href="#" className="dashboard-nav-dropdown-item">Recent</a>
                            <a href="#" className="dashboard-nav-dropdown-item">Projections</a>
                        </div>
                    </div>

                    <div className='dashboard-nav-dropdown'>
                        <a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i className="fas fa-money-check-alt"></i> Users </a>
                        <div className='dashboard-nav-dropdown-menu'>
                            <a href="#" className="dashboard-nav-dropdown-item">All</a>
                            <a href="#" className="dashboard-nav-dropdown-item">Recent</a>
                            <a href="#" className="dashboard-nav-dropdown-item">Projections</a>
                        </div>
                    </div>
                    {/* <a href="#" className="dashboard-nav-item"><i className="fas fa-cogs"></i> Settings </a> */}
                    {/* <a href="#" className="dashboard-nav-item"><i className="fas fa-user"></i> Profile </a> */}
                    <div className="nav-item-divider"></div>
                    <a href="#" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
                </nav>
            </div>
            {/* Add buttons for open and close all dropdowns */}
            <div className="dashboard-controls">
                <button id="open-all-dropdowns">Open All</button>
                <button id="close-all-dropdowns">Close All</button>
            </div>
        </div>
    );
}
