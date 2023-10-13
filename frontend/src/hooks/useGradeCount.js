import { useQuery } from "@tanstack/react-query";

import { getGradeCount } from "../services/apiStudent";

export function useGradeCount(){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['gradeCount'],
        queryFn: getGradeCount,
    });
    return {data,isLoading,isError,error};
};