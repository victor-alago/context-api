import PropTypes from "prop-types"

const ButtonComp = ({ text, onclick }) => {
	const handleClick = () => {
		onclick()
	}
	return <button onClick={handleClick}>{text}</button>
}

ButtonComp.propTypes = {
	text: PropTypes.string.isRequired,
	onclick: PropTypes.func.isRequired,
}

export default ButtonComp
