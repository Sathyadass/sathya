import React, { useState } from "react";
import Slider  from '../inc/slider';
import {Link} from 'react-router-dom';
import VMC from './incc/vmc';
import services1 from '../images/download.jpg';


    const ContactForm = () => {
        const [fullName, setFullName] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [emailAddress, setEmailAddress] = useState("");
        const [message, setMessage] = useState("");
        const [hidden, setHidden] = useState(false);

        const handleToggle = () => {
            setHidden(!hidden);
        }
    
        const handleFormSubmit = () => {
            // Perform desired form action (e.g. send form data to server)
            // Replace the following lines with your desired form action
            console.log("Full Name: " + fullName);
            console.log("Phone Number: " + phoneNumber);
            console.log("Email Address: " + emailAddress);
            console.log("Message: " + message);
            
    
            // Reset form fields after submitting
            setFullName("");
            setPhoneNumber("");
            setEmailAddress("");
            setMessage("");
            alert("Form submitted successfully!");

            
        };


    return (
        <div>
            <Slider/>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static
                         page of plain text to complex web applications, electronic businesses, and social network services.</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                        
                    </div>
            
                </div>
            </section>

            {/* our vision, mission and values */ }
            <VMC />

            {/* Our Services */ }
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                            
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={services1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6> 

                                    <div className="underline"></div>
                                        <p>
                                        Web development is the work involved in developing a website for the Internet
                                        </p>
                                        <Link to="services" className="btn btn-link">Read More</Link>                          
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={services1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6> 

                                    <div className="underline"></div>
                                        <p>
                                        Web development is the work involved in developing a website for the Internet
                                        </p>
                                        <Link to="services" className="btn btn-link">Read More</Link>                          
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={services1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6> 

                                    <div className="underline"></div>
                                        <p>
                                        Web development is the work involved in developing a website for the Internet
                                        </p>
                                        <Link to="services" className="btn btn-link">Read More</Link>                          
                                </div>
                               
                            </div> 
                        </div>
                    </div>       
                </div>
            </section>

            {!hidden && (
            <section className="section sec1" id="enquery">
                <div className="container">
                    <div className="card w-50 ">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <h6>Contact Form</h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control w-100" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Full Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter Phone No"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="Enter Your Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type Your Message...."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow w-100" onClick={handleFormSubmit}>Send Message</button>
                                    </div>
                                    

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )}
            <div className="form-group py-3">
        <button type="button" className="btn btn-primary shadow w-50 mental" onClick={handleToggle}>
          {hidden ? 'Show Form' : 'Hide Form'}
        </button>
      </div>
            
            
        </div>
    
    );
}
export default ContactForm;

