import React from 'react';
import PrevButton from '../../components/PrevButton';

export default function Header({ bannerTitle }) {
  return (
    <div className='Project__header'>
      <PrevButton />
      <h1>{bannerTitle}</h1>
    </div>
  );
}
