import React from 'react';
import classes from './Features.module.css'
import icon1 from '../../assests/Money Back Guarantee icon.svg'
import icon2 from '../../assests/Practical Training icon.svg'
import icon3 from '../../assests/10 Years of Industry Experienced icon.svg'
import icon4 from '../../assests/Professional Trainers icon.svg'

const Features = () => {
    return(
        <div className={classes.box}>
            <div className={classes.features}>
                <div className={classes.overlap}>
                    <div className={classes.rectangle1}>
                        <img  className={classes.icon1} src={icon1} alt=" "/>
                        <p className={classes.text1}>Money Back Guarantee</p>
                        <p className={classes.text2}>We provide trail matches and risk-free money back guarantee on all our programs.</p>
                    </div>
                    <div className={classes.rectangle2}>
                        <img className={classes.icon1} src={icon2} alt=" "/>
                        <p className={classes.text3}>Practical Training</p>
                        <p className={classes.text2}>Theory plus hands-on practical training to help you crack your first interview or client.</p>
                    </div>
                    <div className={classes.rectangle3}>
                        <img className={classes.icon1} src={icon3} alt=" "/>
                        <p className={classes.text4}>10 Years of Industry Experienced</p>
                        <p className={classes.text2}>With more than 10 Years since incorporation, you will be get certification from reputed company</p>
                    </div>
                    <div className={classes.rectangle4}>
                        <img className={classes.icon1} src={icon4} alt=" "/>
                        <p className={classes.text5}>Professional Trainers</p>
                        <p className={classes.text2}>All our training are lead and conducted by highly expereinced trainers from the same industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features;