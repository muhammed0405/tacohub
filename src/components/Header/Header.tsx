/** @format */

import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { actionTypeKeys } from '../../Redux/actionTypes/actionTypes'
import { IState } from '../../Redux/actionTypes/types'
import Logo from '../../assets/img/Logo.svg'
import './Header.scss'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import MenuButton from './MenuButton/MenuButton'
const Header: React.FC = () => {
	const [isShrunk, setIsShrunk] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsShrunk(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	const dispatch = useDispatch()

	const cart = useSelector((state: IState) => state.cart)

	// const [productsCount, setProductsCount] = useState<number>(0)

	// const [toggleMenu, setToggleMenu] = useState<boolean>(false)
	const toggleCart = () => {
		dispatch({ type: actionTypeKeys.TOGGLE_CART })
	}
	const totalSum = cart.reduce((acc, el) => {
		return acc + el.price * el.quantity
	}, 0)

	// useEffect(() => {
	// 	setProductsCount(getQuantity)
	// }, [cart])

	return (
		<div
			id='header'
			style={{
				height: isShrunk ? '50px' : '100px',
			}}
		>
			<div className='container'>
				<div className='header' style={{}}>
					<div className='header__div'>
						<div className='header__logo'>
							<img
								src={Logo}
								alt=''
								style={{
									height: isShrunk ? '50px' : '100px',
									width: isShrunk ? '50px' : '100px',
								}}
							/>
						</div>
						<div className='header__title'>
							<div
								className={
									isShrunk ? 'header__title__tel--shrunk' : 'header__title__tel'
								}
							>
								<h1>Доставка мексиканской еды</h1>
								<p>Время работы: 10:00 - 03:00</p>
							</div>

							<div className='header__nav'>
								<NavLink to={'/'}>Меню</NavLink>
								<NavLink to={'/sales'}>Акции</NavLink>
								<NavLink to={'/delivery'}>О доставке</NavLink>
								<NavLink to={'/reviews'}>Отзывы</NavLink>
								<span>
									<NavLink to={'/address'}>г Москва, ул Авангардная</NavLink>
								</span>
							</div>
						</div>
					</div>
					<div className='header__blog'>
						<div
							className={
								isShrunk ? 'header__contact--shrunk' : 'header__contact'
							}
						>
							<h2>+7977323049</h2>
						</div>
						<div className='header__auth'>
							<div className='header__logIn'>
								<button>
									{' '}
									<FaUser />
									<p>Войти</p>
								</button>
							</div>
							<div
								onClick={() => toggleCart()}
								className='header__cart'
								style={{
									background: cart.length > 0 ? '#ffe271' : 'none',
								}}
							>
								<button>
									<FaShoppingCart />
									<div className='cart__info'>
										<p>{cart.length} товаров</p>
										<p>{totalSum} ценa </p>
									</div>
								</button>
							</div>
							<div
								className='header__burger__menu'
								onClick={() => {
									dispatch({ type: actionTypeKeys.TOGGLE_MENU })
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
