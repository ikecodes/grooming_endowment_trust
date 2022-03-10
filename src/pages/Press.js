import React from 'react';
import PressCard from '../components/PressCard';
import Layout from '../layouts/Layout';

const Press = () => {
  return (
    <Layout>
      <div className='row'>
        <PressCard />
        <PressCard />
        <PressCard />
        <PressCard />
      </div>
    </Layout>
  );
};

export default Press;