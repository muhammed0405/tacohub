/** @format */

import React, { useEffect, useState } from "react"
import { FaShoppingCart, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { actionTypeKeys } from "../../Redux/actionTypes/actionTypes"
import { IState } from "../../Redux/actionTypes/types"
import Logo from "../../assets/img/Logo.svg"
import "./Header.scss"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import MenuButton from "./MenuButton/MenuButton"
const Header: React.FC = () => {
	const [isShrunk, setIsShrunk] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsShrunk(window.scrollY > 70)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])
	const dispatch = useDispatch()

	const cart = useSelector((state: IState) => state.cart)

	const toggleCart = () => {
		dispatch({ type: actionTypeKeys.TOGGLE_CART })
	}
	const subtotal = cart.reduce((acc, el) => {
		return acc + el.price * el.quantity
	}, 0)
	const discount = subtotal > 200 ? subtotal * 0.1 : 0;
  const totalSum = subtotal - discount;

	return (
		<div
			id="header"
			style={{
				height: isShrunk ? "50px" : "100px",
			}}
		>
			<div className="container">
				<div className="header" style={{}}>
					<div className="header__div">
						<div className="header__logo">
							<img
								src={Logo}
								alt=""
								style={{
									height: isShrunk ? "50px" : "100px",
									width: isShrunk ? "50px" : "100px",
								}}
							/>
						</div>
						<div className="header__title">
							<div
								className={
									isShrunk ? "header__title__tel--shrunk" : "header__title__tel"
								}
							>
								<h1>Доставка мексиканской еды</h1>
								<p>Время работы: 10:00 - 03:00</p>
							</div>

							<div className="header__nav">
								<NavLink to={"/"}>Меню</NavLink>
								<NavLink to={"/sales"}>Акции</NavLink>
								<NavLink to={"/delivery"}>О доставке</NavLink>
								<NavLink to={"/reviews"}>Отзывы</NavLink>
								<span>
									<NavLink to={"/address"}>г Ош, ул Масалиева</NavLink>
								</span>
							</div>
						</div>
					</div>
					<div className="header__blog">
						<div
							className={
								isShrunk ? "header__contact--shrunk" : "header__contact"
							}
						>
							<h2>+79773230449</h2>
						</div>
						<div className="header__auth">
							<div className="header__logIn">
								<button>
									{" "}
								<span className='header__logIn__icon'>
								<FaUser />
								</span>
									<p>Войти</p>
								</button>
							</div>
							<div
								onClick={() => toggleCart()}
								className="header__cart"
								style={{
									background: cart.length > 0 ? "#ffe271" : "none",
								}}
							>
								<button>
									<span className='header__logIn__icon'>
									<FaShoppingCart />
									</span>
									<div className="cart__info">
										<p>{cart.length} товаров</p>
										<p>{totalSum} ценa </p>
									</div>
								</button>
							</div>
							<div className="header__burger__menu">
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
