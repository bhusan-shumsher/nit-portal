import { useQuery } from "@tanstack/react-query";

import { getExamForm } from "../services/apiStudent";

export function useShowForm(){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['showExamForm'],
        queryFn: getExamForm,
    });
    return {data,isLoading,isError,error};
};