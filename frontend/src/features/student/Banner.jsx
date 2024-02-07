
export default function Banner({firstName, middleName, lastName, faculty, batch,image}){
    return(
    <div className="student-profile-head">
    <div className="profile-bg-img">
    <img src="/img/logo-ncit.png" alt="Profile"/>
    </div>
    <div className="row">
    <div className="col-lg-4 col-md-4">
    <div className="profile-user-box">
    <div className="profile-user-img">
    {image ?<img src={`data:${image?.contentType};base64,${toBase64(image.data)}`} alt="Profile"/>: null}
   
    </div>
    <div className="names-profiles">
    <h4>{firstName} {middleName} {lastName}</h4>
    <h5>{faculty}</h5>
    <h5>Batch: {batch}</h5>
    <h5>Faculty: {faculty}</h5>
    </div>
    </div>
    </div>
    </div>
    </div>
);
}

const toBase64=(data)=>{
const base64 = btoa(String.fromCharCode(... new Uint8Array(data.data)));
return base64;
}