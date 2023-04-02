import React from 'react';

var L_blog=()=>{
    return(
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h1 className='font-weight-bold text-center'>Latest Blog</h1>
                        <p className='mt-3'>When unknow printer took a gallery of type and scramblted it to make a<br/>
                        type specimen book</p>
                    </div>
                    <div className='col-md-12 mt-4'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='card blog_card'>
                                    <div className='card-body'>
                                        <img src='https://tarettis.sirv.com/Images/blog_09.jpg' className='h-100 w-100'/>
                                    </div>
                                    <div className='card-footer text-center'>
                                        <p>July 21,2020</p>
                                        <h5>Fitness Mantra To Live Fit Life</h5>
                                        <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament</p>
                                        <button className='btn btn-warning'>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card blog_card'>
                                    <div className='card-body'>
                                        <img src='https://tarettis.sirv.com/Images/blog_05.jpg' className='h-100 w-100'/>
                                    </div>
                                    <div className='card-footer text-center'>
                                        <p>May 03,2020</p>
                                        <h5>Beautiful & Special Moment</h5>
                                        <p>Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at.</p>
                                        <button className='btn btn-warning'>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card blog_card'>
                                    <div className='card-body'>
                                        <img src='https://tarettis.sirv.com/Images/blog_06.jpg' className='h-100 w-100'/>
                                    </div>
                                    <div className='card-footer text-center'>
                                        <p>April 02,2020</p>
                                        <h5>Beauti lies within special</h5>
                                        <p>Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at.</p>
                                        <button className='btn btn-warning'>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 mt-5'>
                        <img src='https://deneb-reactjs.netlify.app/assets/contact.aed789cf.png' className='mt-5'/>
                    </div>
                    <div className='col-md-6'>
                        <h1>Get In Touch With Us</h1>
                        <p className='mt-3'>When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>
                        <div className='row'>
                            <div className='col-md-6 mt-4'>
                                <input type='text' className="form-control input" placeholder="First Name" required/>
                            </div>
                            <div className='col-md-6 mt-4'>
                                <input type='text' className="form-control input" placeholder="Last Name" required/>
                            </div>
                            <div className='col-md-6 mt-4'>
                                <input type='text' className="form-control input" placeholder="Email Address" required/>
                            </div>
                            <div className='col-md-6 mt-4'>
                                <input type='text' className="form-control input" placeholder="Phone No" required/>
                            </div>
                            <div className='col-md-12 mt-4'>
                                <textarea rows='4' className='form-control input' placeholder='Massage'></textarea>
                            </div>
                            <div className='col-md-12 mt-4'>
                                <button className='s_butt btn btn-warning text-white'>Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default L_blog;