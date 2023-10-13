import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { getPersonalInfo } from "../services/apiStudent";

export function usePersonalInfo(){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['personalInfo'],
        queryFn: getPersonalInfo,
    });
    return {data,isLoading,isError,error};

};