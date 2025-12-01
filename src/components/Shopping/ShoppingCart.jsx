import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.jsx';
import { useNavigate } from 'react-router-dom';

import Header from './Header/Header.jsx';
import Shop from './Shop/Shop.jsx';
import Product from './Product/Product.jsx';
import { DUMMY_PRODUCTS } from '../../store/dummy-products.js';
import CartContextProvider from '../../store/shopping-cart.jsx';

export default function ShoppingCart() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  async function handleLogout() {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  }

  if (!currentUser) return <div>Loading...</div>;

  return (
    <CartContextProvider>
      <Header logout={handleLogout} />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>

  );
}