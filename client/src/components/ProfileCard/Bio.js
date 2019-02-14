import React from 'react';
import { withNamespaces } from 'react-i18next';

function Bio({ t }) {
  return (
    <>
      <div className='ProfileCard__content__bio'>
        <h1>Faïssal Hattou</h1>
        <h2>{t('Web developer')}</h2>
      </div>
      <h2 className='ProfileCard__content__location'>Paris, France</h2>
    </>
  );
}
export default withNamespaces()(Bio);
