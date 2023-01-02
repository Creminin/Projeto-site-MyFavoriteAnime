import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import FacebookIcon from './img/facebook-messenger.png';
import InstagramIcon from './img/instagram.png'
import TwitterIcon from './img/twitter.png'
import Banner from './img/Banner.png'


const FooterForApp = () => {
  
  return (
    <footer>
      <img 
      src={Banner} 
      alt="" 
      className='BannerImg'
      />
      
      <div className='ContainerFooter'>
        <div className='ContentFooter'>
          <h1 className='TittleFooter'>
            MyFavoriteAnime
          </h1>

          <h3 className='SubTittleFooter'>
            &copy; Copyright MyFavoriteAnime 2022 - Todos os direitos reservados
          </h3>

          <ul>
            <Link to='/'>
              <li className='items'>
                Home
              </li>
            </Link>

            <Link to='/Aplicativo'>
              <li className='items'>
                Aplicativo
              </li>
              </Link>

            <li className='items'>
              <a href="https://discord.gg/2U3vbZAT">
                Discord
              </a>
            </li>
          </ul>

          <div>
            <a href="https://www.facebook.com/BetterAnimeOficial/">
              <img 
              src={FacebookIcon} 
              alt="" 
              className='SocialImg'
              />
            </a>

            <a href="https://www.instagram.com/betteranime_oficial/">
              <img 
              src={InstagramIcon} 
              alt="" 
              className='SocialImg'
              />
            </a>

            <a href="https://twitter.com/BetteranimeO">
              <img 
              src={TwitterIcon} 
              alt="" 
              className='SocialImg'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterForApp 