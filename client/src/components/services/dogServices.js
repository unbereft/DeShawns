export const getAllDogs = () => {
    return fetch (`/dogs`).then((res) => res.json()
    )
}


export const getDogsById = (id) => {
    return fetch (`/dogs/${id}`).then((res) => res.json())
}

export const postDog = (newDog) => {
    return fetch (`/dogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(newDog)
    })
}


