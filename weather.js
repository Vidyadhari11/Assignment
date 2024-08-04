const axios=require('axios')

const api_key='Bangalore'
const base_key='http://api.openweathermap.org/data/2.5/weather'

const location='Bangalore'
const url=`${base_key}?q=${location}&appid=${api_key}&units=metric`

async function fetchWeather(){
    try{
       const response=await axios.getAdapter(url);
       const data=response?.data
       const temperature=data.main.temp;
       const weatherDescription=data.weather[0].description;
       console.log(`The temperature in ${location} is ${temperature}F with ${weatherDescription}`)
    }catch(err){
        console.log(err.message)

    }
}

fetchWeather()