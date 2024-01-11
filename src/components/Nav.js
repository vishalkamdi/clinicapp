import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { authReducer } from "../reduxData/AuthSlice"
export default function Nav() {

    const user = useSelector(state => state.authInfo.value)
    const dispatch = useDispatch()
    const navigate =useNavigate();
    const Logout =()=>{
        dispatch(authReducer({token:undefined,name:undefined, type:undefined,isLogin:false}))
        navigate("/")
    }
    return <>

        <header>

            <div className="header-area">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">

                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                    <Link to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10">
                                <div className="menu-main d-flex align-items-center justify-content-end">

                                    <div className="main-menu f-right d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                {user.isLogin ?
                                                    <>
                                                        {user.type == "doctor" ? <>
                                                            <li> <Link to="home">Home</Link></li>
                                                            <li> <Link to="newclinic">New Clinic</Link></li>
                                                            <li> <Link to="allclinics">AllClinics</Link></li>
                                                            <li> <Link to="Appointments">Appointments</Link></li>
                                                        </> : ""}

                                                        {user.type == "reception" ? <> </> : ""}
                                                    </>
                                                    :
                                                    <> <li><Link to="home">Home</Link></li>
                                                        <li><Link to="about">About</Link></li>
                                                        <li><Link to="service">Services</Link></li>

                                                        {/* <li><Link to="blog.html">Blog</Link>
                                                    <ul className="submenu">
                                                        <li><Link to="blog.html">Blog</Link></li>
                                                        <li><Link to="blog_details.html">Blog Details</Link></li>
                                                        <li><Link to="elements.html">Element</Link></li>
                                                    </ul>
                                                </li> */}
                                                        <li><Link to="contact">Contact</Link></li>
                                                        <li><Link to="Register">Register</Link></li>
                                                        <li><Link to="Login">Login</Link></li> </>}




                                            </ul>
                                        </nav>
                                    </div>
                                    {user.isLogin ? <><div className="header-right-btn f-right d-none d-lg-block ml-15">
                                        <button onClick={Logout} className="btn header-btn">Logout</button>
                                       
                                    </div></> : <>
                                        <div className="header-right-btn f-right d-none d-lg-block ml-15">
                                        
                                            <Link to="/" className="btn header-btn">Make an Appointment</Link>
                                        </div></>}

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