import React from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { CiSearch } from "react-icons/ci";


export default function AddSlides() {
    return (
        <>

            <div className='container-fluid'>
                <div className='dashboard-wrapper'>
                    <Sidebar />
                    <div className='main-content'>
                        <Header />
                        <div className='p-5'>
                        <h1 className='fw-bold text-danger'>Slider</h1>

<div className='container'>
    <div className=''>
        {/* <div className='container'> */}
        <div className='w-100 mx-auto  m-3 shadow-lg p-5 bg-body rounded border'>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1" className='fw-bold pb-3'>Slider Heading</label>
                    <input type="text" className="form-control mb-3" aria-describedby="emailHelp"
                        placeholder="Enter slider heading" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className='fw-bold pb-3'>Slider
                        Sub-Heading</label>
                    <input type="text" className="form-control"
                        placeholder="enter slider sub-heading" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className='fw-bold pb-3'>Slider Image</label>
                    <input type="file" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className='fw-bold py-3'>Slider
                        Description</label>
                    <textarea name="" className="form-control" rows={3}
                        placeholder='enter slider desciption'></textarea>
                </div>

                <div className="form-group pb-5">
                    <label for="exampleInputEmail1" className='fw-bold py-3'>Slider Status</label>
                    <br />
                    <input type="radio" name="course_status" /> &nbsp;&nbsp;&nbsp;
                    <label for="active" className='fw-bold py-2'>Active</label>&nbsp;&nbsp;&nbsp;

                    <input type="radio" name="course_status" />&nbsp;&nbsp;&nbsp;
                    <label for="deactive" className='fw-bold py-2'>Deactive</label>

                </div>
                <button type="submit" className="btn btn-primary fw-bold ">Submit</button>
                <button type="submit" className="btn btn-warning fw-bold ms-5">Cancel</button>
            </form>

        </div>


        {/* </div> */}

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
