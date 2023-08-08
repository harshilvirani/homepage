import React from "react";
import classes from './Header.module.css'
import Logo from '../../assests/Logo.png'
import Vector1 from '../../assests/Vector 1.svg'
import icon from '../../assests/icon.svg'

const Header = () => {
    return (
        <div className={classes.box}>
          <div className={classes.header}>
              <img src={Logo}/>
              <ul className={classes.navbar}>
                  <li className={classes.home}>HOME</li>
                  <li className={classes.text}>ABOUT US</li>
                  <div className={classes.drop}>
                      <li className={classes.text}>COURSES</li>
                      <img src={Vector1}/>
                  </div>
                  <div className={classes.drop}>
                      <li className={classes.text}>EVENTS</li>
                      <img src={Vector1}/>
                  </div>
                  <li className={classes.text}>CONTACT US</li>
                  <li className={classes.text}>BLOG</li>
              </ul>
              <div className={classes.phone}>
                  <img src={icon}/>
                  <p className={classes.text}>+91 99796 19162</p>
              </div>
              <div>
                  <button className={classes.btn}>Book Free Class</button>
              </div>
          </div>
        </div>
    )
}

export default Header;