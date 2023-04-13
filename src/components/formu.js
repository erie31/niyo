import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './formu.css';

function Formu() {
  const form = useRef();

  //const success = <p>Gracias por contactarte</p>;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
       
      )
      .then(
        (result) => {
          alert(`mensaje enviado con éxito... ${result.text}`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=''>
      <h1>Mi CONTACTO</h1>
      <p>Escribime por cualquier consulta, no importa el tamaño del trabajo</p>
      <form className='cf' ref={form} onSubmit={sendEmail}>
        <div className='cf'>
          <input className='nombre' type='text' placeholder='Nombre' name='user_name' />
          <input className='right' type='text' placeholder='Asunto' name='asunto' />
          <textarea name='mensaje' type='text' placeholder='Mensaje'></textarea>
        </div>
        <input className='' type='submit' value='Enviar' id='input-submit' />
      </form>
    </div>
  );
}

export default Formu;