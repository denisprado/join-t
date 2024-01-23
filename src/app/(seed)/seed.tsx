import { Activity, ActivityGroups, Plans, PlanType,  TermGroups } from '@/types/index'


type Seed = {
	activities:Activity[],
	activityGroups:ActivityGroups[],
	termsGroup:TermGroups[]
	planType:PlanType[]
	plans:Plans[]
}

const seed:Seed =
{
	activities: [
		{
			id: `1`,
			name: `Treino Individualizado`,
			description: `Treinos montados para cada aluno, respeitando as particularidades,as necessidades e os objetivos acordados e conversados na nossa avaliação inicial de movimento.`,
			images: [`treino-image.png`],
			schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h`,
			teatcher: `Daniel Moda e Lucas Ambrosio`,
			activityGroup: `1`,
			videos: ``
		},
		{
			id: `2`,
			name: `Aulas Especiais`,
			description: `Aulas em grupo de diferentes temas: parada de mãos, kettlebell, calistenia, alongamento e treinão (treino de alta intensidade)`,
			images: [`treino-image.png`],
			teatcher: `Daniel Moda e Lucas Ambrosio`,
			schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h`,
			activityGroup: `1`,
			videos: ``
		}
		,
		{
			id: `3`,
			name: `Yoga`,
			description: `A YOGA é uma prática milenar que surgiu na Índia e se popularizou em todo o mundo por seus inúmeros benefícios para a saúde física e mental. Com a combinação de posturas corporais, exercícios de respiração e meditação, a Yoga promove o equilíbrio entre corpo e mente, aliviando o estresse, aumentando a flexibilidade, melhorando a concentração e trazendo paz interior. Praticar Yoga regularmente pode ajudar a melhorar a qualidade de vida e a encontrar um estado de tranquilidade e bem-estar.`,
			images: [`yoga-image.png`],
			teatcher: `Thais Esteves`,
			schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h`,
			activityGroup: `2`,
			videos: ``
		},
		{
			id: `4`,
			name: `Dança Contemporânea e Movimento Consciente`,
			description: `A DANÇA CONTEMPORÂNEA é uma forma de arte que valoriza a liberdade de expressão e a originalidade do movimento. Ela se diferencia dos estilos de dança mais tradicionais por sua abordagem experimental e pela busca constante por novas formas de se movimentar. `,
			teatcher: `Thais Esteves`,
			images: [`danca-image.png`],
			schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30	 <br>
			
			Sábado : 8h - 11h`,
			activityGroup: `3`,
			videos: ``
		}
	],
	activityGroups: [
		{
			id: `1`,
			title: `Treino Individualizado + Aulas Especiais`,
			image: `treino-image.png`,
		},
		{
			id: `2`,
			title: `Yoga`,
			image: `yoga-image.png`,
		},

		{
			id: `3`,
			title: `Dança Contemporânea e Movimento Consciente`,
			image: `danca-image.png`
		},

	],
	termsGroup: [
		{
			id: `1`,
			terms: [
				{ title: `Título`, value: `Diário` },
				{ title: `Duração`, value: `**30 dias**` },
				{ title: `Cancelamento`, value: `Sendo necessário um **aviso prévio de 7 dias** para o cancelamento da renovação para o próximo mês. Não há multa por cancelamento (se respeitado o aviso de 7 dias).` },
				{ title: `Renovação`, value: `Sim` },
				{ title: `Cobrança`, value: `Mensal` },
				{ title: `Trancamento`, value: `Não permitido` },
				{ title: `Descontos Aplicáveis`, value: `R$ 20,00 - estudante (graduação, estrado e/ou doutorado)  
				R$ 25,00 - parceria clubleu (não cumulativo com o desconto estudante)` },
				{ title: `Métodos de Pagamento`, value: `Pix/Cartão de crédito/Débito recorrente` }
			]
		},
		{
			id: `2`,
			terms: [
				{ title: `Título`, value: `Trimestral` },
				{ title: `Duração`, value: `3 meses` },
				{ title: `Cancelamento`, value: `Multa proporcional ao tempo de uso e tempo restante do plano` },
				{ title: `Renovação`, value: `Sim` },
				{ title: `Cobrança`, value: `Mensal` },
				{ title: `Trancamento`, value: `Trancamento de 15 dias (não necessariamente consecutivos). Sendo realizado normalmente o pagamento, e depois o sistema liberará as reposições de aulas/treinos.` },
				{ title: `Descontos Aplicáveis`, value: `R$ 20,00 - estudante (graduação, estrado e/ou doutorado) / R$ 25,00 - parceria clubleu (não cumulativo com o desconto estudante)` },
				{ title: `Métodos de Pagamento`, value: `Pix/Cartão de crédito/Débito recorrente` }
			]
		},
		{
			id: `3`,
			terms: [
				{ title: `Título`, value: `Semestral` },
				{ title: `Duração`, value: `6 meses` },
				{ title: `Cancelamento`, value: `Multa proporcional ao tempo de uso e tempo restante do plano` },
				{ title: `Renovação`, value: `Sim` },
				{ title: `Cobrança`, value: `Mensal` },
				{ title: `Trancamento`, value: `Trancamento de 30 dias (não necessariamente consecutivos). Sendo realizado normalmente o pagamento, e depois o sistema liberará as reposições de aulas/treinos.` },
				{ title: `Descontos Aplicáveis`, value: `R$ 20,00 - estudante (graduação, estrado e/ou doutorado) / R$ 25,00 - parceria clubleu (não cumulativo com o desconto estudante)` },
				{ title: `Métodos de Pagamento`, value: `Pix/Cartão de crédito/Débito recorrente` }
			]
		},
		{
			id: `4`,
			terms: [
				{ title: `Título`, value: `Anual` },
				{ title: `Duração`, value: `#12 meses` },
				{ title: `Cancelamento`, value: `Multa proporcional ao tempo de uso e tempo restante do plano` },
				{ title: `Renovação`, value: `Sim` },
				{ title: `Cobrança`, value: `Mensal` },
				{ title: `Trancamento`, value: `Trancamento de 60 dias (não necessariamente consecutivos). Sendo realizado normalmente o pagamento, e depois o sistema liberará as reposições de aulas/treinos.` },
				{ title: `Descontos Aplicáveis`, value: `R$ 20,00 - estudante (graduação, estrado e/ou doutorado) / R$ 25,00 - parceria clubleu (não cumulativo com o desconto estudante)` },
				{ title: `Métodos de Pagamento`, value: `Pix/Cartão de crédito/Débito recorrente` }
			]
		},
		{
			id: `5`,
			terms: [
				{ title: `Título`, value: `Au, special - Alune JoinT` },
				{ title: `Duração`, value: `2 meses` },
				{ title: `Métodos de Pagamento`, value: `Somente Pix` }
			]
		},
		{
			id: `6`,
			terms: [
				{ title: `Título`, value: `Au, special - Não Alune` },
				{ title: `Duração`, value: `2 meses` },
				{ title: `Métodos de Pagamento`, value: `Somente Pix` }
			]
		}
	],
	planType: [
		{
			id: `1`,
			title: `Plano`,
			defaultSelectedPLan:'1'
		},
		{
			id: `2`,
			title: `Plano  Social`,
			defaultSelectedPLan:'4'
		},
		{
			id: `3`,
			title: `Aula  Avulsa`,
			defaultSelectedPLan:'4'
		},
	],
	plans: [
		{
			id: `1`,
			title: `Mensal`,
			activityGroup: `1`,
			termsGroup: `1`,
			planType: `1`,
			prices: [
				{
					title: `2x/semana`,
					value: `R$220,00`
				},
				{
					title: `3x/semana`,
					value: `R$240,00`
				},
				{
					title: `5x/semana`,
					value: `R$280,00`
				},
				{
					title: `8x/semana`,
					value: `R$307,00`
				},

			]
		},
		{
			id: `2`,
			title: `Mensal`,
			activityGroup: `3`,
			termsGroup: `1`,
			planType: `1`,
			prices: [
				{
					title: `1x/semana`,
					value: `R$180,00`
				},
			]
		},
		{
			id: `3`,
			title: `Mensal`,
			activityGroup: `2`,
			termsGroup: `1`,
			planType: `1`,
			prices: [
				{
					title: `1x/semana`,
					value: `R$180,00`
				},
			]
		},
		{
			id: `4`,
			title: `Trimestral`,
			activityGroup: `1`,
			termsGroup: `2`,
			planType: `1`, 
			prices: [
				{
					title: `2x/semana`,
					value: `R$110,00`
				},
				{
					title: `3x/semana`,
					value: `R$140,00`
				},


			]
		},
		{
			id: `5`,
			title: `Semestral`,
			activityGroup: `1`,
			termsGroup: `3`,
			planType: `2`, /** Plano Socias */
			prices: [
				{
					title: `2x/semana`,
					value: `R$100,00`
				},
				{
					title: `3x/semana`,
					value: `R$130,00`
				},


			]
		},
		
	]
}


export default seed