// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Identify from "./components/Identify";
import History from "./components/History";
import PhysicalAnalysis from "./components/PhysicalAnalysis";
import FunctionalAnalysis from "./components/FunctionalAnalysis";
import QualityOfLife from "./components/QualityOfLife";
import ImageGallery from "./components/ImageGallery";
import Container from "./components/ui/Container";
import Accesses from "./components/Accesses";
import Summary from "./components/Summary";
import SideBar from "./components/SideBar";
import Priorities from "./components/Priorities";
import Location from "./components/location";
import Comments from "./components/comments";
function App() {
  return (
    <div className="relative font-modam  text-base  text-gray-800 font-medium">
      <div
        className="blur-sm bg-cover fixed inset-0 -z-10 bg-center"
        style={{ backgroundImage: "url('./images/bolvar.jpg')" }}
      ></div>
      <SideBar />
      <div className="pl-[8-px] pr-[8px] pb-5  md:pr-60 md:pl-5 ">
        {" "}
        {/* حاشیه راست برای نوبار */}
        <Container>
          <div id="identify">
            <Identify />
          </div>
          <div id="location">
            <Location />
          </div>
          <div id="history">
            <History />
          </div>
          <div id="physical">
            <PhysicalAnalysis />
          </div>
          <div id="functional">
            <FunctionalAnalysis />
          </div>
          <div id="accesses">
            <Accesses />
          </div>
          <div id="priorities">
            <Priorities />
          </div>
          <div id="quality">
            <QualityOfLife />
          </div>
          <div id="summary">
            <Summary />
          </div>
          <div id="comments">
            <Comments />
          </div>
          <div id="images">
            <ImageGallery />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
