import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainContext } from '../../contextFile/ContextProvider'

export default function AddVideos() {
    let [submitForm, setSubmitForm] = useState(false)
    let [fetchCourseCategory, setFetchCourseCategory] = useState([])
    let navigator = useNavigate()
    let {formStatus,setFormStatus,formUpdate, setFormUpdate} = useContext(MainContext)
    let params = useParams();
    let[input,setInput] = useState({
        video_category : "",
        video_topic : "",
        video_link : "",
        video_status : ""
    })

    // console.log(params.video_id)

    useEffect(()=>{
        if(params.video_id != undefined){
            axios.post('http://localhost:8000/api/backend/videos/detail/'+params.video_id).then((result)=>{
                setInput({
                    video_category : result.data.data.category_id,
                    video_topic : result.data.data.topic,
                    video_link : result.data.data.link,
                    video_status : result.data.data.status
                })
            }).catch((error)=>{
                toast.error('somthing went wrong')
            })

        }
    },[]);

    let saveFormeData = (event) => {
        // alert("hihih");
        event.preventDefault();

        if (event.target.video_status.value == '') {
            var status = 1;
        } else {
            var status = event.target.video_status.value;
        }

        let formData = {
            category_id: event.target.video_category.value,
            topic: event.target.video_topic.value,
            link: event.target.video_link.value,
            status: status,
        }

        console.log(formData)
        if (params.video_id == undefined) {

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
                // console.log('There was an error!', error);
                toast.error("spmthing went wrong")

            });
        }else{
            // console.log("defined id 2222222222222")

            // console.log(params.video_id)
            formData.id = params.video_id

            // console.log(formData)

            axios.put('http://localhost:8000/api/backend/videos/update', formData)
            .then(result => {
                // console.log(result)
                if (result.data.status == true) {
                    console.log("update successfully")

                    setSubmitForm(true)
                   
                    setFormUpdate(
                        {
                            status : true,
                            message : result.data.message
                        }
                    )
                    
                }else{
                    // setSubmitForm(false)
                    console.log("cant update")

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



    let inputHandeler = (event) => {
        
        let data = {...input}

        data[event.target.name] = event.target.value

        setInput(data)
    }

    useEffect(() => {
        if (submitForm == true) {
            navigator('/view-videos')
        }
    }, [submitForm])

    // call http://localhost:8000/api/backend/videos/course-category this api
    useEffect(() => {
        fetchCourseCategories()
    }, [])

    console.log(fetchCourseCategory)

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
                                        <div class="mb-3">
                                            <label className='fw-bold py-3'>Course Category</label>
                                            <select name='video_category' className="form-control mb-3">
                                                <option  >Select video category</option>
                                                {fetchCourseCategory.length > 0 ? (
                                                    fetchCourseCategory.map((courseCategory, index) => (
                                                        <option key={index} value={courseCategory._id} onChange={inputHandeler} selected={(input.video_category == courseCategory._id)? 'selected' : '' }>
                                                            {(courseCategory.status) ? courseCategory.name : "This Course Category Is Deactivated"}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option>No categories available</option>
                                                )}
                                            </select>

                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Video Topic</label>
                                            <input type="text" name='video_topic' className="form-control" placeholder="enter video topic" value={input.video_topic} onChange={inputHandeler}/>
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Video Link</label>
                                            <input type="text" name='video_link' className="form-control" placeholder="enter video link" value={input.video_link} onChange={inputHandeler}/>
                                        </div>
                                        <div className="form-group pb-5">
                                            <label className='fw-bold py-3'>Video Status</label> <br />
                                            <input type="radio" name="video_status" value={1} checked={(input.video_status == 1 ? 'checked' : '')} onChange={inputHandeler}/> &nbsp;&nbsp;&nbsp;
                                            <label for="active" className='fw-bold py-2'>Active</label>&nbsp;&nbsp;&nbsp;
                                            <input type="radio" name="video_status" value={0} checked={(input.video_status == 0 ? 'checked' : '')} onChange={inputHandeler}/>&nbsp;&nbsp;&nbsp;
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
