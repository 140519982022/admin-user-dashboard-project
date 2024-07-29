import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainContext } from '../../contextFile/ContextProvider'

export default function AddVideos() {
    let [submitForm, setSubmitForm] = useState(false)
    let [fetchCourseCategory, setFetchCourseCategory] = useState([])
    let navigator = useNavigate()
    let {formStatus,setFormStatus,formUpdate, setFormUpdate} = useContext(MainContext)

    let saveFormeData = (event) => {
        // alert("hihih");
        event.preventDefault();

        if (event.target.video_status.value == '') {
            var status = 1;
        } else {
            var status = event.target.video_status.value;
        }

        let formData = {
            category: event.target.video_category.value,
            topic: event.target.video_topic.value,
            link: event.target.video_link.value,
            status: status,
        }

        // console.log(formData)

        console.log(formData)
        axios.post(`http://localhost:8000/api/backend/videos/add`, formData)
        .then(result => {
            // console.log(result)
            if (result.data.status == true) {
                setSubmitForm(true)
                // toast.success(result.data.message)
                setFormStatus(
                    {
                        status : true,
                        message : result.data.message
                    }
                )

            } else {
                // setSubmitForm(false)
                toast.error(result.data.message)
            }
        })
        .catch(error => {
            console.log('There was an error!', error);
            toast.error("spmthing went wrong")

        });
    }

    let fetchCourseCategories = () => {

        axios.post('http://localhost:8000/api/backend/videos/course-category').then(
            (result) => {

                if (result.data.status == true) {
                    setFetchCourseCategory(result.data.data)

                } else {
                    toast.error(result.data.message)
                }

            }
        ).catch(
            (error) => {
                toast.error("somthing went wrong")

            }
        )

    }

    // let getSelectedCategory = (id) => {
    //     alert("hi")
    //     console.log(id)
    // }

    useEffect(() => {
        if (submitForm == true) {
            navigator('/view-videos')
        }
    }, [submitForm])

    // call http://localhost:8000/api/backend/videos/course-category this api
    useEffect(() => {
        fetchCourseCategories()
    }, [])

    // console.log(fetchCourseCategory)

    return (
        <>
            <div className='container-fluid'>
                <div className='dashboard-wrapper'>
                    <Sidebar />
                    <div className='main-content'>
                        <Header />
                        <div className="p-5">
                            <h1 className='fw-bold text-danger'>Add Videos</h1>
                            <div className='container'>
                                <div className='w-70 mx-auto p-5 shadow-lg p-3 bg-body rounded border'>
                                    <ToastContainer />

                                    <form onSubmit={saveFormeData}>
                                        {/* <div className="form-group">
                                            <label className='fw-bold py-3'>Course Category</label>
                                            <input type="text" name='video_category' className="form-control mb-3" placeholder="Enter course category" />
                                            <option value=""></option>
                                        </div> */}
                                        <div class="mb-3">
                                            <label className='fw-bold py-3'>Course Category</label>
                                            <select name='video_category' className="form-control mb-3">
                                                <option value="">Select course category</option>
                                                {fetchCourseCategory.length > 0 ? (
                                                    fetchCourseCategory.map((courseCategory, index) => (
                                                        <option key={index} value={courseCategory.name}>
                                                            {courseCategory.name}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option>No categories available</option>
                                                )}
                                            </select>

                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Video Topic</label>
                                            <input type="text" name='video_topic' className="form-control" placeholder="enter video topic" />
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Video Link</label>
                                            <input type="text" name='video_link' className="form-control" placeholder="enter video link" />
                                        </div>
                                        <div className="form-group pb-5">
                                            <label className='fw-bold py-3'>Video Status</label> <br />
                                            <input type="radio" name="video_status" value={1} /> &nbsp;&nbsp;&nbsp;
                                            <label for="active" className='fw-bold py-2'>Active</label>&nbsp;&nbsp;&nbsp;
                                            <input type="radio" name="video_status" value={0} />&nbsp;&nbsp;&nbsp;
                                            <label for="deactive" className='fw-bold py-2'>Deactive</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary fw-bold ">Submit</button>
                                        {/* <Link to={'/'}>
                                        </Link> */}
                                        <button type="button" className="btn btn-warning fw-bold ms-5">Cancel</button>
                                    </form>
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
