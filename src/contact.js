function Contact() {
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
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Contact Page</h2>
                                    <hr />
                                    <table>
                                        <tr>
                                            <div className="form-group">
                                                <labal className="mb-1">Full Name</labal>
                                                <input type="text" className="form-comtrol" placeholder="Enter full name" />
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className="form-group">
                                                <td><labal className="mb-1">Phone number</labal></td>
                                                <td> <input type="text" className="form-comtrol" placeholder="Enter phone number" /></td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className="form-group">
                                                <td><labal className="mb-1">Email address</labal></td>
                                                <td><input type="text" className="form-comtrol" placeholder="Enter email id" /></td>
                                            </div>
                                        </tr>
                                        
                                            <div className="form-group">
                                                <labal className="mb-1">Message</labal>
                                                
                                                <textarea rows="3" className="form-control" placeholder="Type the message..."></textarea>

                                            </div>
                                        
                                        <tr>
                                            <div className="form-group py-3">

                                                <button type="button" className="btn btn-primary shadow w-100">Send Message</button>

                                            </div></tr>

                                    </table>
                                    <div className="col-md-6">
                                        <h5 className="main-heading">Address Information</h5>
                                        <div className="">
                                            <p>
                                                ab,abcd,tamilnadu,India
                                            </p>
                                            <p>
                                                phone:9843924745
                                            </p>
                                            <p>
                                                email:email@domain.com
                                            </p>
                                        </div>
                                    </div>



                                </div>
                                <div className="col-md-6">

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default Contact;