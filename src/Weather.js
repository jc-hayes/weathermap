import React from 'react';
import style from './weather.module.css';

const Weather = ({city, country, description, temp, humidity}) => {

    return(
        <div className={style.weather}>
            <h1>{city}, {country}</h1>
            <p>{description}<br/><br/>
            {/* kelvin to farenheit formula: (0K − 273.15) × 9/5 + 32 */}
                Temp: {Number(((temp - 273.15)*(9/5)+32).toFixed(0))} &deg;F<br/><br/>
                Hudmidity: {humidity}%<br/>
            </p>
        </div>
    );
};

export default Weather;