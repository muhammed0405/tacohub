/** @format */

// OrderPage.tsx
import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import "./OrderDate.scss"

export function OrderDate() {
	const [dateOptions, setDateOptions] = useState<string[]>([])

	useEffect(() => {
		const today = new Date("2024-04-13T00:00:00") 
		const options = ["Сегодня"] 

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
			<h1>Order Form</h1>
			<form
				action="https://sheetdb.io/api/v1/mhprlykneyavm"
				method="post"
				id="sheetdb-form"
				onSubmit={handleSubmit}
			>
				{/* ... other input fields ... */}
				<select name="data[date]" required>
					{dateOptions.map((date, index) => (
						<option key={index} value={date === "Сегодня" ? "today" : date}>
							{date}
						</option>
					))}
				</select>
				{/* ... other input fields ... */}
				<button type="submit" className="submitbtn">
					Submit Order
				</button>
			</form>
		</div>
	)
}
