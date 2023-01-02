import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import qs from 'qs';
import './StyleHome.css';

import MenuForApp from '../../components/NavBar_Component/NavBar';
import Pagination from '../../components/Pagination_Component/Pagination';
import FooterForApp from '../../components/Footer_component/Footer'

import Loader from "./img/Loader.gif";
import IconPlay from './img/play.svg'

const apiUrl = 'https://kitsu.io/api/edge/';

export default function PagesHome() {
  const [ info, setInfo ] = useState({});
  const [ text, setText ] = useState('');
  const [ offset, setOffset ] = useState(0)

  const LIMIT = 12;

  useEffect(() => {

    const query = {
      page: {
        limit: LIMIT,
        offset,
      }
    };

    if (text) {
      query.filter = {
        text,
      };
    }
      fetch (`${apiUrl}anime?${qs.stringify(query)}`)
      .then((response) => response.json())
      .then((response) => {
      setInfo(response);
      console.log(response)
    });
   }
  ,[text, offset]) 


  return (
    <div className="Home">
        <MenuForApp 
        value={text} 
        onChange={(search) => setText(search)}>
        </MenuForApp>

      <div className='Container-Results'>
        {!info.data &&(
          <img src={Loader} alt="" className='loader'/>
        )}
          {info.data && (
          <ul className='animes-list'>
            {info.data.map((anime) => (
             <div className='CardAnimes'>
              <li key={anime.id}>
                <div className="Container-ImgAnimes"><img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                  className='ImgAnimes'
                /></div>

                <div className='overlay'>
                <span className='ActivePlay'>
                  <button className='BtnPlay'>
                    <img 
                    src={IconPlay} 
                    alt="" 
                    className='IconPlay'
                    />
                  </button>
                </span>
                  <h3 className='TittleAnimes'>
                    {anime.attributes.canonicalTitle}
                  </h3>

                  {anime.attributes.episodeCount &&(
                    <h4 className='Eps'>
                      {anime.attributes.episodeCount} Episódio
                    </h4>
                  )}
                  
                </div>
                
              </li>
             </div>
            ))}
          </ul>
        )}
        
         {info.meta &&(
          <Pagination 
            limit={LIMIT} 
            offSet={offset} setOffset={setOffset} 
            total={info.meta.count}
          ></Pagination>
      )}
      </div>

     <FooterForApp>
     </FooterForApp>
     
    </div>
  );
}