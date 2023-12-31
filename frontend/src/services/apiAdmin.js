import axios from "axios";
export async function login({email,password}){
    const response = await axios.post('/api/staff/login',{
        email,
        password
    });
    if(!response){
        throw new Error('Cant login!')
    }
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
};

export async function getBasicInfo({rollNumber}){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`/api/admin/basic-info`,
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


// ADD NEW STUDENT
export async function addNewStudent(data){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/department/add-new-student',
        data,
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`,
            }
        }  
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;

};

// ADD ACADEMIC INFO OF STUDENT
export async function addAcademicInfo(data){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/department/add-academic-info',
        data,
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`,
            }
        }  
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;
};

//BULK UPLOAD STUDENT
export async function bulkUploadStudent(data){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/users/create-bulk-users',
        data,
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`,
            }
        }  
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;
}

// BULK UPLOAD STUDENT'S SCHOOL INFORMATION
export async function bulkUploadSchoolInfo(data){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/users/bulk-school-info',
        data,
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`,
            }
        }  
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;
}


// BULK UPLOAD RESULT 
export async function bulkUploadResult(data){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/result/bulk-upload',
        data,
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`,
            }
        }  
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;
}

// GET SUBJECTS OF GIVEN FACULTY AND SEMESTER
export async function getSubjectBySemester({semester,faculty}){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`/api/subjects`,
    {
        params:{
            semester,
            faculty
        },
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


// ADD R3ESULT OF INDIVIDUAL STUDENT 
export async function addResult(data){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/result/add-result',
        data,
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`,
            }
        }  
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;
}

// GET RESULT OF STUDENT BY SEMESTER
export async function getResultBySem({semester, rollNumber}){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.get(`/api/admin/result-by-sem/${rollNumber}/${semester}`,
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`,
            }
            
        }  
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;
}

// EDIT RESULT 
export async function editResult(data){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/result/edit-result',
        data,
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`,
            }
        }  
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;
}

//UPDATE BACKLOGS

export async function updateBacklogs(data){
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await axios.post('/api/result/update-backlogs',
        data,
        {
            headers:{
                'Authorization': 'Bearer '+`${token.token}`,
            }
        }  
    );
    if(!response){
        throw new Error('cant post data');
    }
    return response.data;
}
