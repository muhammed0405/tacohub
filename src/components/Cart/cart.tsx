/** @format */

import { useSelector } from "react-redux"
import { IState } from "../../Redux/Reducer"
import Fork from "../../assets/img/fork.png"

const Cart = () => {
	const cartTaco = useSelector((state: IState) => state.cart)
	return (
		<div>
			<div className="container">
				<div className="cart">
					<h1>Ваш заказ </h1>

					<div className="cart__orders">
						<img src={Fork} alt="" />
						<p>Количество персон </p>

						<div className="people__count">
							<button className="minus">-</button>
							<p>1</p>
							<button className="plus">+</button>
						</div>

						<div className="cart__receipt">
							<div className="products__price">
								<p>Стоимость </p>
								<p>3000 Р</p>
							</div>
							<div className="delivery__price">
								<p>Доствавка </p> <p>бесплатно </p>
							</div>
							<div className="total_price">
								<p>Итого</p>
								<p>500 руб.</p>
							</div>
						</div>


						<button className="order__button">Оформить заказ</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
