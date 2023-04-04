

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../Store/ActionCreators/ProductActionCreators'
import { getMaincategory } from '../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../Store/ActionCreators/SubcategoryActionCreators'
import { getBrand } from '../Store/ActionCreators/BrandActionCreators'

export default function Shop() {
    var dispatch = useDispatch()
    var { maincat } = useParams()
    var [shopproduct, setshopproduct] = useState([])
    var [mc, setmc] = useState(maincat)
    var [sc, setsc] = useState('All')
    var [br, setbr] = useState('All')
    var [min, setmin] = useState(1)
    var [max, setmax] = useState(1000)



    var product = useSelector((state) => state.ProductStateData)
    product.sort((x, y) => y.id - x.id)
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)

    function getSelected(mc, sc, br) {
        if (mc === 'All' && sc === "All" && br === "All")
            setshopproduct(product)
        else if (mc !== 'All' && sc === "All" && br === "All")
            setshopproduct(product.filter((item) => item.maincategory === mc))
        else if (mc === 'All' && sc !== "All" && br === "All")
            setshopproduct(product.filter((item) => item.subcategory === sc))
        else if (mc === 'All' && sc === "All" && br !== "All")
            setshopproduct(product.filter((item) => item.brand === br))
        else if (mc !== 'All' && sc !== "All" && br !== "All")
            setshopproduct(product.filter((item) => item.brand === br && item.subcategory === sc))
        else if (mc !== 'All' && sc !== "All" && br === "All")
            setshopproduct(product.filter((item) => item.maincategory === mc && item.subcategory === sc))
        else if (mc !== 'All' && sc === "All" && br !== "All")
            setshopproduct(product.filter((item) => item.maincategory === mc && item.brand === br))
        else if (mc === 'All' && sc !== "All" && br !== "All")
            setshopproduct(product.filter((item) => item.subcategory === sc && item.brand === br))
        else
            setshopproduct(product.filter((item) => item.maincategory === mc && item.subcategory === sc && item.brand === br))
    }



    function getFilter(input) {
        if (input.mc) {
            setmc(input.mc)
            getSelected(input.mc, sc, br)
        }
        else if (input.sc) {
            setsc(input.sc)
            getSelected(mc, input.sc, br)
        }
        else {
            setbr(input.br)
            getSelected(mc, sc, input.br)
        }
    }

    function selectpriceFilter(min, max) {
        setshopproduct(product.filter((item) => item.finalprice >= min && item.finalprice <= max))

    }
    function getPriceFilter(e) {
        if (e.target.name === 'min') {
            setmin(e.target.value)
            selectpriceFilter(e.target.value, max)
        }
        else {
            setmax(e.target.value)
            selectpriceFilter(min, e.target.value)
        }
    }


    // function getFilter(input) {
    //     if (input.mc) {
    //         setmc(input.mc)
    //         getSelected(input.mc, sc, br)
    //     }
    //     if (input.sc) {
    //         setsc(input.sc)
    //         getSelected(mc, input.sc, br)
    //     } else {
    //         setbr(input.br)
    //         getSelected(mc, sc, input.br)
    //     }

    // }

    function getAPIData() {
        dispatch(getProduct())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        if (maincat === 'All') {
            setshopproduct(product)
        }
        else {
            setshopproduct(product.filter((item) => item.maincategory === maincat))
        }

    }
    useEffect(() => {
        getAPIData()
    }, [product.length])

    return (
        <>
            {/* <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Shop</span></p>
                            <h1 className="mb-0 bread">Shop</h1>
                        </div>
                    </div>
                </div>
            </div> */}

            <section className="ftco-section bg-light ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-10 order-md-last">
                            <div className="row">
                                {
                                    shopproduct.map((item, index) => {
                                        return <div key={index} className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                                            <div className="product d-flex flex-column">
                                                <a target='_blank' href={`/assets/productimages/${item.pic1}`} className="img-prod"><img className="img-fluid" src={`/assets/productimages/${item.pic1}`} style={{ height: '250px', width: '100%' }} alt="product img" />
                                                    <span className="status">{item.disscount}% Off</span>
                                                    <div className="overlay"></div>
                                                </a>
                                                <div className="text py-3 pb-4 px-3">

                                                    <h3> <Link to={`/single-product/${item.id}`} >{item.name}</Link></h3>
                                                    <p>{`${item.description.slice(0, 20)}...`}</p>
                                                    <div className="pricing">
                                                        <p className="price"><span className="mr-2 price-dc">&#8377;{item.baseprice}</span><span className="price-sale">&#8377;{item.finalprice}</span></p>
                                                    </div>
                                                    <p className="bottom-area d-flex px-3">
                                                        <Link to={`/single-product/${item.id}`} className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></Link>
                                                        {/* <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></a> */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                            <div className="row mt-3">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2">
                            <div className="sidebar">
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Categories</h2>
                                    <div className="fancy-collapse-panel">
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingOne">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Maincategory
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        {/* <ul>
                                                            <li><button className='btn btn-none btn-light' onClick={() => getFilter({ mc: 'All' })}> All</button></li>
                                                            {
                                                                maincategory.map((item, index) => {
                                                                    return <li key={index}><button className='btn btn-none btn-light' onClick={() => getFilter({ mc: item.name })}> {item.name}</button></li>
                                                                })
                                                            }

                                                        </ul> */}

                                                        <ul>
                                                            <li><button className='btn btn-none btn-light' onClick={() => getFilter({ mc: 'All' })}> All</button></li>
                                                            {
                                                                maincategory.map((item, index) => {
                                                                    return <li key={index}><button className='btn btn-none btn-light' onClick={() => getFilter({ mc: item.name })}> {item.name}</button></li>
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingTwo">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Subcategory
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><button className='btn btn-none btn-light' onClick={() => getFilter({ sc: 'All' })}> All</button></li>
                                                            {
                                                                subcategory.map((item, index) => {
                                                                    return <li key={index}><button className='btn btn-none btn-light' onClick={() => getFilter({ sc: item.name })}> {item.name}</button></li>
                                                                })
                                                            }

                                                        </ul>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingThree">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Brand
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><button className='btn btn-none btn-light' onClick={() => getFilter({ br: 'All' })}> All</button></li>
                                                            {
                                                                brand.map((item, index) => {
                                                                    return <li key={index}><button className='btn btn-none btn-light' onClick={() => getFilter({ br: item.name })}> {item.name}</button></li>
                                                                })
                                                            }

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Price Range</h2>
                                    <form method="post" className="colorlib-form-2">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price from:</label>
                                                    <div className="form-field">
                                                        <i className="icon icon-arrow-down3"></i>
                                                        <input type="number" name="min" id="" value={min} onChange={getPriceFilter} className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price to:</label>
                                                    <div className="form-field">
                                                        <i className="icon icon-arrow-down3"></i>
                                                        <input type="number" name="max" id="" value={max} onChange={getPriceFilter} className="form-control" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
