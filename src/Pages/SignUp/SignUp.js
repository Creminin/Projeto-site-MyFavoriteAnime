import React from 'react'
import './StyleSign.css'
import { Link } from 'react-router-dom';

import VetorLogo from './img/VetorLogo.png'
import Arrow from './img/angle-double-right.svg'
import BgVideo from  './img/BgVideo.mp4';

const PageSignUp = () => {

  return (
    <div className='PageSignUp'>
      <video src={BgVideo} loop autoPlay muted className='BgVideo'></video>

      <header>
        <nav className='NavSign'>

          <div>
            <img 
            src={VetorLogo} 
            alt="" 
            className='LogoSign'
            />
          </div>

          <div>
            <span className='TextLogin'>
              Você já possui uma conta? 
              <Link 
              to='/login' 
              className='AccessLogin'
              >Acessar minha conta</Link>
            </span>
          </div>

        </nav>
      </header>

      <div className='ContainerSign'>

        <div className='ContentSign'>
          <span className='WelcomeText'>
            <h2>
              Bem vindo ao MyFavoriteAnimes!
              <br/>
              Vamos começar a aventura
            </h2>
          </span>

          <form id='FormSign'>
            <div className='Step1'>
              <div className='DivLabel'>
                <label 
                htmlFor="Email" 
                className='LabelSign'
                >Coloque seu e-mail</label>
              </div>

              <div className='ContainerInput'>
                <img src={Arrow} alt="" className='Arrow'/>
                <input 
                  type="email" 
                  id='Email' 
                  className='InputsSign' 
                />
              </div>
            </div>

            <div className='Step2'>
              <div className='DivLabel'>
                <label 
                htmlFor="Password" 
                className='LabelSign'
                >Crie uma senha</label>
              </div>

              <div className='ContainerInput'>
                <img 
                src={Arrow} 
                alt="" 
                className='Arrow'
                />

                <input 
                type="password" 
                id='Password' 
                className='InputsSign' 
                required
                />
              </div>
            </div>

            <div className='Step3'>
              <div className='DivLabel'>
                <label 
                htmlFor="UserName" 
                className='LabelSign'
                >Escolha um nome de usuário</label>
              </div>

              <div className='ContainerInput'>
                <img 
                src={Arrow} 
                alt="" 
                className='Arrow'
                />

                <input 
                type="text" 
                id='UserName' 
                className='InputsSign' 
                required
                />
              </div>
            </div>

            <div className='Step4'>
              <div className='DivLabel'>
                <label 
                htmlFor="Text" 
                className='LabelSign'
                >Deseja receber novidades através do e-mail? <br/><br/>
                Responda com apenas com: Sim ou Não
                </label>
              </div>

              <div className='ContainerInput'>
                <img 
                src={Arrow} 
                alt="" 
                className='Arrow'
                />

                <input 
                type="text" 
                id='Text' 
                className='InputsSign' 
                required
                />
              </div>
            </div>

            <button 
            type='submit' 
            className='BtnSubmit'
            >Criar minha conta</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default PageSignUp;