import React from 'react';
import classes from './Homepage.module.css';
// import Forecast from '../Forecast/Forecast';

const homepage = () => {
    return(
        <div>
            <h1 className={classes.Test}>Weather</h1>
            <form>
                <div className={classes.InputBox}>
                    <h2 className={classes.Title}>Enter your location: </h2>
                    <input className={classes.Input} id="city" type="text" placeholder="Enter City Name"></input>
                </div>
            </form>
        </div>
    )
}

export default homepage;