/** @format */

import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-scroll"
import { IImage, IState, ITaco } from "../../../Redux/Reducer"
import { actionTypes } from "../../../Redux/actionTypes/actionTypes"
import "./Home.scss"

const TacoGallery: React.FC = () => {
	const tacos = useSelector((state: IState) => state.meals)
	const dispatch = useDispatch()

	const handleAddToCart = (image: IImage) => {
		dispatch({
			type: actionTypes.ADD_TO_CART,
			payload: image,
		})
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

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const menuClass = isSticky
		? "categories__wrap fixed-menu"
		: "categories__wrap"

	const renderImages = (images: IImage[]) => {
		return images.map((image: IImage, index: number) => (
			<div className="product__item__wrap" key={index}>
				<div className="product__content">
					<div className="product__img__container">
						<img
							style={{ width: "250px", height: "250px" }}
							src={image.img}
							alt={`Сүрөт ${index + 1}`}
						/>
					</div>
					<div className="product__name">
						<p className="name">{image.title}</p>
						<h6 className="weight">{image.measure}</h6>
					</div>
					<hr />
					<div className="product__bottom">
						<div className="product__price">
							{image.price ? image.price : "Price not available"}
						</div>
						<div className="product_change">
							<div className="minus_hide"></div>
							<span className="count">{image.quantity ?? ""}</span>
							<div className="plus" onClick={() => handleAddToCart(image)}>
								+
							</div>
						</div>
					</div>
					<div className="product__description">
						<p>{image.description}</p>
					</div>
				</div>
			</div>
		))
	}

	return (
		<div className="container">
			<div className="menu">
				<div className="left__menu" style={{ border: "2px solid" }}>
					<div ref={menuRef} className={menuClass}>
						<div className="menu__head">Меню</div>
						{tacos.map(taco => (
							<div className="left__menu__category" key={taco.id}>
								<Link to={taco.id} smooth={true} duration={500}>
									<button className="name">{taco.title}</button>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className="products__content">
					{tacos.map((taco: ITaco) => (
						<div key={taco.id} id={taco.id} className="products__item">
							<div className="category__head">
								<h1>{taco.title}</h1>
							</div>
							<div
								className="products"
								style={{ border: "1px solid white", display: "flex" }}
							>
								{renderImages(taco.images)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default TacoGallery
