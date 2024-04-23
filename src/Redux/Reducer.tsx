/** @format */




//taco 

import Taco from "../assets/img/taco1.jpg"
import ChickenTaco from "../assets/img/chicken.jpg"
import DoubleYard from "../assets/img/doubleYard.jpg"

//burito

import rollUpDoubleChease from "../assets/img/rollUpDubleChese.jpg"
import BurritoVega from "../assets/img/BurritoVega.jpg"
import BeefRollUp from "../assets/img/BeefRollUp.jpg"

//kesal
import ChickenKesal from "../assets/img/chickeKesal.png"
import BeefKesal from "../assets/img/beefKesal.png"
import ChickenKesalBBQ from "../assets/img/chikenKesalBBQ.png"


// nachos

import nachos from "../assets/img/nachos.png"
import nachosSpicy from "../assets/img/nachosSpicy.png"
import nachosChili from "../assets/img/nachosChili.png"

import { actionTypes } from "./actionTypes/actionTypes"

export interface IImage {
	id: string
	img: string
	title?: string
	measure?: string
	price?: number
	description?: string
	quantity: number
}

export interface ITaco {
	id: string
	images: IImage[]
	title?: string
	quantity?: number
}

export interface IState {
	name: string
	meals: ITaco[]
	cart: ITaco[]
	toggleMenu: boolean
}

const initialState: IState = {
	name: "test",

	meals: [
		{
			id: "100",
			title: "Тако",
			images: [
				{
					id: "1",
					img: Taco,
					title: "Хрустящее тако",
					measure: "250г",
					quantity: 0,
					price: 350,
					description:
						' Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "2",
					img: ChickenTaco,
					title: "Хрустящее тако",
					measure: "250г",
					quantity: 0,
					price: 522,
					description:
						' Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "3",
					img: DoubleYard,
					title: "Хрустящее тако",
					measure: "250г",
					quantity: 0,
					price: 200,
					description:
						' Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
			],
		},
		{
			id: "200",
			title: "Буррито",
			images: [
				{
					id: "3",
					img: rollUpDoubleChease,
					title: "Ролл-ап Дабл-чиз (веге)",
					measure: "250г",
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "4",
					img: BurritoVega,
					title: "Буррито Вега с гуакамоле (веге)",
					measure: "250г",
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "5",
					img: BeefRollUp,
					title: "Биф ролл-ап",
					measure: "250г",
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
			],
		},
		{
			id: "300",
			title: "Кесадильи",
			images: [
				{
					id: "6",
					img: ChickenKesalBBQ,
					title: "Чикен кесадилья BBQ",
					measure: "250г",
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "7",
					img: ChickenKesal,
					title: "Чикен кесадилья",
					measure: "250г",
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "8",
					img: BeefKesal,
					title: "Биф кесадилья",
					measure: "250г",
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
			],
		},
		{
			id: "400",
			title: "Начос",
			images: [
				{
					id: "9",
					img: nachos,
					title: "Начос с соусами 'Сырный' и 'Острый чили'",
					measure: "250г",
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "10",
					img: nachosChili,
					title: "Начос с соусами 'Гуакамоле' и 'Острый чили'",
					measure: "250г",
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: "11",
					img: nachosChili,
					title: 'Начос с соусами "Сальса" и "Острый Чили"',
					measure: "250г",
					quantity: 0,
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

export interface IAction {
	type: string
	payload: any
}

const rootReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART: {
			const existingItem = state.cart.find(
				item => item.id === action.payload.id
			)
			if (existingItem) {
				// If the item already exists in the cart, update its quantity
				const updatedCart = state.cart.map(item =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
				return { ...state, cart: updatedCart }
			} else {
				// If the item is not in the cart, add it with quantity 1
				return {
					...state,
					cart: [...state.cart, { ...action.payload, quantity: 1 }],
				}
			}
		}

		case actionTypes.TOGGLE_MENU:
			return { ...state, toggleMenu: !state.toggleMenu }

		default:
			return state
	}
}

export default rootReducer
