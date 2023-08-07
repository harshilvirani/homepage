import React from "react";
import classes from './Footer.module.css'
import logo from '../../assests/Logo.png'


const Footer = () => {
    return (
        <div className={classes.box}>
            <div className={classes.container}>
                <div className={classes.text}>
                    <p>if you have read this far, you might as well want to start the free trial</p>
                </div>
                <div>
                    <button className={classes.btn}>Start The Course Now</button>
                </div>
            </div>
            <footer className={classes.footer}>

            </footer>
        </div>
    )
}

export default Footer;