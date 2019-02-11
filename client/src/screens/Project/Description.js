import React from 'react';

export default function Description({ currentProject }) {
  return (
    <div>
      <p>{currentProject.description}</p>
    </div>
  );
}
