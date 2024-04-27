/** @format */
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypeKeys } from '../../Redux/actionTypes/actionTypes'
import { IState } from '../../Redux/actionTypes/types'
import '../Cart/cart.scss'
const Cart = () => {
	const showCart = useSelector((state: IState) => state.showCart)
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch({ type: actionTypeKeys.TOGGLE_CART })
	}
	const cartTaco = useSelector((state: IState) => state.cart)
	console.log(' cartTaco', cartTaco)
	const totalSum = cartTaco.reduce((acc, el) => {
		return acc + el.price * el.quantity
	}, 0)

	return (
		<div className='cart__node' style={{ display: showCart ? 'flex' : 'none' }}>
			<div className='left__div' onClick={handleClick}></div>
			<hr />
			<div className='cart'>
				{cartTaco.map(el => (
					<div className='cart__container' key={el.id}>
						<img src={el.img} alt={el.img || ' ITaco Image'} />

						<h1>{el.title}</h1>
						<div className='cart__count'>
							<p>{el.quantity * el.price}рубль</p>
							<div className='cart__btns'>
								<button className='cart__btn'>-</button>
								<h1>{el.quantity}</h1>

								<button>+</button>
								<button>{<MdDelete />}</button>
							</div>
						</div>
					</div>
				))}
				<hr />
			</div>
			<h2> Стоимость{totalSum}Р</h2>
			<div className='cart__node__baner'>
				<p>оформить заказ</p>
			</div>
		</div>
	)
}

export default Cart
