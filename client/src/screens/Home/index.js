import React from 'react';
import Loader from '../../components/Loader';
const ProfileCard = React.lazy(() => import('../../components/ProfileCard'));

function Home() {
  return (
    <div className='Home'>
      <React.Suspense fallback={<Loader />}>
        <ProfileCard />
      </React.Suspense>
    </div>
  );
}

export default Home;
