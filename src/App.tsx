import "./App.scss"
import getLocation from "./components/getData"
import apiKey from "./components/apikey"
import { useRef } from "react"

function App() {
    const inputValue = useRef("")
    console.log(getLocation("Tokyo", apiKey))

    return (
        <main>
            <h1 className="clouds">Broken Clouds</h1>
            <p className="city">Tokyo</p>
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
                        inputValue.current = e.target.value
                    }}
                />
                <img
                    src={require("./assets/Magnifying_glass.png")}
                    className="magnifiying-glass"
                    onClick={() => {
                        return getLocation(inputValue.current, apiKey)
                    }}
                ></img>
            </div>
        </main>
    )
}

export default App
