import React from 'react';
import Card from '../Card';
import projects from '../../projects';

function CardsContainer() {
  return (
    <ul className='CardsContainer'>
      {projects.map((card, i) => (
        <li key={i} className='CardsContainer__item'>
          <Card {...card} />
        </li>
      ))}
    </ul>
  );
}

export default CardsContainer;
