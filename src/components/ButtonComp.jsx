import PropTypes from "prop-types"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const ButtonComp = ({ text, onclick }) => {
	const { user } = useContext(UserContext)

	const handleClick = () => {
		onclick()
	}
	return (
		<button
			style={{ color: user ? "#a1fc9f" : "#fcb9b9" }}
			onClick={handleClick}
		>
			{text}
		</button>
	)
}

ButtonComp.propTypes = {
	text: PropTypes.string.isRequired,
	onclick: PropTypes.func.isRequired,
}

export default ButtonComp
