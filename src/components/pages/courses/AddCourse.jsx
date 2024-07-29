import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom'
import { MainContext } from '../../contextFile/ContextProvider'

export default function AddCourse() {

    let [submitForm, setSubmitForm] = useState(false)
    let navigator = useNavigate()
    let params = useParams();
    let[input,setInput] = useState({
        course_name : "",
        course_image : "",
        course_price : "",
        course_duration : "",
        course_description : "",
        course_status : "",
        course_order : ""
    })

    let {formStatus,setFormStatus,formUpdate, setFormUpdate} = useContext(MainContext)

    useEffect(()=>{
        console.log(formStatus)
        if(params.course_id != undefined){
            axios.post('http://localhost:8000/api/backend/courses/detail/'+params.course_id).then((result)=>{
                setInput({
                    course_name : result.data.data.name,
                    course_image : result.data.data.image,
                    course_price : result.data.data.price,
                    course_duration : result.data.data.duration,
                    course_description : result.data.data.description,
                    course_status : result.data.data.status,
                    course_order : result.data.data.order
                })
            }).catch((error)=>{
                toast.error('somthing went wrong')
            })

        }
    },[]);

    let inputHandeler = (event) => {
        
        let data = {...input}

        data[event.target.name] = event.target.value

        setInput(data)
    }

    let saveFormeData = (event) => {
        // alert("hihih");

        event.preventDefault();

        if(event.target.course_order.value == ''){
            var order = 1;
        }else{
            var order = event.target.course_order.value;
        }

        if(event.target.course_status.value == ''){
            // console.log("blank status")
            var status = 1;
        }else{
            // console.log("somthing in status")
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

        // console.log(formData)

        if (params.course_id == undefined) {
            // console.log("undefined id 111111111111")
            axios.post(`http://localhost:8000/api/backend/courses/add`, formData)
            .then(result => {
                console.log(result)
                if (result.data.status == true) {

                    setSubmitForm(true)

                    setFormStatus(
                        {
                            status : true,
                            message : result.data.message
                        }
                    )
                    
                }else{
                    // setSubmitForm(false)
                    setFormStatus(
                        {
                            status : false,
                            message : result.data.message
                        }
                    )
                    toast.error(result.data.message)

                }

            })
            .catch(error => {
                console.log('There was an error!', error);
                toast.error("spmthing went wrong")

            });
        }else{
            // console.log("defined id 2222222222222")

// console.log(params.course_id)
            formData.id = params.course_id

            // console.log(formData)

            axios.put('http://localhost:8000/api/backend/courses/update', formData)
            .then(result => {
                // console.log(result)
                if (result.data.status == true) {

                    setSubmitForm(true)
                   
                    setFormUpdate(
                        {
                            status : true,
                            message : result.data.message
                        }
                    )
                    
                }else{
                    // setSubmitForm(false)
                    setFormUpdate(
                        {
                            status : false,
                            message : result.data.message
                        }
                    )
                    toast.error(result.data.message)

                }

            })
            .catch(error => {
                // console.log('There was an error!', error);
                toast.error("spmthing went wrong")

            });

        }

        



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
                                            <input type="text" name='course_name' className="form-control mb-3" placeholder="Enter course name" onChange={inputHandeler} value={input.course_name}/>
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Price</label>
                                            <input type="text" name='course_price' className="form-control" placeholder="enter course price" onChange={inputHandeler} value={input.course_price}/>
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Duration</label>
                                            <input type="text" name='course_duration' className="form-control" placeholder="enter course duration" onChange={inputHandeler} value={input.course_duration}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="order" className='fw-bold py-3'>Course Order</label>
                                            <input type="text"
                                                name="course_order"
                                                className="form-control"
                                                placeholder="Enter course order" onChange={inputHandeler} value={input.course_order}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Description</label>
                                            <textarea name="course_description" className="form-control" rows={3} placeholder='enter course desciption' onChange={inputHandeler} value={input.course_description}></textarea>
                                        </div>
                                       
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className='fw-bold py-3'>Course Image</label>
                                            <input type="file" name='course_images' className="form-control mb-3" placeholder="select logo" onChange={inputHandeler}/>
                                        </div>
                                        <div className="form-group pb-5">
                                            <label for="exampleInputEmail1" className='fw-bold py-3'>Course Status</label> <br />
                                            <input type="radio" name="course_status" value={1} onChange={inputHandeler} checked={(input.course_status == 1 ? 'checked' : '')}/> &nbsp;&nbsp;&nbsp;
                                            <label for="active" className='fw-bold py-2' >Active</label>&nbsp;&nbsp;&nbsp;

                                            <input type="radio" name="course_status" value={0} onChange={inputHandeler} checked={(input.course_status == 0 ? 'checked' : '')}/>&nbsp;&nbsp;&nbsp;
                                            <label for="deactive" className='fw-bold py-2'>Deactive</label>

                                        </div>
                                        <input type="submit" className="btn btn-primary fw-bold " value={(params.course_id == undefined) ? 'Submit' : 'Update'}/>
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
