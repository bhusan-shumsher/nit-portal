import {useState,useEffect} from 'react';
import axios from 'axios';



export function useFetch(){
    const [data,setData] = useState({});
    const [error,setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function(){
        async function getUsers(){
            try{
                setIsLoading(true);
                const res = await axios.get('http://localhost:3000/api/users/all');
                if(!res.ok){
                    throw new Error('Cant load');
                }
                const d = res.json();
                setData(d.users);
                setIsLoading(false);
            }catch(err){
                setError(err.message);
            }finally{
                setIsLoading(false);
            }
        }
        getUsers()
    },[]);
    return {data,isLoading, error};
}