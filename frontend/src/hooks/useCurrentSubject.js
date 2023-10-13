import { useQuery } from "@tanstack/react-query";

import { getCurrentSubjects } from "../services/apiStudent";

export function useCurrentSubject(){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['currentSubject'],
        queryFn: getCurrentSubjects,
    });
    return {data,isLoading,isError,error};

};