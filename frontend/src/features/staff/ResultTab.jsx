
import { useResultByID } from "../../hooks/adminHooks/useResultByID";
import Spinner from "../../ui/Spinner";
import ResultTable from "../../ui/ResultTable";
export default function ResultTab({rollNumber}){
    const {data, error, isLoading} = useResultByID({rollNumber});
    if(isLoading){
       <Spinner/> 
    }
    return(
        <>
        
           {data?.map((result,index)=>{
            return <ResultTable
                key={index}
                result={result}
            />
           })}
        
        </>
    );
}