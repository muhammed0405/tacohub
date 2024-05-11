/** @format */

import axios from "axios"
import { FC, useEffect, useState } from "react"

interface AdminProps {}

const Admin: FC<AdminProps> = () => {
	const [data, setData] = useState<any[]>([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = "https://sheetdb.io/api/v1/mhprlykneyavm"
				const response = await axios.get(url)
				setData(response.data)
				console.log(response.data)
			} catch (e) {
				console.error(e)
			}
		}

		fetchData()
	}, [])

	return (
		<div className="container">
			<div className="admin">
				{data.map((el, index) => (
					<div key={index}>
						<p>{el.number}</p>
						<p>{el.tacos}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Admin
