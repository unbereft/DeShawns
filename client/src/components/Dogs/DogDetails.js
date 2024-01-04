import { useState, useEffect } from "react";
import { getDogsById } from "../services/dogServices";
import { Dog } from "./Dog";
import { useParams } from "react-router-dom";


export const DogDetails = () => {
    const [dog, setDog] = useState(undefined)
    const { id } = useParams()

    useEffect(() => {
        getDogsById(id).then(dogArray => {
            setDog(dogArray)
        })
        }
    ,[id])

    return (
        <>
        <h2>Dog Details</h2>
        <div className="dog-individual">
            {dog !== undefined ? <Dog dog={dog} /> : null} Current walker: {dog?.walker.name} <br />
            Current city: {dog?.city.name}
            
        </div>
        </>
    ) 
}