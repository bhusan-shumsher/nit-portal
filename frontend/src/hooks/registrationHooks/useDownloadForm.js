import { useQuery } from "@tanstack/react-query";

import { getRegForm } from "../../services/apiRegistration";

export function useDownloadForm(){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['downloadRegForm'],
        queryFn: getRegForm,
    });
    return {data,isLoading,isError,error};
};