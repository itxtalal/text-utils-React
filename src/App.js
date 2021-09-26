import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#092036';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
