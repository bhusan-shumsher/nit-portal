

export default function Alert({message}){
    return(
        <div className="card bg-white">
            <div className="card-body">
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> {message}
                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>
            </div>
        </div>
    );
}