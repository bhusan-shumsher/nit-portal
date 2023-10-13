import {useQuery} from '@tanstack/react-query';
import { getStudentById } from '../../services/apiAdmin';

export function useStudentByID({rollNumber}){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['searchResult', rollNumber],
        queryFn: ()=>getStudentById({rollNumber})
    });
    return {data,isLoading,isError,error};
}