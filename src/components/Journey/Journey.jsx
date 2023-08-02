import React from 'react'
import classes from './journey.module.css'
import icon1 from '../../assests/software-engineering-immersive_8n615 1.svg'
import icon2 from '../../assests/ux-design-icon.svg'
import icon3 from '../../assests/data-science-immersive_4mbRh 1.svg'
import icon4 from '../../assests/front-end-web-development_3dKB4 1.svg'
import icon5 from '../../assests/product-management_Z_HpF 1.svg'
import icon6 from '../../assests/data-analytics_1cju9 1.svg'

const Journey = () => {
    const Data = [
        {
            title: "Software Engineering Immersive",
            icon: icon1,
            text2: "ON CAMPUS & ONLINE | FULL TIME",
            text3: "Break into a high-growth, high-pay career. Dive into computer science, get fluent in key frameworks and stacks, build rich apps, and more.",
        },
        {
            title: "UX Design Immersive",
            icon: icon2,
            text2: "ON CAMPUS & ONLINE | FULL TIME",
            text3: "Launch a UX career with the research and design skills today's top companies require. Build a professional-grade portfolio that gets noticed.",
        },
        {
            title: "Data Science Immersive",
            icon: icon3,
            text2: "ON CAMPUS & ONLINE | FULL TIME",
            text3: "Master the basics of machine learning to forecast what's next: predict patterns from large datasets using Python.",
        },
        {
            title: "Front-End Web Development",
            icon: icon4,
            text2: "ONLINE | PART TIME",
            text3: "Use HTML5, CSS3, JavaScript, jQuery, GitHub and Sublime Text to program and lay out a fully responsive, interactive website.",
        },
        {
            title: "Product Management",
            icon: icon5,
            text2: "ON CAMPUS & ONLINE | PART TIME",
            text3: "Guide a product through its lifecycle via lean methodologies that yield viable, market-ready products that anticipate user needs.",
        },
        {
            title: "Data Analytics",
            icon: icon6,
            text2: "ON CAMPUS & ONLINE | PART TIME",
            text3: "Learn to present and communicate data-driven insights via SQL, Excel, and Tableau. Create data visualizations and dashboards.",
        },
    ];
    return (
        <div className={classes.box}>
            <div className={classes.journey}>
                <p className={classes.title}>Become a Professional Today </p>
                <p className={classes.h1}>Start a career in fast growing Technology, Sales and Marketing Skills by
                    joining our practical online and offline training courses</p>
                <div className={classes.rectangle}>
                    {
                        Data.map((item, i) => (
                            <div key={i} className={classes.rectangle1}>
                                <p className={classes.text}>{item.title}</p>
                                <img className={classes.icon} src={item.icon} alt=" "/>
                                <p className={classes.text2}>{item.text2}</p>
                                <p className={classes.text3}>{item.text3}</p>
                            </div>
                        ))
                    }
                </div>
                <button className={classes.btn}>Browse All Courses</button>
            </div>
        </div>
    )
}
export default Journey;