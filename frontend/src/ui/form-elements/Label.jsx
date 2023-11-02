


export default function Label({value, register,name}){
    return(
        <div className="col-12 col-sm-3">
        <div className="form-group local-forms">
                <input 
                    type='text'
                    className="form-control" 
                    value={value} 
                    readonly="readonly"
                    {...register(name)}

                    />
            </div>
            </div>
        //   </div> 
    );      
}

