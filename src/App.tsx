import './App.css';
import MainScreen from './Big_Files/MainScreen';
import ShelterScreen from './Big_Files/ShelterScreen';
import { Routes, Route } from 'react-router-dom';
import ContextProvider from './Context/Context';
import AboutScreen from './Big_Files/AboutScreen';

function App() {
  return (
    <>
    <ContextProvider>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/shelters' element={<ShelterScreen />} />
        <Route path='/about' element={<AboutScreen />} />
      </Routes>
      </ContextProvider>  
    </>
  )
}

export default App
