import { useRef, useState } from "react"
import ApiServices, { ApiUrls } from "../ApiService/ApiServices";

export default function Register(){

  const [msg,setMsg] =useState("")
  const [loading, setLoading]=useState(false)
  const [status, setStatus] =useState(false)



    const name =useRef();
    const email =useRef();
    const phone =useRef();
    const password=useRef();

    const register =async(event)=>{
        event.preventDefault()

   

    const ob ={
        name:name.current.value,
        email:email.current.value,
        phoneNumber:phone.current.value,
        password:password.current.value

    };
     console.log(ob);

     try {
        setLoading(true)
        const response =await ApiServices.PostApiCall(ApiUrls.DOCTOR_SAVE,ob)
        console.log("response",response);
        if (response.data.status) {
            setStatus(true)
            setMsg(response.data.msg)
            
        }
        else{
            setStatus(false)
            setMsg(response.data.msg)

        }
        
     } catch (error) {
        console.log("something went wrong")
        
     }
     finally{
        setLoading(false)
     }
}



    return<>
     <section className="contact-section">
    <div className="container">

        <div className="row">
            <div className="col-12">
                <h2 className="contact-title">Register Here.........!</h2>
            </div>
            <div className="col-lg-8">
                <form className="form-contact contact_form" 
                onSubmit={register}>
                    <div className="row">
                       
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="name">Name</label>
                                <input className="form-control valid" ref={name} name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="Email">Email</label>
                            <div className="form-group">
                                <input className="form-control valid" ref={email} name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                                <input className="form-control" ref={phone} name="phone" id="phone" type="number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter phone number" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                            <label htmlFor="password">Password</label>
                                <input className="form-control" ref={password} name="password" id="password" type="password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your password'" placeholder="Enter your password" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <button type="submit" className="button button-contactForm boxed-btn">{loading ?"Saving..." :"Save"}</button>
                    </div>
                    <h3 className={status ? "alert alert-success" : "text-danger"}>{msg}</h3>
                </form>
            </div>
         
        </div>
    </div>
</section>
        
    </>
}