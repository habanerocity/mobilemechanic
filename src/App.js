import styles from "./_App.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Header from "./Components/UI/Header";
import Features from "./Components/Features/Features";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import MapSection from "./Components/MapSection/MapSection";
import SliderSection from "./Components/SliderSection/SliderSection";
import GetStartedSection from "./Components/GetStartedSection/GetStartedSection";
import Banner from "./Components/Footer/Banner";
import Footer from "./Components/Footer/Footer";

// import LoadingSpinner from './Components/UI/LoadingSpinner';

import BtnContext from "./store/btn-context";

// const ServicesSection = React.lazy(() => import('./Components/ServicesSection/ServicesSection'));

function App() {
  const [getQuote, setGetQuote] = useState(false);

  const handleClose = () => {
    setGetQuote(false);
  };

  return (
    <div className={styles.app}>
      <BtnContext.Provider value={getQuote}>
        <Header onClose={handleClose} onConfirm={setGetQuote} />
        <Features onConfirm={setGetQuote} />
        <SliderSection />
        <GetStartedSection onConfirm={setGetQuote} />
        {/* <Suspense fallback={LoadingSpinner}> */}
        <ServicesSection onConfirm={setGetQuote} />
        {/* </Suspense> */}
        <MapSection />
        <Banner onConfirm={setGetQuote} />
      </BtnContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
