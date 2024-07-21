import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function AddCourse() {

    let [submitForm, setSubmitForm] = useState(false)
    let navigator = useNavigate()
    let saveFormeData = (event) => {
        // alert("hihih");

        event.preventDefault();

        if(event.target.course_order.value == ''){
            var order = 1;
        }else{
            var order = event.target.course_order.value;
        }

        if(event.target.course_status.value == ''){
            var status = 1;
        }else{
            var status = event.target.course_status.value;
        }

        let formData = {
            name : event.target.course_name.value,
            price: event.target.course_price.value,
            duration: event.target.course_duration.value,
            order: order,
            description: event.target.course_description.value,
            image: event.target.course_name.value,
            status: status,

        }

        console.log(formData)
        axios.post(`http://localhost:8000/api/backend/courses/add`, formData)
        .then(response => {
            console.log(response)
            if (response.data.status == true) {

                setSubmitForm(true)
                toast.success(response.data.message)
                
            }else{
                // setSubmitForm(false)
                toast.error(response.data.message)

            }

        })
        .catch(error => {
            console.log('There was an error!', error);
            toast.error("spmthing went wrong")

        });



    }

    useEffect(()=>{
        if (submitForm == true) {
            navigator('/view-course')
            
        }
    },[submitForm])

    return (
        <>
            <div className='container-fluid'>
                <div className='dashboard-wrapper'>
                    <Sidebar />
                    <div className='main-content'>
                        <Header />
                        <div className='p-5'>
                            <h1 className='fw-bold text-danger'>Add course</h1>
                            <div className='container'>
                                <div className='w-100 mx-auto  m-3 shadow-lg p-5 bg-body rounded border'>
                                <ToastContainer />
                                    <form onSubmit={saveFormeData}>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Name</label>
                                            <input type="text" name='course_name' className="form-control mb-3" placeholder="Enter course name"/>
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Price</label>
                                            <input type="text" name='course_price' className="form-control" placeholder="enter course price"/>
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Duration</label>
                                            <input type="text" name='course_duration' className="form-control" placeholder="enter course duration"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="order" className='fw-bold py-3'>Course Order</label>
                                            <input type="text"
                                                name="course_order"
                                                className="form-control"
                                                placeholder="Enter course order"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Description</label>
                                            <textarea name="course_description" className="form-control" rows={3} placeholder='enter course desciption'></textarea>
                                        </div>
                                       
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className='fw-bold py-3'>Course Image</label>
                                            <input type="file" name='course_images' className="form-control mb-3" placeholder="select logo"/>
                                        </div>
                                        <div className="form-group pb-5">
                                            <label for="exampleInputEmail1" className='fw-bold py-3'>Course Status</label> <br />
                                            <input type="radio" name="course_status" value="1"/> &nbsp;&nbsp;&nbsp;
                                            <label for="active" className='fw-bold py-2' >Active</label>&nbsp;&nbsp;&nbsp;

                                            <input type="radio" name="course_status"  value="0"/>&nbsp;&nbsp;&nbsp;
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
