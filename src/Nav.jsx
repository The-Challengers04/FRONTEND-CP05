import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/nav.module.css";
import styled from "styled-components";
import carrinhoIcon from "./assets/carrinho-de-compras.png";
import { CarrinhoContext } from "./CarrinhoContext";

const CarrinhoIconDiv = styled.div`
	img {
		width: 35px;
	}
	label {
		font-size: 12px;
		position: relative;
		top: -45px;
		right: -15px;

		margin-left: 3px;
		background-color: red;
		color: white;
		border-radius: 50%;
		padding: 4px 8px;
	}
`;

function Nav() {
	const { carrinhoQtd: carrinhoQuantidade } = useContext(CarrinhoContext);

	return (
		/*div principal */
		<div className="container my-4 ">
			{/* nav  */}
			<nav className="navbar navbar-expand-lg mb-4">
				{/* container do menu nav */}
				<div className="container-fluid">
					{/* logo */}
					<a className="navbar-brand" href="/">
						MyShop
						{/* links dos elementos e chamando estilzação css modules*/}
						<ul className="navbar-nav ms-auto ">
							<li className="nav-item">
								<NavLink to="/Casual" className="nav-link">
									<h6 className={styles.tlink}>Casual</h6>
								</NavLink>
							</li>
							<li className="nav-item ">
								<NavLink to="/Masculino" className="nav-link">
									<h6 className={styles.tlink}>Masculino</h6>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Feminino" className="nav-link">
									<h6 className={styles.tlink}>Feminino</h6>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Outlet" className="nav-link">
									<h6 className={styles.tlink}>Outlet</h6>
								</NavLink>
							</li>
						</ul>
					</a>
					{/* botão  para criar a menu hamburguer */}
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				{/* menu nav do carrinho e login */}
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavLink to="/Carrinho">
								<CarrinhoIconDiv>
									<img src={carrinhoIcon} alt="Ícone de carrinho" />
									{carrinhoQuantidade > 0 && (
										<label>{carrinhoQuantidade}</label>
									)}
								</CarrinhoIconDiv>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/Login" className="bi bi-person-circle">
								<h6 className={styles.tlink1}>Login</h6>
							</NavLink>
						</li>
					</ul>
				</div>
				{/* final do nav */}
			</nav>
			{/* final da div principal */}
		</div>
	);
}

export default Nav;
