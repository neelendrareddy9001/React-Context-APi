import React, {useState} from 'react;
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  const [cart, setCart] = useState([]);
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
