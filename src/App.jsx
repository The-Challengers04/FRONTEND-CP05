import { useState } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { CarrinhoContext } from "./CarrinhoContext";

function App() {
	const [carrinhoQtd, setCarrinhoQtd] = useState(0);

	function incrementarCarrinho(quantidade = 1) {
		setCarrinhoQtd((prevState) => prevState + quantidade);
	}

	return (
		<>
			<CarrinhoContext.Provider value={{ carrinhoQtd, incrementarCarrinho }}>
				<Nav />
				<Outlet />
			</CarrinhoContext.Provider>
		</>
	);
}

export default App;
