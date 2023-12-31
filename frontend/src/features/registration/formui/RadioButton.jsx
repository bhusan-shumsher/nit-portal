
export default function RadioButton({label, values, errors, register, name,defValue}){
    return(
        <div >
            <div className="form-group row">
                <label class="col-form-label col-lg-2">{label}</label>
                <div class="col-lg-10">
                    <div class="input-group">
                    
                        {values.map((value, index)=>{
                        return (
                           <section>
                            <label>
                            <input 
                                type="radio"
                                 key={index}
                                value ={value.value}
                                selected={value.value===defValue ? true: false}
                                />
                                {value.placeholder}
                        
                        </label>
                        </section>
                        );


                    })}
                {errors[name] ? <p>This is mandotary</p> : <></>}
                </div>

                </div>
            </div>
        </div>
        
    );
}