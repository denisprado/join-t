'use client'
import Logo from "@/app/_components/Logo"
import { MenuItems } from "@/app/_components/Menu"

const Navbar = () => {
	const items = [
		{ href: "/", label: "home" },
		{ href: "/quem-somos", label: "quem somos" },
		{ href: "/horario", label: "horários" },
		{ href: "/#valores", label: "valores" },
		{ href: "#footer", label: "Contato" },
		{ href: "#footer", label: "Localização" },
	]

	return (
		<div className="navbar bg-black flex flex-col lg:flex-row pb-8 lg:pb-0 lg:pt-0">
			<div className="navbar-center lg:navbar-start">
				<Logo></Logo>
			</div>
			<div className="navbar-end flex-col lg:flex-row w-full">
				<div className="flex-none py-4">
					<ul className="menu menu-horizontal menu-md">
						<MenuItems items={items} />
					</ul>
				</div>
				<a className="btn btn-accent text-white btn-wide md:btn-sm" href="/agendar-avaliacao">Agendar Avaliação de Movimento</a>
			</div>
		</div>
	)
}

export default Navbar