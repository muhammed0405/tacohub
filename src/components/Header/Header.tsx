/** @format */

import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IState, ITaco } from '../../Redux/Reducer'
import { actionTypeKeys } from '../../Redux/actionTypes/actionTypes'
import Logo from '../../assets/img/Logo.svg'
import './Header.scss'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import MenuButton from './MenuButton/MenuButton'
const Header: React.FC = () => {
	const dispatch = useDispatch()

	const cart = useSelector((state: IState) => state.cart)

	const [productsCount, setProductsCount] = useState<number>(0)

	const getQuantity = cart.reduce((acc: number, el: ITaco) => {
		return acc + (el.quantity! || 0)
	}, 0)

	useEffect(() => {
		setProductsCount(getQuantity)
	}, [cart])

	return (
		<div id='header'>
			<div className='container'>
				<div className='header'>
					<div className='header__div'>
						<div className='header__logo'>
							<img src={Logo} alt='' />
						</div>
						<div className='header__title'>
							<div className='header__title__tel'>
								<h1>Доставка мексиканской еды</h1>
								<p>Время работы: 10:00 - 03:00</p>
							</div>
							<div className='header__nav'>
								<NavLink to={'home/'}>Меню</NavLink>
								<NavLink to={'/'}>Акции</NavLink>
								<NavLink to={'/'}>О доставке</NavLink>
								<NavLink to={'/'}>Отзывы</NavLink>
								<span>
									<NavLink to={'/'}>г Москва, ул Авангардная</NavLink>
								</span>
							</div>
						</div>
					</div>
					<div className='header__blog'>
						<div className='header__contact'>
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
								className='header__cart'
								style={{
									background: cart.length > 0 ? '#ffe271' : 'none',
								}}
							>
								<NavLink to={'/cart'}>
									<button>
										<FaShoppingCart />
										<div className='cart__info'>
											<p>{cart.length} товаров</p>
											<p>{productsCount} цена </p>
										</div>
									</button>
								</NavLink>
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
