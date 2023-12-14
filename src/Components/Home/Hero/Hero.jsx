import React from 'react'
import './Hero.css'
import photo from '../../../Assets/profile-pic.png'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {

    const my=`👋 Hi, I'm 
    a passionate software developer 
    I specialize in Full-stack development and have a knack for turning complex problems into elegant solutions.Beyond coding, I'm an avid Tech Enthusiast.
     Let's connect and create something extraordinary!`;

  return (
    <div className='hero'>

        <div className='hero-left'>
            <h1 className='hero-left-words'>
            <TypeAnimation
        sequence={[
            "Hi My Name is Sourabh",1000
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
            
            </h1>
            <div className='hero-left-words'>
            <TypeAnimation
        sequence={[
            "I am full-stack developer",2000
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      /></div>
            <div className='hero-left-words'>
              <TypeAnimation
        sequence={[
          my,3000
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
</div>
        </div>
        
        <motion.div
        initial={{opacity:0 ,x:-900}} 
        animate={{opacity:1,x:0}}
        transition={{duration:5}} className='hero-right'>
            <motion.img 
            initial={{opacity:0 ,x:-900}} 
            animate={{opacity:1,x:0}}
            transition={{duration:5,repeat:Infinity,repeatType:'mirror'}}
            className='hero-img-profile'
            src={photo} height={400} width={500} alt="" />
        </motion.div>


    </div>
  )
}

export default Hero