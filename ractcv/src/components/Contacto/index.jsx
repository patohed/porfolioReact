import React, {useState} from 'react';

import { ErrorMessage, Formik, Form, Field  } from 'formik';
import './Contacto.css'
import emailjs from 'emailjs-com';

const Formulario = () => {

    const [inputNombre, cambiarInputNombre] = useState ('');
    const [inputCorreo, cambiarInputCorreo] = useState ('');
    const [inputMensaje, cambiarInputMensaje] = useState ('');

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log('Formulario Enviado!');
        
    }


    const handleInputNombre = (e) => {
        cambiarInputNombre(e.target.value);
    }

    const handleInputCorreo = (e) => {
        cambiarInputCorreo(e.target.value);
    }

    
    const handleInputMensaje = (e) => {
        cambiarInputMensaje(e.target.value);
        cambiarInputMensaje(e.target.value);
    }
    const [formularioEnviado, setFormularioEnviado] = useState (false);
    return (
        
    <Formik 
     initialValues={{
        nombre: 'Nombre',
        correo: 'example@example.com',
        mensaje: 'Mensaje...',

     }}
     validate={(valores) => {
        let error = {};

        if (!valores.nombre){
          Error.nombre = 'Por favor ingresa un nombre'

        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            error.nombre = 'El nombre solo puede contener letrs y espacios'
        }

        if (!valores.correo){
          Error.correo = 'Por favor ingresa un correo electronico'

        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            error.correo = 'Debe ingresar un correo válido'
        }

        return error;
        }}    

     onSubmit ={(valores, {resetForm}) => {
        resetForm();
        console.log('Formulario enviado!');
        setFormularioEnviado(true);
        setTimeout(()=> setFormularioEnviado(false), 3000) 

     }}
    >
    {( {values, errors, touched, handleChange, handleBlur} ) => (
        <div className='contenedor' onSubmit={handleSubmit}>

        <Form  className="formulario col-sm-3" id='form'>
        <div>
            <label action="https://formsubmit.co/millanpatricio@hotmail.com" method="POST" htmlFor="nombre">NOMBRE</label>
            <Field 
               type='text' name="nombre" 
               placeholder="Juan Perez" id="nombre" 
             
               required>   
            </Field>
            {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
        </div>
        <div>
            <label htmlFor="correo">EMAIL</label>
            <Field 
               type='email'
               name="correo"
               id="correo"
               placeholder=''
               >
            </Field>
            {touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
        </div>
        <div>
            <label htmlFor="mensaje">MENSAJE</label>
            <Field className='mensaje' 
               type='text'
               name="mensaje"
               id="mensaje"
               placeholder=''
               >
            </Field>
            {errors.mensaje && <div className='error'>{errors.mensaje}</div>}
            
        </div>
        <button className='submit' type="submit">Enviar</button>
        {formularioEnviado && <p className='formEnviado'>Formulario enviado con exito!</p>}
        </Form>
        </div>
    )}
    </Formik>
        
       
    );

}


export { Formulario }