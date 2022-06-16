import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ContextProvider } from './context';
import NewsContainer from './components/NewsContainer';

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' component={NewsContainer} />
        </Routes>
      </Router>
      <Footer />
    </ContextProvider>
  );
}

export default App;
