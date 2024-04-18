import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-scroll'
// import styles from "./Home.module.scss"
import { IImage, IState, ITaco } from '../../../Redux/Reducer'
import { actionTypes } from '../../../Redux/actionTypes/actionTypes'

const TacoGallery: React.FC = () => {
	const tacos = useSelector((state: IState) => state.meals)
	const dispatch = useDispatch()
	const handleAddToCart = (image: IImage) => {
		dispatch({
			type: actionTypes.ADD_TO_CART,
			payload: image,
		})
	}
	return (
		<div>
			<div className='buttons'>
				{tacos.map(taco => (
					<Link key={taco.id} to={taco.id} smooth={true} duration={500}>
						<button>{taco.id}</button>
					</Link>
				))}
			</div>
			<div className='images'>
				{tacos.map((taco: ITaco) => (
					<div key={taco.id} id={taco.id} className='columnDiv'>
						<h1>{taco.id}</h1>

						<div className='tacos--img--container'>
							{taco.images.map((image: IImage, index: number) => (
								<div className='card' key={index}>
									<img src={image.img} alt={`Сүрөт ${index + 1}`} />
									<div className='card--title'>
										<p>{image.title}</p>
										<h6>{image.measure}</h6>
									</div>
									<div className='card--price'>
										<p>{image.price ? image.price : 'Price not available'}</p>
										<button onClick={() => handleAddToCart(image)}>+</button>
									</div>

									<div className='card--desc'>
										<p>{image.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default TacoGallery
