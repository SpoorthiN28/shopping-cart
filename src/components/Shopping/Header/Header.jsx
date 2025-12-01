import { useRef, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase.jsx';
import { useNavigate, useLocation } from 'react-router-dom';

import CartModal from '../CartModal/CartModal.jsx';
import { CartContext } from '../../../store/shopping-cart.jsx';

import classes from './Header.module.css';

export default function Header({ logout }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  function handleLogin() {
    setIsHomePage(location.pathname === '/')
    navigate('/login');
  }

  function handleClickHome() {
    setIsHomePage(location.pathname === '/')
    navigate('/');
  }

  function handleCheckout() {
    
  }

  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button onClick={handleCheckout}>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header className={classes.mainHeader}>
        <div className={classes.mainTitle}>
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        {!isAuthenticated && isHomePage && (
          <div className={classes.mainHeaderButtons}>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
        {!isHomePage && !isAuthenticated && (
          <div className={classes.mainHeaderButtons}>
            <button onClick={handleClickHome}>Home</button>
          </div>
        )}
        {isAuthenticated && (
          <div className={classes.mainHeaderButtons}>
            <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
            <button onClick={logout}>Log Out</button>
          </div>
        )}
      </header>
    </>
  );
}
