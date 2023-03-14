import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../Store/ActionCreators/ProductActionCreators'

export default function SingleProduct() {
    var dispatch = useDispatch()
    var { id } = useParams()
    var [p, setp] = useState({})
    var [qty, setqty] = useState(1)
    var product = useSelector((state) => state.ProductStateData)


    function getAPIData() {
        dispatch(getProduct())
    }
    useEffect(() => {
        getAPIData()
        var data = product.find((item) => item.id === Number(id))
        if (data)
            setp(data)

        console.log(data);

    }, [product.length])



    return (
        <>
            {/* <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('/assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span>Shop</span></p>
                            <h1 className="mb-0 bread">Shop</h1>
                        </div>
                    </div>
                </div>
            </div> */}

            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a target='_blank' href={`/assets/productimages/${p.pic1}`}><img src={`/assets/productimages/${p.pic1}`} height="600px" className="d-block w-100" alt="..." />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target='_blank' href={`/assets/productimages/${p.pic2}`}><img src={`/assets/productimages/${p.pic2}`} height="600px" className="d-block w-100" alt="..." />
                                        </a>
                                    </div>
                                    <div className="carousel-item ">
                                        <a target='_blank' href={`/assets/productimages/${p.pic3}`}><img src={`/assets/productimages/${p.pic3}`} height="600px" className="d-block w-100" alt="..." />
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a target='_blank' href={`/assets/productimages/${p.pic4}`}><img src={`/assets/productimages/${p.pic4}`} height="600px" className="d-block w-100" alt="..." />
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
                            <h3>{p.name}</h3>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Category</div>
                                <div className='border  p-3 w-50'>{p.maincategory}/{p.subcategory}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Brand</div>
                                <div className='border  p-3 w-50'>{p.brand}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Price</div>
                                <div className='border  p-3 w-50'><del>&#8377;{p.baseprice}</del><sup>&#8377;{p.finalprice}</sup> &nbsp;&nbsp;&nbsp;{p.disscount}% Off</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Color</div>
                                <div className='border  p-3 w-50'>{p.color}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Size</div>
                                <div className='border  p-3 w-50'>{p.size}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Stock</div>
                                <div className='border  p-3 w-50'>{p.stock}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='border  p-3 w-50'>Description</div>
                                <div className='border  p-3 w-50'>{p.description}</div>
                            </div>


                            <div className='mt-3 w-100'>
                                <div className="m-auto">
                                    <div className="input-group d-flex justify-content-center col-md-12 mb-3">
                                        <div className='mx-3'>
                                            <button type="button" className="quantity-left-minus btn pt-2" data-type="minus" data-field="" onClick={() => {
                                                if (qty > 1)
                                                    setqty(qty - 1)
                                            }
                                            }>
                                                <i className="ion-ios-remove"></i>
                                            </button>
                                        </div>
                                        <div className=' border pt-1 px-3'><h6 className=''>{qty}</h6> </div>
                                        <div className='mx-3' >
                                            <button type="button" className="quantity-right-plus btn pt-2" data-type="plus" data-field="" onClick={() => setqty(qty + 1)}>
                                                <i className="ion-ios-add "></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <button className="btn btn-secondary w-50 w-50 mr-2">Add to Cart</button>
                                <button className="btn btn-secondary  w-50">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
