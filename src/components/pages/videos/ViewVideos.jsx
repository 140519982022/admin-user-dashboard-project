import React, { useContext, useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';
import axios from 'axios';
import { MainContext } from '../../contextFile/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewVideos() {
    let [allVideo, setAllVideo] = useState([])
    let {formStatus,setFormStatus,formUpdate, setFormUpdate} = useContext(MainContext)
    let [changeStatusValue, setChangeStatusValue] = useState(false)


    useEffect(()=>{
        if (formStatus.status == true ) {
            // setFormUpdate(
            //     {
            //         status:false,
            //         message: ""
            //     }
            // )
            // if (formUpdate.status == false) {
                
                toast.success(formStatus.message)
            // }
            
        }
        
    },[formStatus])


    let getAllDetails = () => {
        axios.post(`http://localhost:8000/api/backend/videos/view`)
        .then((response) => {
            console.log(response.data.data)
            setAllVideo(response.data.data) // Set only the data array
        })
        .catch((error) => {
            console.error("There was an error fetching the data!", error);
        });
    }

    let changeStatus = (id,status)=>{

        const data = {
            id:id,
            status: !status
        }

        axios.put('http://localhost:8000/api/backend/videos/change-status',data).then(
            (result)=>{
                if (result.data.status == true) {

                    toast.success(result.data.message)
                   
                    setChangeStatusValue(!changeStatusValue)
                    
                }else{
                    toast.error(result.data.message)

                }

        }).catch(
            ()=>{
                toast.error('somthing went wrong')


            }
        )
    }

    useEffect(() => {
        getAllDetails()
    }, [changeStatusValue])

    // console.log(allVideo);

    return (
        <>
            <div className='container-fluid'>
                <div className='dashboard-wrapper'>
                    <Sidebar />
                    <div className='main-content'>
                        <Header />
                        <div className="p-5">
                            <div className='d-flex justify-content-between py-3 w-75'>
                                <h5 className='text-capitalize text-dark fw-bolder'>
                                    Welcome To View Video's Table
                                </h5>
                                {/* <div class="d-flex" role="search">
                                    <input className="form-control me-2 position-relative" type="search" placeholder="Search Mockups Logos.." aria-label="Search" />
                                    <CiSearch className='position-absolute m-1 fs-3' />
                                </div> */}
                                <div class=" mb-3 d-flex" role="search">
                                <span class="input-group-text" id="basic-addon1"><CiSearch className=' m-1 fs-3' /></span>
                                <input type="search" class="form-control" placeholder="Search Mockups Logos.." aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            </div>

                            <button type="button" class="btn btn-outline-dark my-3 rounded-pill">All Courses Videos</button>

                            <div className='container'>
                            <ToastContainer />

                                <div className='w-70 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                                    <table class="table mt-5 table-bordered border-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.no</th>
                                                <th scope="col">Course Category</th>
                                                
                                                <th scope="col">Video Topic</th>
                                                <th scope="col">Video Link</th>
                                                <th scope="col">Status</th>
                                                <th scope="col"><button className='badge bg-danger text-white me-2'>Delete</button>
                                                </th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allVideo.length > 0 ? (
                                                allVideo.map((video, index) => (
                                                    <tr key={video._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{video.category}</td>
                                                        <td>{video.topic}</td>
                                                        <td>{video.link}</td>
                                                        {/* <td>
                                                            <span
                                                                className={`badge ${video.status === true ? 'text-bg-warning' : 'text-bg-danger'
                                                                    } text-white`}
                                                            >
                                                                {video.status === true ? 'Active' : 'Deactive'}
                                                            </span>

                                                        </td> */}
                                                        <td>

                                                            <span
                                                                className={`badge ${video.status === true ? 'text-bg-success px-3' : 'text-bg-danger'
                                                                    } text-white`} onClick={ ()=>changeStatus(video._id,video.status)}
                                                            >
                                                                {video.status === true ? 'Active' : 'Deactive'}
                                                            </span>
                                                        </td>
                                                        <th scope="col">
                                                            <input type="checkbox" name="" />
                                                        </th>

                                                        <td>
                                                            {/* <button className='bg-danger text-white me-2 border border-0'>Delete</button> */}
                                                            <button className=' badge bg-primary text-white border border-0 px-3'>Edit</button>
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
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
