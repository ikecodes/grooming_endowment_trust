import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChairmanMessage from './pages/ChairmanMessage';
import About from './pages/About';
import StaffsAndTrustees from './pages/StaffsAndTrustees';
import Gallery from './pages/Gallery';
import GalleryView from './pages/GalleryView';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import Grants from './pages/Grants';
import GrantsView from './pages/GrantsView';
import Application from './pages/Application';
import Blog from './pages/Blog';
import BlogView from './pages/BlogView';
import Press from './pages/Press';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chairmans-message' exact element={<ChairmanMessage />} />
        <Route path='/about' exact element={<About />} />
        <Route
          path='/staffs-and-trustees'
          exact
          element={<StaffsAndTrustees />}
        />
        <Route path='/gallery' exact element={<Gallery />} />
        <Route path='/gallery-view' exact element={<GalleryView />} />
        <Route path='/frequently-asked-questions' exact element={<Faqs />} />
        <Route path='/contact-us' exact element={<Contact />} />
        <Route path='/portfolio' exact element={<Portfolio />} />
        <Route path='/grants' exact element={<Grants />} />
        <Route path='/grants-view' exact element={<GrantsView />} />
        <Route path='/application' exact element={<Application />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/blog-view' exact element={<BlogView />} />
        <Route path='/press' exact element={<Press />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;