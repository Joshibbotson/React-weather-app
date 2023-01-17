import "./App.scss"
import getLocation from "./components/getData"
import apiKey from "./components/apikey"
function App() {
    console.log(getLocation("Tokyo", apiKey))

    return (
        <>
            <p>Hello World</p>
        </>
    )
}

export default App
