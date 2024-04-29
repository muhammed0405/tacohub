import { useDispatch, useSelector } from 'react-redux'
import { actionTypeKeys } from '../../Redux/actionTypes/actionTypes'
import { IImage, IState } from '../../Redux/actionTypes/types'
import '../Cart/cart.scss'
import { IoClose } from "react-icons/io5"

const Cart = () => {
  const showCart = useSelector((state: IState) => state.showCart);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: actionTypeKeys.TOGGLE_CART });
  };
  const cartTaco = useSelector((state: IState) => state.cart);
  console.log('cartTaco', cartTaco);

  const subtotal = cartTaco.reduce((acc, el) => acc + el.price * el.quantity, 0);
  const discount = subtotal > 3000 ? subtotal * 0.1 : 0;
  const totalSum = subtotal - discount;

  const handleDicQuantity = (e: IImage) => {
    dispatch({ type: actionTypeKeys.REMOVE_FROM_CART, payload: e });
  };

  const handleIncQuantity = (e: IImage) => {
    dispatch({ type: actionTypeKeys.ADD_TO_CART, payload: e });
  };

  return (
		<div className="cart__node" style={{ display: showCart ? "flex" : "none" }}>
			<div className="left__div" onClick={handleClick}></div>
			<hr />

			<div className="right__div">
				<h1 className="cart__title">Ваш заказ</h1>
				<button className="cart__close" onClick={handleClick}>
					<IoClose />
				</button>
				<div className="cart">
					{cartTaco.map(el => (
						<div className="cart__container" key={el.id}>
							<div className="cart__img">
								<img src={el.img} alt={el.title || "Taco Image"} />
								<h1>{el.title}</h1>
							</div>
							<div className="cart__count">
								<p>{el.quantity * el.price} рубль</p>
								<div className="cart__btns">
									<button
										className="cart__btn"
										onClick={() => handleDicQuantity(el)}
									>
										-
									</button>
									<p>{el.quantity}</p>
									<button
										className="cart__btn"
										onClick={() => handleIncQuantity(el)}
									>
										+
									</button>
								</div>
							</div>
						</div>
					))}
					<hr />
				</div>
				<div className="cart__summary">
					{discount > 0 && (
						<h2 className="discount">
							<span>Скидка:10%</span>
							{discount.toFixed(2)} <span>рубль</span>
						</h2>
					)}
					<h2>
						<span>Итого стоимость:</span>
						{totalSum.toFixed(2)} <span>рубль</span>
					</h2>
				</div>

				{cartTaco.length === 0 ? (
					<p>Корзина пуста</p>
				) : (
					<div className="cart__banner">
						<p>Оформить заказ</p>
					</div>
				)}
			</div>
		</div>
	)
};

export default Cart;
