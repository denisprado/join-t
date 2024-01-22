'use client'

import { E164Number } from "libphonenumber-js/core"
import { useState } from "react"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Agendar = () => {
	const [value, setValue] = useState<E164Number>()

	return (
		<>
			<div className="bg-primary text-secondary py-10 w-full flex items-center justify-center pb-32">
				<div className="grid grid-cols-2 gap-8 container self-center justify-center w-1/2">
					<form>
						<div className="flex flex-col gap-8 col-span-1 relative w-full h-full">

							<input type="text" placeholder="Nome completo" className="input w-full bg-primary border-secondary focus:border-secondary" />
							<PhoneInput defaultCountry="BR" className="input w-full bg-primary [&_input]:bg-primary border-secondary focus:border-secondary [&_input]:focus:border-secondary " value={value} onChange={setValue} />
							<select className="select w-full bg-primary border-secondary focus:border-secondary">
								<option disabled selected>Data</option>
								<option>Segunda</option>
								<option>Quarta</option>
							</select>
							<select className="select w-full bg-primary border-secondary focus:border-secondary" defaultValue={16}>
								<option disabled selected>Horário</option>
								<option value={16}>16</option>
								<option value={10}>10</option>
							</select>
						</div>
						<button className="btn btn-accent text-white">Enviar agendamento</button>
					</form>

					<div className=" col-span-1">

					</div>

				</div>
			</div>
		</>
	)
}

export default Agendar