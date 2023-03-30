import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
	return (
		<>
			<div className=" cart-background conainer-fluid mt-5  px-5">
				<div className="row ">
					<div className="col-1"></div>
					<div className="col-lg-7 mt-5 border mb-3 cart-row-bg ">
						<div className="row p-3  border-bottom">
							<div className="col-lg-3">
								<img src="/assets/productimages/banner4.jpg" className='' width='100%' height='150px' alt="" />
								<div className=" d-flex justify-content-center mt-2">
									<button className='qty-btn'><i className="ion-ios-remove"></i></button>
									<span className='border py-2 px-4'><b>10</b></span>
									<button className='qty-btn'> <i className="ion-ios-add "></i></button>
									</div>
							</div>
							<div className="col-lg-9 ">
								<h3>Nike Free RN 2019 iD</h3>
								<span>Far far away, behind the word mountains, far from the countries </span> <br />
								<span><b>Blue </b>/<b>34</b> &nbsp;  &nbsp; </span> <strong> IN STOCK </strong>
								<p className="price"> <span className="mr-2 price-dc"><del> &#8377;500 </del></span><span className="price-sale"> <strong className=' text-'> &#8377;300 </strong></span> <span className="price-sale text-success"> <sup> 40% off </sup></span></p>
								<button className='btn-danger' >REMOVE</button>
							</div>
						</div>


						<div className="row place-order">
							<div className="col-12  ">
								<div className="float-right "><button className=' place-order-btn'>Place Order</button></div>

							</div>
						</div>

					</div>

					<div className="col-lg-3 totat-amount ">
						<div className="mt-5 cart-row-bg cart-wrap ftco-animate">
							<div className="cart-total mb-3">
								<h3>Cart Totals</h3>
								<p className="d-flex">
									<span>Subtotal</span>
									<span>$20.60</span>
								</p>
								<p className="d-flex">
									<span>Delivery</span>
									<span>$0.00</span>
								</p>
								<p className="d-flex">
									<span>Discount</span>
									<span>$3.00</span>
								</p>
								<hr />
								<p className="d-flex total-price">
									<span>Total</span>
									<span>$17.60</span>
								</p>
							</div>
							<p className="text-center"><Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
						</div>
					</div>
					<div className="col-1"></div>
				</div>
			</div>






































			{/* <section className="ftco-section ftco-cart mt-3 ">
				<div className="container">
					<div className="row overflow-auto">
						<div className="col-md-12 ftco-animate">
							<div className="cart">
								<table className="table">
									<thead className="thead-primary">
										<tr className="text-center">
											<th>&nbsp;</th>
											<th>&nbsp;</th>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
										</tr>
									</thead>
									<tbody>
										<tr className="text-center">
											<td className="product-remove"><Link to="#"><span className="ion-ios-close"></span></Link></td>

											<td className="image-prod"><div className="img" style={{ backgroundImage: "url('assets/images/product-3.jpg')" }}></div></td>

											<td className="product-name">
												<h3>Nike Free RN 2019 iD</h3>
												<p>Far far away, behind the word mountains, far from the countries</p>
											</td>

											<td className="price">$4.90</td>

											<td className="quantity">
												<div className="input-group mb-3">
													<button className='px-2 pb-4 pt-3  hov rounded'><span class="material-symbols-outlined">
														remove
													</span></button><p className=' px-4 py-3 form-control border rounded mx-1'>10
													</p><button className='px-2 pb-4 pt-3 hov  rounded'><span class="material-symbols-outlined">
														add
													</span></button></div>
											</td>

											<td className="total">$4.90</td>
										</tr>

										<tr className="text-center">
											<td className="product-remove"><Link to="#"><span className="ion-ios-close"></span></Link></td>

											<td className="image-prod"><div className="img" style={{ backgroundImage: "url('assets/images/product-4.jpg')" }}></div></td>

											<td className="product-name">
												<h3>Nike Free RN 2019 iD</h3>
												<p>Far far away, behind the word mountains, far from the countries</p>
											</td>

											<td className="price">$15.70</td>

											<td className="quantity">
												<div className="input-group mb-3">
													<input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100" />
												</div>
											</td>

											<td className="total">$15.70</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="row justify-content-start">
						<div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
							<div className="cart-total mb-3">
								<h3>Cart Totals</h3>
								<p className="d-flex">
									<span>Subtotal</span>
									<span>$20.60</span>
								</p>
								<p className="d-flex">
									<span>Delivery</span>
									<span>$0.00</span>
								</p>
								<p className="d-flex">
									<span>Discount</span>
									<span>$3.00</span>
								</p>
								<hr />
								<p className="d-flex total-price">
									<span>Total</span>
									<span>$17.60</span>
								</p>
							</div>
							<p className="text-center"><Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
						</div>
					</div>
				</div>
			</section> */}
		</>
	)
}
