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
      return(
          <div className={classes.box}>
              <div className={classes.technologies}>
                  <div className={classes.title}>
                      <p className={classes.p}>We are currently providing online and offline training </p>
                      <p className={classes.ptext}>courses in following technologies</p>
                  </div>
                  <div className={classes.img}>
                      <img src={img1} alt="img1" className={classes.img1}/>
                      <img src={img2} alt="img2 " className={classes.img2}/>
                      <img src={img3} alt="img3" className={classes.img3}/>
                      <img src={img4} alt="img4" className={classes.img4}/>
                      <img src={img5} alt="img5" className={classes.img5}/>
                      <img src={img6} alt="img6" className={classes.img6}/>
                      <img src={img7} alt="img7" className={classes.img7}/>
                      <img src={img8} alt="img8" className={classes.img8}/>
                      <img src={img9} alt="img9" className={classes.img9}/>
                      <img src={img10} alt="img10" className={classes.img10}/>
                      <img src={img11} alt="img11" className={classes.img11}/>
                  </div>
              </div>
          </div>
      )
}
export default Technologies;