import React, { useEffect, useState } from 'react';
import Slide from './slide.js';
import { Link } from 'react-router-dom';
import Vision from './vision.js';
import Service1 from './images/service1.jpeg';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([])
    const getProducts = async () => {
        let res = await axios.get("http://localhost/web/index.php")
        console.log(res)
        setData(res.data)
    }


    useEffect(() => {
        getProducts()
    }, [])
    return (



        <div>
            <Slide />
            <section className="section border-top">

                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h1 className="main-heading">Welcome to shopping world!</h1>
                            <div className="underline mx-auto"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="row">

                            {
                                data.map((val) => {
                                    return (
                                        <div className="col">

                                            <div class="card" style={{ width: "18rem" }}>
                                                <img src={val.image} class="card-img-top" alt="..." height="250px" />
                                                <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                                                <div class="card-body">
                                                    <h5 class="card-title">{val.name} </h5>
                                                    <h4>{val.price}</h4>
                                                    <p class="card-text">{val.description}  </p>
                                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>




                    </div>
                </div>
            </section>
            {/* our vision ,mission and values */}
            <Vision />

            {/* our services*/}
            <section className="section bg border-top">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="main-heading">Our Services</h1>
                            <div className="underline mx-auto"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container text-center">

                    <div className="row ">
                        <div className="col">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="">

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                        <Link to="/services" className="btn btn-link">Read more</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">

                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="">

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                        <Link to="/services" className="btn btn-link">Read more</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">

                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="">

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <Link to="/services" className="btn btn-link">Read more</Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >


            </section >



        </div >

    );
}

export default Home;