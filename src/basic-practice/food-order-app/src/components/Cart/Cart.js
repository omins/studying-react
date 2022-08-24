import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(el => {
        return (
          <CartItem
            key={el.id}
            name={el.name}
            amount={el.amount}
            price={el.price}
            onAdd={cartItemAddHandler.bind(null, el)}
            onRemove={cartItemRemoveHandler.bind(null, el.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button classNam={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button classNam={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
