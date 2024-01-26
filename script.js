
async function main() {

    async function get_weather(c_en) {

        let info_received = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c_en}&appid=a9a00f44e38376ddbf41ca481b388336&units=metric`)
        let json_conv = await info_received.json()
        // console.log(json_conv)
        // console.log(json_conv.main.temp)
        // console.log(json_conv.main.humidity)
        // console.log(json_conv.wind.speed)
        // console.log(json_conv.name)
        // console.log(json_conv.weather[0]['id'])
        let w_code = `${json_conv.weather[0]['id']}`

        document.querySelector('.temperature_box').innerHTML = `${json_conv.main.temp}°c`
        document.querySelector('.location_box').innerHTML = `${json_conv.name}`
        document.querySelector('.humidity_box').innerHTML = `<img src="svgelements/humidity.svg" alt=""><p>${json_conv.main.humidity}%</p><p>Humidity</p>`
        document.querySelector('.wind_speed_box').innerHTML = `<img src="svgelements/fastwind.svg" alt=""><p>${json_conv.wind.speed} km/h</p><p>Wind Speed</p> `

        if (w_code.startsWith(2)) {
            document.querySelector('.weather_image').innerHTML = `<img src="svgelements/thunder.svg" alt="">`
            console.log(w_code)
        }
        else if (w_code.startsWith(3)) {
            document.querySelector('.weather_image').innerHTML = `<img src="svgelements/rain.svg" alt="">`
            console.log(w_code)
        }
        else if (w_code.startsWith(5)) {
            document.querySelector('.weather_image').innerHTML = `<img src="svgelements/rain.svg" alt="">`
            console.log(w_code)
        }
        else if (w_code.startsWith(6)) {
            document.querySelector('.weather_image').innerHTML = `<img src="svgelements/snow.svg" alt="">`
            console.log(w_code)
        }
        else if (w_code.startsWith(7)) {
            document.querySelector('.weather_image').innerHTML = `<img src="svgelements/mist.svg" alt="">`
            console.log(w_code)
        }
        else if (w_code.startsWith(8) && w_code.endsWith(0)) {
            document.querySelector('.weather_image').innerHTML = `<img src="svgelements/sun.svg" alt="">`
            console.log(w_code)
        }
        else if (w_code.startsWith(8)) {
            document.querySelector('.weather_image').innerHTML = `<img src="svgelements/cloud.svg" alt="">`
            console.log(w_code)
        }
    }


    document.querySelector('.search_click_button').addEventListener('click', () => {
        var city_entered = document.getElementById('searchit').value
        console.log(city_entered)
        get_weather(city_entered)
    })

    document.querySelector('.search_input').addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            var city_entered = document.getElementById('searchit').value
            console.log(city_entered)
            get_weather(city_entered)
        }
    })

}

main()