import Navbar from './components/Navbar';
import About from './components/About';

import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
      <div className="container my-3">
      <About/>
      </div>
    </>
  );
}

export default App;
