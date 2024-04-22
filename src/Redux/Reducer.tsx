import DoubleYard from '../assets/img/doubleYard.jpg'
import Taco from '../assets/img/taco1.jpg'
import Slider from '../assets/img/taco2.jpg'
import Buro from '../assets/img/taco3.jpg'
import { actionTypes } from './actionTypes/actionTypes'

export interface IImage {
	id: string
	img: string
	title?: string
	measure?: string
	price?: number
	description?: string
	quantity?: number 
}

export interface ITaco {
	id: string
	images: IImage[]
	title?: string
}

export interface IState {
	name: string
	meals: ITaco[]
	cart: ITaco[]
	toggleMenu: boolean
}

const initialState: IState = {
	name: 'test',
	meals: [
		{
			id: '100',
			title: 'Тако',
			images: [
				{
					id: "1",
					img: Taco,
					title: 'Хрустящее тако',
					measure: '250г',
					price: 350,
					description:
						' Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "2",
					img: Taco,
					title: 'Хрустящее тако',
					measure: '250г',
					price: 522,
					description:
						' Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "3",
					img: DoubleYard,
					title: 'Хрустящее тако',
					measure: '250г',
					price: 200,
					description:
						' Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
			],
		},
		{
			id: '200',
			title: 'Буррито',
			images: [
				{
					id: "3",
					img: Buro,
					measure: '250г',
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "4",
					img: Buro,
					measure: '250г',
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "5",
					img: Buro,
					measure: '250г',
					price: 250,

					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
			],
		},
		{
			id: '300',
			title: 'Кесадильи',
			images: [
				{
					id: "6",
					img: Slider,
					measure: '250г',
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "7",
					img: Slider,
					measure: '250г',
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "8",
					img: Slider,
					measure: '250г',
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
			],
		},
		{
			id: '400',
			title: 'Начос',
			images: [
				{
					id: "9",
					img: Slider,
					measure: '250г',
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "10",
					img: Slider,
					measure: '250г',
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "11",
					img: Slider,
					measure: '250г',
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
			],
		},
	],
	cart: [],
	toggleMenu: false,
}

interface IAction {
	type: string
	payload: IImage
}

const Reducer = (state = initialState, action: IAction) => {
	const { type, payload } = action
	switch (type) {
		case actionTypes.ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, payload],
			}
			case actionTypes.TOGGLE_MENU:
				return {
					...state,
					toggleMenu:!state.toggleMenu,
				}

		default:
			return state
	}
}

export default Reducer
