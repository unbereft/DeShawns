
// event listeners for the fields & save
// form fields: Name, City, Walker
// City & Walker -> dropdown Menus? select, NOT input

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getDogsById, postDog } from "../services/dogServices"
import { getAllCities } from "../services/cityServices"
import { getAllWalkers } from "../services/walkerServices"

export const DogForm = () => {
    const [dog, setDog] = useState({ name: "", walkerId: "", cityId: "" })
    const [walkers, setWalkers] = useState([])
    const [cities, setCities] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllWalkers().then((walkerArray) => {
            setWalkers(walkerArray)
        })
    }, [])

    useEffect(() => {
        getAllCities().then((cityArray) => {
            setCities(cityArray)
        })
    }, [])

    const handleInputChange = (event) => {
        setDog({ ...dog, [event.target.name]: event.target.value })
    }

    const handleSave = async () => {
        const newDog = {
            id: dog.id,
            name: dog.name,
            walkerId: parseInt(dog.walkerId),
            cityId: parseInt(dog.cityId)
        }
        const response = await postDog(newDog)
        navigate(`/dogs`)
        
    }

    return (
        <>
            Add a new dog to our system!
            <form>
                <input
                    type="text"
                    name="name"
                    value={dog.name}
                    className="dog-detail"
                    placeholder="Dog Name"
                    required
                    onChange={handleInputChange}
                /> <br />
                <select
                    id="walker"
                    className="dog-detail"
                    placeholder="Walkers"
                    name="walkerId"
                    required
                    onChange={handleInputChange}
                >
                    <option value=""> Choose a Walker</option>
                    {walkers.map((walker) => (
                        <option key={walker.id} value={walker.id}>{walker.name}</option>
                    ))}
                </select> <br />
                <select
                    id="city"
                    className="dog-detail"
                    placeholder="Cities"
                    name="cityId"
                    required
                    onChange={handleInputChange}
                >
                    <option value="" >Choose a City</option>
                    {cities.map((city) => (
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))}

                </select> <br />
            </form>
            <button onClick={handleSave}>Save</button>
        </>
    )


}