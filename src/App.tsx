import "./App.scss"
import { getWeatherData } from "./components/getData"
import getLocation from "./components/getData"
import apiKey from "./components/apikey"
import { useEffect, useRef, useState } from "react"

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const inputValue = useRef("")
    const weatherData = useRef({})

    useEffect(() => {
        console.log(inputValue)
    }, [inputValue])

    return (
        <main>
            <h1 className="clouds">Broken Clouds</h1>
            <p className="city"></p>
            <h1 className="main-temp" id="temp"></h1>
            <p className="change-temp-type-C">Display °C</p>
            <p className="change-temp-type-F">Display °F</p>
            <div className="weather-img"></div>
            <div className="search-bar">
                <input
                    type="text"
                    name="search"
                    id="search"
                    onBlur={e => {
                        return (inputValue.current = e.target.value)
                    }}
                />
                <img
                    src={require("./assets/Magnifying_glass.png")}
                    className="magnifiying-glass"
                    onClick={() => {
                        return (weatherData.current = getLocation(
                            String(inputValue.current),
                            apiKey
                        ))
                    }}
                ></img>
            </div>
        </main>
    )
}

export default App
