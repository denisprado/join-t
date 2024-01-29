import Logo from "../Logo"

const Navbar = () => {
	return (
		<div className="navbar bg-black flex flex-col lg:flex-row pb-8 lg:pb-0 lg:pt-0">
			<div className="navbar-center lg:navbar-start">
				<Logo></Logo>
			</div>
			<div className="navbar-end flex-col lg:flex-row w-full">
				<div className="flex-none py-4">
					<ul className="menu menu-horizontal menu-md">
						<li><a className="link link-primary link-hover" href="/quem-somos">Quem somos</a></li>
						<li><a className="link link-primary link-hover" href="#footer">Contato</a></li>
						<li><a className="link link-primary link-hover" href="#footer">Localização</a></li>
					</ul>
				</div>
				<a className="btn btn-accent text-white btn-wide md:btn-sm" href="/agendar-avaliacao">Agendar Avaliação de Movimento</a>
			</div>
		</div>
	)
}

export default Navbar