import React from "react";
import classes from './Path.module.css'
import img1 from '../../assests/Online Courses.png'
import img2 from '../../assests/Freelancer Man.png'
import img3 from '../../assests/Working With Ipad Man.png'

const Path = () => {
    const Data = [
        {
            img:img1,
            text:"Full-Time",
            text2:"Challenge yourself and change your career with an 10-13 week immersive learning experience.",
            Button:"View Full-Time Courses"
        },
        {
            img:img2,
            text:"Part-Time",
            text2:"Enhance your professional potential. Learn in- demand skills in evening, weekend, or 1-week accelerated courses.",
            Button:"View Part-Time Courses"
        },
        {
            img:img3,
            text:"Online",
            text2:"Learn at any level, anywhere. Explore full-time training and flexible part-time classes.",
            Button:"View Online Courses"
        }
    ]
    return(
        <div className={classes.box}>
            <div className={classes.path}>
                <div className={classes.textarea}>
                    <p className={classes.title}>Choose your</p>
                    <p className={classes.title2}>Path</p>
                </div>
                <div className={classes.rectangle}>
                    {
                        Data.map((item,i) => (
                            <div key={i} className={classes.rectangle1}>
                                <img src={item.img} className={classes.img1} alt=""/>
                                <p className={classes.text}>{item.text}</p>
                                <p className={classes.text2}>{item.text2}</p>
                                <button className={classes.btn2}>{item.Button}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Path;