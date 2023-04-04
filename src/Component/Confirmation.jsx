import React from 'react'
import {Link} from 'react-router-dom'

export default function Confirmation() {
  return (
    <div className='container-fluid text-center my-5'>
        <h3>Thank You!!!!</h3>
        <h4>Your Order Has Been Placed!!!</h4>
        <h4>Now You Can Track Your Order </h4>
    <Link to='/myorder' className='btn btn-secondary w-50 mt-3 p-2 ' >Track Your Order</Link>
    </div>
  )
}
