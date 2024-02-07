import jwt_decode from 'jwt-decode';

// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { redirect } from 'react-router-dom';
export function decodeToken(){
    const token =  JSON.parse(localStorage.getItem('token'));
    if(!token){
        return false;
    }
    const decoded = jwt_decode(token.token);
    return decoded.role;
};


export function isAccount(){
    const token =  JSON.parse(localStorage.getItem('token'));
    if(!token){
        return false;
    }
    const decoded = jwt_decode(token.token);
    if(decoded.role === 'account'){
        return true;
    }else{
        return false;
    }
};


export  function  isTokenExpired(){
    const token =  JSON.parse(localStorage.getItem('token'));

    const {exp} = jwt_decode(token.token);
    if(Date.now() > exp * 1000){
        return false;
    }else{
        return true;
    }
}

export function isNewStudent(){
    const token =  JSON.parse(localStorage.getItem('token'));
    if(!token){
        return false;
    }
    const decoded = jwt_decode(token.token);
    if(decoded.role === 'newstudent'){
        return true;
    }else{
        return false;
    }
};


export function hasPic(){
    const token =  JSON.parse(localStorage.getItem('token'));
    if(!token){
        return false;
    }
    const decoded = jwt_decode(token.token);
    console.log(typeof decoded.hasPic);
    if(decoded.hasPic ){
        return true;
    }else{
        return false;
    }
}