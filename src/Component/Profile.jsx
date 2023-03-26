
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
                {user.pic ? <div className="col-md-6 px-5">
                    <a href={`/assets/images/${user.pic}`} target="_blank"><img src={`/assets/images/${user.pic}`} alt="profile pic" height='540px' className='w-100 ' />
                    </a>
                </div> : <div className="col-md-6 px-4">
                    <a href='/assets/images/noimage.png' target="_blank"> <img src='/assets/images/noimage.png' alt="profile pic" height='540px' className='w-100 ' />
                    </a>
                </div>

                }
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


