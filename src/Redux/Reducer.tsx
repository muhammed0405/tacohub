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
// soysauce
import halopeno from '../assets/img/halopeno.png'
import pico from '../assets/img/pico.png'
const initialState: IState = {
	showCart: false,
	showModal: false,

	meals: [
		{
			id: '100',
			title: 'Тако',
			tacoCategory: [
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
			tacoCategory: [
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
					id: '5',
					img: BurritoVega,
					title: 'Буррито Вега с гуакамоле (веге)',
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '6',
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
			tacoCategory: [
				{
					id: '7',
					img: ChickenKesalBBQ,
					title: 'Чикен кесадилья BBQ',
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '8',
					img: ChickenKesal,
					title: 'Чикен кесадилья',
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '9',
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
			tacoCategory: [
				{
					id: '10',
					img: nachos,
					title: "Начос с соусами 'Сырный' и 'Острый чили'",
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '11',
					img: nachosChili,
					title: "Начос с соусами 'Гуакамоле' и 'Острый чили'",
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '12',

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
		{
			id: '500',
			title: 'Соусы',
			tacoCategory: [
				{
					id: '13',
					img: pico,
					title: "Начос с соусами 'Сырный' и 'Острый чили'",
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '14',
					img: halopeno,
					title: "Начос с соусами 'Гуакамоле' и 'Острый чили'",
					measure: '250г',
					quantity: 0,
					price: 250,
					description:
						'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
				},
				{
					id: '15',

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

const rootReducer = (state = initialState, action: IAction): IState => {
	const { type, payload } = action

	switch (type) {
		case actionTypeKeys.ADD_TO_CART: {
			const updatedCart = state.cart.find(el => el.id === payload.id)
			if (updatedCart) {
				return {
					...state,
					cart: state.cart.map(el =>
						el.id === payload.id ? { ...el, quantity: el.quantity + 1 } : el
					),
				}
			} else {
				return {
					...state,
					cart: [...state.cart, { ...payload, quantity: 1 }],
				}
			}
		}

		case actionTypeKeys.REMOVE_FROM_CART: {
			const updatedCart = state.cart
				.map(item =>
					item.id === payload.id
						? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
						: item
				)
				.filter(item => item.quantity > 0)

			return {
				...state,
				cart: updatedCart,
			}
		}

		case actionTypeKeys.TOGGLE_MENU: {
			return {
				...state,
				toggleMenu: !state.toggleMenu,
			}
		}

		case actionTypeKeys.TOGGLE_MODAL: {
			return {
				...state,
				showModal: !state.showModal,
			}
		}

		case actionTypeKeys.TOGGLE_CART: {
			return {
				...state,
				showCart: !state.showCart,
			}
		}

		default:
			return state
	}
}

export default rootReducer

// console.log('basket', initialState.basket)
