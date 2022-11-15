import React from 'react'
import './Contact.css'
import {FaGithub, FaLinkedin } from "react-icons/fa";
import {BsTelephoneFill, BsMailbox} from "react-icons/bs"
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  return (
    
    <motion.div animate={{y:150, scale: 1}} initial={{scale:0}}  className='container-contact'>
    
    <h4><BsMailbox/> = <a></a>millanpatricio@hotmail.com<a/></h4>
    
    <h4><BsTelephoneFill/> = <a></a> 11 3581 0868<a/></h4>
    
    <h4><FaLinkedin/> = <a href='https://www.linkedin.com/in/patricio-millan-b4535b161/' className='btnLink'>Ir</a></h4>
    
    <h4><FaGithub/> = <a href='https://github.com/patohed' className='btnGit'>Ir</a></h4>
    </motion.div>
    
  )
}

export { Contact }
