


export default function Dropdown({label, values, errors, register, name,defValue}){
    return(
        <div className="col-12 col-sm-3">
            <div className="form-group local-forms">
                <label>{label} <span className="login-danger">*</span></label>
                <select className="form-control select" {...register(name, {required:true})}>
                    {values.map((value, index)=>{
                        return <option 
                                 key={index}
                                value ={value.value}
                                selected={value.value===defValue ? true: false}
                                >
                                {value.placeholder}
                                </option>
                    })}
                </select>
                {errors[name] ? <p>This is mandotary</p> : <></>}

            </div>
        </div>
    );
}