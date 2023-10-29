import logo from './logo.svg';
import './App.css';
import Index from './pages/Home';
import AboutIndex from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/footer';
import Index2 from './pages/Contact/index2';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Index/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/about" element={<AboutIndex />}/> 
        <Route path="/index2/:id" element={<Index2 />}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
