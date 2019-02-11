import React from 'react';
import CheckIcon from '../../assets/images/check.svg';

export default function Technos({ currentProject }) {
  return (
    <div>
      <ul className='Technos__list'>
        {currentProject &&
          currentProject.technos.map((techno, index) => (
            <li key={index}>
              <img alt='check' src={CheckIcon} />
              <span>{techno}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
