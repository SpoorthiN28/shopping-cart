import { use } from 'react';

import { CartContext } from "../../../store/shopping-cart.jsx";

import classes from './Product.module.css';

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = use(CartContext);

  return (
    <article className={classes.product}>
      <img src={image} alt={title} />
      <div className={classes.productContent}>
        <div>
          <h3>{title}</h3>
          <p className={classes.productPrice}>Rs. {price}</p>
          <p>{description}</p>
        </div>
        <p className={classes.productActions}>
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
