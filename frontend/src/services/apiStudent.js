import axios from "axios";

export async function getSchoolInfo(){
    const token = JSON.parse(localStorage.getItem('token'));;

    const response = await axios.get('/api/users/get-school-info',{
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
        }
    });
    if(!response){
        throw new Error('Cant fetch data');
    }
    return response.data.users;
};


export async function getPersonalInfo(){
    const token = JSON.parse(localStorage.getItem('token'));;

    const response = await axios.get('/api/users/get-personal-info',{
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
        }
    });

    if(!response){
        throw new Error('Cant fetch info');
    }
    return response.data;
};

export async function getCurrentSubjects(){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get('/api/users/get-current-subjects',{
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
        }
    });

    if(!response){
        throw new Error('Cant fetch info');
    }
    return response.data;
}


// get all results of current student
export async function getResults(){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get('/api/result',{
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
        }
    });

    if(!response){
        throw new Error('Cant get results');
    }
    return response.data;

};

export async function getBackLogs(){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get('/api/result/backlog',{
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
        }
    });
    if(!response){
        throw new Error('Cant fetch backlog')
    }
    return response.data;
};


export async function postExamForm(formData){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/users/generate-form',{formData},
    {
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
        }
    }
    );
    if(!response){
        throw new Error(response.message);
    }
    return response.data;
};

export async function getExamForm(){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get('/api/users/download-form',
    {

        headers:{
            'Authorization': 'Bearer '+`${token.token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        responseType: 'blob'

    },
    );
    if(!response){
        throw new Error('cant get data');
    }
    console.log(response.data);

    const file = new Blob([response.data],{type:'application/pdf'});
    const fileUrl = URL.createObjectURL(file);
    return fileUrl;
    // return response.data;
};

export async function getGradeCount(){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get('/api/result/grade-count',{
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
        }
    });
    if(!response){
        throw new Error('Cant fetch backlog')
    }
    return response.data;
};

export async function getFeeStatus(){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get('/api/users/get-fee-status',{
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
        }
    });
    if(!response){
        throw new Error('Cant fetch backlog')
    }
    return response.data;
};


export async function uploadPic(formData){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/users/upload-pic',
    formData,
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