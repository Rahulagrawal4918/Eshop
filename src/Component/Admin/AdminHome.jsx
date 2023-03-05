import React from 'react'
import { Link } from 'react-router-dom'
import LeftNav from './LeftNav'


export default function Admin() {
    return (
        <>
            <div className="contain-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav/>
                    </div>
                    <div className="col-lg-10 col-12">
                        <div className="row">
                            <div className=" col-md-5 mt-2 w-100 ">
                                <img src="assets/images/bg_1.jpg" height="400px" alt="img" />
                            </div>
                            <div className=" col-md-7">
                                <div className=" col-lg-12">
                                    <h4 className='text-center bg-secondary text-light  '>Admin Profile</h4>
                                    <div className="admin-table d-flex ">
                                        <div className='border py-3 pl-2 w-50 '>Name</div>
                                        <div className='border py-3 pl-2 w-50 '>Rahul</div>
                                    </div>
                                    <div className="admin-table d-flex ">
                                        <div className='border py-3 pl-2 w-50 '>User ID</div>
                                        <div className='border py-3 pl-2 w-50 '>rahul_agrawal7773</div>
                                    </div>
                                    <div className="admin-table d-flex ">
                                        <div className='border py-3 pl-2 w-50 '>Phone</div>
                                        <div className='border py-3 pl-2 w-50 '>7852862759</div>
                                    </div>
                                    <div className="admin-table d-flex ">
                                        <div className='border py-3 pl-2 w-50 '>Email</div>
                                        <div className='border py-3 pl-2 w-50 '>admin@eshopper.com</div>
                                    </div>
                                    <div className="admin-table d-flex ">
                                        <div className='border py-3 pl-2 w-50 '>Role</div>
                                        <div className='border py-3 pl-2 w-50 '>Admin</div>
                                    </div>
                                    <div className="admin-table d-flex ">
                                        <div className='border py-3 pl-2 w-50 '>Company Name</div>
                                        <div className='border py-3 pl-2 w-50 '>R.A trades</div>
                                    </div>


                                    <div className="admin-table ">
                                        <Link to="/" className='btn w-100 text-light bg-secondary mt-2'>Update</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </>
    )
}
