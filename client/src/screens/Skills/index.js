import React from 'react';

const baseImgPath = 'src/assets/images';

const skills = [
  {
    name: 'Teamwork',
    img: `${baseImgPath}/teamwork.svg`
  },
  {
    name: 'Adaptatability',
    img: `${baseImgPath}/adaptability.svg`
  },
  {
    name: 'Creative',
    img: `${baseImgPath}/creative.svg`
  },
  {
    name: 'Active',
    img: `${baseImgPath}/active.svg`
  },
  {
    name: 'React Lover \u{1F37F}',
    img: `${baseImgPath}/react.svg`
  },
  {
    name: 'Passion & Motivation',
    img: `${baseImgPath}/superhero.svg`
  }
];

function Skills() {
  return (
    <div className='Skills'>
      <h1>Skills</h1>
      <ul className='Skills__list'>
        {skills.map(({ img, name }, index) => (
          <li key={index} className='Skills__list__listitem'>
            <h2>{name}</h2>
            <img src={img} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
