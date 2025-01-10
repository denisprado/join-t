import React from 'react';

const HorarioPage: React.FC = () => {
	const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
	// Gerando horários de 6h30 até 12h30
	const horariosManha = [
		...Array.from({ length: 13 }, (_, i) => {
			const hora = Math.floor((i + 1) / 2) + 6; // Horários de 6h até 12h
			const minuto = (i % 2 === 0) ? '30' : '00';
			return `${hora}:${minuto}`;
		}),
	];

	// Gerando horários de 15h até 20h
	const horariosTarde = [
		...Array.from({ length: 11 }, (_, i) => {
			const hora = Math.floor(i / 2) + 15; // Horários de 15h até 20h
			const minuto = (i % 2 === 0) ? '00' : '30';
			return `${hora}:${minuto}`;
		})
	];

	// Definindo o tipo para atividades
	type Atividades = {
		[key: string]: {
			[key: string]: string;
		};
	};

	// Atividades específicas
	const atividades: Atividades = {
		'Segunda': { '11:30': 'Alongamento' },
		'Terça': { '11:30': 'Calistenia', '18:00': 'Parada de mãos' },
		'Quarta': { '11:30': 'Kettlebell', '18:00': 'Calistenia' },
		'Quinta': { '11:30': 'Calistenia' },
		'Sexta': { '11:30': 'Parada de mãos' },
		'Sábado': {
			'8:00': 'Treino',
			'8:30': 'Treino',
			'9:00': 'Treino',
			'9:30': 'Treino',
			'10:00': 'Treino',
			'10:30': 'Treino',
			'11:00': 'Treino',

		},
	};

	const borderClasses = 'border border-slate-700 border-collapse p-1 pt-2';

	// Função para renderizar a atividade
	const renderAtividade = (dia: string, horario: string) => {
		return (
			<div className='p-1 sm:px-2 flex flex-col gap-2 text-xs sm:text-base sm:font-bold text-center'>{dia !== "Sábado" &&
				<div className='bg-[#753fff] text-[#753fff]'>
					<div className='hidden sm:flex'>Treino</div>
					<div className='sm:hidden flex'>&nbsp;</div>
				</div>}

				<div className={`${sabadoColor(dia)} text-[8px] sm:text-[10px] md:text-[14px] text-wrap justify-center md:text-base md:font-bold hidden md:flex`}>{atividades[dia]?.[horario]}</div>
				<div className={`${sabadoColor(dia)} text-[8px] sm:text-[10px]  md:text-[14px] text-wrap justify-center md:text-base md:font-bold md:hidden flex`}>{atividades[dia]?.[horario]}</div>

			</div>
		);
	};
	const sabadoColor = (dia: string) => {
		return dia === 'Sábado' ? 'bg-[#753fff] text-[#753fff]' : 'bg-[#b014e9]'
	}



	return (
		<div className="container mx-auto p-4">
			<h1 className='font-bold font-sans text-2xl mt-16 mb-8'>Tabela de Horários</h1>

			<div className='flex flex-col sm:flex-row sm:justify-start sm:items-center mb-4 gap-2 sm:gap-8'>
				<div className='flex gap-2 justify-start items-center mb-4 text-xl'><div className='bg-[#753fff] text-{#753fff} w-8 p-4 '> </div>
					<div className='font-sans'>Treino</div>
				</div>
				<div className='flex gap-2 justify-start items-center mb-4  text-xl'>
					<div className='bg-[#b014e9] text-green-100 w-8 p-4'> </div>
					<div className='font-sans'>Aula Especial</div>
				</div>
				<div className='flex justify-start items-center mb-4  text-xl'>

					<div className='font-sans'>Aula Especial ABERTA - Último Sábado do mês - 11H</div>
				</div>
			</div>

			<div className="overflow-auto">
				<table className={borderClasses + ' font-sans text-center mb-8 table-fixed table-pin-cols w-full'}>
					<thead>
						<tr >
							<th className={borderClasses + ' text-xs sm:text-lg sm:p-2'}>Horário de Início</th>
							{diasDaSemana.map(dia => (
								<th className={borderClasses + ' text-xs  sm:text-lg'} key={dia}>{dia}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{horariosManha.map(horario => (
							<tr key={horario} >
								<td className={borderClasses + ' sm:text-lg'}>{horario}</td>
								{diasDaSemana.map(dia => {
									return <td className={borderClasses} key={dia}>{renderAtividade(dia, horario)}</td>; //Mostra a atividade ou "treino"
								})}
							</tr>
						))}
						{/* Linha para o horário de almoço */}
						<tr>
							<td colSpan={6} className="text-center bg-transparent text-transparent">Sem atividades (12:30 - 15:00)</td>
						</tr>
						{/* Horários da tarde */}
						{horariosTarde.map(horario => (
							<tr key={horario} >
								<td className={borderClasses + ' sm:text-lg'}>{horario}</td>
								{diasDaSemana.map(dia => {
									return <td className={borderClasses} key={dia}>{renderAtividade(dia, horario)}</td>; //Mostra a atividade ou "treino"
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default HorarioPage;
