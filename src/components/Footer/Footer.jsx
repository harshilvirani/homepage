import React from "react";
import classes from './Footer.module.css'
import logo from '../../assests/Logo.png'


const Footer = () => {
    return (
        <div className={classes.box}>
            <section className={classes.short}>
                <div className={classes.container}>
                    <div className={classes.text}>
                        <p>if you have read this far, you might as well want to start the free trial</p>
                    </div>
                    <div>
                        <button className={classes.btn}>Start The Course Now</button>
                    </div>
                </div>
            </section>
            <footer className={classes.footer}>
                <div className={classes.footer1}>
                    <div className={classes.logo}>
                        <img src={logo}/>
                        <p className={classes.text1}>We denounce with righteous indige nationality and dislike men who
                            are so beguiled and demo by the charms of pleasure of the moment data com so blinded by
                            desire.</p>
                    </div>
                    <div className={classes.contact}>
                        <h3 className={classes.text2}>Contact us</h3>
                        <div className={classes.us}>
                            <i className="fa-solid fa-location-dot"></i>
                            <p className={classes.text1}>B-912, ICC Building, Majura Gate, Surat</p>
                        </div>
                        <div className={classes.us}>
                            <i className="fa-solid fa-phone"></i>
                            <p className={classes.text1}>+91 12346 57890</p>
                        </div>
                        <div className={classes.us}>
                            <i className="fa-solid fa-envelope"></i>
                            <p className={classes.text1}>tenacioustechies@gmail.com</p>
                        </div>
                    </div>
                    <div className={classes.course}>
                        <h3 className={classes.text2}>Courses</h3>
                        <li className={classes.text1}>SEO Expert within 30 days</li>
                        <li className={classes.text1}>Master in UI/UX Design</li>
                        <li className={classes.text1}>Master in Digital Marketing</li>
                        <li className={classes.text1}>Facebook Marketing Certificate</li>
                        <li className={classes.text1}>Master in Digital Marketing</li>
                        <li className={classes.text1}>Facebook Marketing Certificate</li>
                    </div>
                    <div className={classes.connect}>
                        <h3 className={classes.text2}>
                            Connect with us
                        </h3>
                        <div className={classes.icon}>
                            <div>
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                            <div>
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={classes.law}>
                <p className={classes.text1}>Copyright © 2020. Tenacious Techies. All rights reserved.</p>
                <ul className={classes.table}>
                    <li className={classes.text3}>FAQs</li>
                    <li className={classes.text3}>About</li>
                    <li className={classes.text3}>Blog</li>
                    <li className={classes.text3}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;