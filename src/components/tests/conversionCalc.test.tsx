import {
    kelvinToCelcius,
    celciusToFahrenheit,
    fahrenheitToCelcius,
} from "../conversionCalc"

describe("kelvinToCelcius", () => {
    test("converts kelvin to celcius", () => {
        expect(kelvinToCelcius(300)).toBe(26)
    })

    test("returns 0 for non-numeric input", () => {
        expect(kelvinToCelcius(NaN)).toBe(0)
    })
})

describe("celciusToFahrenheit", () => {
    test("converts celcius to fahrenheit", () => {
        expect(celciusToFahrenheit("20°C")).toBe("68 °F")
    })

    test("removes °C from input", () => {
        expect(celciusToFahrenheit("20°C")).toBe("68 °F")
        expect(celciusToFahrenheit("20")).toBe("68 °F")
    })

    test("returns correct value for decimal input", () => {
        expect(celciusToFahrenheit("15.5°C")).toBe("59.9 °F")
    })
})

describe("fahrenheitToCelcius", () => {
    test("converts fahrenheit to celcius", () => {
        expect(fahrenheitToCelcius("68°F")).toBe("20 °C")
    })

    test("removes °F from input", () => {
        expect(fahrenheitToCelcius("68°F")).toBe("20 °C")
        expect(fahrenheitToCelcius("68")).toBe("20 °C")
    })

    test("returns correct value for decimal input", () => {
        expect(fahrenheitToCelcius("59.9°F")).toBe("15.5 °C")
    })
})
