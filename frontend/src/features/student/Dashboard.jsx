
import { useQuery } from "@tanstack/react-query";
import { usePersonalInfo } from "../../hooks/usePersonalInfo";
import PersonaDetail from "./PersonalDetail";
import Detail from './Detail';
import Banner from "./Banner";
import SideBar from "../../ui/SideBar";
import Spinner from '../../ui/Spinner';
import BarChart from "../../ui/BarChart";
import DoughnutChart from "../../ui/DoughnutChart";
import AcademicSummary from "./AcademicSummary";
export default function Dashboard () {
    const {data,isLoading,error,isError} =usePersonalInfo();
    if(isLoading){
        return (
            <div className="page-wrapper">
        <div className="content container-fluid">
            <Spinner/>
        </div>
        </div>
        )
    }
    if(error){
        <div className="page-wrapper">
        <div className="content container-fluid">
            <h1>Cant fetch data now</h1>
        </div>
        </div>
    }
    const {email,rollNumber,batch,faculty,firstName, lastName, middleName,dobNepali,dobEnglish,religion,gender,
        district,zone,ward,address,studentContactNumber,town,
        fatherContactNumber,motherContactNumber,currentSemester,imageURL} = data.data;
    return(
        <div className="page-wrapper">
        <div className="content container-fluid">
        <div className="page-header">
        <div className="row">
        <div className="col-sm-12">
        <div className="page-sub-header">
        <h3 className="page-title">Student Details</h3>
        <ul className="breadcrumb">
        <li className="breadcrumb-item"><a href="students.html">Student</a></li>
        <li className="breadcrumb-item active">Student Details</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        <div className="card">
        <div className="card-body">
        <div className="row">
        <div className="col-md-12">
        <div className="about-info">
        </div>
        {/* <SideBar/> */}

        <Banner
            firstName={firstName}
            lastName ={lastName}
            middleName={middleName}
            batch={batch}
            faculty={faculty}
            rollNumber={rollNumber}
            imageURL={imageURL}
        />
        </div>
        </div>
        <div className="row">
        <PersonaDetail
            firstName={firstName}
            middleName={middleName}
            lastName={lastName}
            email={email}
            gender={gender}
            religion={religion}
            faculty={faculty}
            studentContactNumber={studentContactNumber}
            dobEnglish={dobEnglish}
            dobNepali={dobNepali}
            fatherContactNumber={fatherContactNumber}
            motherContactNumber={motherContactNumber}
            address={address}
            district={district}
            zone={zone}
            ward={ward}
            town={town}
            currentSemester={currentSemester}
            batch={batch}
        />
        <AcademicSummary/>
        <Detail/>
        </div>
        </div>
        </div>
        </div>
        </div>
        

    );
}