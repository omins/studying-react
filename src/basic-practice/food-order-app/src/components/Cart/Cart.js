import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(el => {
        return <li>{el.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>11.11</span>
      </div>
      <div className={classes.actions}>
        <button classNam={classes['button--alt']}>Close</button>
        <button classNam={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
