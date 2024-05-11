/** @format */
//types
import { actionTypeKeys } from "./actionTypes/actionTypes"
import {
	IAction,
	IAddToCart,
	IRemoveFromCart,
	IState,
} from "./actionTypes/types"
import { tacosData } from "./tacosData/tacosData"
//taco

const initialState: IState = {
	showCart: false,
	showModal: false,

	tacos: tacosData,
	cart: [],
	toggleBurgerMenu: false,
}

const rootReducer = (state = initialState, action: IAction): IState => {
	switch (action.type) {
		case actionTypeKeys.ADD_TO_CART:
			{
				const { payload } = action as IAddToCart
				const isAdded = state.cart.find(el => el.id === payload.id)
				if (isAdded) {
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
			break

		case actionTypeKeys.REMOVE_FROM_CART:
			{
				const { payload } = action as IRemoveFromCart
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

			break

		case actionTypeKeys.CLEAR_CART:
			{
				return {
					...state,
					cart: [],
				}
			}

			break

		case actionTypeKeys.TOGGLE_BURGER_MENU:
			{
				return {
					...state,
					toggleBurgerMenu: !state.toggleBurgerMenu,
				}
			}
			break

		case actionTypeKeys.TOGGLE_MODAL:
			{
				return {
					...state,
					showModal: !state.showModal,
				}
			}

			break

		case actionTypeKeys.TOGGLE_CART: {
			return {
				...state,
				showCart: !state.showCart,
			}
		}z

		default:
			return state
	}
}

export default rootReducer
