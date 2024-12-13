import "./App.css";

// ========== for normal-level import ========== //
// import InputBox from "./components/InputBox";

// ======== for production-level import ======== //
import { InputBox } from "./components"; // as "index.js" file automatically called

function App() {
	return <InputBox />;
}

export default App;
