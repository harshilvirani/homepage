import React from "react";
import classes from './Technologies.module.css'
import img1 from '../../assests/image 3.png'
import img2 from '../../assests/image 4.png'
import img3 from '../../assests/image 5.png'
import img4 from '../../assests/image 6.png'
import img5 from '../../assests/image 7.png'
import img6 from  '../../assests/image 8.png'
import img7 from  '../../assests/image 9.png'
import img8 from  '../../assests/image 10.png'
import img9 from  '../../assests/image 11.png'
import img10 from  '../../assests/image 12.png'
import img11 from  '../../assests/image 13.png'
const Technologies = () => {
    const Img = [
        {
            img:img1
        },
        {
            img:img2
        },
        {
            img:img3
        },
        {
            img:img4
        },
        {
            img:img5
        },
        {
            img:img6
        },
        {
            img:img7
        },
        {
            img:img8
        },
        {
            img:img9
        },
        {
            img:img10
        },
        {
            img:img11
        }
    ]
      return(
          <div className={classes.box}>
              <div className={classes.technologies}>
                  <div className={classes.title}>
                      <p className={classes.p}>We are currently providing online and offline training </p>
                      <p className={classes.ptext}>courses in following technologies</p>
                  </div>
                  <div className={classes.img}>
                      {
                          Img.map((item,i) => (
                              <img key={i} src={item.img}/>
                          ))
                      }
                  </div>
              </div>
          </div>
      )
}
export default Technologies;