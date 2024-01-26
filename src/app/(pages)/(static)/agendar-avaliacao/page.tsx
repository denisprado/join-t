'use client'

import seed from "@/app/(seed)/seed"
import { E164Number } from "libphonenumber-js/core"
import { FormEvent, useState } from "react"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Agendar = () => {
	const [value, setValue] = useState<E164Number>()
	const [nome, setNome] = useState('')
	const [identidade, setIdentidade] = useState('')
	const [nascimento, setNascimento] = useState('')
	const [email, setEmail] = useState('')
	const [diaDaSemana, setDiaDaSemana] = useState('')


	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		const mensagem = `Nome: ${nome} Identidade: ${identidade} Data de nascimento: ${nascimento} Email: ${email} Dia/horário disponíveis: ${diaDaSemana}`;
		const whatsappLink = `https://wa.me/${seed.profile.whatsapp}?text=${encodeURIComponent(mensagem)}`;

		// Redirecionando para o link
		window.location.href = whatsappLink;
	}



	return (
		<div className="bg-primary w-full flex flex-col items-center justify-center">
			<div className="container w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3">
				<h2 className=" text-4xl font-serif pb-4 text-secondary">Solicitar Agendamento <br></br>de Avaliação de Movimento</h2>
				<div className="bg-primary text-secondary py-10 w-full  pb-32">
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col gap-4 relative w-full h-full pb-10 ">
							<label className="form-control w-full ">
								<div className="label">
									<span className="label-text text-secondary font-sans font-semibold">Nome completo</span>
								</div><input
									type="text"
									className="input w-full bg-primary border-secondary focus:border-secondary"
									onChange={(e) => setNome(e.target.value)}
									value={nome}
								/>
							</label>

							<label className="form-control w-full ">
								<div className="label">
									<span className="label-text text-secondary font-sans font-semibold focus-within:border-secondary">Identidade de Gênero</span>
								</div>
								<select
									className="select w-full bg-primary border-secondary focus:border-secondary"
									value={identidade}
									onChange={(e) => setIdentidade(e.target.value)}
								>
									<option disabled>Data</option>
									<option>Masculino</option>
									<option>Feminino</option>
									<option>Não-binário</option>
									<option>Outros</option>
								</select>
							</label>

							<label className="form-control w-full ">
								<div className="label">
									<span className="label-text text-secondary font-sans font-semibold">Data de nascimento</span>
								</div><input
									type="date"
									className="input w-full bg-primary border-secondary focus:border-secondary"
									onChange={(e) => setNascimento(e.target.value)}
									value={nascimento}
								/>
							</label>

							{/* <label className="form-control w-full ">
								<div className="label">
									<span className="label-text text-secondary font-sans font-semibold [&_input]:focus-within:border-secondary">Telefone (WhatsApp)</span>
								</div>
								<div data-theme="cyberpunk">
									<PhoneInput
										defaultCountry="BR"
										className="input w-full rounded-md bg-primary [&_input]:bg-primary border-secondary focus:border-secondary 
									[&_input]:focus:border-secondary 
									"
										value={value}
										onChange={(val) => setValue(val)}
										style={{ ":focus-within:border-color": 'black' }}
									/>
								</div>
							</label> */}

							<label className="form-control w-full ">
								<div className="label">
									<span className="label-text text-secondary font-sans font-semibold">Email</span>
								</div><input
									type="email"
									className="input w-full bg-primary border-secondary focus:border-secondary"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</label>
							<label className="form-control w-full ">
								<div className="label">
									<span className="label-text text-secondary font-sans font-semibold">Dias e horários disponíveis para Avaliação</span>
								</div><input
									type="text"
									className="input w-full bg-primary border-secondary focus:border-secondary"
									onChange={(e) => setDiaDaSemana(e.target.value)}
									value={diaDaSemana}
								/>
							</label>
						</div>
						<button type="submit" className="btn btn-accent text-white w-full ">Enviar agendamento</button>

					</form>
				</div>
			</div >
		</div >
	)
}

export default Agendar