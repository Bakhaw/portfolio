import React from 'react';
import { withNamespaces } from 'react-i18next';
import skills from './skills';

function Skills({ t }) {
  return (
    <div className='Skills fade-in'>
      <ul className='Skills__list'>
        {skills.map(({ img, name, tags }, index) => (
          <li key={index} className='Skills__list__listitem'>
            <div className='Skills__list__listitem__header'>
              <img src={img} />
              <h2>{t(name)}</h2>
            </div>
            <ul className='Skills__list__listitem__tags'>
              {tags.map((tag, i) => (
                <li key={i}>{t(tag)}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withNamespaces()(Skills);
