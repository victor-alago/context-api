import "./App.css"

import ButtonComp from "./components/ButtonComp"
// import { useContext } from "react"
//import { CountContext } from "./context/CountContext"
import HeaderComp from "./components/HeaderComp"

function App() {
	//const { count, setCount } = useContext(CountContext)

	// const handleClick = () => {
	// 	setCount((prev) => prev + 1)
	// }

	return (
		<main>
			<HeaderComp />
			<div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
				<ButtonComp text="add" onclick={() => true} />
				Your result is dynamic count here ...
			</div>
		</main>
	)
}

export default App
