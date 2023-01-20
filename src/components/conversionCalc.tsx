export function kelvinToCelcius(temp: number) {
    return typeof temp === "number" ? Math.round(temp - 273.15) : 0
}

export function celciusToFahrenheit(temp: string) {
    let removeC: string = String(temp).replace("°C", "")
    let intTemp = parseInt(removeC)
    return Math.round(intTemp * (9 / 5) + 32) + " °F"
}

export function fahrenheitToCelcius(temp: string) {
    let removeF = String(temp).replace("°C", "")
    let intTemp = parseInt(removeF)
    return Math.round((intTemp - 32) * (5 / 9)) + " °C"
}
