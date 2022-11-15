import './Perfil.css'
import {FaLinkedin} from "react-icons/fa";
import {FiMessageCircle} from "react-icons/fi";



function Perfil () {
    return (

       <div className='container-card col-4'>
         <img className='img'></img>
          <a href="https://www.linkedin.com/in/patricio-millan-b4535b161/" className='icon'><FaLinkedin/></a>
          <div className='indices'>
           
          </div>
       </div>

    )
}

export { Perfil } 