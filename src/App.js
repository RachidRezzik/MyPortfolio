import './App.css';
//Importing Components
import Nav from './components/Nav'
import Footer from './components/Footer'
import Intro from './components/Intro';
import About from './components/About';
import Work from './components/Work';

function App() {
    const handleScroll = (element) => {
      let element_height = document.querySelector(element).getBoundingClientRect().top
      window.scrollTo({
          top: (element_height - 65 + window.scrollY + 2.5)
      })
  }


  return (
    <div className="App">
      <Nav handleScroll={handleScroll}/>
      <span id="Home"></span>
      <Intro handleScroll={handleScroll}/>
      <span id="About"></span>
      <About />
      <span id="Work"></span>
      <Work />
      <Footer />
    </div>
  );
}

export default App;
