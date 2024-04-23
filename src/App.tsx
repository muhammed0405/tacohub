import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home/Home'
import Cart from "./components/Cart/cart"

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>

			<Cart/>
		</>
	)
}

export default App
