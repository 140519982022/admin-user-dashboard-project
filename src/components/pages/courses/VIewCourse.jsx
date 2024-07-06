import React, { useEffect, useState } from 'react'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { CiSearch } from "react-icons/ci";
import axios from 'axios';


export default function VIewCourse() {
    let [allUser, setAlluser] = useState([])

    let getAllDetails = () => {
        axios.get(`http://localhost:4000/api/backend/categories/view`)
            .then((response) => {
                // console.log(response.data[0].data)
                setAlluser(response.data[0].data)
            })
    }

    useEffect(() => {
        getAllDetails()
    }, [])


    // console.log(allUser);
    return (
        <div className='container-fluid'>
            <div className='dashboard-wrapper'>
                <Sidebar />
                <div className='main-content'>
                    <Header />
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
                                                <th scope="col">Course</th>
                                                {/* <th scope="col"><button className='bg-danger text-white me-2'>Delete</button>
                                                        <input type="checkbox" name="" />
                                                    </th> */}
                                                <th scope="col">Description</th>
                                                <th scope="col">Image</th>
                                                {/* <th scope="col">Slider Image</th> */}
                                                <th scope="col">Status</th>

                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {allUser.length > 0 ? (
                                                allUser.map((course, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{course.course_name}</td>
                                                        <td>{course.description}</td>
                                                        <td><img src={course.image} alt={course.courseName} style={{ width: '50px' }} /></td>
                                                        <td>{course.status}</td>
                                                        <td>
                                                        <button className='bg-danger text-white me-2 border border-0'>Delete</button>
                                                        <button className='bg-success text-white me-2 border border-0'>Edit</button>

                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <th colSpan={6} className='text-center'>Data not found in API</th>
                                                </tr>
                                            )}

                                        </tbody>
                                    </table>

                                </div>

                            </div>
                            <Footer />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
