import React from 'react';
import style from './weather.module.css';

const Weather = ({city, country, description, temp, humidity}) => {
    return(
        <div className={style.weather}>
            <h1>{city}'s Weather</h1>
            <p>Description: {description}<br/>
            {/* kelvin to farenheit formula: (0K − 273.15) × 9/5 + 32 */}
                Temp: {Number(((temp - 273.15)*(9/5)+32))} &deg;F<br/>
                Hudmidity: {humidity}%<br/>
            </p>
        </div>
    );
};

export default Weather;