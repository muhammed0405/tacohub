import { useSelector } from "react-redux"
import { IState } from "../../Redux/Reducer"

const Cart = () => {
	const cartTaco = useSelector((state : IState)=> state.cart)
	console.log('cartTaco',cartTaco)
	return (
		<div>
			<div className='container'>
				<div className='cart'>
					<h1>Cart</h1>
				</div>
			</div>
		</div>
	)
}

export default Cart
