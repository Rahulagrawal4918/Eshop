import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCart, updateCart, deleteCart } from '../Store/ActionCreators/CartActionCreators'

export default function Cart() {
	var carts = useSelector((state) => state.CartStateData)
	var dispatch = useDispatch()
	var [cart, setcart] = useState([])
	var [total, settotal] = useState(0)
	var [final, setfinal] = useState(0)
	var [disscount, setdisscount] = useState(0)
	var [shipping, setshipping] = useState(0)

	function getAPI() {
		dispatch(getCart())
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
			var dis = parseInt((baseprice - price) )
			
			setdisscount(dis)
		}
	}

	function update(id, op) {
		console.log('clicked');
		var item = carts.find((item) => item.id === id)
		if (op === 'dec') {
			item.qty -= 1
			item.total = item.total - item.price

		}
		else if (op === 'inc') {

			item.qty = item.qty + 1
			item.total = item.total + item.price
		}
		dispatch(updateCart(item))
		getAPI()
	}
	function deleteCartItem(id) {
		dispatch(deleteCart({ id: id }))
		getAPI()
	}
	useEffect(() => {
		getAPI()
	}, [carts.length])

	return (
		<>
			<div className=" cart-background conainer-fluid mt-5  px-5">
				<div className="row ">
					<div className="col-1"></div>
					<div className="col-lg-7 mt-5 border mb-3 cart-row-bg ">
						{cart.length === 0 ? <h1>You Don't Have Any Cart Item</h1> :
							cart.map((item, index) => {
								return <div key={index} className="row p-4  border-bottom">

									<div className="col-lg-3">
										<img src={`/assets/productimages/${item.pic}`} className='' width='100%' height='200px' alt="img" />
										<div className=" d-flex justify-content-center mt-2">
											<button className='qty-btn' onClick={() => { if (item.qty > 1) update(item.id, 'dec') }}><i className="ion-ios-remove"></i></button>
											<span className='border py-2 px-4'><b>{item.qty}</b></span>
											<button className='qty-btn' onClick={() => update(item.id, 'inc')}
											> <i className="ion-ios-add "></i></button>
										</div>
									</div>
									<div className="col-lg-9 ">
										<h3>{item.name}</h3>
										<span>{item.description}</span> <br />
										<span><b>{item.color} </b>/<b>{item.size}</b> &nbsp;  &nbsp; </span> <strong>{item.stock}</strong>
										<p className="price mt-1  mb-0 price-sale"> <strong >  <span className="mr-2 price-dc"><del> &#8377;{item.baseprice} </del></span><span className="price-sale"> &#8377;{item.price} </span> <span className="price-sale text-success"> <sup> {item.disscount}% off </sup> </span> </strong></p>
										<h5 className='p-0 m-0 price-sale '><strong>Total Price :  {item.total}</strong></h5>
										<button className='btn-danger mt-3 ' onClick={() => deleteCartItem(item.id)}>REMOVE</button>
									</div>
								</div>

							})

						}

						{
							cart.length === 0 ? <div className="row place-order">
								<div className="col-12  ">
									<div className="float-right "><Link to='/shop/All' className=' place-order-btn'>Add Cart Item</Link></div>

								</div>
							</div> : <div className="row place-order">
								<div className="col-12  ">
									<div className="float-right "><button className=' place-order-btn'>Place Order</button></div>

								</div>
							</div>
						}
					</div>


					{cart.length === 0 ? null :
						<div className="col-lg-3 totat-amount ">
							<div className="mt-5 cart-row-bg cart-wrap ftco-animate">
								<div className="cart-total mb-3">
									<h3>Cart Totals</h3>
									<p className="d-flex">
										<span>Subtotal</span>
										<span><strong>&#8377;</strong>{total}</span>
									</p>
									<p className="d-flex">
										<span>Shipping Charge</span>
										<span><strong>&#8377;</strong>{shipping}</span>
									</p>
									<p className="d-flex">
										<span>Total Discount</span>
										<span>{disscount}<strong>%</strong> </span>
									</p>
									<hr />
									<p className="d-flex total-price">
										<span>Final Price</span>
										<span>&#8377;{final}</span>
									</p>
								</div>
								<p className="text-center"><Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
							</div>
						</div>}
					<div className="col-1"></div>
				</div>
			</div>


		</>
	)
}
