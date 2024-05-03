/** @format */

import { actionTypeKeys } from "./actionTypes"
export interface ITaco {
	id: string
	img: string
	title: string
	measure: string
	price: number
	description: string
	quantity: number
}

export interface ITacos {
	id: string
	title: string
	tacoCategory: ITaco[]
}

export interface IState {
	showModal: boolean
	tacos: ITacos[]
	toggleBurgerMenu: boolean
	showCart: boolean
	cart: ITaco[]
}
interface IToggleBurgerMenu {
	type: typeof actionTypeKeys.TOGGLE_BURGER_MENU
}

interface IToggleCart {
	type: typeof actionTypeKeys.TOGGLE_CART
}

export interface IAddToCart {
	type: typeof actionTypeKeys.ADD_TO_CART
	payload: ITaco
}
export interface IRemoveFromCart {
	type: typeof actionTypeKeys.REMOVE_FROM_CART
	payload: ITaco
}
export interface IUpdateCartItemPrice {
	type: typeof actionTypeKeys.UPDATE_CART_ITEM_PRICE
	payload: ITaco
}

interface IUpdateMealQuantity {
	type: typeof actionTypeKeys.UPDATE_MEAL_QUANTITY
	payload: string
}

interface IToggleModal {
	type: typeof actionTypeKeys.TOGGLE_MODAL
}
interface IClearCart {
	type: typeof actionTypeKeys.CLEAR_CART
}
export type IAction =
	| IToggleBurgerMenu
	| IToggleCart
	| IAddToCart
	| IRemoveFromCart
	| IUpdateCartItemPrice
	| IUpdateMealQuantity
	| IToggleModal
	| IClearCart
