import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Services from './pages/Services';
import Products from './pages/Products';
import FindStore from './pages/FindStore';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <Services />
        <Products />
        <Contact />
        <FindStore />
        <Footer />
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/findStore' element={<FindStore />} />
      </Routes>
    </>

  );
}

export default App;
