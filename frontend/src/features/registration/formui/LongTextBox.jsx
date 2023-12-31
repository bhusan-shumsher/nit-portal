


export default function LongTextBox({label, placeholder, isCompulsory, register,errors,name}){
    return(
        <div >
            <div className="form-group row">
                <label class="col-form-label col-lg-2">{label}<span className="login-danger">{isCompulsory ? '*' :''}</span></label>
                <div class="col-lg-10">
                    <div class="input-group">
                        <input 
                        name={name}
                        className="form-control" 
                        type='text' 
                        placeholder={placeholder}
                        aria-label="Username" 
                        aria-describedby="basic-addon1"
                        {...register(name,{required: isCompulsory})}
                        />
                {errors[name] ? <p>This is mandotary</p> : <></>}
                    </div>
                </div>
               
            </div>
        </div>
    );      
}

