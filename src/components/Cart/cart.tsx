/** @format */

import { useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"
// import { GiTacos } from 'react-icons/gi'
import { ImSpoonKnife } from "react-icons/im"
import { IoClose } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { actionTypeKeys } from "../../Redux/actionTypes/actionTypes"
import { IState, ITaco } from "../../Redux/actionTypes/types"
import "../Cart/cart.scss"

const Cart = () => {
	const showCart = useSelector((state: IState) => state.showCart)
	const cartTaco = useSelector((state: IState) => state.cart)
	const [personCount, setPersonCount] = useState(0)
	const [isCostEnough, setIsCostEnough] = useState<boolean>(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const subtotal = cartTaco.reduce((acc, el) => acc + el.price * el.quantity, 0)
	const discount = subtotal > 200 ? subtotal * 0.1 : 0
	const totalSum = subtotal - discount

	const handleCartClose = () => {
		dispatch({ type: actionTypeKeys.TOGGLE_CART })
	}
	const handleDecreaseQuantity = (item: ITaco) =>
		dispatch({ type: actionTypeKeys.REMOVE_FROM_CART, payload: item })
	const handleIncreaseQuantity = (item: ITaco) =>
		dispatch({ type: actionTypeKeys.ADD_TO_CART, payload: item })

	// const handleClearCart = () => {
	// 	dispatch({ type: actionTypeKeys.CLEAR_CART })
	// }

	useEffect(() => {
		if (totalSum > 950) {
			setIsCostEnough(false)
		} else {
			setIsCostEnough(true)
		}
	}, [totalSum])
	// const notify = () =>
	// 	toast(
	// 		<div>
	// 			<p
	// 				style={{
	// 					display: 'flex',
	// 					alignItems: 'center',
	// 					gap: '10px',
	// 					color: 'black',
	// 					fontWeight: 'bold',
	// 					fontSize: '16px',
	// 				}}
	// 			>
	// 				Ваш <GiTacos /> в пути
	// 			</p>
	// 		</div>
	// 	)
	return (
		<div className="cart__node" style={{ display: showCart ? "flex" : "none" }}>
			<div className="left__div" onClick={handleCartClose} />
			<div className="right__div">
				<h1 className="cart__title">Ваш заказ</h1>
				<button className="cart__close" onClick={handleCartClose}>
					<IoClose />
				</button>
				<div className="cart">
					{cartTaco.length > 0 &&
						cartTaco.map(item => (
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
						))}
					<hr />
				</div>

				<div className="cart__summary">
					<div className="count">
						<div className="cart__img">
							<span>{<ImSpoonKnife />}</span>
							<p>количество персон</p>
						</div>
						<div className="cart__btns">
							<button
								className="cart__btn"
								onClick={() =>
									setPersonCount(
										personCount > 0 ? personCount - 1 : personCount
									)
								}
							>
								-
							</button>
							<h1>{personCount}</h1>

							<button
								className="cart__btn"
								onClick={() => setPersonCount(personCount + 1)}
							>
								+
							</button>
						</div>
					</div>
					<hr />

					<div className="cart_cost">
						<div className="discount">
							<span>Стоимость</span> {subtotal} рубль
						</div>
						<div className="discount">
							<span>Доставка</span>
							<span>бесплатно</span>
						</div>
						{discount > 0 && (
							<div className="discount">
								<p>Скидка:</p>
								<p> -{discount.toFixed(0)} рубль</p>
							</div>
						)}
						<div className="discount">
							<span>Итого стоимость:</span>
							<span> {totalSum.toFixed(0)} рубль</span>
						</div>
					</div>
				</div>

				{isCostEnough && cartTaco.length > 0 && (
					<p className="cart__warn">
						{Math.trunc(950 - totalSum)}р. до минимальной суммы заказа (950.)
					</p>
				)}
				{cartTaco.length === 0 ? (
					""
				) : (
					<button
						onClick={() => {
							if (totalSum > 950) {
								navigate("/order")
								handleCartClose()
							}
						}}
						className="cart__banner"
					>
						<p>Оформить заказ</p>
						<Toaster
							toastOptions={{
								className: "",
								style: {
									background: "#84cdee",
									padding: "16px",
									marginTop: "130px",
								},
								duration: 1000,
							}}
						/>
					</button>
				)}
			</div>
		</div>
	)
}

export default Cart
