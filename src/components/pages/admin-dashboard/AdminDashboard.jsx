import React from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { CiSearch } from "react-icons/ci";


export default function AdminDashboard() {
    return (
        <>

            <div className='container-fluid'>
                <Header />
                <div className='dashboard-wrapper'>
                    <Sidebar />
                    <div className='main-content'>
                        <div className='d-flex justify-content-between py-3 w-75'>
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
                                <div className="row justify-content-around">
                                    <div className="col-md-3">
                                        <div className='bg-info text-white p-3 rounded-4 mb-4'>
                                            <p>
                                                Today's Booking
                                            </p>
                                            <p className='display-5 fw-semibold'>
                                                4006
                                            </p>
                                            <p>
                                                10.00% <span>(30 days)</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className='bg-primary text-white p-3 rounded-4 mb-4'>
                                            <p>
                                                Today's Booking
                                            </p>
                                            <p className='display-5 fw-semibold'>
                                                4006
                                            </p>
                                            <p>
                                                10.00% <span>(30 days)</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className='bg-warning text-white p-3 rounded-4 mb-4'>
                                            <p>
                                                Today's Booking
                                            </p>
                                            <p className='display-5 fw-semibold'>
                                                4006
                                            </p>
                                            <p>
                                                10.00% <span>(30 days)</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className='bg-danger text-white p-3 rounded-4 mb-4'>
                                            <p>
                                                Today's Booking
                                            </p>
                                            <p className='display-5 fw-semibold'>
                                                4006
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

        </>
    )
}
