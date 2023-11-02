


export default function TextBox({label, placeholder, isCompulsory, register,errors,name}){
    return(
        <div className="col-12 col-sm-3">
            <div className="form-group local-forms">
                <label>{label}<span className="login-danger">{isCompulsory ? '*' :''}</span></label>
                <input 
                    name={name}
                    className="form-control" 
                    type='text' 
                    placeholder={placeholder}
                    {...register(name,{required: isCompulsory})}
                    />
                {errors[name] ? <p>This is mandotary</p> : <></>}
            </div>
        </div>
    );      
}