import './App.css';
import MainScreen from './Big_Files/MainScreen';
import ShelterScreen from './Big_Files/ShelterScreen';
import { Routes, Route } from 'react-router-dom';
import ContextProvider from './Context/Context';

function App() {
  return (
    <>
    <ContextProvider>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/shelters' element={<ShelterScreen />} />
      </Routes>
      </ContextProvider>  
    </>
  )
}

export default App
