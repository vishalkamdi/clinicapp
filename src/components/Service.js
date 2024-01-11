import { Link } from "react-router-dom";

export default function Service(){
    return<>
      
<section className="wantToWork-area section-bg3" data-background="assets/img/gallery/section_bg01.png">
    <div className="container">
        <div className="wants-wrapper w-padding2">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-7 col-lg-9 col-md-8">
                    <div className="wantToWork-caption wantToWork-caption2">
                        <h2>Happy mind <br />healthy life</h2>
                        <p>Almost before we knew it, we<br/> had left the ground</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <Link to="services.html" className="btn f-right sm-left">Take a Service</Link>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="service-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                        <img src="assets/img/icon/services1.svg" alt="" />
                    </div>
                    <div className="cat-cap">
                        <h5><Link to="services.html">Medical</Link></h5>
                        <p>Outpatient department (OPD), Surgical department, Inpatient service (IP), Nursing department, Physical medicine, Paramedical department, and Rehabilitation department, Dietary department, Pharmacy department, Operation theater complex (OT), Radiology department (X-ray), and Non-professional services are some of the departments located in hospitals</p>
                        <Link to="services.html" className="plus-btn"><i className="ti-plus"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                        <img src="assets/img/icon/services2.svg" alt="" />
                    </div>
                    <div className="cat-cap">
                        <h5><a to="services.html">Diagnostic</a></h5>
                        <p>It includes the Diagnose clinical services of pathology Lab, CT Scan, Digital X-ray, Mammography, Stress Test (TMT), 2D Echo, Sonography. All medical experts teams physicians, nurses, technicians, technologists, administrators, as well as program assistants and report analysts near you.
Everyone should go for regular health checks, even when they feel are healthy or unhealthy. Your health should still be confirmed by a healthcare professional..</p>
                        <Link to="services.html" className="plus-btn"><i className="ti-plus"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                        <img src="assets/img/icon/services3.svg" alt="" />
                    </div>
                    <div className="cat-cap">
                        <h5><Link to="services.html">Surgical</Link></h5>
                        <p>a patient will be prepared for surgery in the surgical unit, then transferred to the operating room (OR)—which is also part of the surgical unit—for the surgery itself. Then, upon the successful completion of the surgery, the patient will be transferred to the post-anesthesia care unit (PACU) and then discharged or transferred to another hospital unit, such as Med/Surg or the intensive care unit (ICU), for the remainder of their recovery.</p>
                        <Link to="services.html" className="plus-btn"><i className="ti-plus"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>

}