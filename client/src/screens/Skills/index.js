import React from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import skills from './skills';

function Skills() {
  return (
    <ContentWrapper>
      <div className='Skills'>
        <ul className='Skills__list'>
          {skills.map(({ img, name, tags }, index) => (
            <li key={index} className='Skills__list__listitem'>
              <div className='Skills__list__listitem__header'>
                <img src={img} />
                <h2>{name}</h2>
              </div>
              <ul>
                {tags.map((tag, i) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </ContentWrapper>
  );
}

export default Skills;
