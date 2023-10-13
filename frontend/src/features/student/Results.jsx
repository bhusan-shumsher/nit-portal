import ResultTable from "../../ui/ResultTable"
import {useResult} from '../../hooks/useResult';
export default function Result(){
    const {data,isLoading,error,isError} = useResult();
    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(data.length === 0){
        return(
            <div class="page-wrapper">
            <div class="content container-fluid">
            <h3>Cant find result</h3>
            </div></div>
        );
    }
    return(
        <>
        <div class="page-wrapper">
        <div class="content container-fluid">
           {data?.map((result,index)=>{
            return <ResultTable
                key={index}
                result={result}
            />
           })}
        </div>
        </div>
        </>
    )
}