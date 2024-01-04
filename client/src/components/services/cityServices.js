export const getAllCities = () => {
    return fetch(`/cities`).then((res) => res.json()
    )
}