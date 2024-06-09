import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { CiSearch } from "react-icons/ci";


export default function ChangePassword() {
    // toast("Wow so easy!")

    return (
        <>
            <div className='container-fluid'>
                <div className='dashboard-wrapper'>
                    <Sidebar />
                    <div className='main-content'>
                        <Header />
                        <div className='p-5'>
                            <div className='d-flex justify-content-between py-3'>
                                <h4 className='text-capitalize text-dark fw-bolder'>
                                    Welcome To Admin Panel
                                </h4>
                                <div class="d-flex" role="search">
                                    <input className="form-control me-2 position-relative" type="search" placeholder="       Search Mockups Logos.." aria-label="Search" />
                                    <CiSearch className='position-absolute m-1 fs-3' />
                                    <button class="btn btn-outline-success btn-primary text-white" type="submit">Search</button>
                                </div>
                            </div>

                            <div className='container'>
                                <div className='my-5'>
                                    <div className='mx-auto p-5 shadow-lg bg-body rounded border'>
                                        <form>
                                            <ToastContainer />
                                            <h1 className='fw-bold pb-5 text-danger'>Admin Change Password</h1>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1" className='fw-bold pb-2'>Old Password</label>
                                                <input type="text" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1" className='fw-bold pb-2'>New Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1" className='fw-bold pb-2'>Confirmed Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div className="form-group form-check">
                                            </div>
                                            <button type="submit" className="btn btn-success fw-bold ">Update Password</button>

                                        </form>

                                    </div>



                                </div>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
