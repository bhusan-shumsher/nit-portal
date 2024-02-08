import BarChart from "../../ui/BarChart";
import DoughnutChart from "../../ui/DoughnutChart";
import {useGradeCount} from "../../hooks/useGradeCount"
import Spinner from "../../ui/Spinner";
export default function AcademicSummary(){
    const {data,error,isLoading} = useGradeCount();
    if(isLoading){
        return(
            <Spinner/>
        );
    }
    if(error){
        return <h4>Cant fetch data</h4>
    }
    if(data && data.length >0){
        const key = data.map(d=>{
            return d._id
        });
        const values = data.map(d=>{
            return d.count
        });
        var totalSub = 0;
        values.forEach(v=> totalSub += v);
        const failCount = data.map(d=>{
            return Object.values('F')
        })
        return(
            <div className="col-lg-6">
           <div className="student-personals-grp">
           <div className="card mb-0">
           <div className="card-body">
           <div className="heading-detail">
           </div>
           <div className="student-personals-grp">
   
           <h5>Grade Distribution</h5>
   
           <BarChart
            labels={key}
            values ={values} 
           />
           <h5>Pass/Fail Ratio</h5>

           <DoughnutChart 
            labels= {['Pass','Fail']}
            values ={ [totalSub-failCount.length, failCount.length]}
           />
           </div>
           </div>
           </div>
           </div>
           </div>
       );
    }

    
}