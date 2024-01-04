export const getAllWalkers = () => {
    return fetch (`/walkers`).then((res) => res.json()
    )
}