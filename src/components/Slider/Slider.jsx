import React from "react";
import classes from './Slider.module.css'
import icon1 from '../../assests/student-icon (1).svg'
import icon2 from '../../assests/student-icon.svg'

const Slider = () => {
    return (
        <div className={classes.box}>
            {/*<div className={classes.slider}>*/}
                <div className={classes.overlap}>
                    <div className={classes.text}>
                        <span className={classes.textWrapper}>Learn skills and technologies</span>
                        <span className={classes.span}>
                                   {" "}
                            which are high in demand, with our practical online and offline courses conducted{" "}
                            <span className={classes.textWrapper}>by industry experts</span>
                        </span>

                        {/*<span className={classes.span}>{" "}</span>*/}
                        {/*<span className={classes.textWrapper}></span>*/}
                        <button className={classes.bookClass}>Book a Free Consultation Now</button>
                    </div>
                    {/*<div className={classes.bookClass}>*/}
                    {/*        <p className={classes.p}>Book a Free Consultation Now</p>*/}
                    {/*</div>*/}
                    {/*<div className={classes.div}>*/}
                    <div className={classes.img}>
                        <div className={classes.activeStudents}>
                            <img className={classes.icon} src={icon1} alt="icon1"/>
                            <span className={classes.text2}>1000+</span>
                            <span className={classes.text3}>Active Students</span>
                        </div>
                        <div className={classes.interactiveCourse}>
                            <img className={classes.icon} src={icon2} alt="icon2"/>
                            <span className={classes.text2}>60+</span>
                            <span className={classes.text3}>Interactive Courses</span>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </div>
    )
}

export default Slider;