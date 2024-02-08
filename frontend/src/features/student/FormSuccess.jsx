import { useShowForm } from "../../hooks/useShowForm";
import {useState} from 'react';
import Spinner from "../../ui/Spinner";
export default function FormSuccess(){
    const {data,isLoading,isError,error} = useShowForm();
    
    if(isLoading){
        return <Spinner/>
    }
    return(
        <>
        <div class="page-wrapper">
        <div class="content container-fluid">
            <span>Form has been submitted. This is only for your reference. DO NOT USE FOR EXAM PURPOSE</span>
        <Viewer url={data}/>
        </div>
        </div>
        </>
    );
};

function Viewer({url}){
    return (
        <>
    <iframe height="1000" width="1000" src={url} type="application/pdf"/>
    {/* <object
      data={url}
      type="application/pdf"
      width="100%"
      height="500px"
 ></object> */}
    </>

    );
}




 