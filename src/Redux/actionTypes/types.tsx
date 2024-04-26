/** @format */

import { actionTypeKeys } from './actionTypes'
export interface IImage {
	id: string
	img: string
	title: string
	measure: string
	price: number
	description: string
	quantity: number
}

export interface ITaco {
	id: string
	title: string
	tacoCategory: IImage[]
}

export interface IState {
	showModal: boolean
	meals: ITaco[]
	toggleMenu: boolean
	showCart: boolean
	cart: IImage[]
}
interface IToggleMenu {
	type: typeof actionTypeKeys.TOGGLE_MENU
}

interface IToggleCart {
	type: typeof actionTypeKeys.TOGGLE_CART
}

interface IAddToCart {
	type: typeof actionTypeKeys.ADD_TO_CART
	payload: IImage
}
interface IRemoveFromCart {
	type: typeof actionTypeKeys.REMOVE_FROM_CART
	payload: IImage
}
interface IUpdateCartItemPrice {
	type: typeof actionTypeKeys.UPDATE_CART_ITEM_PRICE
	payload: IImage
}

interface IUpdateMealQuantity {
	type: typeof actionTypeKeys.UPDATE_MEAL_QUANTITY
	payload: string
}

interface IToggleModal {
	type: typeof actionTypeKeys.TOGGLE_MODAL
}

export type IAction =
	| IToggleMenu
	| IToggleCart
	| IAddToCart
	| IRemoveFromCart
	| IUpdateCartItemPrice
	| IUpdateMealQuantity
	| IToggleModal
