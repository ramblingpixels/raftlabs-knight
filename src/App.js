import "./App.css";
import Chessboard from "./components/Chessboard";

function App() {
	return (
		<div className="App">
			<h1>Knight Moves</h1>
			<p>Possible moves of the knight are highlighted!</p>
			<Chessboard />
		</div>
	);
}

export default App;
