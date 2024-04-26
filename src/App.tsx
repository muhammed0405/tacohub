import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home/Home'
import Cart from './components/Cart/cart'
import Header from './components/Header/Header'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</>
	)
}

export default App
