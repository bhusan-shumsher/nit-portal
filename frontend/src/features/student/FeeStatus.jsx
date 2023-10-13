import { useFeeStatus } from "../../hooks/useFeeStatus"
import Spinner from "../../ui/Spinner";
import { Navigate } from "react-router-dom";

export default function FeeStatus(){
    const {data,isLoading,error} = useFeeStatus();

    if(isLoading){
        return(
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <Spinner/>
                </div>
            </div>
        );
    }
    if(data && !error){
        console.log(data)
        const {duePaid} = data;
        if(duePaid){
           return <Navigate to="/student/exam-form"/>
        }else{
            return (
                <div class="page-wrapper">
                <div class="content container-fluid">
                   <h2>You have outstanding due left. Please contact the account section.</h2>
                </div>
            </div>
            );
        }
    }
}
