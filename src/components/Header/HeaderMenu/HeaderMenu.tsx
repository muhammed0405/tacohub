/** @format */

import { FaGift, FaMap } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { IoLocationSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IState } from '../../../Redux/actionTypes/types'
import Logo from '../../../assets/img/Logo.svg'
import './HeaderMenu.scss'
import { actionTypeKeys } from "../../../Redux/actionTypes/actionTypes"

function HeaderMenu() {
	const dispatch = useDispatch()
	const showModal = useSelector((state: IState) => state.toggleMenu)

	const handleMenuToggle = () => {
		dispatch({
			type: actionTypeKeys.TOGGLE_MENU
		})
	
	}
	return (
		<div
			className={
				showModal ? 'header__content__menu active' : 'header__content__menu'
			}
		>
			<div className='row'>
				<div className='header__content__menu_gray' onClick={handleMenuToggle}></div>
				<div className='header__content__menu__logo'>
					<img rel="preload" src={Logo} alt='' />
				</div>

				<nav>
					<div className='header__content__menu__nav'>
						<Link to=''>
							<i>
								<IoLocationSharp />
							</i>
						</Link>

						<div>
							<Link to=''>
								<h2>Укажите ваш адрес</h2>
							</Link>
							<Link to=''>Изменить</Link>
						</div>
					</div>

					<div className='header__content__menu__nav'>
						<Link to=''>
							<i>
								<FiLogIn />
							</i>
						</Link>

						<Link to=''>Войти</Link>
					</div>

					<div className='header__content__menu__nav'>
						<Link to=''>
							<i>
								<FaMap />
							</i>
						</Link>

						<Link to=''>Карта доставки</Link>
					</div>

					<div className='header__content__menu__nav'>
						<Link to=''>
							<i>
								<FaGift />
							</i>
						</Link>

						<Link to=''>Использовать промокод</Link>
					</div>

					<hr />
				</nav>
			</div>
		</div>
	)
}

export default HeaderMenu
