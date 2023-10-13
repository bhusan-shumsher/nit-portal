import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { getSchoolInfo } from "../services/apiStudent";

export function useSchoolInfo(){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['schoolInfo'],
        queryFn: getSchoolInfo,
    });
    return {data,isLoading,isError,error};

};