import Logo from "../Logo"

const Navbar = () => {
	return (
		<div className="navbar bg-black">
			<div className="navbar-start">
				<Logo></Logo>
			</div>
			<div className="navbar-end">
				<div className="flex-none">
					<ul className="menu menu-horizontal">
						<li><a className="link link-primary" href="/quem-somos">Quem somos</a></li>
						<li><a className="link link-primary" href="#footer">Contato</a></li>
						<li><a className="link link-primary" href="#footer">Localização</a></li>
					</ul>
				</div>
				<a className="btn btn-accent text-white" href="/agendar-avaliacao">Agendar Avaliação de Movimento</a>
			</div>
		</div>
	)
}

export default Navbar