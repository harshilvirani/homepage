import React from "react";
import classes from './Events.module.css'
import img1 from '../../assests/piotr-cichosz-NhRk-907Ayc-unsplash 1.png'
import img2 from '../../assests/piotr-cichosz-NhRk-907Ayc-unsplash 1 (1).png'
import img3 from '../../assests/jared-brashier-duNHkmSkW6M-unsplash 1.png'
import img4 from '../../assests/piotr-cichosz-NhRk-907Ayc-unsplash 1 (2).png'
import icon1 from '../../assests/Stroke 3.svg'
import icon2 from '../../assests/calender.svg'

const Events = () => {
    return (
        <div className={classes.box}>
            <div className={classes.events}>
                <div className={classes.overlap}>
                    <div className={classes.title}>
                        <p className={classes.text}>Upcoming Events in</p>
                        <p className={classes.text1}>Online</p>
                    </div>
                    <div className={classes.rectangle1}>
                        <img className={classes.img} src={img1} alt=""/>
                        <p className={classes.text2}>Advanced Social Media Strategy | Online</p>
                        <img className={classes.icon2} src={icon2} alt=""/>
                        <p className={classes.date}>Tuesday, 29 June</p>
                        <img className={classes.icon1} src={icon1} alt=""/>
                    </div>
                    <div className={classes.rectangle2}>
                        <img className={classes.img} src={img2} alt=""/>
                        <p className={classes.text2}>Introduce to Figma | Online</p>
                        <img className={classes.icon2} src={icon2} alt=""/>
                        <p className={classes.date}>Tuesday, 29 June</p>
                        <img className={classes.icon1} src={icon1} alt=""/>
                    </div>
                    <div className={classes.rectangle3}>
                        <img className={classes.img} src={img3} alt=""/>
                        <p className={classes.text2}>Leading Tech Teams: A How to Guide for the Non-Technical |
                            Online</p>
                        <img className={classes.icon2} src={icon2} alt=""/>
                        <p className={classes.date}>Wednesday, 30 June</p>
                        <img className={classes.icon1} src={icon1} alt=""/>
                    </div>
                    <div className={classes.rectangle4}>
                        <img className={classes.img} src={img4} alt=""/>
                        <p className={classes.text2}>Create your Own Personal Brand</p>
                        <img className={classes.icon2} src={icon2} alt=""/>
                        <p className={classes.date}>Tuesday, 29 June</p>
                        <img className={classes.icon1} src={icon1} alt=""/>
                    </div>
                    <button className={classes.btn2}>View All Events</button>
                </div>
            </div>
        </div>
    )
}
export default Events;