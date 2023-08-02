import React from 'react';
import classes from './Features.module.css'
import icon1 from '../../assests/Money Back Guarantee icon.svg'
import icon2 from '../../assests/Practical Training icon.svg'
import icon3 from '../../assests/10 Years of Industry Experienced icon.svg'
import icon4 from '../../assests/Professional Trainers icon.svg'


const Features = () => {
    const Data = [
        {
            icon:icon1,
            text1:"Money Back Guarantee",
            text2:"we provide trail matches and risk-free money back guarantee on all our programs."
        },
        {
            icon:icon2,
            text1:"Practical Training",
            text2:"Theory plus hands-on practical training to help you crack your first interview or client."
        },
        {
            icon:icon3,
            text1:"10 Years of Industry Experienced",
            text2:"With more than 10 Years since incorporation, you will be get certification from reputed company"
        },
        {
            icon:icon4,
            text1:"Professional Trainers",
            text2:"All our training are lead and conducted by highly expereinced trainers from the same industry."
        }
    ]
    return(
        <div className={classes.box}>
            {/*<div className={classes.features}>*/}
                <div className={classes.overlap}>
                    <div className={classes.rectangle}>
                        {
                            Data.map((item,i) => (
                                <div key={i} className={classes.rectangle1}>
                                    <img  className={classes.icon1} src={item.icon} alt=" "/>
                                    <p className={classes.text1}>{item.text1}</p>
                                    <p className={classes.text2}>{item.text2}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            {/*</div>*/}
        </div>
    )
}
export default Features;