import Curves from "../Curves"
import Logo from "../Logo"
import Image from 'next/image'

const Footer = () => {
	return (
		<div className="w-full bg-secondary flex flex-col justify-start items-center mt-20"><footer className="footer container p-10 bg-secondary text-base-content mt-10 font-sans" id={'footer'}>
			<aside>
				<Logo></Logo>
			</aside>
			<nav>
				<header className="footer-title">Email</header>
				<p><a href="mailto:joint@jointtreinamento.com.br">joint@jointtreinamento.com.br</a></p>
			</nav>
			<nav>
				<header className="footer-title">Instagram</header>
				<a href={'https://www.instagram.com/jointtreinamento/'} target="_blank">@jointtreinamento</a>
			</nav>
			<nav>
				<header className="footer-title">WhatsApp</header>
				<span className="badge badge-success badge-outline"><a href="https://wa.me/19971404714" target={'_blank'}>Enviar Mensagem</a></span>
			</nav>
			<nav>
				<header className="footer-title">Endereço</header>
				<p>Rua Jerônimo Páttaro, 250. Barão Geraldo. <br />
					(Próximo ao Sorvete em Camadas)
				</p>
				<span className="badge badge-primary badge-outline"><a href="https://maps.app.goo.gl/QWuAJTGP3p9Pmtzb8" target={'_blank'}>Ver mapa</a></span>
			</nav>
		</footer>
			<footer className="footer px-10 py-4 border-t bg-neutral-950 text-base-content border-base-300"></footer>
		</div>

	)
}

export default Footer