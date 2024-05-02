/** @format */
import { FaRegClock, FaRubleSign } from "react-icons/fa"
import { GiLaptop } from "react-icons/gi"
import { MdLocalPhone } from "react-icons/md"
import "./OrderAddress.scss"
import { Link } from "react-router-dom"
export const OrderAddress = () => {
	return (
		<div className="container">
			<div className="address">
				<div className="address__title">
					<h2>Проверка адреса</h2>
				</div>
				<iframe
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab2dd8fe853000f997ec2b012d5b14b0bb035f72488bbb6332ac44f3517d8da3d&amp;source=constructor"
					width="90%"
					height="400"
					frameBorder="0"
				></iframe>

				<div className="address__info">
					<h4>О доставке</h4>

					<div className="address__rules__wrapper">
						<div className="address__rules__left">
							<h4>УСЛОВИЯ ДОСТАВКИ</h4>
							<p>
								<FaRubleSign /> Минимальная сумма 950 руб.
							</p>
							<p>
								<FaRegClock /> Ежедневно, с 10:00 - 03:00
							</p>
							<p>
								<GiLaptop /> Мы работаем в городе Ош
							</p>
						</div>

						<div className="address__rules__right">
							<h4>КАК СДЕЛАТЬ ЗАКАЗ</h4>
							<p>
								<GiLaptop /> На сайте в разделе <Link to="/">меню</Link>
							</p>
							<p>
								<MdLocalPhone /> По телефону +7 (999) 442 74 38
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
