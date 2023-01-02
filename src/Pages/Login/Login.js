import React from 'react';
import './StyleLogin.css'
import { Link } from 'react-router-dom';

import VetorLogo from './img/VetorLogo.png'
import ImgBackground from './img/ImgBackground.png'
import ImgBackground2 from './img/ImgBackground2.png'

const PagesLogin = () => {
  return (
    <div className='PagesLogin'>
      <img 
      src={ImgBackground} 
      alt="" 
      className='ImgBackground'
      />
      <main>

        <div className='LogoContainer'>
          <Link 
          to='/'
          >
          <img 
          src={VetorLogo} 
          alt="" 
          className='LoginLogo zoomIn'

          /></Link>
        </div>

        <div className="SubText">
          <h1>
            Faça seu login no MyFavoriteAnime
          </h1>
        </div>

        <div className='ContainerForm'>
          <div className='ContentForm'>
            <form>
              <label 
              htmlFor="name" 
              className='LabelsLogin'
              >Nome de usuário ou E-mail</label>

              <input 
              type="text" 
              id='name' 
              className='inputs' 
              required
              />

              <label 
              htmlFor="password" 
              className='LabelsLogin'
              >Senha</label>

              <input 
              type="password" 
              id='password' 
              className='inputs' 
              required
              />

              <button 
              type='submit' 
              className='BtnSubmit'
              >Entrar em minha conta</button>
            </form>
          </div>
        </div>

        <div className='SubTittle'>

         <span className='SubTittleText'>Novo aqui? 
         <Link 
         to='/signup' 
         className='CreateAccount'
         >Crie sua conta agora.</Link>
         </span>

        </div>
      </main>
        <img 
        src={ImgBackground2} 
        alt="" 
        className='ImgBackground'
        />
    </div>
  )
}

export default PagesLogin;