import React, { useEffect, useState } from 'react'
import { getCheckout } from '../../Store/ActionCreators/CheckoutActionCreators'
import { useDispatch, useSelector } from 'react-redux'

export default function MyOrder() {
    var dispatch = useDispatch()
    // var checkout = useSelector((state) => state.CheckoutStateData)
    var checkout = useSelector((state) => state.CheckoutStateData)
    var [orders, setorders] = useState([])
    function getAPIData() {
        dispatch(getCheckout())
        var data = checkout.filter((item) => item.userid === localStorage.getItem('userid'))
        data && setorders(data)
    }
    // console.log(checkout);
    useEffect(() => {
        getAPIData()
    }, [checkout.length])
    return (
        <>
            <div className="container-fluid my-5  ">
                <h1 className='text-center bg-primary w-100 mt-2 text-light'>Order History</h1>

                { orders.length?
                    orders.map((item, index) => {
                        return <div key={index} className="col-12 d-flex justify-content-center">

                            <div className="col-11 my-4 border">
                                <div className="row   p-4" >
                                    <div className="col-lg-3">
                                        <table className='mytable '>
                                            <tbody>
                                                <tr>
                                                    <th className='py-3 px-1'>Order ID</th>
                                                    <td className='p-1'>{item.id}</td>
                                                </tr>
                                                <tr>
                                                    <th className='py-3 px-1'>Payment Mode</th>
                                                    <td className='p-1'>{item.paymentmode}</td>
                                                </tr>
                                                <tr>
                                                    <th className='py-3 px-1'>Order Status</th>
                                                    <td className='p-1'>{item.orderstatus}</td>
                                                </tr>
                                                <tr>
                                                    <th className='py-3 px-1'>Payment Status</th>
                                                    <td className='p-1'>{item.paymentstatus}</td>
                                                </tr>
                                                <tr>
                                                    <th className='py-3 px-1'>Total Amount</th>
                                                    <td className='p-1'>&#8377;{item.totalAmount}</td>
                                                </tr>
                                                <tr>
                                                    <th className='py-3 px-1'>Shipping Amount</th>
                                                    <td className='p-1'>&#8377;{item.shippingAmount}</td>
                                                </tr>
                                                <tr>
                                                    <th className='py-3 px-1'>Final Amount</th>
                                                    <td className='p-1'>&#8377;{item.finalAmount}</td>
                                                </tr>
                                                <tr>
                                                    <th className='py-3 px-1'>Date</th>
                                                    <td className='p-1'>{item.time}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="table-responsive">
                                            <table className="mytable">
                                                <thead className="thead-primary">
                                                    <tr className="text-center">
                                                        <th className='py-3 px-1'>Product</th>
                                                        <th className='py-3 px-1'>Color</th>
                                                        <th className='py-3 px-1'>Size</th>
                                                        <th className='py-3 px-1'>Price</th>
                                                        <th className='py-3 px-1'>Qty</th>
                                                        <th className='py-3 px-1'>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        item.products.map((item, index) => {
                                                            return <tr key={index} className="text-center">
                                                                <td className="image-prod"><img src={`assets/productimages/${item.pic}`} height="75px" width="75px" className='rounded float-left' alt="" />{item.name}</td>
                                                                <td className="product-name">{item.color}</td>
                                                                <td className="product-name">{item.size}</td>
                                                                <td className="price">&#8377;{item.price}</td>
                                                                <td className="price">{item.qty}</td>
                                                                <td className="price">&#8377;{item.total}</td>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    }):
                    <h4 className='text-center mt-5 '>Order History Not Found!!  </h4>
                }



            </div>
        </>
    )
}
