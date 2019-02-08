import React from 'react';

export default function Bio({ t }) {
  return (
    <React.Fragment>
      <div className='ProfileCard__content__bio'>
        <h1>Faïssal Hattou</h1>
        <h2>{t('Web developer')}</h2>
      </div>
      <h2 className='ProfileCard__content__location'>Paris, France</h2>
    </React.Fragment>
  );
}
