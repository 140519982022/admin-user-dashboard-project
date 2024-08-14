import React from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { CiSearch } from "react-icons/ci";


export default function AdminDashboard() {
    return (
        <>

            <div className='container-fluid'>
                <div className='dashboard-wrapper'>
                    <Sidebar />
                    <div className='main-content'>
                        <Header />
                        <div className='p-5'>
                            <div className='d-flex justify-content-between py-3 w-75'>
                                <h4 className='text-capitalize text-dark fw-bolder'>
                                    Welcome To Admin Panel
                                </h4>
                                <div class=" mb-3 d-flex" role="search">
                                    <span class="input-group-text" id="basic-addon1"><CiSearch className=' m-1 fs-3' /></span>
                                    <input type="search" class="form-control" placeholder="Search Mockups Logos.." aria-label="Username" aria-describedby="basic-addon1"/>
                                    <button class="btn ms-3 btn-primary text-white" type="submit">Search</button>
                                </div>

                            </div>

                            <div className='container'>
                                <div className='my-5'>
                                    <div className="row justify-content-around">
                                        <div className="col-md-3">
                                            <div className='bg-info text-white p-3 rounded-4 mb-4'>
                                                <p>
                                                    Total Courses
                                                </p>
                                                <p className='display-5 fw-semibold'>
                                                    20
                                                </p>
                                                <p>
                                                    10.00% <span>(30 days)</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className='bg-primary text-white p-3 rounded-4 mb-4'>
                                                <p>
                                                    Total Videos
                                                </p>
                                                <p className='display-5 fw-semibold'>
                                                    99
                                                </p>
                                                <p>
                                                    10.00% <span>(30 days)</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className='bg-warning text-white p-3 rounded-4 mb-4'>
                                                <p>
                                                Active Courses
                                                </p>
                                                <p className='display-5 fw-semibold'>
                                                    18
                                                </p>
                                                <p>
                                                    10.00% <span>(30 days)</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className='bg-danger text-white p-3 rounded-4 mb-4'>
                                                <p>
                                                    Deactive Courses
                                                </p>
                                                <p className='display-5 fw-semibold'>
                                                    2
                                                </p>
                                                <p>
                                                    10.00% <span>(30 days)</span>
                                                </p>
                                            </div>
                                        </div>


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
