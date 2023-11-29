
import { Outlet } from 'react-router-dom';
import './App.css';
import NavItems from './components/NavItems';
import Footer from './components/footer';


function App() {
  
  return (
    <>
    <NavItems/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
