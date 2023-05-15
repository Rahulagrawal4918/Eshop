import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addContact } from '../Store/ActionCreators/ContactActionCreators'

export default function Contact() {
    var dispatch = useDispatch()
    var [data, setdata] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        status: 'active'
    })
    var [show, setshow] = useState(false)
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

        var item = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
            status: data.status,
            time: new Date()

        }
        dispatch(addContact(item))
        setshow(true)
        setdata({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        })

    }

    return (
        <>
            <section className="ftco-section contact-section bg-light">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="w-100"></div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Address:</span> 198 West 21th Street, Suite 721 New Delhi - 110093</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Phone:</span> <a href="tel://1234567920">+91 7852862759</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@eshopper.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Website</span> <a href="#">www.eshopper.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 order-md-last ">
                            {show ? <div class="alert text-center alert-success alert-dismissible fade show" role="alert">
                                <strong>Submitted!!</strong> Thank You For Contact Us!! Our Team Will Contact You Soon!!
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div> : ''}
                            <form onSubmit={postdata} className="bg-white p-4 contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" name='name' value={data.name} required onChange={getdata} placeholder="Enter Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name='email' value={data.email} required onChange={getdata} placeholder="Enter Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name='phone' value={data.phone} required onChange={getdata} placeholder="Enter Your Phone" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name='subject' value={data.subject} required onChange={getdata} placeholder=" Enter Subject..." />
                                </div>
                                <div className="form-group">
                                    <textarea rows="7" className="form-control" name='message' value={data.message} required onChange={getdata} placeholder="Message..."></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn w-100 btn-secondary py-3 px-5" >Submit </button>
                                </div>
                            </form>

                        </div>

                        <div className="col-md-6 d-flex">
                            <div id="map" className="bg-white">
                                <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="570px" id="gmap_canvas" src="https://maps.google.com/maps?q=b-4/22%20shahbad%20dairy&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
