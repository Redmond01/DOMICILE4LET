import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/landingPage/App'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
            
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
