import App from '../App'
import Home from '../views/home'
import About from '@/views/about'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const baseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default baseRouter
