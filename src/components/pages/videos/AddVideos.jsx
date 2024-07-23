import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function AddVideos() {
    let [submitForm, setSubmitForm] = useState(false)
    let navigator = useNavigate()
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
        axios.post(`http://localhost:8000/api/backend/videos/add`, formData)
        .then(response => {
            console.log(response)
            if (response.data.status == true) {
                setSubmitForm(true)
                toast.success(response.data.message)

            } else {
                // setSubmitForm(false)
                toast.error(response.data.message)
            }
        })
        .catch(error => {
            console.log('There was an error!', error);
            toast.error("spmthing went wrong")

        });
    }

    useEffect(() => {
        if (submitForm == true) {
            navigator('/view-videos')
        }
    }, [submitForm])

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
                                    <form onSubmit={saveFormeData}>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Category</label>
                                            <input type="text" name='video_category' className="form-control mb-3" placeholder="Enter course category" />
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
