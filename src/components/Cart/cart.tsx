import { useState } from 'react'
import { ImSpoonKnife } from 'react-icons/im'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypeKeys } from '../../Redux/actionTypes/actionTypes'
import { ITaco, IState } from '../../Redux/actionTypes/types'
import '../Cart/cart.scss'
import toast, { Toaster } from 'react-hot-toast'

const Cart = () => {
	
	const showCart = useSelector((state: IState) => state.showCart)
	const dispatch = useDispatch()
	const handleCartClose = () => {
		dispatch({ type: actionTypeKeys.TOGGLE_CART })
	}
	const [count, setCount] = useState(0)
	const cartTaco = useSelector((state: IState) => state.cart)
	console.log('cartTaco', cartTaco)

	const subtotal = cartTaco.reduce((acc, el) => acc + el.price * el.quantity, 0)
	const discount = subtotal > 200 ? subtotal * 0.01 : 0
	const totalSum = subtotal - discount

	const handleDecreaseQuantity = (item: ITaco) =>
		dispatch({ type: actionTypeKeys.REMOVE_FROM_CART, payload: item })
	const handleIncreaseQuantity = (item: ITaco) =>
		dispatch({ type: actionTypeKeys.ADD_TO_CART, payload: item })

	
const notify = () => toast("Ваш заказ в пути")
const handleClearCart = () => {
	dispatch({ type: actionTypeKeys.CLEAR_CART })
}
	return (
		<div className='cart__node' style={{ display: showCart ? 'flex' : 'none' }}>
			<div className='left__div' onClick={handleCartClose} />
			<hr />

			<div className='right__div'>
				<h1 className='cart__title'>Ваш заказ</h1>
				<button className='cart__close' onClick={handleCartClose}>
					<IoClose />
				</button>
				<div className='cart'>
					{cartTaco.length > 0 &&
						cartTaco.map(item => (
							<div key={item.id} className='cart__container'>
								<div className='cart__img'>
									<img src={item.img} alt={item.title || 'Taco Image'} />
									<h1>{item.title}</h1>
								</div>
								<div className='cart__count'>
									<p>{item.price * item.quantity} рубль</p>
									<div className='cart__btns'>
										<button
											className='cart__btn'
											onClick={() => handleDecreaseQuantity(item)}
										>
											-
										</button>
										<p>{item.quantity}</p>
										<button
											className='cart__btn'
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

				<div className='cart__summary'>
					<div className='count'>
						<div className='cart__img'>
							<span>{<ImSpoonKnife />}</span>
							<p>количество персон</p>
						</div>
						<div className='cart__btns'>
							<button
								className='cart__btn'
								onClick={() => setCount(count > 0 ? count - 1 : count)}
							>
								-
							</button>
							<h1>{count}</h1>

							<button className='cart__btn' onClick={() => setCount(count + 1)}>
								+
							</button>
						</div>
					</div>
					<hr />

					<div className='cart_cost'>
						<div className='discount'>
							<span>Стоимость</span> {subtotal} рубль
						</div>
						<div className='discount'>
								<span>Доставка</span>
								<span>бесплатно</span>
							</div>
						{discount > 0 && (
							<div className='discount'>
								<p>Скидка:</p>
								<p> -{discount.toFixed(0)} рубль</p>
							</div>
							
						)}
						<div className='discount'>
							<span>Итого стоимость:</span>
							<span> {totalSum.toFixed(0)} рубль</span>
						</div>
					</div>
				</div>

				{cartTaco.length === 0 ? (
					''
				) : (
					<button onClick={() =>{notify() ,
					setTimeout(() => {handleClearCart()}, 1000) }} className='cart__banner'>
						<p>Оформить заказ</p>
						<Toaster
								toastOptions={{
									className: "",
									style: {
										background: "aqua",
										padding: "16px",
										color: "#000",
										marginTop:"70px"
									},
									duration: 2500,
								}}
							/>
					</button>
				)}
			</div>
		</div>
	)
}

export default Cart
