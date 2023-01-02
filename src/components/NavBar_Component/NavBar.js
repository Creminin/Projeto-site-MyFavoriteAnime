import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import useDebounce from '../useDebounce/useDebounce';

import Logo from './img/MyLogo.png';
import IconSearch from './img/search.svg';
import Icon_X from './img/multiply.svg'
import UserIcon from './img/user.png'


const MenuForApp = ({ value, onChange}) => {
  const [ displayValue, setDisplayValue ] = useState(value);
  const debounceChange = useDebounce(onChange, 500);

  function handleChange(e) {
    setDisplayValue(e.target.value)
    debounceChange(e.target.value)
  }
  
  function removeValue(e) {
    setDisplayValue(e.target.value = '')
  }

  return (
    <header className='HeaderHome'>
      <nav>
        <div className='main-nav'>

          <div className='nav-container'>
            <Link to='/'>
              <img 
              src={Logo} 
              alt="" 
              className='Logo'/>
            </Link>

            <div className='items'>
              <ul>
                <Link to='/'>
                  <li>Home</li>
                </Link>

                <Link to='/Aplicativo'>
                  <li>Aplicativo</li>
                </Link>

                <li>
                  <a href="https://discord.gg/2U3vbZAT">Discord</a>
                </li>
              </ul>
            </div>

          </div>

          <div className='InputSearch-content'>

            <button className='BtnSearch'>
              <img 
              src={IconSearch} 
              alt="" 
              className='IconSearch'
              />
            </button>

            <input 
            type='text' 
            value={displayValue} 
            onChange={handleChange} 
            id='InputSearch'
            placeholder='Buscar...'
            />

            {displayValue &&(
            <button className='BtnClear'>
              <img 
              src={Icon_X} 
              alt="" 
              className='IconClear' 
              onClick={removeValue}
              />
            </button>
            )}
            
              
          </div>

          <div className='ContainerUser'>
            <Link to='login'>
              <img 
              src={UserIcon} 
              alt="" 
              className='UserIcon'/>
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default MenuForApp;