import { getCurrentSubjects, getBackLogs } from "../services/apiStudent";
import { useQuery } from "@tanstack/react-query";


export function useCurrentFailList(){
    const {data,isLoading,error,isError} = useQuery({
        queryKey: ['backLogs'],
        queryFn: getBackLogs
    });
    return {data,isLoading,error,isError};
};