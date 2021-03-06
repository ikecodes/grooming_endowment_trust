import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, header }) => {
  return (
    <div>
      <Header headerText={header} />
      <div className='container'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
