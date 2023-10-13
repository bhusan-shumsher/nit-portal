import {useQuery} from '@tanstack/react-query';
import { searchStudentForAccount } from '../../services/apiAccount';
export function useSearchStudent({studentName,rollNumber,faculty,semester}){
    const {data,isLoading,isError,error} = useQuery({
        queryKey: ['searchResultForAccount',studentName, rollNumber, semester, faculty],
        queryFn: ()=>searchStudentForAccount({studentName,rollNumber, semester, faculty})
    });
    return {data,isLoading,isError,error};
}