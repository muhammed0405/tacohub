import './footer.scss'
import logo from "../../assets/img/Logo.svg"
import { NavLink } from 'react-router-dom'
const Footer = () => {
	return (
		<div id='footer'>
			<div className="container">
			<div className="footer">
				<div className="footer__logo">
				<img src={logo} alt="" />

				</div>
				<div className="footer__nav">
				<NavLink to={''}>Меню</NavLink>
				<NavLink to={''}>Акции</NavLink>
				<NavLink to={''}></NavLink>
				<NavLink to={''}>Курьерский</NavLink>
				<NavLink to={''}>Отзывы</NavLink>

				</div>
				
				<h1>Доставка мексиканской еды в г. Ош и г. Бишкек</h1>
				<p>© 2022. Все права защищены</p>
				<div className="footer__subscribe">
					<input type="text" placeholder='Email' />
					<button>Подписаться</button>

					
				</div>
			</div>
			</div>
			
			
		</div>
	);
};

export default Footer;