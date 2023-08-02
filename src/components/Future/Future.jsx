import React from "react";
import classes from './Future.module.css'
import icon1 from '../../assests/icon(5).svg'
import icon2 from '../../assests/icon (1).svg'
import icon3 from '../../assests/icon (2).svg'
import icon4 from '../../assests/icon (3).svg'

const Future = () => {
    const Data = [
        {
            icon:icon1,
            text3:"Catalyst Program",
            text4:"Find out how you can learn now, and pay after you’re hired.",
            Button:"Apply Now"
        },
        {
            icon:icon2,
            text3:"Payment Plan",
            text4:"Discover easy, low-cost payment plans to finance your education.",
            Button:"Apply Now"
        },
        {
            icon:icon3,
            text3:"Tuition Discount for Women",
            text4:"Get cash towards tuition for eligible courses with See her Excel.",
            Button:"Apply Now"
        },
        {
            icon:icon4,
            text3:"Employer Sponsorship",
            text4:"Learn how to request tuition reimbursement from your employer.",
            Button:"Apply Now"
        }

    ]
    return(
        <div className={classes.box}>
            <div className={classes.future}>
                    <p className={classes.text1}>Fund your</p>
                    <p className={classes.text2}>future</p>
                <div className={classes.rectangle}>
                    {
                        Data.map((item,i) => (
                            <div key={i} className={classes.rectangle1}>
                                <img className={classes.icon} src={item.icon} alt="icon1"/>
                                <p className={classes.text3}>{item.text3}</p>
                                <p className={classes.text4}>{item.text4}</p>
                                <button className={classes.btn2}>{item.Button}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Future;