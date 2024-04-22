/** @format */

import React from "react"
import { FaShoppingCart, FaUser } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/img/Logo.svg"
import { actionTypes } from "../../Redux/actionTypes/actionTypes"
import "./Header.scss"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import MenuButton from "./MenuButton/MenuButton"
const Header: React.FC = () => {
	const dispatch = useDispatch()

	// const [isSticky, setIsSticky] = useState(false)
	// const menuRef = useRef<HTMLDivElement>(null)

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (menuRef.current) {
	// 			const stickyTrigger = menuRef.current.offsetTop
	// 			setIsSticky(window.pageYOffset > stickyTrigger)
	// 		}
	// 	}

	// 	window.addEventListener('scroll', handleScroll)

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll)
	// 	}
	// }, [])

	// const headerId = isSticky ? 'header fixed-header' : 'header'

	return (
		<div className="container">
			<div id="header">
				<div className="header">
					<div className="header__div">
						<div className="header__logo">
							<img src={Logo} alt="" />
						</div>
						<div className="header__title">
							<div className="header__title__tel">
								<h1>Доставка мексиканской еды</h1>
								<p>Время работы: 10:00 - 03:00</p>
							</div>
							<div className="header__nav">
								<NavLink to={"home/"}>Меню</NavLink>
								<NavLink to={"/"}>Акции</NavLink>
								<NavLink to={"/"}>О доставке</NavLink>
								<NavLink to={"/"}>Отзывы</NavLink>
								<span>
									<NavLink to={"/"}>г Москва, ул Авангардная</NavLink>
								</span>
							</div>
						</div>
					</div>
					<div className="header__blog">
						<div className="header__contact">
							<h2>+7977323049</h2>
						</div>
						<div className="header__auth">
							<div className="header__logIn">
								<button>
									{" "}
									<FaUser />
									Войти
								</button>
							</div>
							<div className="header__cart">
								<button>
									{" "}
									<FaShoppingCart />
									товаров
								</button>
							</div>
							<div
								className="header__burger__menu"
								onClick={() => {
									dispatch({ type: actionTypes.TOGGLE_MENU })
								}}
							>
								<MenuButton />
							</div>
						</div>
					</div>
				</div>
			</div>

			<HeaderMenu />
		</div>
	)
}

export default Header
