import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import LeftNav from './LeftNav'
import { getProduct, deleteProduct } from "../../Store/ActionCreators/ProductActionCreators"


export default function AdminProduct() {
    var product = useSelector((state) => state.ProductStateData)
    // console.log(product);
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'maincategory', headerName: 'Maincategory', width: 100 },
        { field: 'subcategory', headerName: 'Subcategory', width: 100 },
        { field: 'brand', headerName: 'Brand', width: 100 },
        { field: 'size', headerName: 'size', width: 50 },
        { field: 'color', headerName: 'Color', width: 80 },
        { field: 'stock', headerName: 'Stock', width: 110 },
        {
            field: 'baseprice', headerName: 'Baseprice', width: 80, renderCell: ({ row }) =>
                <p>&#8377; {row.baseprice}</p>
        },
        {
            field: 'disscount', headerName: 'Disscount', width: 80, renderCell: ({ row }) =>
                <p>{row.disscount}%</p>
        },
        { field: 'finalprice', headerName: 'Finalprice', width: 80, renderCell: ({ row }) =>
        <p>&#8377; {row.finalprice}</p>},
        { field: 'description', headerName: 'Description', width: 150 },
        {
            field: 'pic1', headerName: 'Pic1', width: 120, renderCell: ({ row }) =>
                <img src={`/assets/productimages/${row.pic1}`} height='40px' width='100%'
                    className='rounded' alt='pic1' />
        },
        {
            field: 'pic2', headerName: 'Pic2', width: 120, renderCell: ({ row }) =>
                <img src={`/assets/productimages/${row.pic2}`} height='40px' width='100%'
                    className='rounded' alt='pic1' />
        },
        {
            field: 'pic3', headerName: 'Pic3', width: 120, renderCell: ({ row }) =>
                <img src={`/assets/productimages/${row.pic3}`} height='40px' width='100%'
                    className='rounded' alt='pic1' />
        },
        {
            field: 'pic4', headerName: 'Pic4', width: 120, renderCell: ({ row }) =>
                <img src={`/assets/productimages/${row.pic4}`} height='40px' width='100%'
                    className='rounded' alt='pic1' />
        },

        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-update-product/" + row.id)
                }}>
                    <span className="material-symbols-outlined">
                        edit
                    </span>
                </Button>,
        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    dispatch(deleteProduct({ id: row.id }))
                }}>
                    <span className="material-symbols-outlined">
                        delete_forever
                    </span>
                </Button>,
        }
    ];

    var rows = []
    for (let item of product) {
        rows.push(item)
    }
    function getAPIData() {
        dispatch(getProduct())
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Product <Link to="/admin-add-product" className='float-right'><span className="material-symbols-outlined text-light">add</span></Link></h5>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            // checkboxSelection
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
