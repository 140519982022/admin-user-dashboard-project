import React from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'

export default function AddCourse() {
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
    {/* <div className=''> */}
    {/* <div className='container'> */}
    <div className='w-100 mx-auto  m-3 shadow-lg p-5 bg-body rounded border'>
        <form>
            {/* <h1 className='fw-bold pb-5 text-danger'>Add course</h1> */}
            <div className="form-group">
                <label for="exampleInputEmail1" className='fw-bold py-3'>Course Name</label>
                <input type="text" className="form-control mb-3" aria-describedby="emailHelp" placeholder="Enter course name" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1" className='fw-bold py-3'>Course Price</label>
                <input type="text" className="form-control" placeholder="enter course price" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1" className='fw-bold py-3'>Course Duration</label>
                <input type="text" className="form-control" placeholder="enter course duration" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1" className='fw-bold py-3'>Course Description</label>
                <textarea name="" className="form-control" rows={3} placeholder='enter course desciption'></textarea>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1" className='fw-bold py-3'>Course Image</label>
                <input type="file" className="form-control mb-3" aria-describedby="emailHelp" placeholder="select logo" />
            </div>
            <div className="form-group pb-5">
                <label for="exampleInputEmail1" className='fw-bold py-3'>Course Status</label> <br />
                <input type="radio" name="course_status" /> &nbsp;&nbsp;&nbsp;
                <label for="active" className='fw-bold py-2'>Active</label>&nbsp;&nbsp;&nbsp;

                <input type="radio" name="course_status" />&nbsp;&nbsp;&nbsp;
                <label for="deactive" className='fw-bold py-2'>Deactive</label>

            </div>
            <button type="submit" className="btn btn-primary fw-bold ">Submit</button>
            <button type="submit" className="btn btn-warning fw-bold ms-5">Cancel</button>
        </form>

    </div>

    {/* </div>

    </div> */}
    <Footer />
</div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
