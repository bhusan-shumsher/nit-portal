


export default function Dropdown({label, values, errors, register, name,defValue}){
    return(
        <div >
            <div className="form-group row">
                <label class="col-form-label col-lg-2">{label}</label>
                <div class="col-lg-10">
                    <div class="input-group">
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
        </div>
        </div>
        
    );
}