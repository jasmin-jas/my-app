import React from 'react';
import{Link} from 'react-router-dom';

function Footer(){
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <h6>Company information</h6>
                    <hr/>
                    <p className="text-white">
                    It is a long established fact that a reader will be
                     distracted by the readable content of a page when looking at its layout
                    </p>
                    
               
                </div>
                <div className="col-md-4">
                    <h6>Quick Links</h6>
                    <hr/>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">about</Link></div>
                    <div><Link to="/">contact</Link></div>
                    <div><Link to="/">blog</Link></div>

                </div>
                <br/>
                <div className="col-md-4">
                    <h6>
                        contact information
                    </h6>
                    <hr/>
                    <div><p className="text-white mb-1">Ak infopark ,kanyakumari,tamilnadu,India</p></div>
                    <div><p className="text-white mb-1">+91 9082833927</p></div>
                    <div><p className="text-white mb-1">+91 3892978787</p></div>
                    <div><p className="text-white mb-1">ak@gmail.com</p></div>
                </div>

            </div>
            </div>
        </section>
    );

}
export default Footer;