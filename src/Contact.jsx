import React from 'react';

export default function Contact(){
    return(
        <>
        <section className='ftr'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12 background mt-5'>
                        <h1 className='mt-5 display-3 font-weight-bold ml-5'>Contact Us</h1>
                        <h5 className='ml-5 text-warning'>HOME <b>></b> CONTACT US</h5>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 mt-5'>
                        <h1>Send us a massage</h1>
                        <p>When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <input type='text' className="form-control input" placeholder="First name" required/>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <input type='text' className="form-control input" placeholder="Last name" required/>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <input type='text' className="form-control input" placeholder="Email" required/>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <input type='text' className="form-control input" placeholder="Phone" required/>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <input type='text' className="form-control input" placeholder="Project Title" required/>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <select className='form-control input'>
                            <option value="">Choose</option>
                            <option value="">Web & Graphic Design</option>
                            <option value="">Apps And Web Development</option>
                            <option value="">SEO And Marketing</option>
                        </select>
                    </div>
                    <div className='col-md-12 mt-4'>
                        <textarea rows='4' className='form-control input'></textarea>
                    </div>
                    <div className='col-md-12 mt-4'>
                        <button className='s_butt btn btn-warning text-white'>Submit Now</button>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-md-12 mt-5'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120637.946186641!2d74.67263236598481!3d19.110471365016306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1655141480666!5m2!1sen!2sin" className='map'/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
    
}