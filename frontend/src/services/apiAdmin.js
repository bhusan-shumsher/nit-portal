import axios from "axios";


export async function login({email,password}){
    const response = await axios.post('/api/staff/login',{
        email,
        password
    });
    if(!response){
        throw new Error('Cant login!')
    }
    console.log(response);
    return response.data;
};

export async function searchStudent({rollNumber, studentName, semester, faculty, collegeName}){
const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get('/api/admin/student',
    {
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
        },
        params:{
            rollNumber,
            name: studentName,
            faculty,
            semester,
            collegeName
                }
    }
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;
};

export async function getStudentById({rollNumber}){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`/api/admin/student/${rollNumber}`,
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
};

//GET RESULTS OF STUDENT BY ID

export async function getResultByID({rollNumber}){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`/api/admin/result/${rollNumber}`,
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