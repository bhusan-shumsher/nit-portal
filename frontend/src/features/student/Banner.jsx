

export default function Banner({firstName, middleName, lastName, faculty, batch}){
    return(
        <div className="student-profile-head">
        <div className="profile-bg-img">
        <img src="/img/logo-ncit.png" alt="Profile"/>
        </div>
        <div className="row">
        <div className="col-lg-4 col-md-4">
        <div className="profile-user-box">
        <div className="profile-user-img">
        <img src="/img/student.jpg" alt="Profile"/>
        <div className="form-group students-up-files profile-edit-icon mb-0">
        <div className="uplod d-flex">
        <label className="file-upload profile-upbtn mb-0">
        <i className="feather-edit-3"></i><input type="file"/>
        </label>
        </div>
        </div>
        </div>
        <div className="names-profiles">
        <h4>{firstName} {middleName} {lastName}</h4>
        <h5>{faculty}</h5>
        <h5>Batch: {batch}</h5>
        </div>
        </div>
        </div>
        {/* <div className="col-lg-4 col-md-4 d-flex align-items-center">
        <div className="follow-group">
        <div className="students-follows">
        <h5>Followers</h5>
        <h4>2850</h4>
        </div>
        <div className="students-follows">
        <h5>Followers</h5>
        <h4>2850</h4>
        </div>
        <div className="students-follows">
        <h5>Followers</h5>
        <h4>2850</h4>
        </div>
        </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-4 d-flex align-items-center">
        <div className="follow-btn-group">
        <button type="submit" className="btn btn-info follow-btns">Follow</button>
        <button type="submit" className="btn btn-info message-btns">Message</button>
        </div>
        </div> */}
        </div>
        </div>
    );
}