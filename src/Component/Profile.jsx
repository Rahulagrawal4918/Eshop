
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'

// import { getUser } from "../Store/ActionCreators/UserActionCreators"

// export default function Profile() {
//     var users = useSelector((state) => state.UserStateData)
//     var [user, setuser] = useState({})
//     var dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(getUser())
//         var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
//         if (data)
//             setuser(data)
//     }, [])
//     return (
//         <div className='container-fluid my-5'>
//             <div className="row">
//                 <div className="col-md-6">
//                     {
//                         user.pic ?
//                             <img src={`/assets/productimages/${user.pic}`} height="520px" width="100%" alt="" /> :
//                             <img src={`/assets/images/noimage.png`} height="520px" width="100%" alt="" />
//                     }
//                 </div>
//                 <div className="col-md-6">
//                     <h5 className='text-center bg-secondary text-light'>Buyer Profile</h5>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">Name</div>
//                         <div className="second p-2 border w-50">{user.name}</div>
//                     </div>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">User Name</div>
//                         <div className="second p-2 border w-50">{user.username}</div>
//                     </div>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">Email</div>
//                         <div className="second p-2 border w-50">{user.email}</div>
//                     </div>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">Phone Number</div>
//                         <div className="second p-2 border w-50">{user.phone}</div>
//                     </div>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">Address Line1</div>
//                         <div className="second p-2 border w-50">{user.addressline1}</div>
//                     </div>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">Address Line1</div>
//                         <div className="second p-2 border w-50">{user.addressline2}</div>
//                     </div>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">Address Line1</div>
//                         <div className="second p-2 border w-50">{user.addressline3}</div>
//                     </div>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">Pin</div>
//                         <div className="second p-2 border w-50">{user.pin}</div>
//                     </div>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">City</div>
//                         <div className="second p-2 border w-50">{user.city}</div>
//                     </div>
//                     <div className='d-flex'>
//                         <div className="first p-2 border w-50">State</div>
//                         <div className="second p-2 border w-50">{user.state}</div>
//                     </div>
//                     <div>
//                         <Link to="/update-profile" className='btn btn-secondary w-100'>Update Profile</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }







import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser } from '../Store/ActionCreators/UserActionCreators'


export default function Profile() {

    var dispatch = useDispatch()
    var users = useSelector((state) => state.UserStateData)
    var [user, setuser] = useState({})

    useEffect(() => {
        dispatch(getUser())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setuser(data)

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
                        <div className='border py-2 pl-2 w-50 '>{user.username}</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>Phone</div>
                        <div className='border py-2 pl-2 w-50 '>{user.phone}</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>Email</div>
                        <div className='border py-2 pl-2 w-50 '>{user.email}</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>"addressline1</div>
                        <div className='border py-2 pl-2 w-50 '>{user.addressline1}</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>"addressline2</div>
                        <div className='border py-2 pl-2 w-50 '>{user.addressline1}</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>"addressline2</div>
                        <div className='border py-2 pl-2 w-50 '>{user.addressline1}</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>pin</div>
                        <div className='border py-2 pl-2 w-50 '>{user.pin}</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>state</div>
                        <div className='border py-2 pl-2 w-50 '>{user.state}</div>
                    </div>
                    <div className="admin-table d-flex ">
                        <div className='border py-2 pl-2 w-50 '>Role</div>
                        <div className='border py-2 pl-2 w-50 '>{user.role}</div>
                    </div>
                    <div className="admin-table ">
                        <Link to="/update-profile" className='btn w-100 text-light bg-secondary mt-3'>Update</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


