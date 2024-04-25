import { FC } from 'react'
import { useSelector } from 'react-redux'

const Basket: FC = () => {
	const basket = useSelector((state: IState) => state.basket) || []
	console.log('basket ', basket)

	return (
		<div className='bloc'>
			{basket.map(el => (
				<div className='basket' key={el.id}>
					<h1>{el.quantity}</h1>
					{el.img && el.img.length > 0 && (
						<img src={el.img} alt={el.img || 'Product Image'} />
					)}
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

export default Basket
