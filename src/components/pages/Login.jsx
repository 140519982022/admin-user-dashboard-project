import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import { Link } from 'react-router-dom';
// import Footer from '../common/Footer.jsx';

export default function Login() {

    // toast("Wow so easy!")
    return (
        <>
            {/* <div className='container-fluid'>
                <Header></Header>
                <div className='dashboard-wrapper'>
                    <Sidebar></Sidebar>
                    <div className='main-content'> */}

            {/* <div className='container'> */}
            {/* <div className='d-flex justify-content-between py-3'>
                                <h1 className='text-capitalize text-dark'>
                                    welcome to admin panel
                                </h1>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div> */}
            <div className='w-50 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                <form>
                    <ToastContainer />
                    <h1 className='fw-bold pb-5 text-primary'>Admin Login Here</h1>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='fw-bold pb-2'>Email address</label>
                        <input type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" className='fw-bold pb-2'>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                    </div>
                    <button type="submit" className="btn btn-primary fw-bold form-control">Login</button>
                    <div className='d-flex justify-content-between mt-5' >
                        <button type="submit" className="btn btn-warning fw-bold  ">Login with Google</button>
                        <Link to={'/admin-registration'} className=''>Register Here</Link>
                    </div>
                </form>
            </div>
            {/* <Footer />
                        </div> */}
            {/* </div>
                </div>
            </div> */}


        </>
    )
}
