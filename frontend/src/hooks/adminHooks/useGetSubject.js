import {useQuery} from '@tanstack/react-query';
import { getSubjectBySemester } from '../../services/apiAdmin';

export function useGetSubject({semester,faculty}){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['getSubjectBySemester', {semester,faculty}],
        queryFn: ()=>getSubjectBySemester({semester,faculty})
    });
    return {data,isLoading,isError,error};
}