import React from 'react'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { CiSearch } from "react-icons/ci";


export default function VIewCourse() {
  return (
    <div className='container-fluid'>
                <div className='dashboard-wrapper'>
                    <Sidebar/>
                    <div className='main-content'>
                        <Header/>
                        <div className='p-5'>
                            <div className='d-flex justify-content-between py-3 w-75'>
                                <h5 className='text-capitalize text-dark fw-bolder'>
                                    Welcome To View Courses Table
                                </h5>
                                <div class="d-flex" role="search">
                                    <input className="form-control me-2 position-relative" type="search" placeholder="       Search Mockups Logos.." aria-label="Search" />
                                    <CiSearch className='position-absolute m-1 fs-3' />
                                    {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                                </div>
                            </div>

                            <div className='container'>
                                <div className='container'>
                                    <div className='w-70 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>


                                        <table class="table mt-5 table-bordered border-dark">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S.no</th>
                                                    <th scope="col">Slider Heading</th>
                                                    <th scope="col"><button className='bg-danger text-white me-2'>Delete</button>
                                                        <input type="checkbox" name="" />
                                                    </th>
                                                    <th scope="col">Slider sub-heading</th>
                                                    <th scope="col">Slider Description</th>
                                                    <th scope="col">Slider Image</th>
                                                    <th scope="col">Status</th>

                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr> */}
                                                <tr>
                                                    <th colSpan={8} className='text-center'>Data not found in API</th>

                                                </tr>

                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                                <Footer/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
  )
}
