import {useQuery} from '@tanstack/react-query';
import { searchStudent } from '../../services/apiAdmin';

export function useSearchStudent({studentName,rollNumber,faculty,semester,collegeName}){
    console.log(studentName);
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['searchResult',studentName, rollNumber, semester, faculty, collegeName],
        queryFn: ()=>searchStudent({studentName,rollNumber, semester, faculty,collegeName})
    });
    return {data,isLoading,isError,error};
}