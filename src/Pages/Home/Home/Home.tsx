/** @format */

import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-scroll'
import { IImage, IState, ITaco } from '../../../Redux/Reducer'
import { actionTypes } from '../../../Redux/actionTypes/actionTypes'
import './Home.scss'

const TacoGallery: React.FC = () => {
	const tacos = useSelector((state: IState) => state.meals)
	const cart = useSelector((state: IState) => state.cart)

	const getQuantity = (id: string) => {
		const item = cart.find(item => item.id === id)
		return item ? item.quantity : 0
	}

	const dispatch = useDispatch()

	const handleAddToCart = (e: IImage) => {
		dispatch({
			type: actionTypes.ADD_TO_CART,
			payload: e,
		})
		console.log(e, 'is isis')
	}

	const [isSticky, setIsSticky] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (menuRef.current) {
				const stickyTrigger = menuRef.current.offsetTop
				setIsSticky(window.pageYOffset > stickyTrigger)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const menuClass = isSticky
		? 'categories__wrap fixed-menu'
		: 'categories__wrap'

	return (
		<div className='container'>
			<div className='menu'>
				<div className='left__menu'>
					<div ref={menuRef} className={menuClass}>
						<div className='menu__head'>Меню</div>
						{tacos.map(taco => (
							<div className='left__menu__category' key={taco.id}>
								<Link to={taco.id} smooth={true} duration={500}>
									<button className='name'>{taco.title}</button>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className='products__content'>
					{tacos.map((taco: ITaco) => (
						<div key={taco.id} id={taco.id} className='products__item'>
							<div className='category__head'>
								<h1>{taco.title}</h1>
							</div>
							<div className='products'>
								{taco.images.map((image: IImage, index: number) => (
									<div className='product__item__wrap' key={index}>
										<div className='product__content'>
											<div className='product__img__container'>
												<img src={image.img} alt={`Сүрөт ${index + 1}`} />
											</div>

											<div className='product__info'>
												<div className='product__name'>
													<h4 className='name'>{image.title}</h4>
													<h6 className='weight'>{image.measure}</h6>
												</div>
												<hr />
												<p>{image.description}</p>

												<div className='product__bottom'>
													<div className='product__price'>
														{image.price ? image.price : 'Price not available'}{' '}
														руб.
													</div>
													<div className='product_change'>
														<button
															className={
																getQuantity(image.id) > 0
																	? 'minus_hide'
																	: 'minus'
															}
														>
															-
														</button>
														<span className='count'>
															{getQuantity(image.id)}
														</span>
														<button
															className='plus'
															onClick={() => handleAddToCart(image)}
														>
															+
														</button>
													</div>
												</div>
											</div>

											<div className='product__description'>
												<p>{image.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default TacoGallery
