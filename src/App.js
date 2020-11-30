import './App.css';
//Importing Components
import Nav from './components/Nav'
import Footer from './components/Footer'
import Intro from './components/Intro';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
