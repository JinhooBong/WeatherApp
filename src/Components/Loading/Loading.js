import React from 'react';
import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={classes.PageBox}>
            <h1 className={classes.LoadingTitle}>Loading...</h1>
        </div>
    )
}

export default Loading;