import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser } from '../Store/ActionCreators/UserActionCreators'
import { getCart } from '../Store/ActionCreators/CartActionCreators'

export default function Checkout() {
    var dispatch = useDispatch()
    var users = useSelector((state) => state.UserStateData)
    var carts = useSelector((state) => state.CartStateData)
    var [user, setuser] = useState({})
    var [cart, setcart] = useState([])
    var [total, settotal] = useState(0)
    var [final, setfinal] = useState(0)
    var [disscount, setdisscount] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [mode, setmode] = useState('COD')

    function placeOrder() {
        var item = {
            userid: localStorage.getItem('userid'),
            paymentmode: mode,
            paymentstatus: 'pending',
            orderstatus: 'Order Placed',
            time: new Date(),
            totalAmount: total,
            finalAmount: final,
            shippingAmount: shipping,
            disscountAmount: disscount,
            products : cart

        }
        dispatch()
    }

    function payMode(data) {
        setmode(data)
    }

    function getAPIData() {
        dispatch(getUser())
        dispatch(getCart())
        var data = users.find((item) => item.id === Number(localStorage.getItem("userid")))
        if (data)
            setuser(data)


        var data = carts.filter((item) => item.userid === localStorage.getItem('userid'))
        if (data) {
            setcart(data)
            var total = 0
            var final = 0
            var price = 0
            var baseprice = 0
            var shipping = 0
            for (let item of data) {
                total = total + item.total
                baseprice += item.baseprice
                price += item.price
            }
            if (total > 0 && total <= 1000)
                shipping = 150
            final += total
            settotal(total)
            setfinal(final)
            setshipping(shipping)
            var dis = parseInt((baseprice - price))
            setdisscount(dis)
        }

    }

    useEffect(() => {
        getAPIData()

    }, [users.length, carts.length])
    return (
        <>
            <section className="ftco-section">
                <div className="container">

                    <div className="row  mb-3   d-flex  justify-content-center">
                        <div className="col-lg-6 col-12   ftco-animate">
                            <h3 className='text-center text-light bg-secondary w-100 '>User Profile</h3>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50 '>Name</div>
                                <div className='border py-3 px-3 w-50 text-break'>{user.name}</div>
                            </div>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50 '>Username</div>
                                <div className='border py-3 px-3 w-50 text-wrap'>{user.username}</div>
                            </div>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50 '>Phone</div>
                                <div className='border py-3 px-3 w-50 text-wrap '>{user.phone}</div>
                            </div>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50 '>Email</div>
                                <div className='border py-3 px-3 w-50 text-break'>{user.email}</div>
                            </div>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50 '>"addressline1</div>
                                <div className='border py-3 px-3 w-50 text-wrap '>{user.addressline1}</div>
                            </div>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50'>"addressline2</div>
                                <div className='border py-3 px-3 w-50 text-wrap'>{user.addressline1}</div>
                            </div>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50 '>"addressline2</div>
                                <div className='border py-3 px-3 w-50 text-wrap '>{user.addressline1}</div>
                            </div>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50 '>pin</div>
                                <div className='border py-3 px-3 w-50 '>{user.pin}</div>
                            </div>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50 '>state</div>
                                <div className='border py-3 px-3 w-50 '>{user.state}</div>
                            </div>
                            <div className="admin-table d-flex ">
                                <div className='border py-3 px-3 w-50 '>Role</div>
                                <div className='border py-3 px-3 w-50 '>{user.role}</div>
                            </div>
                        </div>

                        <div className="col-lg-6 ftco-animate">
                            <div className="cart-detail cart-total bg-light  ">
                                <h3 className="billing-heading mb-4">Cart Total</h3>
                                <p className="d-flex">
                                    <span>Subtotal {`( Item : ${cart.length})`}</span>
                                    <span>&#8377;{total}</span>
                                </p>
                                <p className="d-flex">
                                    <span>Shipping Charge</span>
                                    {shipping !== 0 ? <span> &#8377;{shipping}</span> : <span> Free</span>}
                                </p>
                                <p className="d-flex">
                                    <span>disscount</span>
                                    <span> &#8377;{disscount}</span>
                                </p>
                                <hr />
                                <p className="d-flex total-price">
                                    <span>Total Amount</span>
                                    <span> &#8377;{final}</span>
                                </p>
                            </div>

                            <div className="cart-detail bg-light p-3 p-md-4">
                                <h3 className="billing-heading mb-4">Payment Method</h3>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <label><input type="radio" onChange={() => payMode('netBanking')} name="optradio" class Name="mr-2" value='upi' />Net Banking/UPI/Cards</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <label><input type="radio" onChange={() => payMode('COD')} name="optradio" className="mr-2" defaultChecked value='cod' /> Cash On Delevery</label>
                                        </div>
                                    </div>
                                </div>

                                <p><button className="btn btn-success w-100 py-3 px-4" onClick={placeOrder}>Place an order</button></p>
                                <div className="form-group mt-5">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <p className='text-success h5'>You Will Save  &#8377;{disscount} On This Order!!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center mb-3">
                        <span className='text-center m-auto border-bottom  border-5  h2 '>Cart Details</span>
                    </div>
                    <div className="row  mb-3">
                        {
                            cart.map((item, index) => {
                                return <div key={index} className="row   float-left w-50  border-bottom">

                                    <div className="col-lg-3">
                                        <img src={`/assets/productimages/${item.pic}`} className='' width='100%' height='100' alt="img" />
                                    </div>
                                    <div className="col-lg-9 ">
                                        <h5>{item.name}</h5>

                                        {/* <span><b>{item.color} </b>/<b>{item.size}</b> &nbsp;  &nbsp; </span> <strong>{item.stock}</strong> */}

                                        <p className="price   mb-0 price-sale"> <strong >  <span className="mr-1 price-dc"><del> &#8377;{item.baseprice} </del></span><span className="price-sale"> &#8377;{item.price} </span> <span className="price-sale text-success"> <sup> {item.disscount}% off </sup> </span> </strong></p>
                                        <p>Quantity : {item.qty}</p>
                                        {/* <h6 className='p-0 m-0 price-sale '><strong>Total Price :  {item.total}</strong></h6> */}
                                        {/* <button className='btn-danger mt-3 ' onClick={() => deleteCartItem(item.id)}>REMOVE</button> */}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div >
            </section >
        </>
    )
}
