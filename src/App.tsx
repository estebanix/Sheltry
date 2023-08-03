import './App.css';
import MainScreen from './Big_Files/MainScreen';
import ShelterScreen from './Big_Files/ShelterScreen';
import { Routes, Route } from 'react-router-dom';
import ContextProvider from './Context/Context';
import AboutScreen from './Big_Files/AboutScreen';
import DonatingScreen from './Big_Files/DonatingScreen';
import LoginScreen from './Big_Files/LoginScreen';

function App() {
  return (
    <>
    <ContextProvider>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/shelters' element={<ShelterScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/donating' element={<DonatingScreen />} />
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
      </ContextProvider>  
    </>
  )
}

export default App
