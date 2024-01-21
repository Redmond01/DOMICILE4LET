import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/landingPage/App'
import Rent from './pages/rentPage/App'
import Single from './pages/sellPage/mobile'
import SharedNav from './pages/sharedNav/NavBar'
import Sell from './pages/rentPage/Mobile/Unique'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedNav />} >
          <Route index element={<Home />} />
          <Route path='/rent' element={<Rent />} />
          <Route path='/sell' element={<Sell />}/>
          <Route path='/sell/:params' element ={<Single/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
