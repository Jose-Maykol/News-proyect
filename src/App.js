import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ContextProvider } from './context';
import NewsDetailContainer from './components/NewsDetailContainer';
import { AuthProvider } from './AuthContext';
import Category from './pages/Category';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    })
  }, []);

  return (

    <ContextProvider>
      <Router>
        <AuthProvider value={{ currentUser }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<NewsDetailContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/category" element={<Category />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </AuthProvider>
      </Router>
      {/* <Footer /> */}
    </ContextProvider>
  );
}

export default App;
