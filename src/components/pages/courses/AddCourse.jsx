import React, { useState } from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';
import axios from 'axios';

export default function AddCourse() {
    const [formData, setFormData] = useState({
        course_name: '',
        price: '',
        duration: '',
        description: '',
        images: null,
        status: ''
    });

    let formDataStore = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.type === 'file' ? event.target.files[0] : event.target.value;

        let object = { ...formData };
        object[inputName] = inputValue;
        setFormData(object);
    }

    let saveFormData = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('course_name', formData.course_name);
        data.append('price', formData.price);
        data.append('duration', formData.duration);
        data.append('description', formData.description);
        data.append('images', formData.images);
        data.append('status', formData.status);

        axios.post(`http://localhost:4000/api/backend/categories/add`, data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('There was an error!', error);
            });
    }

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
                                <div className='w-100 mx-auto m-3 shadow-lg p-5 bg-body rounded border'>
                                    <form onSubmit={saveFormData}>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Name</label>
                                            <input type="text" name='course_name' className="form-control mb-3" placeholder="Enter course name" value={formData.course_name} onChange={formDataStore} />
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Price</label>
                                            <input type="text" name='price' className="form-control" placeholder="Enter course price" value={formData.price} onChange={formDataStore} />
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Duration</label>
                                            <input type="text" name='duration' className="form-control" placeholder="Enter course duration" value={formData.duration} onChange={formDataStore} />
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Description</label>
                                            <textarea name="description" className="form-control" rows={3} placeholder='Enter course description' value={formData.description} onChange={formDataStore}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label className='fw-bold py-3'>Course Image</label>
                                            <input type="file" name='images' className="form-control mb-3" onChange={formDataStore} />
                                        </div>
                                        <div className="form-group pb-5">
                                            <label className='fw-bold py-3'>Course Status</label> <br />
                                            <input type="radio" name="status" value="active" onChange={formDataStore} /> &nbsp;&nbsp;&nbsp;
                                            <label className='fw-bold py-2'>Active</label>&nbsp;&nbsp;&nbsp;

                                            <input type="radio" name="status" value="deactive" onChange={formDataStore} />&nbsp;&nbsp;&nbsp;
                                            <label className='fw-bold py-2'>Deactive</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary fw-bold">Submit</button>
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
    );
}
