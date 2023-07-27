import './App.css';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <Courses/>
    </div>
  );
}

export default App;
