import React from "react";
import classes from './Future.module.css'
import icon1 from '../../assests/icon(5).svg'
import icon2 from '../../assests/icon (1).svg'
import icon3 from '../../assests/icon (2).svg'
import icon4 from '../../assests/icon (3).svg'

const Future = () => {
    return(
        <div className={classes.box}>
            <div className={classes.future}>
                <div className={classes.title}>
                    <p className={classes.text1}>Fund your</p>
                    <p className={classes.text2}>future</p>
                </div>
                <div className={classes.rectangle1}>
                    <img className={classes.icon} src={icon1} alt="icon1"/>
                    <p className={classes.text3}>Catalyst Program</p>
                    <p className={classes.text4}>Find out how you can learn now, and pay after you’re hired.</p>
                    <button className={classes.btn}>Apply Now</button>
                </div>
                <div className={classes.rectangle2}>
                    <img className={classes.icon} src={icon2} alt=" "/>
                    <p className={classes.text3}>Payment Plan</p>
                    <p className={classes.text4}>Discover easy, low-cost payment plans to finance your education.</p>
                    <button className={classes.btn2}>Apply Now</button>
                </div>
                <div className={classes.rectangle3}>
                    <img className={classes.icon} src={icon3} alt=""/>
                    <p className={classes.text5}>Tuition Discount for Women</p>
                    <p className={classes.text4}>Get cash towards tuition for eligible courses with See her Excel.</p>
                    <button className={classes.btn2}>Apply Now</button>
                </div>
                <div className={classes.rectangle4}>
                    <img className={classes.icon} src={icon4} alt=" "/>
                    <p className={classes.text6}>Employer Sponsorship</p>
                    <p className={classes.text4}>Learn how to request tuition reimbursement from your employer.</p>
                    <button className={classes.btn2}>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Future;