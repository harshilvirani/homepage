import React from "react";
import digital from '../../assests/Digital-Marketing 1.png'
import online from '../../assests/Online-Project 1.png'
import guide from '../../assests/CareerGuide-2 1.png'
import classes from './Courses.module.css'

const Courses = () => {
    return (
        <div className={classes.box}>
            <div className={classes.courses}>
                <div className={classes.textBox}>
                    <span className={classes.text}>Get access to my paid course</span>
                    <br/>
                    <span className={classes.textWrapper}>Absolutely Free</span>
                </div>
                <div className={classes.digitalMarketing}>
                        <img className={classes.diImg} src={digital} alt=""/>
                        <div className={classes.discount}>
                            <span className={classes.text2}>$90</span>
                            <span className={classes.text3}>Free</span>
                        </div>
                    <div className={classes.text6}>Get Started with Digital Marketing</div>
                    <div className={classes.text7}>Online SEO Course</div>
                    <button className={classes.btn}>Send Me Free Access</button>
                </div>
                <div className={classes.onlineProject}>
                    <img className={classes.diImg} src={online} alt=" "/>
                    <div className={classes.discount}>
                        <span className={classes.text4}>$19</span>
                        <span className={classes.text5}>Free</span>
                    </div>
                    <div className={classes.text8}>Get Started with Online Project</div>
                    <div className={classes.text9}>Steps to start and online project</div>
                    <button className={classes.btn2}>I Want To Learn This</button>
                </div>
                <div className={classes.guid}>
                    <img className={classes.diImg} src={guide} alt=" "/>
                    <div className={classes.text10}>Get Started with 2021 Career Guide</div>
                    <div className={classes.text11}>Learn the fast growing in-demand skills in 2021</div>
                    <button className={classes.btn2}>Send Me Free Guide</button>
                </div>
            </div>
        </div>
    )
}
export default Courses;