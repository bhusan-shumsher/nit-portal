


export default function Label({value, register,name}){
    return(
            // <div className="form-group local-forms">
            <div className="form-group row">
                {/* <label className="col-form-label col-md-2">Readonly Input</label> */}
                <div className="col-md-10">
                <input 
                    type="text" 
                    className="form-control" 
                    value={value} 
                    readonly="readonly"
                    {...register(name)}

                    />
            </div>
            </div>
            // </div>
    );      
}