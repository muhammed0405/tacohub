/** @format */

import { Route, Routes } from "react-router-dom"
import "./App.css"
import Cart from "./components/Cart/cart"
import Footer from "./components/Footer/footer"
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home/Home"
import Reviews from "./Pages/Reviews/Reviews"
import Sales from "./Pages/Sales/Sales"
import { OrderAddress } from "./Pages/OrderAddress/OrderAddress"
import { OrderPage } from "./Pages/OrderPage/OrderPage"
import Admin from "./admin/Admin"

function App() {
	return (
		<>
			<Header />
			<h1></h1>
			<Cart />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sales" element={<Sales />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/address" element={<OrderAddress/>} />
				<Route path="/order" element={<OrderPage/>} />
				<Route path="/admin" element={<Admin/>} />
			</Routes>
			
			<Footer />
		</>
	)
}

export default App
