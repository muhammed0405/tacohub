import { actionTypeKeys } from './actionTypes'
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
	meals: ITaco[]
	toggleMenu: boolean
	showCart: boolean
	cart: IImage[]
}
type IToggleMenu = {
	type: typeof actionTypeKeys.TOGGLE_MENU
}
type IToggleCart = {
	type: typeof actionTypeKeys.TOGGLE_CART
}
type IAddToCart = {
	type: typeof actionTypeKeys.ADD_TO_CART
	payload: IImage
}

export type IAction = IToggleMenu | IToggleCart | IAddToCart
