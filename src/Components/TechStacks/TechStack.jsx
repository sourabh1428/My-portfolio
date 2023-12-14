import React from 'react'
import './techstack.css'
import img1 from '../../Assets/TECH-ICONS/css-3.svg'
import img2 from '../../Assets/TECH-ICONS/express.svg'
import img3 from '../../Assets/TECH-ICONS/graphql.svg'
import img4 from '../../Assets/TECH-ICONS/java.svg'
import img5 from '../../Assets/TECH-ICONS/html-5.svg'
import img6 from '../../Assets/TECH-ICONS/javascript.svg'
import img7 from '../../Assets/TECH-ICONS/mongodb.svg'
import img8 from '../../Assets/TECH-ICONS/mysql.svg'
import img9 from '../../Assets/TECH-ICONS/nodejs.svg'
import img10 from '../../Assets/TECH-ICONS/react-query.svg'
import img11 from '../../Assets/TECH-ICONS/react.svg'
import img12 from '../../Assets/TECH-ICONS/tailwindcss.svg'
import { motion } from "framer-motion"

const TechStack = () => {
  return (
    <div className='techstack'>
        <div className='techstack-left'>My Tech-Stacks</div>
        <motion.div
        initial={{opacity:0,scale:0.1}} 
        animate={{opacity:1 ,scale:1}}
        transition={{duration:1 ,smooth:true}}
        
        className='techstack-right'>
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img1} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}}  height={80} width={50} className='tech-cons-hue' src={ img2} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img3} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}}  height={80} width={50} className='tech-cons-hue' src={ img4} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img5} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img6} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img7} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img8} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img9} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img10} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img11} alt="" />
            <motion.img initial={{x:-100,opacity:0,rotate:'360deg',scale:0.1}} animate={{x:0,rotate:'0deg',opacity:1,scale:1}} transition={{duration:4,delay:1 ,repeatDelay:5,repeat:Infinity,repeatType:'mirror',smooth:true}} height={80} width={50}  className='tech-cons-hue' src={ img12} alt="" />
          

        </motion.div>

    </div>
  )
}

export default TechStack