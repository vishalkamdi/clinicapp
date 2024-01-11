import { useRef, useState } from "react"
import ApiServices, { ApiUrls } from "../ApiService/ApiServices"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authReducer } from "../reduxData/AuthSlice"
export default function Login() {

    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const email = useRef()
    const password = useRef()

    const registr = async (event) => {
        event.preventDefault()
        const ob = {

            email: email.current.value,
            password: password.current.value
        }
        console.log(ob)
        try {
            setLoading(true)
            const response = await ApiServices.PostApiCall(ApiUrls.LOGIN, ob)
            console.log("response", response)
            if (response.data.status) {
                setStatus(true)
                setMsg(response.data.msg)
                const d = dispatch(authReducer({ token: response.data.data.token,
                     name: response.data.data.user.name,
                      type: response.data.data.userType, 
                      isLogin: true }));
                console.log(d)
                navigate("/")

            } else {
                setStatus(false)
                setMsg(response.data.msg)
            }

        } catch (error) {
            console.log(error);
            setStatus(false)
            setMsg("Network Issue")
        } finally {
            setLoading(false)

        }

    }
    return <>
        <section className="contact-section">
            <div className="container">
                <div className="d-none d-sm-block mb-5 pb-4">
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Login Here ..!</h2>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={registr} className="form-contact contact_form" >
                            <div className="row">


                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control valid" ref={email} name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" ref={password} name="password" id="password" type="password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your password'" placeholder="Enter your password" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">{loading ? "Logging..." : "Login"}</button>
                            </div>
                            <h3 className={status ? " alert alert-success" : "text-danger"}>{msg}</h3>
                        </form>
                    </div>

                </div>
            </div>
        </section>

    </>
}