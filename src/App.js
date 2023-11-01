import { lazy } from "react"

import { Route, Routes } from "react-router-dom"

import Layout from "./components/Layout";

const HomePage = lazy(() => import('./pages/HomePage'))
const StorePage = lazy(() => import('./pages/StorePage'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'))
const AdvertiserDisclosurePage = lazy(() => import('./pages/AdvertiserDisclosurePage'))

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<HomePage />} />

        <Route path="/store" element={<StorePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/ad" element={<AdvertiserDisclosurePage />} />

      </Route>
    </Routes>
  );
}

export default App;
