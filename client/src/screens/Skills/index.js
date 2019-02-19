import React from 'react';
import Loader from '../../components/Loader';
const SkillsList = React.lazy(() => import('./SkillsList'));

function Skills() {
  return (
    <div className='Skills fade-in'>
      <React.Suspense fallback={<Loader />}>
        <SkillsList />
      </React.Suspense>
    </div>
  );
}

export default Skills;
