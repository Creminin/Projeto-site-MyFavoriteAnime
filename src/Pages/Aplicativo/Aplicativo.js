import React from 'react'
import './StyleApplication.css'

import MenuForApp from '../../components/NavBar_Component/NavBar';
import FooterForApp from '../../components/Footer_component/Footer';

const PagesAplicativo = () => {

  return (
    <div className='PagesAplicativo'>
      <MenuForApp>
      </MenuForApp>
      <div className='Container-Results'>

        <section className='FrameApplication'>

          <div className='TittleApplication'>
            <h1>Aplicativo</h1>
          </div>

          <div className='TextExplication'>
            <h3 className='Explication'>
                Depois de muito tempo fora, o MyFavoriteAnime finalmente voltou para a PlayStore!! <br /> 

                Agradeçemos a todos esta espera. Em breve vamos melhorar os nossos servidores de Streaming. A empresa deu uma data de 26 de Julho, portanto até ao fim desse mês, devem estar todos os animes migrados para o novo servidor. <br /> 

                Todas as versões antigas vão deixar de funcionar daqui a cerca de duas semanas. <br /> 

                Sem mais de momento, obrigado a todos os nossos queridos usuários do MyFavoriteAnime e bons animes!! <br /> 
            </h3>
          </div>

          <div className='BtnContainer'>
            <a 
            className='BtnBaixar' 
            href='https://play.google.com/store/games'
            >Baixar aplicativo</a>
          </div>
        </section>

      </div>
      <FooterForApp>
      </FooterForApp>
    </div>
  )
}

export default PagesAplicativo;