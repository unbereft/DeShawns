import { useEffect, useState } from "react";
import { City } from "./City";
import { getAllCities } from "../services/cityServices";

export const AllCities = () => {
    const [cities, setCities] = useState([])

    useEffect(() => {
        getAllCities().then(cityArray => {
            setCities(cityArray)
        })
    }, [])

    return (
        <div className="cities-container">
            <h1>Cities</h1>
            {cities.map((city) => {
                return (
                    <div className="city-card" key={city.id}>
                        <City city={city} />
                    </div>
                )
            })}
        </div>
    )
}