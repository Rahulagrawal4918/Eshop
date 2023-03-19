import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUser, getUser } from '../Store/ActionCreators/UserActionCreators'
import '../assets/css/updateprofilecss.css'
export default function UpdateProfile() {
    var [data, setdata] = useState({
        name: "",
        pic: "",
        email: "",
        phone: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        pin: "",
        city: "",
        state: ""
    })
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var user = useSelector((state) => state.UserStateData)


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

    function getFile(e) {
        var name = e.target.name
        console.log(e.target.files);
        var value = e.target.files[0].name
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postdata(e) {
        e.preventDefault()
        var userData = {
            id: data.id,
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

        dispatch(updateUser(userData))
        navigate('/profile')
    }


    useEffect(() => {
        dispatch(getUser())
        var d = user.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (d)
            setdata(d)
        console.log(data);
    }, [])

    return (
        <>
            <div className="hero-wrap hero-bread" >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">

                        <div className="container-fluid w-100">
                            <div className="m-auto" style={{ width: '75%' }}>
                                <h5 className='bg-secondary text-center text-light py-2'>Signup Section</h5>

                                <form onSubmit={postdata}>
                                    <div className="row mb-3">
                                        <div className=" col-md-6 col-12">
                                            <input type="text" name='name' onChange={getdata} value={data.name} placeholder='Enter full name :' className='form-control ' required />
                                        </div>
                                        <div className="col-md-6 col-12 ">
                                            <input type="email" name='email' onChange={getdata} value={data.email} placeholder='Enter Email Address :' className='form-control ' required />
                                        </div>

                                    </div>
                                    <div className="row mb-3">
                                        <div className=" col-md-6 col-12">
                                            <input type="text" name='phone' onChange={getdata} value={data.phone} placeholder='Enter phone  number :' className='form-control ' required />
                                        </div>
                                        <div className=" col-md-6 col-12">
                                            <input type="text" name='addressline1' onChange={getdata} value={data.addressline1} placeholder='Enter House No/Bulding No / Block :' className='form-control ' required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6 col-12 ">
                                            <input type="text" name='addressline2' onChange={getdata} value={data.addressline2} placeholder='Enter Locality/streat/Landmark :' className='form-control ' required />
                                        </div>
                                        <div className="col-md-6 col-12 ">
                                            <input type="text" name='addressline3' onChange={getdata} value={data.addressline3} placeholder='Enter district / post Office :' className='form-control ' required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6 col-12 ">
                                            <input type="number" name='pin' onChange={getdata} value={data.pin} placeholder='Enter Pin :' className='form-control ' required />
                                        </div>
                                        <div className="col-md-6 col-12 ">
                                            <input type="text" name='city' onChange={getdata} value={data.city} placeholder='Enter City :' className='form-control ' required />
                                        </div>
                                    </div>
                                    <div className="row mb-3 ">
                                        <div className="col-md-6 col-12 ">
                                            <input type="text" name='state' onChange={getdata} value={data.state} placeholder='Enter State :' className='form-control ' required />
                                        </div>
                                        <div className="filemodal col-md-6 col-12">

                                            <div className="filecontent">
                                                <span className="filetitle">Upload Profile Pic</span>
                                                {/* <p className="filemessage">Select a file to upload from your computer or device.</p> */}

                                                <div className="fileactions">
                                                    <label htmlFor="file" className="filebutton fileupload-btn">Choose File
                                                        <input hidden="" name='pic' type="file" id="filepic" onChange={getFile} />
                                                    </label>
                                                </div>

                                                {data.pic ? <div className="fileresult">
                                                    <div className="file-uploaded"><p>{data.pic}</p></div>
                                                </div> : null}
                                            </div>
                                        </div>


                                    </div>
                                    <div className="mb-3">
                                        <button type='submit' className='btn btn-lg bg-secondary w-100 text-light' >Update</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}