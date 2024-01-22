import Logo from "../Logo"

const Footer = () => {
	return (
		<><footer className="footer p-10 bg-secondary text-base-content mt-20 font-sans" id={'footer'}>
			<aside>
				<Logo></Logo>
			</aside>
			<nav>
				<header className="footer-title">Email</header>
				<p>@jointtreinamento</p>
			</nav>
			<nav>
				<header className="footer-title">Instagram</header>
				<p>@jointtreinamento</p>
			</nav>
			<nav>
				<header className="footer-title">WhatsApp</header>
				<p>(19) 97140-4717</p>
			</nav>
			<nav>
				<header className="footer-title">Endereço</header>
				<p>Rua Jerônimo Páttaro, 250 <br />
					Barão Geraldo (Próximo ao Sorvete em Camadas)</p>
			</nav>
		</footer>
			<footer className="footer px-10 py-4 border-t bg-neutral-950 text-base-content border-base-300"></footer>
		</>
	)
}

export default Footer