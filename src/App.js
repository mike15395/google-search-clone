
import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchPage from './pages/SearchPage';


function App() {
  

  return (
    <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home  />}> </Route>    
              <Route path='/search-page' element={<SearchPage />}> </Route>    
          </Routes>
            </div>
    </BrowserRouter>
  );
}

export default App;
