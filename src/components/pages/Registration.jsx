import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {

    // toast("Wow so easy!")
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                        <form onSubmit="">
                            <ToastContainer />
                            <h1 className='fw-bold pb-5 text-success'>Admin Register Here</h1>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className='fw-bold pb-2'>Email address</label>
                                <input type="email" name='email' className="form-control mb-3"  aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold pb-2'>Password</label>
                                <input type="password" name='password' className="form-control"  placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                            </div>
                            <button type="submit" className="btn btn-success fw-bold form-control mb-3">Register</button>
                            <Link to={'/'}>I have already account</Link>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
