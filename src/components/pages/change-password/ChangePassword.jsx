import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChangePassword() {
    // toast("Wow so easy!")

    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                        <form>
                            <ToastContainer />
                            <h1 className='fw-bold pb-5 text-danger'>Admin Change Password</h1>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className='fw-bold pb-2'>Old Password</label>
                                <input type="text" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold pb-2'>New Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold pb-2'>Confirmed Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                            </div>
                            <button type="submit" className="btn btn-success fw-bold ">Update Password</button>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}
