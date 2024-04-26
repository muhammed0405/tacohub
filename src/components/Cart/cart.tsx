/** @format */
import { MdDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { IState } from '../../Redux/actionTypes/types'
import '../Cart/cart.scss'
const Cart = () => {
	const cartTaco = useSelector((state: IState) => state.cart)
	console.log(' cartTaco', cartTaco)
	const totalSum = cartTaco.reduce((acc, el) => {
		return acc + el.price * el.quantity
	}, 0)

	return (
		<div className='cart__node'>
			<h1>ваш заказ</h1>
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
