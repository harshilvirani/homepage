import React from "react";
import classes from './Transform.module.css'
import img from '../../assests/business-people-are-having-discussion 1.png'

const Transform = () => {
    return (
        <div className={classes.box}>
            <div className={classes.Transform}>
                <div className={classes.first}>
                    {/*<div className={classes.rectangle}/>*/}
                        <img className={classes.im} src={img} alt=" "/>
                </div>
                <div className={classes.textBox}>
                    <p className={classes.text}>Transform Your Company by Boosting Skills and Building Teams</p>
                    <p className={classes.text2}>General Assembly's commitment to cultivating in-demand skills
                        <br/>
                        and leading-edge talent extends to your workforce.
                        <br/>
                        <br/>
                        We Transform companies of all sizes by providing,
                        assessing, <br/>and training talent in today's
                        top tech, design, and business <br/>strategies.</p>
                    <button className={classes.btn}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Transform;