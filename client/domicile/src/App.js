import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/landingPage/App'
import SharedNav from './pages/sharedNav/NavBar'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/' element={<SharedNav/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
