/** @format */

import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import "./OrderPage.scss"

export function OrderPage() {
	const [dateOptions, setDateOptions] = useState<string[]>([])

	useEffect(() => {
		const today = new Date("2024-04-13T00:00:00")
		const options = ["today"] 

		for (let i = 1; i <= 7; i++) {
			const nextDay = new Date(today)
			nextDay.setDate(today.getDate() + i)
			const day = nextDay.getDate().toString().padStart(2, "0")
			const month = (nextDay.getMonth() + 1).toString().padStart(2, "0")
			const year = nextDay.getFullYear()
			options.push(`${day}.${month}.${year}`)
		}

		setDateOptions(options)
	}, [])

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		axios
			.post(form.action, new FormData(form))
			.then(() => {
				window.open("page2.html", "_blank")
			})
			.catch(error => {
				console.error("Error!", error.message)
			})
	}

	return (
		<div className="container">
			<h1>Форма заказа</h1>
			<form
				action="https://sheetdb.io/api/v1/mhprlykneyavm"
				method="post"
				id="sheetdb-form"
				onSubmit={handleSubmit}
			>
				<input type="number" name="data[number]" placeholder="Номер" required />{" "}
				<input type="text" name="data[address]" placeholder="Адресс" required />
				<div className="house__details">
					<div>
						{" "}
						<p>Квартира*</p>
						<input
							type="number"
							name="data[flat]"
							placeholder="Квартира"
							required
						/>
					</div>{" "}
					<div>
						<p>Подьезд*</p>{" "}
						<input
							type="number"
							name="data[entrance]"
							placeholder="Подьезд"
							required
						/>{" "}
					</div>
					<p>Домофон</p>{" "}
					<input
						type="number"
						name="data[intercom]"
						placeholder="Домофон"
						required
					/>{" "}
					<p>Этаж</p>
					<input
						type="number"
						name="data[floor]"
						placeholder="Этаж"
						required
					/>{" "}
				</div>
				<div className="order_comment">
					<p>Кометарий к заказу</p>{" "}
					<textarea
						name="data[comment]"
						placeholder="коментарий"
						rows={3}
						required
					></textarea>
				</div>
				<div className="order_date">
					<h2>Доставка</h2>
					<p>Доступен только предварительный заказ с 10:30</p>
					<p>Ко времени</p>
					<select name="data[date]" required>
						{dateOptions.map((date, index) => (
							<option key={index} value={date}>
								{date === "today" ? "Сегодня" : date}
							</option>
						))}
					</select>
					<input type="time" name="data[time]" placeholder="Время" required />
				</div>
				<select name="data[payment]" required>
					<option value="">Выберите способ оплаты</option>
					<option value="card">Картой</option>
					<option value="cash">Наличными</option>
				</select>
				<button type="submit" className="submitbtn">
					Submit Order
				</button>
			</form>
		</div>
	)
}
