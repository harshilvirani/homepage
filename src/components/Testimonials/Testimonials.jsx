import React from "react";
import classes from './Testimonials.module.css'
import img from '../../assests/indian-man-using-laptop-watching-training-courses-online-showing-thumb-up-working-from-home 1.png'
import coma from '../../assests/coma.svg'
import right from '../../assests/Right.svg'
import left from '../../assests/left.svg'

const Testimonials = () => {
    return(
        <div className={classes.box}>
            <div className={classes.testimonials}>
                <p className={classes.title}>Student Reviews</p>
                <p className={classes.text}>What Our Student Says</p>
                <div className={classes.overlap}>
                    <img className={classes.img} src={img} alt=""/>
                    <img className={classes.coma} src={coma} alt=""/>
                    <p className={classes.review}>
                        I was skeptical of SEO and content marketing at first,
                        but the Lorem Ipsum Company not only proved itself speaking,
                        but the response I have received from customers is incredible.
                        The work is top-notch and I consistently outrank all my competitors on Google.
                    </p>
                    <p className={classes.name}>Jenish Desai</p>
                    <p className={classes.place}>Surat, India</p>
                    <img className={classes.right} src={right} alt= ""/>
                    <img className={classes.left} src={left} alt=" "/>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;