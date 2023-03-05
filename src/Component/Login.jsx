import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    var [data, setdata] = useState({
        username: "",
        password: ""
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
        alert(`
            username : ${data.username}
            password : ${data.password}
            `)
    }


    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">

                        <div className="container-fluid w-100">
                            <div className="m-auto" style={{ width: '75%' }}>
                                <h5 className='bg-secondary text-center text-light py-2'>Login Section</h5>

                                <form onSubmit={postdata}>
                                    <div className="mb-3">
                                        <input type="text" name='username' onChange={getdata} placeholder='Enter Username :' className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name='password' onChange={getdata} placeholder='Enter Password :' className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <button type='submit' className='btn btn-lg bg-secondary w-100 text-light' >Login</button>
                                    </div>
                                </form>
                                <div className="mb-3 d-flex justify-content-between">
                                    <Link to='#' className='text-dark'>Forget Password </Link>
                                    <Link to='/signup' className='text-dark'>New User? Create a free account</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
