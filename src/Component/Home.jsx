
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProduct } from '../Store/ActionCreators/ProductActionCreators'
import { getNewslatter, addNewslatter } from '../Store/ActionCreators/NewslatterActionCreators'

export default function Home() {
  var dispatch = useDispatch()

  var product = useSelector((state) => state.ProductStateData)
  var newslatter = useSelector((state) => state.NewslatterStateData)
  var [email, setemail] = useState('')
  var [status, setstatus] = useState(false)
  product.sort((x, y) => y.id - x.id)

  product = product.slice(0, 8)
  function postData(e){
    e.preventDefault()
    var data = newslatter.find((item)=>item.email===email)
    if(data){
      alert('Email Adrress Is Allready Registered!!')
    }
    else{

        dispatch(addNewslatter({email})) 
        setstatus(true)
    }

  }

  function getAPIData() {
    dispatch(getProduct())
    dispatch(getNewslatter())
  }
  useEffect(() => {
    getAPIData()
  }, [])
  return (
    <>
      <section id="home-section" className="hero bg-primary">

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/images/bg_1.png" height="700px" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="assets/images/bg_2.png" height="700px" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
        {/* <div className="home-slider owl-carousel">
          <div className="slider-item js-fullheight">
            <div className="overlay"></div>
            <div className="container-fluid p-0">
              <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
                <img className="one-third order-md-last img-fluid" src="/assets/images/bg_1.png" alt="" />
                <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                  <div className="text">
                    <span className="subheading">#New Arrival</span>
                    <div className="horizontal">
                      <h1 className="mb-4 mt-3">Shoes Collection 2019</h1>
                      <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>

                      <p><a href="#" className="btn-custom">Discover Now</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item js-fullheight">
            <div className="overlay"></div>
            <div className="container-fluid p-0">
              <div className="row d-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
                <img className="one-third order-md-last img-fluid" src="/assets/images/bg_2.png" alt="" />
                <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                  <div className="text">
                    <span className="subheading">#New Arrival</span>
                    <div className="horizontal">
                      <h1 className="mb-4 mt-3">New Shoes Winter Collection</h1>
                      <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>

                      <p><a href="#" className="btn-custom">Discover Now</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb ">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-1 py-md-1">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-bag"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-1 py-md-1">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Support Customer</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-1 py-md-1">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-payment-security"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Secure Payments</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light p-1">
        <div className="container">
          <div className="row justify-content-center mb-1 pb-1">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h2 className="mb-1">Latest Product</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">

            {
              product.map((item, index) => {
                return <div key={index} className="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex">
                  <div className="product d-flex flex-column">
                    <a target='_blank' href={`/assets/productimages/${item.pic1}`} className="img-prod"><img className="img-fluid" src={`/assets/productimages/${item.pic1}`} style={{ height: '250px', width: '100%' }} alt="" />
                      <span className="status">{item.disscount}% off</span>
                      <div className="overlay"></div>
                    </a>
                    <div className="text py-3 pb-4 px-3">

                      <h3><a href="#">{item.name}</a></h3>
                      <p>{`${item.description.slice(0, 20)}...`}</p>
                      <div className="pricing">
                        <p className="price"><span className="mr-2 price-dc">&#8377; {item.baseprice}</span><span className="price-sale">&#8377;{item.finalprice}</span></p>
                      </div>
                      <p className="bottom-area d-flex px-3">
                        <Link to={`/single-product/:${item.id}`} className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></Link>
                        {/* <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></a> */}
                      </p>
                    </div>
                  </div>
                </div>
              })
            }


          </div>
        </div>
      </section>



      <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div className="choose-wrap divider-one img p-5 d-flex align-items-end" style={{ backgroundImage: "url('/assets/images/choose-1.jpg')" }}>

                <div className="text text-center text-white px-2">

                  <h2>Men's Collection</h2>
                  <p><a href="/shop/Male" className="btn btn-black px-3 py-2">Shop now</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 ">
              <div className="row no-gutters choose-wrap divider-two align-items-stretch">
                <div className="col-md-12">
                  <div className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end" style={{ backgroundImage: "url('/assets/images/choose-2.jpg')" }}>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="text text-white px-5">
                        <h2>Women's Collection</h2>
                        <p><a href="/shop/Female" className="btn btn-black px-3 py-2">Shop now</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                        <div className="text text-center px-5">
                          <span className="subheading">Sale</span>
                          <h2>Extra 50% Off</h2>
                          <p><a href="/shop/All" className="btn btn-black px-3 py-2">Shop now</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="choose-wrap wrap img align-self-stretch d-flex align-items-center" style={{ backgroundImage: "url('/assets/images/p67.jpg')" }}>
                        <div className="text text-center text-white mt-5 px-5">
                          <h2>Kids's Collection</h2>
                          <p><a href="/shop/Kids" className="btn btn-black px-3 py-2">Shop now</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="ftco-section ftco-deal bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/images/prod-1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="heading-section heading-section-white">
                <span className="subheading">Deal of the month</span>
                <h2 className="mb-3">Deal of the month</h2>
              </div>
              <div id="timer" className="d-flex mb-4">
                <div className="time" id="days"></div>
                <div className="time pl-4" id="hours"></div>
                <div className="time pl-4" id="minutes"></div>
                <div className="time pl-4" id="seconds"></div>
              </div>
              <div className="text-deal">
                <h2><a href="#">Nike Free RN 2019 iD</a></h2>
                <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                <ul className="thumb-deal d-flex mt-4">
                  <li className="img" style={{ backgroundImage: "url('/assets/images/product-6.png')" }}></li>
                  <li className="img" style={{ backgroundImage: "url('/assets/images/product-2.png')" }}></li>
                  <li className="img" style={{ backgroundImage: "url('/assets/images/product-4.png')" }}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="ftco-section testimony-section pb-2 pt-2">
        <div className="container ">
          <div className="services-flow row">
            <div className="services-2 p-4 d-flex ftco-animate col-lg-3 col-md-6">
              <div className="icon">
                <span className="flaticon-bag"></span>
              </div>
              <div className="text">
                <h3>Free Shipping</h3>
                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
              </div>
            </div>
            <div className="services-2 p-4 d-flex ftco-animate col-lg-3 col-md-6">
              <div className="icon">
                <span className="flaticon-heart-box"></span>
              </div>
              <div className="text">
                <h3>Valuable Gifts</h3>
                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
              </div>
            </div>
            <div className="services-2 p-4 d-flex ftco-animate col-lg-3 col-md-6">
              <div className="icon">
                <span className="flaticon-payment-security"></span>
              </div>
              <div className="text">
                <h3>All Day Support</h3>
                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
              </div>
            </div>
            <div className="services-2 p-4 d-flex ftco-animate col-lg-3 col-md-6">
              <div className="icon">
                <span className="flaticon-customer-service"></span>
              </div>
              <div className="text">
                <h3>All Day Support</h3>
                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
              </div>
            </div>

            {/* <div className="col-lg-7">
              <div className="heading-section ftco-animate mb-5">
                <h2 className="mb-4">Our satisfied customer says</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              </div>
              <div className="carousel-testimony owl-carousel">
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="user-img mb-4" style={{ backgroundImage: "url('/assets/images/person_1.jpg')" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Garreth Smith</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="user-img mb-4" style={{ backgroundImage: "url('/assets/images/person_2.jpg')" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Garreth Smith</p>
                      <span className="position">Interface Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="user-img mb-4" style={{ backgroundImage: "url('/assets/images/person_3.jpg')" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Garreth Smith</p>
                      <span className="position">UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="user-img mb-4" style={{ backgroundImage: "url('/assets/images/person_1.jpg')" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Garreth Smith</p>
                      <span className="position">Web Developer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="user-img mb-4" style={{ backgroundImage: "url('/assets/images/person_1.jpg')" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Garreth Smith</p>
                      <span className="position">System Analyst</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="ftco-gallery ">
        <div className="container d-flex justify-content-center  ">

          <div className="">

            {status ? <div className="mt-3">  <div class="alert alert-info p-3" role="alert">
              <h3>Thank You For Subscribe Our Service!!</h3>
            </div></div> :
              <div className="">
                <div className="head"> <h3 className='text-center'><b>Subscribe Our Service</b></h3></div>
                <form onSubmit={postData}>
                  <div className="input mb-3"> <input type="email" className='form-control w-100' onChange={(e) => setemail(e.target.value)} /></div>
                  <div className="sub-btn mb-3"> <button type='submit' className='btn btn-secondary w-100 p-3' >Subscribe</button></div>
                </form> </div>}
          </div>
        </div>
      </section>
      <section className="ftco-gallery ">
        <div className="container ">
          <div className="row justify-content-center ">
            <div className="col-md-8 heading-section text-center mb-1 ftco-animate">
              <h2 className="mb-1">Follow Us On Instagram</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a href="/assets/images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('/assets/images/gallery-1.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a href="/assets/images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('/assets/images/gallery-2.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a href="/assets/images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('/assets/images/gallery-3.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a href="/assets/images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('/assets/images/gallery-4.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a href="/assets/images/gallery-5.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('/assets/images/gallery-5.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-2 ftco-animate">
              <a href="/assets/images/gallery-6.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('/assets/images/gallery-6.jpg')" }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
