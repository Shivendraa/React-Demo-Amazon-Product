import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <header>        
            <nav className={classes.Topbar}>
                <img src={'https://pngimg.com/uploads/amazon/amazon_PNG11.png'} className="App-logo" alt="logo" />
            </nav>
        </header>

    );
}

export default Topbar;