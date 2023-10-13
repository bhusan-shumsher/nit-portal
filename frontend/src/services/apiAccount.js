import axios from "axios";

export async function searchStudentForAccount({rollNumber, studentName, semester, faculty}){
    const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.get('/api/account/students',
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`
            },
            params:{
                rollNumber,
                name: studentName,
                faculty,
                semester
                    }
        }
        );
        if(!response){
            throw new Error('cant post data');
        }
        return response.data;
    };
    

export async function markAsPaid({rollNumber, paidStatus}){
    const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.post('/api/account/change-due',{rollNumber,status:paidStatus},
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`
            }  
        }
        );
        if(!response){
            throw new Error('cant post data');
        }
        return response.data;
}