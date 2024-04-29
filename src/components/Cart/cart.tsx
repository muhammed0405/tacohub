/** @format */

import { IoClose } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { actionTypeKeys } from "../../Redux/actionTypes/actionTypes"
import { IImage, IState } from "../../Redux/actionTypes/types"
import "../Cart/cart.scss"

const Cart = () => {
	const isCartOpen = useSelector((state: IState) => state.showCart)
	const dispatch = useDispatch()
	const handleClose = () => dispatch({ type: actionTypeKeys.TOGGLE_CART })

	const cartItems = useSelector((state: IState) => state.cart)
	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)
	const discount = subtotal > 3000 ? subtotal * 0.1 : 0
	const totalPrice = subtotal - discount

	const handleDecreaseQuantity = (item: IImage) =>
		dispatch({ type: actionTypeKeys.REMOVE_FROM_CART, payload: item })
	const handleIncreaseQuantity = (item: IImage) =>
		dispatch({ type: actionTypeKeys.ADD_TO_CART, payload: item })

	return (
		<div
			className="cart__node"
			style={{ display: isCartOpen ? "flex" : "none" }}
		>
			<div className="left__div" onClick={handleClose} />
			<hr />

			<div className="right__div">
				<h1 className="cart__title">Ваш заказ</h1>
				<button className="cart__close" onClick={handleClose}>
					<IoClose />
				</button>
				<div className="cart">
					{cartItems.length > 0 ? (
						cartItems.map(item => (
							<div key={item.id} className="cart__container">
								<div className="cart__img">
									<img src={item.img} alt={item.title || "Taco Image"} />
									<h1>{item.title}</h1>
								</div>
								<div className="cart__count">
									<p>{item.price * item.quantity} рубль</p>
									<div className="cart__btns">
										<button
											className="cart__btn"
											onClick={() => handleDecreaseQuantity(item)}
										>
											-
										</button>
										<p>{item.quantity}</p>
										<button
											className="cart__btn"
											onClick={() => handleIncreaseQuantity(item)}
										>
											+
										</button>
									</div>
								</div>
							</div>
						))
					) : (
						<p>Корзина пуста</p>
					)}
				</div>
				{cartItems.length > 0 && (
					<div className="cart__summary">
						{discount > 0 && (
							<h2 className="discount">
								<span>Скидка:10%</span>
								{discount.toFixed(2)} <span>рубль</span>
							</h2>
						)}
						<h2>
							<span>Итого стоимость:</span>
							{totalPrice.toFixed(2)} <span>рубль</span>
						</h2>
					</div>
				)}
				{cartItems.length > 0 && (
					<div className="cart__banner">
						<p>Оформить заказ</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
