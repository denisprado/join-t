'use client'

import { E164Number } from "libphonenumber-js/core"
import { FormEvent, SetStateAction, useState } from "react"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Agendar = () => {
	const [value, setValue] = useState<E164Number>()
	const [nome, setNome] = useState('')
	const [diaDaSemana, setDiaDaSemana] = useState('')
	const [horario, setHorario] = useState('')

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		const mensagem = `Nome: ${nome} Telefone: ${value} Dia: ${diaDaSemana} Horário: ${horario}`;
		const whatsappLink = `https://wa.me/19991958904?text=${encodeURIComponent(mensagem)}`;

		// Redirecionando para o link
		window.location.href = whatsappLink;
	}



	return (
		<div className="bg-primary w-full flex flex-col items-center justify-center">
			<div className="container w-1/4">
				<h2 className=" text-4xl font-serif pb-4 text-secondary">Solicitar Agendamento <br></br>de Avaliação de Movimento</h2>
				<div className="bg-primary text-secondary py-10 w-full  pb-32">
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col gap-4 relative w-full h-full pb-10 ">
							<label className="form-control w-full ">
								<div className="label">
									<span className="label-text text-secondary font-sans font-semibold focus-within:border-secondary">Nome completo</span>
								</div>

								<input
									type="text"
									className="input w-full bg-primary border-secondary focus:border-secondary"
									onChange={(e) => setNome(e.target.value)}
									value={nome}
								/>
							</label>
							<label className="form-control w-full ">
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
							</label>
							<label className="form-control w-full ">
								<div className="label">
									<span className="label-text text-secondary font-sans font-semibold focus-within:border-secondary">Dia</span>
								</div>
								<select
									className="select w-full bg-primary border-secondary focus:border-secondary"
									value={diaDaSemana}
									onChange={(e) => setDiaDaSemana(e.target.value)}
								>
									<option disabled>Data</option>
									<option>Segunda</option>
									<option>Quarta</option>
								</select>
							</label>
							<label className="form-control w-full ">
								<div className="label">
									<span className="label-text text-secondary font-sans font-semibold focus-within:border-secondary">Horário</span>
								</div>
								<select
									className="select w-full bg-primary border-secondary focus:border-secondary"
									value={horario}
									onChange={(e) => setHorario(e.target.value)}
								>
									<option disabled>Horário</option>
									<option value={16}>16</option>
									<option value={10}>10</option>
								</select>
							</label>
						</div>
						<button type="submit" className="btn btn-accent text-white w-full">Enviar agendamento</button>

					</form>
				</div>
			</div >
		</div >
	)
}

export default Agendar