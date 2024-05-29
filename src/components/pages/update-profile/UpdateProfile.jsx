import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateProfile() {
    // toast("Wow so easy!")

    return (
        <>

            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                        <form>
                            <ToastContainer />
                            <h1 className='fw-bold pb-5 text-danger'>Update Profile</h1>
                            <div className="form-group">
                                <label  for="exampleInputEmail1" className='fw-bold py-2'>Select Logo</label>
                                <input type="file" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="select logo" />
                            </div>
                            <div className="form-group">
                                <label  for="exampleInputPassword1" className='fw-bold py-2'>Phone Number</label>
                                <input type="number" className="form-control" id="exampleInputPassword1" placeholder="enter number" />
                            </div>
                            <div className="form-group">
                                <label  for="exampleInputPassword1" className='fw-bold py-2'>Email</label>
                                <input type="email" className="form-control" id="exampleInputPassword1" placeholder="enter email" />
                            </div>
                            <div className="form-group">
                                <label  for="exampleInputPassword1" className='fw-bold py-2'>Address</label>
                                <textarea name="" className="form-control" id=""rows={3} placeholder='enter address'></textarea>
                            </div>
                            <div className="form-group form-check">
                            </div>
                            <button type="submit" className="btn btn-success fw-bold ">Update Profile</button>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}
