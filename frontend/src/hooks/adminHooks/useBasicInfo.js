import {useQuery} from '@tanstack/react-query';
import { getBasicInfo } from '../../services/apiAdmin';

export function useBasicInfo(){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['getBasicInfo'],
        queryFn: getBasicInfo
    });
    return {data,isLoading,isError,error};
}