import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IState } from '../../Redux/Reducer'
import { actionTypes } from '../../Redux/actionTypes/actionTypes'
import './Header.scss'
import HeaderMenu from './HeaderMenu/HeaderMenu'
const Header: React.FC = () => {
	const dispatch = useDispatch()
	const toggleMenu = useSelector((state: IState) => state.toggleMenu)
	return (
		<>
			<header id='header'>
				<div className='container'>
					<div className={'header'}>
						<div className={'header--logo'}>
							<h1>Taco Hub</h1>
						</div>
						<div className={'header--title'}>
							<div className='header--title__tel'>
								<h1>Доставка мексиканской еды</h1>
								<p>Время работы: 10:00 - 03:00</p>
							</div>
							<div className={'header--nav'}>
								<Link to={'home/'}>Меню</Link>
								<Link to={'/'}>Акции</Link>
								<Link to={'/'}>О доставке</Link>
								<Link to={'/'}>Отзывы</Link>
								<span>
									<Link to={'/'}>г Москва, ул Авангардная</Link>
								</span>
							</div>
						</div>

						<div className='header--blog'>
							<div className={'header--contact'}>
								<h2>+7977323049</h2>
							</div>
							<div className={'header--auth'}>
								<Link to={''}> Войти</Link>
								<div className={'header--cart'}>
									<Link to={''}>товаров</Link>
								</div>
							</div>
							<div
								className='header--burger--menu'
								onClick={() => {
									dispatch({ type: actionTypes.TOGGLE_MENU })
								}}
							>
								<GiHamburgerMenu />
							</div>
						</div>
					</div>
				</div>

				{toggleMenu && <HeaderMenu />}
			</header>
		</>
	)
}

export default Header
