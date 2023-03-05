import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    var [data, setdata] = useState({
        fname: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        cpassword: ""
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
            alert(`
        full name   :  ${data.fname}
        username    :  ${data.username}
        phone       :  ${data.phone}
        email       :  ${data.email}
        password    :  ${data.password}
        cpassword   :  ${data.cpassword}
        `)
        }
        else {
            alert("password and confirm password doesn't matched ")
        }
    }


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
                                            <input type="text" name='fname' onChange={getdata} placeholder='Enter full name :' className='form-control ' required />
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
                                            <input type="text" name='password' onChange={getdata} placeholder='Enter password :' className='form-control ' required />
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