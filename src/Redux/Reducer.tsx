/** @format */

//taco

import ChickenTaco from '../assets/img/chicken.jpg'
import DoubleYard from '../assets/img/doubleYard.jpg'
import Taco from '../assets/img/taco1.jpg'

//burito

import BeefRollUp from '../assets/img/BeefRollUp.jpg'
import BurritoVega from '../assets/img/BurritoVega.jpg'
import rollUpDoubleChease from '../assets/img/rollUpDubleChese.jpg'

//kesal
import BeefKesal from '../assets/img/beefKesal.png'
import ChickenKesal from '../assets/img/chickeKesal.png'
import ChickenKesalBBQ from '../assets/img/chikenKesalBBQ.png'

// nachos

import nachos from '../assets/img/nachos.png'
import nachosChili from '../assets/img/nachosChili.png'

import { actionTypeKeys } from './actionTypes/actionTypes'
import { IAction, IState } from './actionTypes/types'

const initialState: IState = {
	showCart: false,

	meals: [
		{
			id: '100',
			title: 'Тако',
			images: [
				{
					id: '1',
					img: Taco,
					title: 'Хрустящее тако',
					measure: '250г',
					quantity: 0,
					price: 350,
					description:
						' Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '2',
					img: ChickenTaco,
					title: 'Чикен тако',
					measure: '250г',
					quantity: 0,
					price: 522,
					description:
						' Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '3',
					img: DoubleYard,
					title: 'Грик тако',
					measure: '250г',
					quantity: 0,
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
					id: '4',
					img: rollUpDoubleChease,
					title: 'Ролл-ап Дабл-чиз (веге)',
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '4',
					img: BurritoVega,
					title: 'Буррито Вега с гуакамоле (веге)',
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '5',
					img: BeefRollUp,
					title: 'Биф ролл-ап',
					measure: '250г',
					quantity: 0,
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
					id: '6',
					img: ChickenKesalBBQ,
					title: 'Чикен кесадилья BBQ',
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '7',
					img: ChickenKesal,
					title: 'Чикен кесадилья',
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '8',
					img: BeefKesal,
					title: 'Биф кесадилья',
					measure: '250г',
					quantity: 0,
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
					id: '9',
					img: nachos,
					title: "Начос с соусами 'Сырный' и 'Острый чили'",
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '10',
					img: nachosChili,
					title: "Начос с соусами 'Гуакамоле' и 'Острый чили'",
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '11',

					img: nachosChili,

					title: 'Начос с соусами "Сальса" и "Острый Чили"',
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», ЧеддерQueso blanco',
				},
			],
		},
	],
	cart: [],
	toggleMenu: false,
}

const rootReducer = (state = initialState, action: IAction) => {
	const { type, payload } = action
	switch (type) {
		case actionTypeKeys.ADD_TO_CART: {
			const updatedCart = state.cart.find(el => el.id === payload.id)
			if (updatedCart) {
				return {
					...state,
					cart: state.cart.map(el =>
						el.id === payload.id
							? { ...el, quantity: (el.quantity || 0) + 1 }
							: el
					),
				}
			} else
				return {
					...state,
					cart: [...state.cart, { ...payload, quantity: 1 }],
				}
		}

		default:
			return state
	}
}

export default rootReducer

// console.log('basket', initialState.basket)
