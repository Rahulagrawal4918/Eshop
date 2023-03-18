import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser, getUser } from '../Store/ActionCreators/UserActionCreators'

export default function Signup() {
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var user = useSelector((state) => state.UserStateData)
    var [data, setdata] = useState({
        name: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        cpassword: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        pin: "",
        city: "",
        state: "",
        pic: "",
        role: "user"
    })

    function getdata(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    function postdata(e) {
        e.preventDefault()
        if (data.password === data.cpassword) {
            var alreadyAC = user.find((item) => item.username === data.username)
            if (alreadyAC)
                alert('User Name Already Taken!!! ')
            else {
                var userData = {
                    name: data.name,
                    username: data.username,
                    phone: data.phone,
                    email: data.email,
                    password: data.password,
                    addressline1: data.addressline1,
                    addressline2: data.addressline2,
                    addressline3: data.addressline2,
                    pin: data.pin,
                    city: data.city,
                    state: data.state,
                    pic: data.pic,
                    role: data.role
                }
                dispatch(addUser(userData))
                navigate('/login')
            }


        }
        else
            alert("password and confirm password doesn't matched ")

    }


    useEffect(() => {
        dispatch(getUser())
    }, [])

    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">

                        <div className="container-fluid w-100">
                            <div className="m-auto" style={{ width: '75%' }}>
                                <h5 className='bg-secondary text-center text-light py-2'>Signup Section</h5>

                                <form onSubmit={postdata}>
                                    <div className="row mb-3">
                                        <div className=" col-md-6 col-12">
                                            <input type="text" name='name' onChange={getdata} placeholder='Enter full name :' className='form-control ' required />
                                        </div>
                                        <div className="col-md-6 col-12 ">
                                            <input type="text" name='username' onChange={getdata} placeholder='Enter username :' className='form-control ' required />
                                        </div>

                                    </div>
                                    <div className="row mb-3">
                                        <div className=" col-md-6 col-12">
                                            <input type="text" name='phone' onChange={getdata} placeholder='Enter phone  number :' className='form-control ' required />
                                        </div>
                                        <div className="col-md-6 col-12 ">
                                            <input type="text" name='email' onChange={getdata} placeholder='Enter email address :' className='form-control ' required />
                                        </div>

                                    </div>
                                    <div className="row mb-3">
                                        <div className=" col-md-6 col-12">
                                            <input type="text" name='password' onChange={getdata} placeholder='Enter password :' className='form-control ' minLength={8} maxLength={25} required />
                                        </div>
                                        <div className="col-md-6 col-12 ">
                                            <input type="text" name='cpassword' onChange={getdata} placeholder='Enter confirm password :' className='form-control ' required />
                                        </div>

                                    </div>

                                    <div className="mb-3">
                                        <button type='submit' className='btn btn-lg bg-secondary w-100 text-light' >Signup</button>
                                    </div>
                                </form>
                                <div className="mb-3 text-center">

                                    <Link to='/login' className='text-dark'>already user? Login to your account</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}