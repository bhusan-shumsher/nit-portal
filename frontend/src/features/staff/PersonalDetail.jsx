import BarChart from "../../ui/BarChart";

export default function PersonalDetail({info}){
    const {schoolInfo} = info;
    return(
<div class="row">
<div class="col-lg-4">
<div class="student-personals-grp">
<div class="card">
<div class="card-body">
<div class="heading-detail">
<h4>Personal Details :</h4>
</div>
<div class="personal-activity">
<div class="personal-icons">
<i class="feather-user"></i>
</div>
<div class="views-personal">
<h4>Name</h4>
<h5>{info.firstName} {info.middleName} {info.lastName}</h5>
</div>
</div>
<div class="personal-activity">
<div class="personal-icons">
<img src="/img/icons/buliding-icon.svg" alt=""/>
</div>
<div class="views-personal">
<h4>Department </h4>
<h5>{info.faculty} - {info.currentSemester} Sem, Batch {info.batch}</h5>
</div>
</div>
<div class="personal-activity">
<div class="personal-icons">
<i class="feather-phone-call"></i>
</div>
<div class="views-personal">
<h4>Mobile</h4>
<h5>{info.studentContactNumber}</h5>
</div>
</div>
<div class="personal-activity">
<div class="personal-icons">
<i class="feather-mail"></i>
</div>
<div class="views-personal">
<h4>Email</h4>
<h5>{info.email}</h5>
</div>
</div>
<div class="personal-activity">
<div class="personal-icons">
<i class="feather-user"></i>
</div>
<div class="views-personal">
<h4>Gender</h4>
<h5>{info.gender}</h5>
</div>
</div>
<div class="personal-activity">
<div class="personal-icons">
<i class="feather-calendar"></i>
</div>
<div class="views-personal">
<h4>Date of Birth</h4>
<h5>{info.dobEnglish}</h5>
<h5>{info.dobNepali}</h5>

</div>
</div>
<div class="personal-activity">
<div class="personal-icons">
<i class="feather-italic"></i>
</div>
<div class="views-personal">
<h4>Parents/Guardian Contact</h4>
<h5>{info.fatherContactNumber || '--'} [Father]</h5>
<h5>{info.motherContactNumber || '--'} [Mother]</h5>
</div>
</div>
<div class="personal-activity mb-0">
<div class="personal-icons">
<i class="feather-map-pin"></i>
</div>
<div class="views-personal">
<h4>Address</h4>
<h5>{info.address},{info.town}</h5>
<h5>{info.district},{info.zone}</h5>

</div>
</div>
</div>
</div>
</div>

</div>
<div class="col-lg-8">
<div class="student-personals-grp">
<div class="card mb-0">
<div class="card-body">
<div class="heading-detail">
<h4>Educational Information</h4>
</div>
<div class="hello-park">
</div>
<div class="hello-park">
<div class="educate-year">
<h6>Year: <b>{schoolInfo.highSchoolYear}</b></h6>
<p>College: <em><b>{schoolInfo.collegeName}, {schoolInfo.highSchoolBoard}</b></em></p>
<p>College Symbol Number: <em><b>{schoolInfo.highSchoolSymbolNumber}</b></em></p>
<p>Marks Obtained : <em><b>{schoolInfo.highSchoolObtainedMarks}/{schoolInfo.highSchoolTotalMarks}</b></em></p>
<p>Division : <em><b>{schoolInfo.highSchoolDivision}</b></em></p>
</div>
<div class="educate-year">
<h6>Year: <b>{schoolInfo.schoolYear}</b></h6>
<p>School: <em><b>{schoolInfo.schoolName}, {schoolInfo.secondaryLevelBoard}</b></em></p>
<p>School Symbol Number: <em><b>{schoolInfo.schoolSymbolNumber}</b></em></p>
<p>Marks Obtained: <em><b>{schoolInfo.schoolObtainedMarks}/{schoolInfo.schoolTotalMarks}</b></em></p>
<p>Division: <em><b>{schoolInfo.schoolDivision}</b></em></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    );
}