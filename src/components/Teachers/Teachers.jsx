import React from "react";
import classes from './Teachers.module.css'
import img1 from '../../assests/bg 1.png'
import img2 from '../../assests/teacher_2 2.png'
import img3 from '../../assests/teacher_21 1.png'
import icon from '../../assests/pagination.svg'

const Teachers = () => {
    return(
        <div className={classes.box}>
            <div className={classes.teachers}>
                <div  className={classes.title}>
                    <p className={classes.text}>Meet our</p>
                    <p className={classes.text1}>Expert Teachers</p>
                </div>
                <div className={classes.rectangle1}>
                    <img className={classes.img} src={img1} alt=" "/>
                    <p className={classes.text2}>Melenia Trump</p>
                    <p className={classes.text3}>SEO Expert</p>
                </div>
                <div className={classes.rectangle2}>
                    <img className={classes.img} src={img2} alt=" "/>
                    <p className={classes.text2}>Hosaifa Albenian</p>
                    <p className={classes.text3}>UI/UX Expert</p>
                </div>
                <div className={classes.rectangle3}>
                    <img className={classes.img} src={img3} alt=" "/>
                    <p className={classes.text2}>Shuprio Shaa</p>
                    <p className={classes.text3}>Flutter Master</p>
                </div>
                <img className={classes.icon} src={icon} alt=" "/>
            </div>
        </div>
    )
}
export default Teachers;