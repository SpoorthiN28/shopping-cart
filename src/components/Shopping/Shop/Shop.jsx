import classes from './Shop.module.css';

export default function Shop({ children }) {
  return (
    <section className={classes.shop}>
      <h2>Elegant Clothing For Everyone</h2>

      <ul className={classes.products}>{children}</ul>
    </section>
  );
}
