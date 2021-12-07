import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Weather.css'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        // useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.cityName}&appid=c9473ed99591d86b8e43e9d96603029f&units=metric`)
            .then(res => res.json())
            .then(data => {
                setWeatherData(data);
                console.log(data)
            })
        // }, [data.cityName])
        reset()

    };
    return (
        <div className="weather grid justify-items-center">
            <div className="w-full max-w-xs">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="weather-form ">
                    <div className="mb-4 inline-block">
                        <label className="inline-block text-gray-700 text-sm font-bold mb-2" htmlFor="cityName">
                            Welcome to our weather updater
                        </label><br />
                        <input className="shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register("cityName", { required: true })}
                            type="text" placeholder="Enter City" />
                    </div>

                    <div className=" inline-block flex items-center justify-between">
                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                            value="Search"
                            type="submit" />
                    </div>
                    {
                        !weatherData ? ''
                            :
                            <>

                                <div className="m-0">
                                    <p className="font-bold	m-0">Weather of {weatherData?.name}:</p>
                                    <p className="m-0">Temparature: {weatherData?.main?.temp}</p>
                                    <p>Feel's like: {weatherData?.main?.feels_like}</p>
                                    <p>It's {weatherData?.weather[0]?.main}</p>
                                </div>

                            </>
                    }
                </form>

            </div>
        </div>
    );

};

export default Weather;