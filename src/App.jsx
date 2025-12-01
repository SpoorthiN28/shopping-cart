import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthCheck from './components/Authentication/AuthCheck.jsx';
import Signup from './components/Authentication/Signup.jsx';
import Login from './components/Authentication/Login.jsx';
import Home from './components/Shopping/Home.jsx';
import ShoppingCart from './components/Shopping/ShoppingCart.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/shopping' element={
          <AuthCheck>
            <ShoppingCart />
          </AuthCheck>
        } />
      </Routes>
    </Router>
  );
}

export default App;
