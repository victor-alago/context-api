import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import CountContextProvider from "./context/CountContextProvider"
import UserContextProvider from "./context/UserContextProvider"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<UserContextProvider>
			<CountContextProvider>
				<App />
			</CountContextProvider>
		</UserContextProvider>
	</StrictMode>
)
