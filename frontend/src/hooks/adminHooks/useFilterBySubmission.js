import {useQuery} from '@tanstack/react-query';
import {filterBySubmission} from '../../services/apiAdmin';

export function useFilterBySubmission({currentSemester,type}){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['filterForm',currentSemester,type],
        queryFn: ()=>filterBySubmission({currentSemester,type})
    });
    return {data,isLoading,isError,error};
}