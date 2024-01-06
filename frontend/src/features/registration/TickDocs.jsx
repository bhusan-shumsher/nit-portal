import {useForm} from 'react-hook-form';
import { useTickDocs } from '../../hooks/registrationHooks/useTickDocs';

export default function TickDocs(){
    const {tick,isLoading} = useTickDocs();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        tick(data);
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
                <h5 className="form-title student-info">Please Check the Documents Submitted<span></span></h5>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group row">
                <label class="col-form-label col-md-2">Document List</label>
                <div class="col-md-10">
                <div class="checkbox">
                <label>
                <input 
                    type="checkbox" 
                    {...register('citizenship')}
                    /> Citizenship
                </label>
                </div>
                <div class="checkbox">
                <label>
                <input 
                    type="checkbox" 
                    {...register('secondaryGradeSheet')}

                    /> Secondary Level GradeSheet
                </label>
                </div>
                <div class="checkbox">
                <label>
                <input 
                    type="checkbox" 
                    {...register('secondaryCharacter')}
/> 
                    Secondary Level Character Certificate
                </label>
                </div>
                <div class="checkbox">
                <label>
                <input type="checkbox"                    {...register('firstHighSchoolGradeSheet')}
/> Grade Sheet (Grade 11)
                </label>
                </div>
                <div class="checkbox">
                <label>
                <input type="checkbox"                    {...register('secondHighSchoolGradeSheet')}
/> Grade Sheet (Grade 12)
                </label>
                </div>
                <div class="checkbox">
                <label>
                <input type="checkbox"                    {...register('highSchoolCharacter')}
/> High School Level Character Certificate
                </label>
                </div>
                <div class="checkbox">
                <label>
                <input type="checkbox"                    {...register('migration')}
/> Migration Certificate
                </label>
                </div>
                <div class="checkbox">
                <label>
                <input type="checkbox"                    {...register('equivalence')}
/> Equivalence Certificate
                </label>
                </div>
                </div>
                </div>
              <button 
                type="submit" 
                class="btn btn-primary"
                >Submit</button>
             </form>
            </div>
            </div>
            </div>
            </div>
                </div>
         </div>
    );
}