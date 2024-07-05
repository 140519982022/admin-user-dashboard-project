import React, { useState } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import axios, { toFormData } from 'axios'

export default function AddCourse() {

    const [formData, setFormData] = useState({

        course_name: '',
        price: '',
        duration: '',
        description: '',
        images: '',
        status: ''

    });

    let formDataStore = (event) => {

    //    let course_name: event.target.course_name;
    //    let price: event.target.price;
    //    let duration: event.target.duration;
    //    let description: event.target.description;
    //    let images: event.target.images;
    //    let status: event.target.status;

        let inputName = event.target.name;
        let inputValue = event.target.value;

        console.log(inputName);
        console.log(inputValue);

        let object = { ...formData };

        object[inputName] = inputValue;

        setFormData(object);

    }


    let saveFomeData = (event) => {
        // alert("hihih");


        event.preventDefault();
        console.log(formData);

        axios.post(`http://localhost:4000/api/backend/categories/add`, toFormData(formData))
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
                                {/* <div className=''> */}
                                {/* <div className='container'> */}
                                <div className='w-100 mx-auto  m-3 shadow-lg p-5 bg-body rounded border'>
                                    <form onSubmit={saveFomeData}>
                                        {/* <h1 className='fw-bold pb-5 text-danger'>Add course</h1> */}
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className='fw-bold py-3'>Course Name</label>
                                            <input type="text" name='course_name' className="form-control mb-3" aria-describedby="emailHelp" placeholder="Enter course name" value={formData.course_name} onChange={formDataStore} />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1" className='fw-bold py-3'>Course Price</label>
                                            <input type="text" name='price' className="form-control" placeholder="enter course price" value={formData.price} onChange={formDataStore}/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1" className='fw-bold py-3'>Course Duration</label>
                                            <input type="text" name='duration' className="form-control" placeholder="enter course duration" value={formData.duration} onChange={formDataStore}/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1" className='fw-bold py-3'>Course Description</label>
                                            <textarea name="description" className="form-control" rows={3} placeholder='enter course desciption' value={formData.description} onChange={formDataStore}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className='fw-bold py-3'>Course Image</label>
                                            <input type="file" name='images' className="form-control mb-3" aria-describedby="emailHelp" placeholder="select logo" value={formData.images} onChange={formDataStore} />
                                        </div>
                                        <div className="form-group pb-5">
                                            <label for="exampleInputEmail1" className='fw-bold py-3'>Course Status</label> <br />
                                            <input type="radio" name="status" /> &nbsp;&nbsp;&nbsp;
                                            <label for="active" className='fw-bold py-2' value={formData.status} onChange={formDataStore}>Active</label>&nbsp;&nbsp;&nbsp;

                                            <input type="radio" name="status" />&nbsp;&nbsp;&nbsp;
                                            <label for="deactive" className='fw-bold py-2' value={formData.status} onChange={formDataStore}>Deactive</label>

                                        </div>
                                        <button type="submit" className="btn btn-primary fw-bold ">Submit</button>
                                        <button type="button" className="btn btn-warning fw-bold ms-5">Cancel</button>
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
