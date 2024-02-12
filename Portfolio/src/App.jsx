
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/footer';


function App() {

  return (
  <>
    <Header />
    
    <Outlet />
    
    <Footer />
  </>
  )
}

export default App
