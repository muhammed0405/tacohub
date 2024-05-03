/** @format */

import { NavLink } from "react-router-dom"
import logo from "../../assets/img/Logo.svg"
import "./footer.scss"
const Footer = () => {
	return (
		<div id="footer">
			<div className="container">
				<div className="footer">
					<div className="footer__logo">
						<img src={logo} alt="" />
					</div>
					<div className="footer__nav">
						<NavLink to={"/"}>Меню</NavLink>
						<NavLink to={"/sales"}>Акции</NavLink>
						<NavLink to={"/address"}>О доставке</NavLink>
						<NavLink to={"/reviews"}>Отзывы</NavLink>
					</div>

					<div className="footer__description">
						<h1>Доставка мексиканской еды в г. Ош и г. Бишкек</h1>
					<p>© 2022. Все права защищены</p>
					<div className="footer__subscribe">
						<input type="email" placeholder="Email" />
						<button type="reset">Подписаться</button>
					</div>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default Footer
