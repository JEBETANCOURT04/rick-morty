import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitialPage from './components/InitialPage';
import FetchResults from './components/FetchResults';
import FilterComponent from './components/FilterComponent';



function App() {      

  return (    
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path='/' element={<InitialPage />} />
          <Route path='/results' element={<FetchResults />} /> 
          <Route path='/filter' element={<FilterComponent />} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
