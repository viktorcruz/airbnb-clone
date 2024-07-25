import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import SearchPage from './pages/SearchPage/index';
import Footer from './components/Footer/index'
import './assets/scss/main.scss'

function App() {
  return (

    <div className="App">
      <Router>
     
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/property-details/:id' element={<PropertyDetailsPage />} />

          <Route path='/' element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
