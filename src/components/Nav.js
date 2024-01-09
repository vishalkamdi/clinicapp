import { Link } from "react-router-dom";

export default function Nav(){
    return<>

<header>
       
        <div className="header-area">
            <div className="main-header header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                 
                        <div className="col-xl-2 col-lg-2 col-md-1">
                            <div className="logo">
                                <Link to="index.html"><img src="assets/img/logo/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                            <div className="menu-main d-flex align-items-center justify-content-end">
                        
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav> 
                                        <ul id="navigation">
                                            <li><Link to="index.html">Home</Link></li>
                                            <li><Link to="about.html">About</Link></li>
                                            <li><Link to="services.html">Services</Link></li>
                                            <li><Link to="blog.html">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link to="blog.html">Blog</Link></li>
                                                    <li><Link to="blog_details.html">Blog Details</Link></li>
                                                    <li><Link to="elements.html">Element</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="contact.html">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-right-btn f-right d-none d-lg-block ml-15">
                                    <Link to="#" className="btn header-btn">Make an Appointment</Link>
                                </div>
                            </div>
                        </div>   
                     
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </header>
    </>

}