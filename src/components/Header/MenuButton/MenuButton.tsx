/** @format */
import { useState } from "react"
import "./MenuButton.scss"

export default function MenuButton() {
	const [menuState , setMenuState] = useState<boolean>(false)

	const handleClick = ()=>{
		setMenuState(!menuState)
	}
	return (
		<div>
			<a id="menu-toggle" className={menuState ? "menu-toggle nav-open" : "menu-toggle"} onClick={handleClick}>
				<span className="menu-toggle-bar menu-toggle-bar--top"></span>
				<span className="menu-toggle-bar menu-toggle-bar--middle"></span>
				<span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
			</a>
		</div>
	)
}
