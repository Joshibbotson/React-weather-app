import { apiKey } from "./apikey"

export default async function getLocation(city: string, apiKey: string) {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`,
            { mode: "cors" }
        )
        const result: object = await response.json()
        console.log(result)
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
}

export async function getData(latAndLon: string) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?${latAndLon}&appid=${apiKey}`,
            {
                mode: "cors",
            }
        )
        return response.json()
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
}
