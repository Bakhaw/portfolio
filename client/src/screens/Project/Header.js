import React from 'react';
import PrevButton from '../../components/PrevButton';

export default function Header({ projectName }) {
  return (
    <div className='Project__header'>
      <PrevButton />
      <h1>{projectName}</h1>
    </div>
  );
}
