import { Link } from "react-router-dom";

export const Dog = ({ dog }) => {
    return (
        <div className="dog-details">
            {dog.name}
        </div>
    )
}