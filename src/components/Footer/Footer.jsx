import React from "react";
import classes from './Footer.module.css'
import logo from '../../assests/Logo.png'


const Footer = () => {
    return (
        <div className={classes.box}>
            <div className={classes.footer}>
                <div className={classes.box2}>
                    <div className={classes.text3}>if you have read this far, you might as well want to start the free
                        trial
                    </div>
                    <button className={classes.btn3}>Start The Course Now</button>
                </div>
                <div className={classes.footer1}>
                    <div className={classes.about}>
                        <img src={logo} alt=" "/>
                        <p className={classes.text}>We denounce with righteous india nationality and dislike men who are
                            so beguiled and demo by the charms of pleasure of the moment data com so blinded by
                            desire.</p>
                    </div>
                    <div className={classes.contact}>
                        <p className={classes.text1}>Contact Us</p>
                        <div className={classes.address}>
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            <p className={classes.text2}>B-912, ICC Building, Majura Gate, Surat</p>
                        </div>
                        <div className={classes.phone}>
                            <i className="fa-solid fa-phone"></i>
                            <p className={classes.text2}>+91 12346 57890</p>
                        </div>
                        <div className={classes.phone}>
                            <i className="fa-solid fa-envelope"></i>
                            <p className={classes.text2}>tenacioustechies@gmail.com</p>
                        </div>
                    </div>
                    <div className={classes.course}>
                        <p className={classes.text1}>Courses</p>
                        <p className={classes.text2}>SEO Expert within 30 days</p>
                        <p className={classes.text2}>Master in UI/UX Design</p>
                        <p className={classes.text2}>Master in Digital Marketing</p>
                        <p className={classes.text2}>Facebook Marketing Certificate</p>
                        <p className={classes.text2}>Facebook Marketing Certificate</p>
                        <p className={classes.text2}>Master in Digital Marketing</p>
                        <p className={classes.text2}>Master in Digital Marketing</p>
                    </div>
                    <div className={classes.post}>
                        <div className={classes.text1}>Connect with us</div>
                        <div className={classes.insta}>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <p className={classes.text4}>
                    Copyright © 2020. Tenacious Techies. All rights reserved.
                </p>
                   <ul className={classes.textbox}>
                       <li className={classes.text5}>FAQs</li>
                       <li className={classes.text5}>About</li>
                       <li className={classes.text5}>Blog</li>
                       <li className={classes.text5}>Contact</li>
                   </ul>
            </div>
        </div>
    )
}

export default Footer;