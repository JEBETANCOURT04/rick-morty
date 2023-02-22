import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitialPage from './components/InitialPage';
import FetchResults from './components/FetchResults';
import ModalCharacter from './components/ModalCharacter';
//import FetchSigleCharacter from './services/FetchSigleCharacter';


function App() {      

  return (    
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path='/' element={<InitialPage />} />
          <Route path='/results' element={<FetchResults />} />  
          {/* <Route path='/modalChar' element={<ModalCharacter />} /> */}
          <Route path='/character/:id' element={<ModalCharacter />} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
