import React, { useEffect, useState } from 'react'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ViewCourse() {
    let [allUser, setAlluser] = useState([])

    let getAllDetails = () => {
        axios.post(`http://localhost:8000/api/backend/courses/view`)
        .then((response) => {
            if (response.data.data == true) {
                // console.log(response.data.data)
                setAlluser(response.data.data) // Set only the data array
            }else{
                setAlluser([]) 

            }
            
        })
        .catch((error) => {
            console.error("There was an error during fetch the data!");
        });
    }

    useEffect(() => {
        getAllDetails()
    }, [])

    console.log("all user");
    console.log(allUser);

    return (
        <div className='container-fluid'>
            <div className='dashboard-wrapper'>
                <Sidebar />
                <div className='main-content'>
                    <Header />
                    <div className='p-5'>
                        <ToastContainer />

                        <div className='d-flex justify-content-between py-3 w-75'>
                            <h5 className='text-capitalize text-dark fw-bolder'>
                                Welcome To View Courses Table
                            </h5>
                            {/* <div class="d-flex" role="search">
                                <input className="form-control me-2 position-relative" type="search" placeholder="       Search Mockups Logos.." aria-label="Search" />
                                <CiSearch className='position-absolute m-1 fs-3' />
                            </div> */}

                            <div class=" mb-3 d-flex" role="search">
                                <span class="input-group-text" id="basic-addon1"><CiSearch className=' m-1 fs-3' /></span>
                                <input type="search" class="form-control" placeholder="Search Mockups Logos.." aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>

                        <div className='container'>
                            <div className='container'>
                                <div className='w-70 mx-auto m-5 shadow-lg p-3 bg-body rounded border'>
                                    <table className="table mt-3 table-bordered border-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.no</th>
                                                <th scope="col">Course</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Duration</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Status</th>

                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allUser.length > 0 ? (
                                                allUser.map((course, index) => (
                                                    <tr key={course._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{course.name}</td>
                                                        <td>{course.price}</td>
                                                        <td>{course.duration}</td>
                                                        <td>{course.image}</td>
                                                        <td>

                                                        <span
                                                                className={`badge ${course.status === true ? 'text-bg-success px-3' : 'text-bg-danger'
                                                                    } text-white`}
                                                            >
                                                                {course.status === true ? 'Active' : 'Deactive'}
                                                            </span>
                                                        </td>

                                                        <td>
                                                            <button className='bg-success text-white me-2 border border-0 px-3'>Edit</button>
                                                            <button className='bg-danger text-white border border-0'>Delete</button>
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
