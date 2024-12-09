import "./App.css"
import ButtonComp from "./components/ButtonComp"
import { useContext } from "react"
import { CountContext } from "./context/CountContext"
import { UserContext } from "./context/UserContext"
import HeaderComp from "./components/HeaderComp"

function App() {
	const { count, setCount } = useContext(CountContext)
	const { user, setUser } = useContext(UserContext)

	const handleClick = () => {
		setCount((prev) => prev + 1)
	}

	const handleLogin = () => {
		setUser({ name: "John Doe", email: "john@example.com" })
	}

	const handleLogout = () => {
		setUser(null)
		setCount(0)
	}

	return (
		<main className={`app ${user ? 'logged-in' : 'logged-out'}`}>
			<HeaderComp />
			<ButtonComp text="add" onclick={handleClick} />
			{user ? (
				<ButtonComp text="Log Out" onclick={handleLogout} />
			) : (
				<ButtonComp text="Log In" onclick={handleLogin} />
			)}
			Your result is {count}
			{user && <div className="alert">Welcome {user.name}!</div>}
		</main>
	)
}

export default App
