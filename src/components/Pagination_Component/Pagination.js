import React from 'react';
import './style.css';

import BackIcon from './img/step-backward-alt.svg';
import SkipIcon from './img/skip-forward-alt.svg';

const MAX_Items = 9;
const MAX_Left  = (MAX_Items - 1) / 2;

const Pagination = ({ limit, offSet, total, setOffset }) => {
  const CurrentPage = offSet ? offSet / limit + 1 : 1;
  const TotalPages = Math.ceil(total / limit);
  const FirstPage = Math.max(CurrentPage - MAX_Left, 1)

  function onPageChange(page) {
    setOffset((page - 1) * limit)
  }

  return (
    <ul className='pagination'>
     <button 
     onClick={() => onPageChange((CurrentPage - 1))}
     disabled={CurrentPage === 1}
     className="Back-And-Skip Back"
     >

      <img 
      src={BackIcon} alt="BackPage" 
      className='Skip-img-Back'
      />Voltar
      </button>
        
      {Array.from({ length: Math.min(MAX_Items, TotalPages)})
      .map((_, index) => index + FirstPage)
      .map((page) => (

        <li key={page} className='pages'>
          <button
            onClick={() => onPageChange((page))}
            className={page === CurrentPage ? 'pagination__item--active' : 'OffSet-Btn'}
          >{page}</button>
        </li>
      ))}

      <button
        onClick={() => onPageChange((CurrentPage + 1))}
        disabled={CurrentPage === TotalPages}
        className="Back-And-Skip Skip"
      >Próximo

        <img 
        src={SkipIcon} 
        alt="" 
        className='Skip-img-Back'
        />
        </button>

    </ul>
  )

};

export default Pagination