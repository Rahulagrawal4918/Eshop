import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser, getUser } from '../Store/ActionCreators/UserActionCreators'

export default function Profile() {
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var user = useSelector((state) => state.UserStateData)
 

    // function getAPIData() {
    //     // console.log(users);

    //     dispatch(getUser())

       
    // }

    useEffect(() => {
        dispatch(getUser())
        console.log(user);
    }, [])

    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="/assets/images/noimage.png" alt="profile pic" height='540px' className='w-100 ' />
                </div>
                <div className="col-md-6">
                    <h3 className='text-center text-light bg-secondary w-100 '>User Profile</h3>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>Name</div>
                        <div className='border py-2 pl-2 w-50 '>{user.name}</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>Username</div>
                        <div className='border py-2 pl-2 w-50 '>rahul_agrawal7773</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>Phone</div>
                        <div className='border py-2 pl-2 w-50 '>7852862759</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>Email</div>
                        <div className='border py-2 pl-2 w-50 '>admin@eshopper.com</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>"addressline1</div>
                        <div className='border py-2 pl-2 w-50 '>B-4/22</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>"addressline2</div>
                        <div className='border py-2 pl-2 w-50 '>Shahbad dairy</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>"addressline2</div>
                        <div className='border py-2 pl-2 w-50 '>North-West Delhi</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>pin</div>
                        <div className='border py-2 pl-2 w-50 '>110042</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>state</div>
                        <div className='border py-2 pl-2 w-50 '>Delhi</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>Role</div>
                        <div className='border py-2 pl-2 w-50 '>User</div>
                    </div>





                    <div className="admin-table ">
                        <Link to="/update-profile" className='btn w-100 text-light bg-secondary mt-3'>Update</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
