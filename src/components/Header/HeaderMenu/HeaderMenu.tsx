/** @format */

import { FaGift, FaMap } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { IoLocationSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IState } from '../../../Redux/actionTypes/types'
import Logo from '../../../assets/img/Logo.svg'
import './HeaderMenu.scss'

function HeaderMenu() {
	const showModal = useSelector((state: IState) => state.toggleMenu)
	return (
		<div
			className={
				showModal ? 'header__content__menu active' : 'header__content__menu'
			}
		>
			<div className='row'>
				<div className='header__content__menu_gray'></div>
				<div className='header__content__menu__logo'>
					<img src={Logo} alt='' />
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
