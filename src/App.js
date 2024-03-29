import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChairmanMessage from "./pages/ChairmanMessage";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Gallery from "./pages/Gallery";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Awardees from "./pages/Awardees";
import Grants from "./pages/Grants";
import GrantsView from "./pages/GrantsView";
import Application from "./pages/Application";
import Blog from "./pages/Blog";
import BlogView from "./pages/BlogView";
import Press from "./pages/Press";

//////////////////////////ADMIN
import Login from "./pages/Login";
import ScrollToTop from "./utils/ScrollToTop";
import AdminGrants from "./pages/AdminGrants";
import AdminPortfolio from "./pages/AdminPortfolio";
import AdminBlog from "./pages/AdminBlog";
import AdminPress from "./pages/AdminPress";
import AdminMessages from "./pages/AdminMessages";
import AdminApplications from "./pages/AdminApplications";
import AdminGallery from "./pages/AdminGallery";
import AdminStaffTrustees from "./pages/AdminStaffTrustees";
import AdminProtected from "./utils/AdminProtected";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* <Route path='/' exact element={<UnderConstruction />} /> */}
          <Route
            path='/chairmans-message'
            exact
            element={<ChairmanMessage />}
          />
          <Route path='/about' exact element={<About />} />
          <Route path='/our-team' exact element={<OurTeam />} />
          <Route path='/gallery' exact element={<Gallery />} />
          <Route path='/frequently-asked-questions' exact element={<Faqs />} />
          <Route path='/contact-us' exact element={<Contact />} />
          <Route path='/portfolio' exact element={<Portfolio />} />
          <Route path='/awardees' exact element={<Awardees />} />
          <Route path='/grants' exact element={<Grants />} />
          <Route path='/grants/:id/:id' exact element={<GrantsView />} />
          <Route path='/application' exact element={<Application />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/blog/:id' exact element={<BlogView />} />
          <Route path='/press' exact element={<Press />} />

          {/*ADMIN ////////////////////////////////////////////////////////////////// */}
          <Route path='/login' exact element={<Login />} />
          <Route
            path='/admin-grants'
            exact
            element={
              <AdminProtected>
                <AdminGrants />
              </AdminProtected>
            }
          />
          <Route
            path='/admin-portfolio'
            exact
            element={
              <AdminProtected>
                <AdminPortfolio />
              </AdminProtected>
            }
          />
          <Route
            path='/admin-blog'
            exact
            element={
              <AdminProtected>
                <AdminBlog />
              </AdminProtected>
            }
          />
          <Route
            path='/admin-press'
            exact
            element={
              <AdminProtected>
                <AdminPress />
              </AdminProtected>
            }
          />
          <Route
            path='/admin-messages'
            exact
            element={
              <AdminProtected>
                <AdminMessages />
              </AdminProtected>
            }
          />
          <Route
            path='/admin-applications'
            exact
            element={
              <AdminProtected>
                <AdminApplications />
              </AdminProtected>
            }
          />
          <Route
            path='/admin-gallery'
            exact
            element={
              <AdminProtected>
                <AdminGallery />
              </AdminProtected>
            }
          />
          <Route
            path='/admin-staff-trustees'
            exact
            element={
              <AdminProtected>
                <AdminStaffTrustees />
              </AdminProtected>
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
