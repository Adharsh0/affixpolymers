import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Products />
     <Contact />
     <Footer />
    </>
  )
}

export default App
