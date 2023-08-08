import React from "react";
import classes from './Events.module.css'
import img1 from '../../assests/piotr-cichosz-NhRk-907Ayc-unsplash 1.png'
import img2 from '../../assests/piotr-cichosz-NhRk-907Ayc-unsplash 1 (1).png'
import img3 from '../../assests/jared-brashier-duNHkmSkW6M-unsplash 1.png'
import img4 from '../../assests/piotr-cichosz-NhRk-907Ayc-unsplash 1 (2).png'
import icon1 from '../../assests/Stroke 3.svg'
import icon2 from '../../assests/calender.svg';
// import { AiOutlineRight } from 'react-icons/ai';

const Events = () => {
    const Data = [
        {
            img: img1,
            text2: "Advanced Social Media Strategy | Online",
            icon2: icon2,
            date: "Tuesday, 29 June",
            icon1: icon1

        },
        {
            img: img2,
            text2: "Introduce to Figma | Online",
            icon2: icon2,
            date: "Tuesday, 29 June",
            icon1: icon1

        },
        {
            img: img3,
            text2: "Leading Tech Teams: A How to Guide for the Non-Technical | Online",
            icon2: icon2,
            date: "Wednesday, 30 June",
            icon1: icon1

        },
        {
            img: img4,
            text2: "Leading Tech Teams: A How to Guide for the Non-Technical | Online",
            icon2: icon2,
            date: "Tuesday, 29 June",
            icon1: icon1

        }
    ]
    return (
        <div className={classes.box}>
            <div className={classes.events}>
                {/*<div className={classes.overlap}>*/}
                <div className={classes.title}>
                    <p className={classes.text}>Upcoming Events in</p>
                    <p className={classes.text1}>Online</p>
                </div>
                <div className={classes.rectangle}>
                    {
                        Data?.map((item, i) => (
                            <div key={i} className={classes.rectangle1}>
                                <img className={classes.img} src={item.img} alt="" />
                                <div className={classes.textBox}>
                                    <p className={classes.text2}>{item.text2}</p>
                                    <div className={classes.cal}>
                                        <img className={classes.icon2} src={item.icon2} alt="" />
                                        <p className={classes.date}>{item.date}</p>
                                    </div>
                                </div>
                                <div className={classes.parent_img}>
                                    <img className={classes.icon1} src={item.icon1} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <button className={classes.btn2} > View All Events</button >
            </div >

            {/*</div>*/}
        </div >
    )
}
export default Events;