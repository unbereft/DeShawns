import { Link } from "react-router-dom";

export const City = ({city}) => {
    return (
        <div className="city-details">
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
        </div>
    )
}