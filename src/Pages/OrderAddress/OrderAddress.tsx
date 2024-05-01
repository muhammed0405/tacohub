/** @format */
import "./OrderAddress.scss"
export const OrderAddress = () => {
	return (
		<div className="container">
			<div className="address">
				<div className="address__title">
					<h2>Проверка адреса</h2>
				</div>
				<iframe
					src="https://www.google.com/maps/d/embed?mid=1QEuLJbrFfFHyYKZb-AZpHEI3irnPULg&hl=ru&ehbc=2E312F"
					width="600"
					height="450"
					style={{ border: 0 }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>

				<div className="address__desc">
					<h4>О доставке</h4>
					<h4>УСЛОВИЯ ДОСТАВКИ</h4>
					
				</div>
			</div>
		</div>
	)
}
