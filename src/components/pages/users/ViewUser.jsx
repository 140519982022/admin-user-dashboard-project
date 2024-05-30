import React from 'react'
import Footer from '../../common/Footer.jsx'
import Header from '../../common/Header.jsx'
import Sidebar from '../../common/Sidebar.jsx'

export default function ViewUser() {
    return (
        <>
            <div className='container-fluid'>
                <Header/>
                <div className='dashboard-wrapper'>
                    <Sidebar/>
                    <div className='main-content'>
                        <h5 className='text-capitalize text-dark fw-bolder'>
                            Welcome To Admin Panel
                        </h5>

                        <div className='container'>
                            <div className='w-70 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                                <table class="table mt-5 table-bordered border-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.no</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>
                                                <button type="button" class="btn btn-success me-3 px-4">Edit</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                <th colSpan={5} className='text-center'>Data not found in API</th>

                            </tr> */}
                                    </tbody>
                                </table>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
