import React from 'react'

export default function AddCourse() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-70 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                        <form>
                            <h1 className='fw-bold pb-5 text-danger'>Add course</h1>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className='fw-bold pb-3'>Course Name</label>
                                <input type="text" className="form-control mb-3" aria-describedby="emailHelp" placeholder="Enter course name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold pb-3'>Course Price</label>
                                <input type="text" className="form-control" placeholder="enter course price" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold pb-3'>Course Duration</label>
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

                </div>

            </div>

        </>
    )
}
