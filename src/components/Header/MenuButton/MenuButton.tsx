/** @format */
import { useDispatch, useSelector } from "react-redux"
import { actionTypeKeys } from "../../../Redux/actionTypes/actionTypes"
import { IState } from "../../../Redux/actionTypes/types"
import "./MenuButton.scss"

export default function MenuButton() {
	const dispatch = useDispatch()
	const showMenu = useSelector((state: IState) => state.toggleMenu)

	const handleClick = () => {
		dispatch({ type: actionTypeKeys.TOGGLE_MENU })
	}
	return (
		<div>
			<a
				id="menu-toggle"
				className={showMenu ? "menu-toggle nav-open" : "menu-toggle"}
				onClick={handleClick}
			>
				<span className="menu-toggle-bar menu-toggle-bar--top"></span>
				<span className="menu-toggle-bar menu-toggle-bar--middle"></span>
				<span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
			</a>
		</div>
	)
}
