import { useEffect, useState } from "react";
import { Walker } from "./Walker";
import { getAllWalkers } from "../services/walkerServices";

export const AllWalkers = () => {
    const [walkers, setWalkers] = useState([]);

    useEffect(() => {
        getAllWalkers().then(walkerArray => {
            setWalkers(walkerArray)
        })
    }, [])

    return (
        <div className="walkers-container">
            <h1>Walkers</h1>
            {walkers.map((walker) => {
                return (
                    <div className="walker-card" key={walker.id}>
                        <Walker walker={walker} />
                    </div>
                )
            })}
        </div>
    )
}
