import React from "react";
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <>
            <section>
                <div className='container-fluid'>
                    <div className='row p-3'>
                        <div className='col-md-4'>
                           <h1 className='text-danger font-weight-bold'>A2Z Infotechs</h1> 
                        </div>
                        <div className='col-md-6'>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto font-weight-bold">
                                        <li class="nav-item active">
                                            <a class="nav-link"><Link to='/'>Home </Link><span class="sr-only">(current)</span></a>
                                        </li>
                                        <li>
                                            <a class="nav-link"><Link to='/about'>About US </Link><span class="sr-only">(current)</span></a>
                                        </li>
                                        <li>
                                            <a class="nav-link"><Link to='/service'>Services</Link><span class="sr-only">(current)</span></a>
                                        </li>
                                        <li>
                                            <a class="nav-link"><Link to='/portfolio'>Portfolio</Link><span class="sr-only">(current)</span></a>
                                        </li>
                                        <li>
                                            <a class="nav-link"><Link to='/blog'>Blog</Link><span class="sr-only">(current)</span></a>
                                        </li>
                                        <li>
                                            <a class="nav-link"><Link to='/contact'>Contact US</Link><span class="sr-only">(current)</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-2">
                            <button className="h_butt btn btn-warning text-light text-center">HIRE US</button>
                        </div>
                    </div>
                </div>
            </section>

            <div >

            </div>
        
        </>
    )

}

export default Nav;