/** @format */

import React, { useEffect, useState } from "react"
import { FaShoppingCart, FaUser } from "react-icons/fa"
import { GiTacos } from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { actionTypeKeys } from "../../Redux/actionTypes/actionTypes"
import { IState } from "../../Redux/actionTypes/types"
import Logo from "../../assets/img/Logo.svg"
import PendingAnimation from "../../assets/img/fade-stagger-circles.svg"
import "./Header.scss"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import MenuButton from "./MenuButton/MenuButton"
const Header: React.FC = () => {
	const [isShrunk, setIsShrunk] = useState<boolean>(false)
	const [isPending, setIsPending] = useState<boolean>(false)
	const cart = useSelector((state: IState) => state.cart)
	const dispatch = useDispatch()
	const toggleCart = () => {
		dispatch({ type: actionTypeKeys.TOGGLE_CART })
	}
	const subtotal = cart.reduce((acc, el) => {
		return acc + el.price * el.quantity
	}, 0)
	const discount = subtotal > 200 ? subtotal * 0.1 : 0
	const totalSum = subtotal - discount
	useEffect(() => {
		setIsPending(true)
		setTimeout(() => {
			setIsPending(false)
		}, 500)
	}, [subtotal])

	useEffect(() => {
		const handleScroll = () => {
			setIsShrunk(window.scrollY > 5)
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])
	return (
		<div
			id="header"
			style={{
				height: isShrunk ? "50px" : "100px",
			}}
		>
			<div className="container">
				<div className="header" >
					<div className="header__div">
						<div className="header__logo">
							<img
								rel="preload"
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
								<NavLink to={"/address"}>О доставке</NavLink>
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
									<p className="header__logIn__icon">
										<FaUser />
									</p>
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
									<p
										style={{
											color: cart.length > 0 ? "black" : "",
										}}
										className="header__cart__icon"
									>
										<FaShoppingCart />
									</p>

									{isPending ? (
										<img
											src={PendingAnimation}
											className="cart__pending"
											alt=""
										/>
									) : (
										<div className="cart__info">
											<p
												style={{
													color: cart.length > 0 ? "black" : "none",
												}}
											>
												{cart.reduce((acc, el) => acc + el.quantity, 0)}{" "}
												<GiTacos />
											</p>
											<p
												style={{
													color: cart.length > 0 ? "black" : "none",
													fontWeight: "bold",
												}}
											>
												{totalSum.toFixed(0)} ₽{" "}
											</p>
										</div>
									)}
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
