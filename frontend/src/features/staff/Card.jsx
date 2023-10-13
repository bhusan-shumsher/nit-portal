
import { NavLink } from "react-router-dom";

export default function Card ({title,count,image,link}){
    return(
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card bg-comman w-100">
            <div className="card-body">
            <NavLink to={link}>

                <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                        <h6>{title}</h6>
                        <h3>{count}</h3>
                    </div>
                    <div className="db-icon">
                        <img src={image} alt="Dashboard Icon"/>
                    </div>
                </div>
                </NavLink>

            </div>
        </div>
    </div>
    );
}