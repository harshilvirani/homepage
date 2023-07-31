import React from "react";
import classes from './Path.module.css'
import img1 from '../../assests/Online Courses.png'
import img2 from '../../assests/Freelancer Man.png'
import img3 from '../../assests/Working With Ipad Man.png'

const Path = () => {
    return(
        <div className={classes.box}>
            <div className={classes.path}>
                <div className={classes.textarea}>
                    <p className={classes.title}>Choose your</p>
                    <p className={classes.title2}>Path</p>
                </div>
                <div className={classes.rectangle1}>
                    <img src={img1} className={classes.img1} alt="img1"/>
                    <p className={classes.text}>Full-Time</p>
                    <p className={classes.text2}>Challenge yourself and change your career with an 10-13 week immersive learning experience.</p>
                    <button className={classes.btn}>View Full-Time Courses</button>
                </div>
                <div className={classes.rectangle2}>
                    <img className={classes.img1} src={img2} alt="img2"/>
                    <p className={classes.text}>Part-Time</p>
                    <p className={classes.text2}>Enhance your professional potential. Learn in- demand skills in evening, weekend, or 1-week accelerated courses.</p>
                    <button className={classes.btn2}>View Part-Time Courses</button>
                </div>
                <div className={classes.rectangle3}>
                    <img className={classes.img1} src={img3} alt="img3"/>
                    <p className={classes.text}>Online</p>
                    <p className={classes.text2}>Learn at any level, anywhere. Explore full-time training and flexible part-time classes.</p>
                    <button className={classes.btn2}>View Online Courses</button>
                </div>
            </div>
        </div>
    )
}
export default Path;