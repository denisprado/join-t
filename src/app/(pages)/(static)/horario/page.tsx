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
			'8:00': 'Treino Individualizado',
			'8:30': 'Treino Individualizado',
			'9:00': 'Treino Individualizado',
			'9:30': 'Treino Individualizado',
			'10:00': 'Treino Individualizado',
			'10:30': 'Treino Individualizado',
			'11:00': 'Treino Individualizado',

		},
	};
	const borderClasses = 'border border-slate-400 border-collapse p-1';

	return (
		<div>
			<h1 className='font-bold font-sans text-2xl mt-16 mb-8'>Tabela de Horários</h1>

			<div className='flex flex-row justify-start items-center mb-4 gap-8'>

				<div className='flex gap-2 justify-start items-center mb-4 text-xl'><div className='bg-[#753fff] text-{#753fff} w-8 p-4 '> </div><p>Treino Individualizado</p></div>
				<div className='flex gap-2 justify-start items-center mb-4  text-xl'><div className='bg-[#b014e9] text-green-100 w-8 p-4'> </div><p>Aula Especial</p></div>
				<div className='flex gap-2 justify-start items-center mb-4  text-xl'><div className='border-[#b014e9] text-green-100 w-8 p-4'> </div><p>Aula Especial ABERTA - Último Sábado do mês - 11H</p></div>
			</div>
			<table className={borderClasses + ' font-sans text-center mb-8'}>
				<thead>
					<tr >
						<th className={borderClasses + ' text-lg p-2'}>Horário de Início</th>
						{diasDaSemana.map(dia => (
							<th className={borderClasses + ' text-lg'} key={dia}>{dia}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{horariosManha.map(horario => (
						<tr key={horario} >
							<td className={borderClasses + ' text-lg'}>{horario}</td>
							{diasDaSemana.map(dia => {
								const atividade = <div className='p-2 flex flex-col gap-1'>{dia !== "Sábado" && <div className='bg-[#753fff] text-[#753fff]'>Treino individualizado</div>}<div className={dia !== "Sábado" ? 'bg-[#b014e9] font-bold' : 'bg-[#753fff] text-[#753fff]'}>{atividades[dia]?.[horario]}</div></div>;
								return <td className={borderClasses} key={dia}>{atividade}</td>; //Mostra a atividade ou "treino individualizado"
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
							<td className={borderClasses}>{horario}</td>
							{diasDaSemana.map(dia => {
								const atividade = <div className='p-2 flex flex-col gap-1'>{dia !== "Sábado" && <div className='bg-[#753fff] text-[#753fff]'>Treino individualizado</div>}<div className='bg-[#b014e9] font-bold '>{atividades[dia]?.[horario]}</div></div>;
								return <td className={borderClasses} key={dia}>{atividade}</td>; //Mostra a atividade ou "treino individualizado"
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default HorarioPage;
