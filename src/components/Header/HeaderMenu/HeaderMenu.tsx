import { FaGift, FaMap } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { IoClose, IoLocationSharp } from 'react-icons/io5'
import Logo from '../../../assets/img/Logo.svg'
import './HeaderMenu.scss'
import { useDispatch } from 'react-redux'
import { actionTypes } from '../../../Redux/actionTypes/actionTypes'
function HeaderMenu() {
	const dispatch = useDispatch()
	return (
		<div className='header__content__menu'>
			<div className='header__content__menu__logo' style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: "space-between",
				height: "100px"
			}} >
				<img src={Logo} alt='' />
			<i className="header__content__menu__close_icon" onClick={()=>{
								dispatch({ type: actionTypes.TOGGLE_MENU })
							}}>
				<IoClose />
			</i>
				
			</div>

			<div className='header__content__menu__location'>
				<IoLocationSharp />
				<h5>Укажите ваш адрес</h5>
				<p>Изменить</p>
			</div>

			<div className='header__content__menu__login'>
				<FiLogIn />

				<p>Войти</p>
			</div>

			<div className='header__content__menu__map'>
				<FaMap />

				<p>Карта доставки</p>
			</div>

			<div className='header__content__menu__promo__code'>
				<FaGift />

				<p>Использовать промокод</p>
			</div>
		</div>
	)	
}

export default HeaderMenu
