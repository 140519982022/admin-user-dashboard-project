import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';

export default function UpdateProfile() {
    // toast("Wow so easy!")
    return (
        <>
            <div className='container-fluid'>
                <div className='dashboard-wrapper'>
                    <Sidebar />
                    <div className='main-content'>
                        <Header />
                        <div className="p-5">
                        <h1 className='fw-bold text-danger'>Update Profile</h1>
                        <div className='container'>
                            <div className='w-100 mx-auto p-5 m-5 shadow-lg bg-body rounded border'>
                                <form>
                                    <ToastContainer />
                                    <div className="form-group">
                                        <label for="exampleInputEmail1" className='fw-bold py-3'>Select Logo</label>
                                        <input type="file" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="select logo" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1" className='fw-bold py-3'>Phone Number</label>
                                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="enter number" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1" className='fw-bold py-3'>Email</label>
                                        <input type="email" className="form-control" id="exampleInputPassword1" placeholder="enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1" className='fw-bold py-3'>Address</label>
                                        <textarea name="" className="form-control" id="" rows={3} placeholder='enter address'></textarea>
                                    </div>
                                    <div className="form-group form-check">
                                    </div>
                                    <button type="submit" className="btn btn-success fw-bold ">Update Profile</button>

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
