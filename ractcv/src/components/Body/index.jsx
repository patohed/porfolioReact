import { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import React from "react"
import './Body.css'
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaGithub,FaNodeJs,FaJsSquare,FaAngleLeft, FaAngleRight  } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di"
import { motion } from 'framer-motion'





const arrayOfWords = [<FaReact/>,<FaCss3Alt/>,<FaGithub/>,<FaHtml5/>,<FaBootstrap/>,<DiJavascript1/>, <FaNodeJs/> ];

function Body () {


    const [paragraph, setParagraph] = useState ('');
    const [paragraphCounter, setParagraphCounter] = useState(0);

    const [rotar, setRotar] = useState (false);

    useEffect(()=> {

        const interval = setInterval (() => {
         
            setParagraphCounter((currentValue) => {

                if (currentValue + 1 === arrayOfWords.length) {

                    return 0;
                }

                return currentValue + 1;

            });
        },2500);
        return () => clearInterval (interval);
    }, []);
    

return (

    <div>
    <div className='contendor'>
      <h2 className='nombre'>Patricio Millan</h2>
      <h1 className='animacion'><FaAngleLeft/>Desarrollador Web Full Stack.../<FaAngleRight/><span className='span'>&#160;</span></h1>
    </div>
    <div className='containerBody'>
    <SwitchTransition>
      <CSSTransition classNames="" key={arrayOfWords[paragraphCounter]} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>

    <motion.button 
    animate= {{ rotar: rotar ? 360 : 0}}
    onClick={() => {
      setRotar(!rotar);}
    }
     className='a'> {arrayOfWords[paragraphCounter]} </motion.button>
      </CSSTransition>
    </SwitchTransition>
  </div>
  </div>
)
}

export { Body }


