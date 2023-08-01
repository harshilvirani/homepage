import './App.css';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Courses from "./components/Courses/Courses";
import Features from "./components/Features/Features";
import Journey from "./components/Journey/Journey";
import Testimonials from "./components/Testimonials/Testimonials";
import Technologies from "./components/Technologies/Technologies";
import Transform from "./components/Transform/Transform";
import Path from "./components/Path/Path";
import Future from "./components/Future/Future";
import Teachers from "./components/Teachers/Teachers";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <Courses/>
        <Features/>
        <Journey/>
        <Testimonials/>
        <Technologies/>
        <Transform/>
        <Path/>
        <Future/>
        <Teachers/>
        <Events/>
        <Footer/>
    </div>
  );
}

export default App;
