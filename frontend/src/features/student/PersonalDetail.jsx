import BarChart from "../../ui/BarChart";
import DoughnutChart from "../../ui/DoughnutChart";


export default function PersonaDetail({
    firstName,
    middleName,
    lastName,
    gender,
    religion,
    email,
    faculty,
    studentContactNumber,
    fatherContactNumber,
    motherContactNumber,
    dobNepali,
    dobEnglish,
    address,
    district,
    zone,
    ward,
    town,
    batch,
    currentSemester
}){
    return(
        <div className="col-lg-4">
        <div className="student-personals-grp">
        <div className="card">
        <div className="card-body">
        <div className="heading-detail">
        <h4>Personal Details :</h4>
        </div>
        <div className="personal-activity">
        <div className="personal-icons">
        <i className="feather-user"></i>
        </div>
        <div className="views-personal">
        <h4>Name</h4>
        <h5>{firstName} {middleName} {lastName}</h5>
        </div>
        </div>
        <div className="personal-activity">
        <div className="personal-icons">
        <img src="/img/icons/buliding-icon.svg" alt=""/>
        </div>
        <div className="views-personal">
        <h4>Department </h4>
        <h5>{faculty}  </h5>
        <h5>Sem:{currentSemester || '--'}</h5>
        <h5>Batch: {batch || '--'}</h5>
        </div>
        </div>
        <div className="personal-activity">
        <div className="personal-icons">
        <i className="feather-phone-call"></i>
        </div>
        <div className="views-personal">
        <h4>Mobile</h4>
        <h5>{studentContactNumber}</h5>
        <h5> {fatherContactNumber || '--'} {fatherContactNumber? '(Father)':''}</h5>
        <h5> {motherContactNumber || '--'} {motherContactNumber? '(Mother)':''}</h5>

        </div>
        </div>
    
        <div className="personal-activity">
        <div className="personal-icons">
        <i className="feather-mail"></i>
        </div>
        <div className="views-personal">
        <h4>Email</h4>
        <h5>{email}</h5>
        </div>
        </div>
        <div className="personal-activity">
        <div className="personal-icons">
        <i className="feather-user"></i>
        </div>
        <div className="views-personal">
        <h4>Gender</h4>
        <h5>{gender}</h5>
        </div>
        </div>
        <div className="personal-activity">
        <div className="personal-icons">
        <i className="feather-calendar"></i>
        </div>
        <div className="views-personal">
        <h4>Date of Birth</h4>
        <h5>English: {dobEnglish || '--'}</h5>
        <h5>Nepali: {dobNepali || '--'}</h5>

        </div>
        </div>
        <div className="personal-activity">
        <div className="personal-icons">
        <i className="feather-italic"></i>
        </div>
        <div className="views-personal">
        <h4>Religion</h4>
        <h5>{religion}</h5>
        </div>
        </div>
        <div className="personal-activity mb-0">
        <div className="personal-icons">
        <i className="feather-map-pin"></i>
        </div>
        <div className="views-personal">
        <h4>Address</h4>
        <h5>{town},{address},{ward}</h5><br/>
        <h5>{district},{zone}</h5>
        </div>
        </div>
        </div>
        </div>
        </div>

        </div>
    );
}