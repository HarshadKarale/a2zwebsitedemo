import React from 'react';

var Footer=()=>{
    return(
        <>
        <section className='ftr'>
            <div className='container-fluid'>
                <div className='container mt-5'>
                    <div className='row bg-warning text-center'>
                        <div className='col-md-7 mt-3'>
                            <h1 className='mt-3 text-white card_undl'>Have Any Project in Mind?</h1>
                            <p className='text-white mt-4 mb-4'>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p>
                        </div>
                        <div className='col-md-5 mt-5'>
                            <button className='btn btn-light h_butt1 mt-3'>HIRE US</button>
                         </div>
                     </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='font-weight-bold mt-5'>Deneb<b className='text-warning'>.</b></h1>
                        <p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
                        <ul className='icons'>
                            <li><i className='fa fa-facebook'></i></li>
                            <li className='ml-4'><i className='fa fa-twitter'></i></li>
                            <li className='ml-4'><i className='fa fa-instagram'></i></li>
                        </ul>
                    </div>
                    <div className='col-md-3 mt-5 text-center'>
                        <h1 className='hlink'>Links</h1>
                        <ul className='links'>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='col-md-3 mt-5 text-center'>
                        <h1 className=''>Contact Us</h1>
                        <ul className=''>
                            <li>1800-121-3637</li>
                            <li>info@deneb.com<br/>services@deneb.com</li>
                            <li><i className='fa fa-location text-warning'/>A2Z Infotech,Lendkar Apartment,Balikashram Road,Near Kamala Hospital,Ahemadnagar,Maharastra-414001</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer;