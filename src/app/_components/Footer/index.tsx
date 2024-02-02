'use client'

import useAllRecords from "@/app/_api/client/useAllRecords"
import Markdown from "react-markdown"
import Curves from "../Curves"
import Logo from "../Logo"

const Footer = () => {

	const { data: profile, loading: loadingprofile, error: errorprofile } = useAllRecords<'profile'>({
		table: 'profile'
	});

	return (
		<div className="flex flex-col">
			<Curves color="terciary"></Curves>
			<div className="w-full bg-secondary flex flex-col justify-start items-center pt-10">
				<footer className="footer container p-10 bg-secondary text-base-content mt-10 font-sans" id={'footer'}>
					<aside>
						<Logo></Logo>
					</aside>
					<nav>
						<header className="footer-title">Email</header>
						<p>
							<a href={profile ? profile[0]?.email! : '#'}>{profile ? profile[0]!.email : '#'}</a>
						</p>
					</nav>
					<nav>
						<header className="footer-title">Instagram</header>
						<a href={`https://www.instagram.com/${profile ? profile[0]?.instagram! : '#'}`} target="_blank">{profile ? profile[0]?.instagram! : '#'}</a>
					</nav>
					<nav>
						<header className="footer-title">WhatsApp</header>
						<span className="badge badge-success badge-outline"><a href={`https://wa.me/${profile ? profile[0]?.whatsapp! : '#'}`} target={'_blank'}>Enviar Mensagem</a></span>
					</nav>
					<nav>
						<header className="footer-title">Endereço</header>
						<Markdown>{profile ? profile[0]?.address! : '#'}
						</Markdown>
						<span className="badge badge-primary badge-outline"><a href={profile ? profile[0]?.coordinates! : '#'} target={'_blank'}>Ver mapa</a></span>
					</nav>
				</footer>
				<footer className="footer px-10 py-4 border-t bg-neutral-950 text-base-content border-base-300"></footer>
			</div>
		</div>
	)
}

export default Footer