import { useEffect, useState } from "react";
import { Dog } from "./Dog";
import { getAllDogs } from "../services/dogServices";
import { Link } from "react-router-dom";

export const AllDogs = () => {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        getAllDogs().then(dogArray => {
            setDogs(dogArray)
        })
    }, [])

    return (
        <div className="dogs-container">
            <h1>Dogs</h1>
            {dogs.map((dog) => {
                return (
                    <div className="dog-card" key={dog.id}>
                    <Link to={`/dogs/${dog.id}`}>
                        <Dog dog={dog} />
                    </Link>
                </div>
                )
            })}

            <br /><Link to="/dogs/new"><button>Add Dog</button></Link>
        </div>
    )
}