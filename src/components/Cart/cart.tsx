/** @format */

import { useSelector } from 'react-redux'
import { IState } from '../../Redux/actionTypes/types'
import '../Cart/cart.scss'
const Cart = () => {
	const cartTaco = useSelector((state: IState) => state.cart)
	console.log(' cartTaco', cartTaco)
	return (
		<div className='bloc'>
			{cartTaco.map(el => (
				<div className='basket' key={el.id}>
					<img src={el.img} alt={el.img || ' ITaco Image'} />

					<h1>
						{el.price && el.quantity
							? `${el.price * el.quantity}p`
							: 'Баасы жок'}
					</h1>
					<h1>{el.title}</h1>
				</div>
			))}
		</div>
	)
}

export default Cart
