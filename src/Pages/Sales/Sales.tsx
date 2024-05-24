/** @format */

import toast, { Toaster } from "react-hot-toast"
import { RiDiscountPercentFill } from "react-icons/ri"
import SalesImg from "../../assets/img/acsya.png"
import "./Sales.scss"
export default function Sales() {
	const notify = () =>
		toast(
			<p
				style={{
					display: "flex",
					alignItems: "center",
					gap: `10px`,
					fontSize: "16px",
				}}
			>
				<RiDiscountPercentFill /> активирован
			</p>
		)
	return (
		<div className="container">
			<div className="sales">
				<div className="sales__wrap">
					<h1 className="sales__title">Акции</h1>
					<hr />

					<div className="sales__info">
						<img onClick={notify} src={SalesImg} alt="" />

						<button onClick={notify} className="sales__btn__promo">
							Использовать промокод
						</button>
						<div>
							<Toaster
								toastOptions={{
									className: "",
									style: {
										background: "yellowgreen",
										padding: "16px",
										color: "#000",
									},
									duration: 2500,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
