import {useQuery} from '@tanstack/react-query';
import { getResultByID } from '../../services/apiAdmin';

export function useResultByID({rollNumber}){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['getResultByID', rollNumber],
        queryFn: ()=>getResultByID({rollNumber})
    });
    return {data,isLoading,isError,error};
}