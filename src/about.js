import React from 'react';
import Vision from './vision.js';

function About() {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div clasName="col-md-4 my-auto">
                            <h4>About Us</h4>

                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / AboutUs
                            </h6>
                        </div>
                    </div>
                </div>

            </section>
            <Vision/>
            <section className="section light border-bottom">
                <div className="container">
                    <h5>Our Company</h5>
                    <div className="">
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                            and going through the cites of the word in classical literature, discovered the undoubtable source.

                        </p>
                    </div>
                </div>
                
            </section>
           
        </div>
    );
}
export default About;