const seed =
{
	activities: [
		{
			id: '1',
			name: "Treino Individualizado",
			description: "Treinos montados para cada aluno, respeitando as particularidades,as necessidades e os objetivos acordados e conversados na nossa avaliação inicial de movimento.",
			images: ["treino-image.png"],
			schedules: "Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h",
			teatcher: 'Daniel Moda e Lucas Ambrosio',
			group: "1",
			videos: ""
		},
		{
			id: '2',
			name: "Aulas Especiais",
			description: "Aulas em grupo de diferentes temas: parada de mãos, kettlebell, calistenia, alongamento e treinão (treino de alta intensidade)",
			images: ["treino-image.png"],
			teatcher: 'Daniel Moda e Lucas Ambrosio',
			schedules: "Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h",
			group: "1",
			videos: ""
		}
		,
		{
			id: '3',
			name: "Yoga",
			description: "A YOGA é uma prática milenar que surgiu na Índia e se popularizou em todo o mundo por seus inúmeros benefícios para a saúde física e mental. Com a combinação de posturas corporais, exercícios de respiração e meditação, a Yoga promove o equilíbrio entre corpo e mente, aliviando o estresse, aumentando a flexibilidade, melhorando a concentração e trazendo paz interior. Praticar Yoga regularmente pode ajudar a melhorar a qualidade de vida e a encontrar um estado de tranquilidade e bem-estar.",
			images: ["yoga-image.png"],
			teatcher: 'Thais Esteves',
			schedules: "Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h",
			group: "2",
			videos: ""
		},
		{
			id: '3',
			name: "Dança Contemporânea e Movimento Consciente",
			description: "A DANÇA CONTEMPORÂNEA é uma forma de arte que valoriza a liberdade de expressão e a originalidade do movimento. Ela se diferencia dos estilos de dança mais tradicionais por sua abordagem experimental e pela busca constante por novas formas de se movimentar. ",
			teatcher: 'Thais Esteves',
			images: ["danca-image.png"],
			schedules: "Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h",
			group: "3",
			videos: ""
		}
	],
	groups: [
		{
			id: 1,
			title: 'Treino+Aulas',
			image: "treino-image.png",
		},
		{
			id: 2,
			title: 'Yoga',
			image: "yoga-image.png",
		},

		{
			id: 3,
			title: 'Danca',
			image: "danca-image.png"
		},

	]
}


export default seed