
export default function FileInputField(props){
    const {register,errors} = props;
    
    return (
        <div class="card-body">
                    <div class="form-group row">
                        <label class="col-form-label col-md-2">{props.fileType}</label>
                        <div class="col-md-6">
                        <input 
                            class="form-control" 
                            type="file"
                            accept=".jpg, .jpeg, .png, .pdf"
                            {...register('file', { required: true })}
                            />
                        </div>
                        {errors.file && <span>This field is required</span>}

                    </div>
                </div>
    );
}