import {useQuery} from '@tanstack/react-query';
import { getResultBySem } from '../../services/apiAdmin';

export function useGetResultBySem({rollNumber,semester}){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['getResultBySeme', {rollNumber,semester}],
        queryFn: ()=>getResultBySem({rollNumber,semester})
    });
    return {data,isLoading,isError,error};
}