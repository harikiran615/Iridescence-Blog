
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About'; 
import Signin from './pages/Signin'; 
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'; 
import Projects from './pages/Projects'; 


export default function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
   
  )
}

