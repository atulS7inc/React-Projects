 import axios from 'axios';

 const API_KEY = '4fe4e4340ad2f79c6dee60de32575281';

 const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

 export const FETCH_WEATHER = 'FETCH_WEATHER';


 export function fetchWeather(city){
 	const url = `${URL}&q=${city},us`;
 	const request = axios.get(url);

 	return {
 		type: FETCH_WEATHER,
 		payload: request
 	};
 }


