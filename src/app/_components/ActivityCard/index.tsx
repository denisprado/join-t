import Image from 'next/image'

const ActivityCard = () => {
	return (
		<div className="card lg:card-side bg-secondary shadow-xl">
			<div className="card-body">
				<h2 className="card-title text-primary font-serif text-4xl">Treino Individualizado</h2>
				<p>Treinos montados para cada aluno, respeitando as particularidades,as necessidades e os objetivos acordados e conversados na nossa avaliação inicial de movimento.</p>
				<div className="card-actions justify-start">
					<button className="btn btn-primary ">Planos e Detalhes</button>
					<button className="btn btn-accent text-white">Agendar Avaliação</button>
				</div>
			</div>
			<figure className='p-5'><Image src='/treino-image.png' alt="treino" width={800} height={1000} /></figure>
		</div>
	)
}

export default ActivityCard