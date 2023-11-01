import jwt_decode from 'jwt-decode';


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