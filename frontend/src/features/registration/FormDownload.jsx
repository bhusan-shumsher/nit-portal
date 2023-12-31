import Spinner from "../../ui/Spinner";
import { useDownloadForm } from '../../hooks/registrationHooks/useDownloadForm';
export default function FormDownload(){
    const {data,isLoading,isError,error} = useDownloadForm();
    
    if(isLoading){
        <>
        <div class="content container-fluid">
        <div className="page-header">
                <div className="row align-items-center">
                <div className="col-sm-12">
                <div className="page-sub-header">
                <ul className="breadcrumb">
                <li className="breadcrumb-item"></li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-12">
                <div className="card comman-shadow">
                <div className="card-body">
                    <Spinner/>
            </div>
            </div>
            </div>
            </div>
        </div>
        </>
    }
    if(isError){
        return(
            <>
        <div class="content container-fluid">
        <div className="page-header">
                <div className="row align-items-center">
                <div className="col-sm-12">
                <div className="page-sub-header">
                <ul className="breadcrumb">
                <li className="breadcrumb-item"></li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-12">
                <div className="card comman-shadow">
                <div className="card-body">
                    <h4>Cant Download form now</h4>
            </div>
            </div>
            </div>
        </div>
        </div>
        </>
        )
    }
    return(
        <>
        <div class="content container-fluid">
        <div className="page-header">
                <div className="row align-items-center">
                <div className="col-sm-12">
                <div className="page-sub-header">
                <h3 className="page-title">Download Form</h3>
                <ul className="breadcrumb">
                <li className="breadcrumb-item"></li>
                <li className="breadcrumb-item active">Registration Form</li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-12">
                <div className="card comman-shadow">
                <div className="card-body">
            <span>**Please Download the form and submit the color printed hard copy of this form along with all supporting docs**</span>
            <Viewer url={data}/>
            </div></div></div></div>
        </div>
        </>
    );
};

function Viewer({url}){
    return (
        <>
    <iframe height="1000" width="800" src={url} type="application/pdf"/>
    </>

    );
}




 