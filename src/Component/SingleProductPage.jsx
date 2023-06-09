import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct } from '../Store/ActionCreators/ProductActionCreators'
import { addCart, getCart } from '../Store/ActionCreators/CartActionCreators'

import { addWishlist, getWishlist } from '../Store/ActionCreators/WishlistActionCreators'

export default function SingleProduct() {
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var { id } = useParams()
    var [data, setdata] = useState({})
    var [qty, setqty] = useState(1)

    var product = useSelector((state) => state.ProductStateData)
    var cart = useSelector((state) => state.CartStateData)
    var wishlist = useSelector((state) => state.CartStateData)


    function postCartdata() {
        var cartitem = cart.find((item) => item.productid === data.id && item.userid === localStorage.getItem('userid'))

        if (cartitem) {
            navigate('/cart')
        }
        else {
            var item = {
                productid: data.id,
                userid: localStorage.getItem('userid'),
                name: data.name,
                color: data.color,
                size: data.size,
                baseprice: data.baseprice,
                disscount: data.disscount,
                price: data.finalprice,
                stock: data.stock,
                description: data.description,
                qty: qty,
                total: data.finalprice * qty,
                pic: data.pic1,
            }
            dispatch(addCart(item))
            navigate('/cart')
        }

    }

    function postWishlistdata() {
        var wishlistitem = wishlist.find((item) => item.productid === data.id && item.userid === localStorage.getItem('userid'))

        if (wishlistitem) {
            navigate('/profile')
        }
        else {
            var item = {
                productid: data.id,
                userid: localStorage.getItem('userid'),
                name: data.name,
                color: data.color,
                size: data.size,
                baseprice: data.baseprice,
                disscount: data.disscount,
                price: data.finalprice,
                stock: data.stock,
                description: data.description,
                qty: qty,
                total: data.finalprice * qty,
                pic: data.pic1,
            }
            dispatch(addWishlist(item))
            navigate('/profile')
        }
    }

    function getAPIData() {
        dispatch(getProduct())
        dispatch(getCart())
        dispatch(getWishlist())



    }
    useEffect(() => {
        getAPIData()
        var p = product.find((item) => item.id === Number(id))
        if (p)
            setdata(p)

    }, [product.length])



    return (
        <>


            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a target='_blank' href={`/assets/productimages/${data.pic1}`}><img src={`/assets/productimages/${data.pic1}`} height="600px" className="d-block w-100" alt="..." />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target='_blank' href={`/assets/productimages/${data.pic2}`}><img src={`/assets/productimages/${data.pic2}`} height="600px" className="d-block w-100" alt="..." />
                                        </a>
                                    </div>
                                    <div className="carousel-item ">
                                        <a target='_blank' href={`/assets/productimages/${data.pic3}`}><img src={`/assets/productimages/${data.pic3}`} height="600px" className="d-block w-100" alt="..." />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target='_blank' href={`/assets/productimages/${data.pic4}`}><img src={`/assets/productimages/${data.pic4}`} height="600px" className="d-block w-100" alt="..." />
                                        </a>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3>{data.name}</h3>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Category</div>
                                <div className='border  p-3 w-50'>{data.maincategory}/{data.subcategory}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Brand</div>
                                <div className='border  p-3 w-50'>{data.brand}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Price</div>
                                <div className='border  p-3 w-50'><del>&#8377;{data.baseprice}</del> &nbsp;<sup><strong>&#8377;{data.finalprice}</strong></sup > <span className='text-success'>&nbsp;&nbsp;&nbsp;{data.disscount}% Off </span> </div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Color</div>
                                <div className='border  p-3 w-50'>{data.color}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Size</div>
                                <div className='border  p-3 w-50'>{data.size}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Stock</div>
                                <div className='border  p-3 w-50'>{data.stock}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Description</div>
                                <div className='border  p-3 w-50'>{data.description}</div>
                            </div>


                            <div className='mt-3 w-100'>
                                <div className="m-auto">
                                    <div className=" d-flex justify-content-center my-2">
                                        <button className='qty-btn' data-field="" onClick={() => {
                                            if (qty > 1)
                                                setqty(qty - 1)
                                        }
                                        } ><i className="ion-ios-remove"></i></button>
                                        <span className='border py-2 px-4'><b>{qty}</b></span>
                                        <button className='qty-btn' onClick={() => setqty(qty + 1)}
                                        > <i className="ion-ios-add "></i></button>
                                    </div>

                                </div>
                            </div>
                            <div className='d-flex'>
                                <button className="btn btn-secondary w-50 w-50 mr-2" onClick={postCartdata}>Add to Cart</button>
                                <button className="btn btn-secondary  w-50" onClick={postWishlistdata}>Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
