import React from 'react'

export default function AddVideos() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-70 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                        <form>
                            <h1 className='fw-bold pb-5 text-danger'>Add Videos</h1>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className='fw-bold py-3'>Course Category</label>
                                <input type="text" className="form-control mb-3" aria-describedby="emailHelp" placeholder="Enter course category" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold py-3'>Video Topic</label>
                                <input type="text" className="form-control" placeholder="enter video topic" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold py-3'>Video Link</label>
                                <input type="text" className="form-control" placeholder="enter video link" />
                            </div>

                            <div className="form-group pb-5">
                                <label for="exampleInputEmail1" className='fw-bold py-3'>Video Status</label> <br />
                                <input type="radio" name="course_status" /> &nbsp;&nbsp;&nbsp;
                                <label for="active" className='fw-bold py-2'>Active</label>&nbsp;&nbsp;&nbsp;

                                <input type="radio" name="course_status" />&nbsp;&nbsp;&nbsp;
                                <label for="deactive" className='fw-bold py-2'>Deactive</label>

                            </div>
                            <button type="submit" className="btn btn-primary fw-bold ">Submit</button>
                            <button type="submit" className="btn btn-warning fw-bold ms-5">Cancel</button>

                        </form>

                    </div>

                </div>

            </div>


        </>
    )
}
