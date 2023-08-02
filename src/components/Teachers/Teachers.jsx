import React from "react";
import classes from './Teachers.module.css'
import img1 from '../../assests/bg 1.png'
import img2 from '../../assests/teacher_2 2.png'
import img3 from '../../assests/teacher_21 1.png'
import icon from '../../assests/pagination.svg'

const Teachers = () => {
    const Data = [
        {
            img:img1,
            text2:"Melenia Trump",
            text3:"SEO Expert"
        },
        {
            img:img2,
            text2:"Hosaifa Albenian",
            text3:"UI/UX Expert"
        },
        {
            img:img3,
            text2:"Shuprio Shaa",
            text3:"Flutter Master"
        }
    ]
    return(
        <div className={classes.box}>
            <div className={classes.teachers}>
                <div  className={classes.title}>
                    <p className={classes.text}>Meet our</p>
                    <p className={classes.text1}>Expert Teachers</p>
                </div>
                <div className={classes.rectangle}>
                    {
                        Data.map((item,i) => (
                            <div key={i} className={classes.rectangle1}>
                                <img className={classes.img} src={item.img} alt=" "/>
                                <p className={classes.text2}>{item.text2}</p>
                                <p className={classes.text3}>{item.text3}</p>
                            </div>
                        ))
                    }
                </div>
                <img className={classes.icon} src={icon} alt=" "/>
            </div>
        </div>
    )
}
export default Teachers;