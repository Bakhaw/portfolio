import React from 'react';
import { withNamespaces } from 'react-i18next';
import ContentWrapper from '../../components/ContentWrapper';
import skills from './skills';

function Skills({ t }) {
  return (
    <ContentWrapper>
      <div className='Skills fade-in'>
        <ul className='Skills__list'>
          {skills.map(({ animation, img, name, tags }, index) => (
            <li key={index} className={`Skills__list__listitem ${animation}`}>
              <div className='Skills__list__listitem__header'>
                <img src={img} />
                <h2>{t(name)}</h2>
              </div>
              <ul>
                {tags.map((tag, i) => (
                  <li key={i}>{t(tag)}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </ContentWrapper>
  );
}

export default withNamespaces()(Skills);
