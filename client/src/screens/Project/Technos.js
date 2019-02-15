import React from 'react';

export default function Technos({ currentProject }) {
  return (
    <div>
      <ul className='Technos__list'>
        {currentProject &&
          currentProject.technos.map((techno, index) => (
            <li key={index}>
              <img alt='check' src='assets/images/check.svg' />
              <span>{techno}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
