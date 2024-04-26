/** @format */

import { IImage } from "../../Redux/actionTypes/types"
import "./CardModal.scss"
interface IProps {
	taco: IImage
}

export default function CardModal({ taco }: IProps) {
	console.log("tacoId", taco)

	

	return (
		<div className="cardModal">
			<div className="card__wrap">
				<div className="card__img">
					<img src={taco.img} alt="" />
				</div>
				

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
						<button
						>
							-
						</button>
						<span className="count">{taco.quantity}</span>
						<button className="plus" >
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
