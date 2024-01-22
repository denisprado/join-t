import Image from "next/image"

const About = () => {
	return (
		<>
			<div className="bg-primary text-secondary py-10 w-full flex items-center justify-center pb-32">
				<div className="grid grid-cols-2 gap-8 container self-center justify-center w-1/2">
					<div className="flex flex-col gap-8 col-span-1 relative w-full h-full">
						<Image src={'/about-2.png'} alt="Imagem da JoinT" width={600} height={400} />
						<Image src={'/about-1.png'} alt="Imagem da JoinT" width={600} height={400} />
					</div>
					<div className=" col-span-1">
						<h2 className='font-serif text-4xl mb-2'>Quem somos</h2>
						<p className="font-sans text-secondary mb-4">Nós somos um estúdio de treinamento individualizado,
							ou seja, vamos trabalhar junto ao/a aluno/a as suas
							necessidades e objetivos, pensando na ideia de um
							treinamento generalizado que resgata a liberdade
							de movimento que vamos perdendo ao longo
							da nossa evolução.</p>
						<h2 className="font-serif text-4xl  mb-2	">O que nos diferencial</h2>
						<p className="font-sans text-secondary">Buscamos ressignificar o que é se exercitar dentro de um espaço de &quot;academia&quot;. Gostamos de explorar as possibilidades do nosso corpo e além disso, descontruir a ideia de corpo &quot;ideal&quot; dentro da educação física.</p>
					</div>

				</div>
			</div>

		</>
	)
}

export default About