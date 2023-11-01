import axios from "axios";
export async function login({email,password}){
    const response = await axios.post('/api/users/login',{
        email,
        password
    });
    if(!response){
        throw new Error('Cant login!')
    }
    console.log(response);
    return response.data;
};


export async function logout(){
    localStorage.removeItem('token');
};

export async function changePassword({password,confirmPassword}){
    console.log(password)
    const response = await axios.post('/api/users/change-password',{
        password,
        confirmPassword
    },{
        headers:{
            'Authorization': 'Bearer '+`${token.token}`
    
        }
    });

    if(!response){
        console.log(response.data.message)
         throw new Error(response.data.message);
    }
    console.log(response)
    return response.data.message;
}