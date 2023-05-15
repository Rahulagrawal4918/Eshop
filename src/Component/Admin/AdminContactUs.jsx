import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import LeftNav from './LeftNav'
import { getContact, deleteContact } from "../../Store/ActionCreators/ContactActionCreators"


export default function AdminContactUs() {
    var [data, setdata] = useState([])
    var contact = useSelector((state) => state.ContactStateData)
    contact = contact.slice(1, contact.length)
    // console.log(brand);
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'subject', headerName: 'Subject', width: 200 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'time', headerName: 'Date', width: 110},
        {
            field: "view",
            headerName: "View",
            sortable: false,
            renderCell: ({ row }) =>
                <Button onClick={() => {
                    navigate("/admin-single-contact/" + row.id)
                }}>
                    <span className="material-symbols-outlined">
                        visibility
                    </span>
                </Button>,
        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: ({ row }) => {
                if (row.status === "Done") {
                    return <Button onClick={() => {
                        dispatch(deleteContact({ id: row.id }))
                    }}>
                        <span className="material-symbols-outlined">
                            delete_forever
                        </span>
                    </Button>
                }
            }
        }
    ];

    var rows = []

    for (let item of data) {
        rows.push(item)
    }
    function getAPIData() {
        dispatch(getContact())
        contact && setdata(contact)
    }
    useEffect(() => {
        getAPIData()
    }, [contact.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <h5 className='bg-secondary text-center text-light p-1'>Brand <Link to="/admin-add-brand" className='float-right'><span className="material-symbols-outlined text-light">add</span></Link></h5>
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
