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
      {skills.map((skill, index) => (
        <div>
          <h2>{skill.name}</h2>
          <img src={skill.img} />
        </div>
      ))}
    </div>
  );
}

export default Skills;
