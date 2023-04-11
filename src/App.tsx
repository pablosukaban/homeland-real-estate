import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';

function App() {
    return (
        <div className='mx-auto max-w-[1440px] bg-white'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/property/:id' element={<PropertyDetails />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/faq' element={<Faq />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
