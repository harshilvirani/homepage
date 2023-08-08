import React from "react";
import digital from '../../assests/Digital-Marketing 1.png'
import online from '../../assests/Online-Project 1.png'
import guide from '../../assests/CareerGuide-2 1.png'
import classes from './Courses.module.css'
import loding from '../../assests/e-learning.png'

const Courses = () => {
    const Data = [
        {
            img:digital,
            text6:"Get Started with Digital Marketing",
            text7:"Online SEO Course",
            Btn:"Send Me Free Access"
        },
        {
            img:online,
            text6:"Get Started with Online Project",
            text7:"Steps to start and online project",
            Btn:"I Want To Learn This"
        },
        {
            img:guide,
            text6:"Get Started with 2021 Career Guide",
            text7:"Learn the fast growing in-demand skills in 2021",
            Btn:"Send Me Free Guide"
        }

    ]
    return (
        <div className={classes.box}>
            <div className={classes.courses}>
                <div className={classes.textBox}>
                    <span className={classes.text}>Get access to my paid course</span>
                    <br/>
                    <span className={classes.textWrapper}>Absolutely Free</span>
                </div>
                <div className={classes.rectangle}>
                    {
                        Data.map((item,i)=>(
                            <div  key={i} className={classes.guid}>
                                <img className={classes.diImg} src={item.img} alt=" "/>
                                <div className={classes.text6}>{item.text6}</div>
                                <div className={classes.text7}>{item.text7}</div>
                                <button className={classes.btn2}>{item.Btn}</button>
                            </div>
                        ))
                    }
                </div>
                <div className={classes.success}>
                        <img classNam={classes.img} src={loding} alt=" "/>
                        <div className={classes.text12}>Our Risk-Free Guarantee For Your Success</div>
                </div>
            </div>
        </div>
    )
}
export default Courses;