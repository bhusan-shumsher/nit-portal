import { useQuery } from "@tanstack/react-query";

import { getFeeStatus } from "../services/apiStudent";

export function useFeeStatus(){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['feeStatus'],
        queryFn: getFeeStatus,
    });
    return {data,isLoading,isError,error};
};