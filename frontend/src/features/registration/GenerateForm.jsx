import { useGenerateForm } from "../../hooks/registrationHooks/useGenerateForm";
import Spinner from '../../ui/Spinner';
export default function GenerateForm(){
    const {generate,isLoading} = useGenerateForm();
    const onSubmit = () => {
        generate();
      }
      if(isLoading){
        <div className="content container-fluid">
                <div className="page-header">
                <div className="row align-items-center">
                <div className="col-sm-12">
                
                </div>
                </div>
                </div>
    
                <div className="row">
                <div className="col-sm-12">
                <div className="card comman-shadow">
                <div className="card-body">
                <div className="row">
                <div className="col-12">
                </div>
                <Spinner/>
            </div>
            </div>
            </div>
            </div>
                </div>
         </div>
      }
    return(
        <div className="content container-fluid">
                <div className="page-header">
                <div className="row align-items-center">
                <div className="col-sm-12">
                
                </div>
                </div>
                </div>
    
                <div className="row">
                <div className="col-sm-12">
                <div className="card comman-shadow">
                <div className="card-body">
                <div className="row">
                <div className="col-12">
                <h5 className="form-title student-info">Generate Form<span></span></h5>
                <h6>**Combine Citizenship, Transcripts, Migration Certificate and other relevant docs into a single image or pdf file**</h6>
                </div>
                <form>
              <button 
                type="button" 
                class="btn btn-primary"
                onClick={onSubmit}>Generate</button>
             </form>
            </div>
            </div>
            </div>
            </div>
                </div>
         </div>
    );
}