
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser } from '../Store/ActionCreators/UserActionCreators'

import { deleteWishlist, getWishlist } from '../Store/ActionCreators/WishlistActionCreators'



export default function Profile() {

    var dispatch = useDispatch()
    var users = useSelector((state) => state.UserStateData)
    var wishlists = useSelector((state) => state.WishlistStateData)
    var [user, setuser] = useState({})
    var [wishlist, setwishlist] = useState([])

    function getAPIData() {
        dispatch(getUser())
        dispatch(getWishlist())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setuser(data)

        var wishdata = wishlists.filter((item) => item.userid === localStorage.getItem("userid"))
        console.log(wishdata);
        if (wishdata)
            setwishlist(wishdata)

    }

    function deleteWishlistitem(id) {
        dispatch(deleteWishlist({ id: id }))
        getAPIData()
    }
    useEffect(() => {
        getAPIData()

    }, [users.length, wishlists.length])

    return (
        <>
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


                <div className="row ">
                    <h1 className='text-center bg-secondary w-100 mt-2 text-light'>Wishlist</h1>

                    {
                        wishlist.length === 0 ? <h1>You Don't Have Any Wishlist Item</h1> :
                            wishlist.map((item, index) => {
                                return <div key={index} className="col-md-6 col-12 mt-3  border-bottom  mb-3 cart-row-bg " >

                                    <div className="row p-3 ">

                                        <div className="col-lg-3">
                                            <Link to={`/single-product/${item.productid}`}><img src={`/assets/productimages/${item.pic}`} className='' width='100%' height='200px' alt="img" />
                                            </Link>
                                        </div>
                                        <div className="col-lg-9 ">
                                            <h3> <Link to={`/single-product/${item.productid}`}> {item.name} </Link></h3>
                                            <span>{item.description}</span> <br />
                                            <span><b>{item.color} </b>/<b>{item.size}</b> &nbsp;  &nbsp; </span> <strong>{item.stock}</strong>
                                            <p className="price mt-1  mb-0 price-sale"> <strong >  <span className="mr-2 price-dc"><del> &#8377;{item.baseprice} </del></span><span className="price-sale"> &#8377;{item.price} </span> <span className="price-sale text-success"> <sup> {item.disscount}% off </sup> </span> </strong></p>
                                            <h5 className='p-0 m-0 price-sale '><strong>Total Price :  {item.total}</strong></h5>
                                            <button className='btn-danger mt-3 ' onClick={() => deleteWishlistitem(item.id)}>REMOVE</button>
                                        </div>
                                    </div>
                                </div>

                            })
                    }
                </div>
            </div>
        </>
    )
}


