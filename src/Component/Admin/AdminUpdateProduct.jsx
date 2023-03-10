import React, { useState, useEffect } from 'react'
import LeftNav from './LeftNav'

import { addProduct, getProduct, updateProduct } from "../../Store/ActionCreators/ProductActionCreators"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMaincategory } from '../../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../../Store/ActionCreators/SubcategoryActionCreators'
import { getBrand } from '../../Store/ActionCreators/BrandActionCreators'
export default function AdminUpdateProduct() {
    var { id } = useParams()
    var [data, setdata] = useState({
        name: '',
        maincategory: '',
        subcategory: '',
        brand: '',
        stock: 'in Stock',
        size: '',
        color: '',
        baseprice: 0,
        disscount: 0,
        description: 'This is sample Product',
        pic1: '',
        pic2: '',
        pic3: '',
        pic4: '',
    })
    var product = useSelector((state) => state.ProductStateData)
    var maincategory = useSelector((state) => state.MaincategoryStateData)
    var subcategory = useSelector((state) => state.SubcategoryStateData)
    var brand = useSelector((state) => state.BrandStateData)
    var navigate = useNavigate()
    var dispatch = useDispatch()
    function getData(e) {
        // setname(e.target.value)
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
        // setname(e.target.value)
        var name = e.target.name
        var value = e.target.files[0].name
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    // console.log(data);
    function postData(e) {
        e.preventDefault()
        // var bp = Number(data.baseprice)
        // var d = Number(data.disscount)
        // var fp = parseInt(bp - (bp * d / 100))


        var mc = data.maincategory
        if (mc === '')
            mc = maincategory[0].name
        var sc = data.subcategory
        if (sc === '')
            sc = subcategory[0].name
        var br = data.brand
        if (br === '')
            br = brand[0].name

        // console.log('price',bp , d , fp);

        var item = {
            id:id,
            name: data.name,
            maincategory: mc,
            subcategory: sc,
            brand: br,
            stock: data.stock,
            size: data.size,
            color: data.color,
            baseprice: Number(data.baseprice),
            disscount: Number(data.disscount),
            finalprice: parseInt(data.baseprice - (data.baseprice * data.disscount / 100)),
            description: data.description,
            pic1: data.pic1,
            pic2: data.pic2,
            pic3: data.pic3,
            pic4: data.pic4,
        }
        dispatch(updateProduct(item))
        navigate("/admin-product")
    }
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
           var item = product.find((item)=>item.id===Number(id))
           setdata(item)
    }, [])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Product</h5>
                        <form className='p-3' onSubmit={postData}>
                            <div className="mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder='Enter Product Name : ' className='form-control' value={data.name} onChange={getData}  />
                            </div>
                            <div className="row ">
                                <div className="col-lg-3  col-md-6 col-12">
                                    <label htmlFor="maincategory">Maincategory</label>
                                    <select name="maincategory" id="mc" className='form-control mb-3' value={data.maincategory}  onChange={getData}>
                                        {
                                            maincategory.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }

                                    </select>
                                </div>
                                <div className="col-lg-3  col-md-6 col-12">
                                    <label htmlFor="subcategory">Subcategory</label>
                                    <select name="subcategory" id="sc" className='form-control mb-3' value={data.subcategory} onChange={getData} >
                                        {
                                            subcategory.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }

                                    </select>
                                </div>
                                <div className="col-lg-3  col-md-6 col-12">
                                    <label htmlFor="brand">Brand</label>
                                    <select name="brand" id="br" className='form-control mb-3' value={data.brand} onChange={getData}>
                                        {
                                            brand.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }

                                    </select>
                                </div>
                                <div className="col-lg-3  col-md-6 col-12">
                                    <label htmlFor="stock">Stock</label>
                                    <select name="stock" id="st" className='form-control mb-3' value={data.stock} onChange={getData}>
                                        <option value="in stocke">In Stock</option>
                                        <option value="out of stocke">Out Of Stock</option>

                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="size">Size</label>
                                    <input type="text" name="size" id="size" placeholder='Enter Size' className='form-control' value={data.size} onChange={getData} />
                                </div>

                                <div className="col-md-6 col-12">
                                    <label htmlFor="color">Color</label>
                                    <input type="text" name="color" id="color" placeholder='Enter Color' className='form-control' value={data.color} onChange={getData} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="size">Base Price</label>
                                    <input type="number" name="baseprice" id="bp" placeholder='Enter Base Price' className='form-control' value={data.baseprice} onChange={getData} />
                                </div>

                                <div className="col-md-6 col-12">
                                    <label htmlFor="color">Disscount</label>
                                    <input type="number" name="disscount" id="d" placeholder='Enter Disscount' className='form-control' value={data.disscount} onChange={getData} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="des" placeholder='Write Description' rows="4" className='form-control' value={data.description} onChange={getData} ></textarea>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="size">Pic 1</label>
                                    <input type="file" name="pic1" id="pic1" className='form-control'  onChange={getFile} />
                                </div>

                                <div className="col-md-6 col-12">
                                    <label htmlFor="color">Pic 2</label>
                                    <input type="file" name="pic2" id="pic2" className='form-control' onChange={getFile} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-12">
                                    <label htmlFor="size">Pic3</label>
                                    <input type="file" name="pic3" id="pic3" className='form-control'  onChange={getFile} />
                                </div>

                                <div className="col-md-6 col-12">
                                    <label htmlFor="color">Pic4</label>
                                    <input type="file" name="pic4" id="pic4" className='form-control'  onChange={getFile} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn btn-secondary w-100'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
