/** @format */

import { IoClose } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { actionTypeKeys } from "../../Redux/actionTypes/actionTypes"
import { IImage, IState } from "../../Redux/actionTypes/types"
import "./CardModal.scss"
interface IProps {
	taco: IImage
}

export default function CardModal({ taco }: IProps) {
	const cart = useSelector((state: IState) => state.cart)
	
	console.log("tacoId", taco)
	const getQuantity = (id: string) => {
		const item = cart.find(el => el.id === id)
		return item ? item.quantity : 0
	}

	const dispatch = useDispatch()

	const handleCloseCard = () => {
		dispatch({
			type: actionTypeKeys.TOGGLE_MODAL,
		})
	}

	const handleAddToCart = (e: IImage) => {
		dispatch({
			type: actionTypeKeys.ADD_TO_CART,
			payload: e,
		})
	}

	const handleRemoveFromCart = (e: IImage) => {
		dispatch({
			type: actionTypeKeys.REMOVE_FROM_CART,
			payload: e,
		})
	}

	return (
		<div className="cardModal" onClick={handleCloseCard}>
			<div className="card__wrap" onClick={handleCloseCard}>
				<div className="card__img">
					<img src={taco.img} alt="" />
				</div>
				<button className="card__close" onClick={handleCloseCard}>
					<IoClose />
				</button>
				<div className="card__info">
					<h3 className="card__title">{taco.title}</h3>
					<h2 className="card__price">
						{taco.price} <p>₽</p>
					</h2>
					<p className="card__description">
						<span>Состав: </span> <br />
						{""} {taco.description}
					</p>
					<h3 className="card__weight-value">Вес и пищевая ценность</h3>
					<div className="card__weight">
						<h4>Вес(г.)</h4>
						<p>160</p>
					</div>
					<div className="card__value">
						<h4>Ккал</h4>
						<p>387</p>
					</div>
					<div className="card__kdj">
						<h4>Кдж</h4>
						<p>895</p>
					</div>
					<div className="card__protein">
						<h4>Белки</h4>
						<p>12</p>
					</div>
					<div className="card__fat">
						<h4>Жиры</h4>
						<p>12</p>
					</div>
					<div className="card__arbohydrates">
						<h4>Углеводы</h4>
						<p>13</p>
					</div>

					<div className="product_change">

						<button className={
							getQuantity(taco.id) === 0 ? "minus" : "minus_hide"
						}  
						onClick={() => handleRemoveFromCart(taco)}>-</button>
						<span className="count">{getQuantity(taco.id)}</span>
						<button className="plus" onClick={() => handleAddToCart(taco)}>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}
