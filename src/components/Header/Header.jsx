import React from "react";
import classes from './Header.module.css'
import Logo from '../../assests/Logo.png'
import Vector1 from '../../assests/Vector 1.svg'
import icon from '../../assests/icon.svg'

const Header = () => {
    return (
        <div className={classes.box}>
            <div className={classes.wrapper}>
                <header className={classes.header}>
                    <img  className={classes.logo} src={Logo} alt="logo"/>
                    <div className={classes.navbar}>
                        <div className={classes.home}>HOME</div>
                        <div className={classes.aboutUs}>ABOUT US</div>
                        <div className={classes.courses}>
                            <div className={classes.text}>COURSES</div>
                            <img className={classes.vector} src={Vector1} alt="vector"/>
                        </div>
                        <div className={classes.events}>
                            <div className={classes.text}>EVENTS</div>
                            <img className={classes.vector} src={Vector1} alt="vector"/>
                        </div>
                        <div className={classes.contactUs}>CONTACT US</div>
                        <div className={classes.blog}>BLOG</div>
                    </div>
                    <div className={classes.phoneNumber}>
                        <div className={classes.icon}>
                            <img src={icon} alt="icon"/>
                        </div>
                        <div className={classes.text2}>+91 99796 19162</div>
                    </div>
                    <div className={classes.bookFreeClass}>
                        <div className={classes.group}>
                            <div className={classes.div}>Book Free Class</div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header;