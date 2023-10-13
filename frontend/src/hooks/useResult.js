import { useQuery } from "@tanstack/react-query";

import { getResults } from "../services/apiStudent";

export function useResult(){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['result'],
        queryFn: getResults,
    });
    return {data,isLoading,isError,error};
};