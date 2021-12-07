import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import Weather from '../Weather/Weather';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Weather></Weather>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;

// https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=c9473ed99591d86b8e43e9d96603029f&units=metric
