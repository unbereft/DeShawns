import { Link } from "react-router-dom";

export const Walker = ({ walker }) => {
    return (
        <div className="walker-details">
            <Link to={`/walkers/${walker.id}`}>{walker.name}</Link>
        </div>
    )
}