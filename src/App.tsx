import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home/Home'
import Cart from './components/Cart/cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'

function App() {
	return (
		<>
			<Header />
			<Cart />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer/>
		</>
	)
}

export default App
