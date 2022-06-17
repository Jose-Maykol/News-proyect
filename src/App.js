import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ContextProvider } from './context';
import NewsContainer from './components/NewsContainer';
import Category from './pages/Category';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' component={NewsContainer} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </ContextProvider>
  );
}

export default App;
