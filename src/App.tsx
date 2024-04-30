/** @format */

import { Route, Routes } from "react-router-dom"
import "./App.css"
import Cart from "./components/Cart/cart"
import Footer from "./components/Footer/footer"
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home/Home"
import Reviews from "./Pages/Reviews/Reviews"
import Sales from "./Pages/Sales/Sales"

function App() {
	return (
		<>
			<Header />
			<Cart />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sales" element={<Sales />} />
				<Route path="/reviews" element={<Reviews />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
