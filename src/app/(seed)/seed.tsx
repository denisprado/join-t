import { Activity, ActivityGroups, Plans, PlanType, TermGroups, Quote, Profile } from '@/types/index'

type Seed = {
	activities: Activity[],
	activityGroups: ActivityGroups[]
	termsGroup: TermGroups[]
	planType: PlanType[]
	plans: Plans[]
	quotes: Quote[],
	profile: Profile
}

const seed: Seed =
{
	activities: [
		{
			id: `1`,
			name: `Treino Individualizado`,
			description: `Treinos estruturados com um trabalho de mobilidade, força e condicionamento físico, respeitando as particularidades, necessidades e objetivos conversados na nossa avaliação de movimento inicial.`,
			images: [`treino-image.png`],
			schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h`,
			teatcher: `Daniel Moda e Lucas Ambrosio`,
			activityGroup: `1`,
			videos: ['https://www.youtube.com/watch?v=ntm42tvkngk', 'https://www.youtube.com/watch?v=7Ty0ICZIVuE']
		},
		{
			id: `2`,
			name: `Aulas Especiais`,
			description: `Aulas em grupo de diferentes temas: parada de mãos, kettlebell, calistenia, alongamento e treinão (treino de alta intensidade)`,
			images: [`treino-image.png`, 'treino-image.png', 'treino-image.png', 'treino-image.png', 'treino-image.png'],
			teatcher: `Daniel Moda e Lucas Ambrosio`,
			schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h`,
			activityGroup: `1`,

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

				{ title: `Duração`, value: `**30 dias**` },
				{ title: `Cancelamento`, value: `Sendo necessário um **aviso prévio de 7 dias** para o cancelamento da renovação para o próximo mês. Não há multa por cancelamento (se respeitado o aviso de 7 dias).` },
				{ title: `Renovação`, value: `Sim` },
				{ title: `Cobrança`, value: `Mensal` },
				{ title: `Trancamento`, value: `Não permitido` },
				{
					title: `Descontos Aplicáveis`, value: `R$ 20,00 - estudante (graduação, estrado e/ou doutorado)  
				R$ 25,00 - parceria clubleu (não cumulativo com o desconto estudante)` },
				{ title: `Métodos de Pagamento`, value: `Pix/Cartão de crédito/Débito recorrente` }
			]
		},
		{
			id: `2`,
			terms: [

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
				{ title: `Atividades`, value: `Aulas Especiais` },
				{ title: `Duração`, value: `2 meses` },
				{ title: `Métodos de Pagamento`, value: `Somente Pix` }
			]
		},
		{
			id: `6`,
			terms: [
				{ title: `Atividades`, value: `Treinos Individualizados` },
				{ title: `Duração`, value: `2 meses` },
				{ title: `Métodos de Pagamento`, value: `Somente Pix` }
			]
		},
	],
	planType: [
		{
			id: `1`,
			title: `Plano`,

		},
		{
			id: `2`,
			title: `Plano  Social`,
			disclaimer: `**Sobre o Plano Social**  

Enquanto estúdio de treinamento, gerido por pessoas brancas, de classe média e com privilégios, entendemos que temos nosso papel social independente do estado.  

Acreditamos que todas as pessoas devem ter acesso ao exercício físico.  

Fazendo um recorte social, encontramos pessoas que foram e são marginalizadas e que por muitas vezes não possuem acessos e oportunidades a essas práticas. Com isso, criamos o nosso plano social de valor diferenciado para que pessoas de baixa renda (hoje, no brasil são consideradas de baixa renda aquelas que possuem renda mensal por pessoa de até meio salário mínimo R$ 522,50 ou renda familiar total de até 3 salários mínimos R$3.135,00), pretas, trans, gordas maiores e indígenas em vulnerabilidade social tenham acesso as nossas práticas.  
  
**Outras condições**

Caso você se enquadre no plano social mas pode pagar um pouco a mais do valor cobrado, este será destinado a descontos ainda maiores para pessoas que ainda sim, não conseguem arcar com os valores do nosso plano social.  

Exemplo prático: caso você contrate o plano social 2x na semana (r$ 100,00) e pague r$ 130,00 por este plano, estes r$ 30,00 serão direcionados para alguém que gostaria de fechar o plano de 2x mas não consegue pagar, assim, será cobrado deste pessoa o valor de apenas r$ 70,00 pela contratação do plano. `
		},
		{
			id: `3`,
			title: `Aula  Avulsa`,

		},
	],
	plans: [
		{
			id: `1`,
			title: `Mensal`,
			activityGroup: `1`,
			termsGroup: `1`,
			planType: `1`,
			fixed: true,
			defaultSelectedPLan: true,
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
			id: `11`,
			title: `Mensal`,
			activityGroup: `1`,
			termsGroup: `1`,
			planType: `2`,
			defaultSelectedPLan: true,
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
			id: `6`,
			title: `Trimestral`,
			activityGroup: `1`,
			termsGroup: `2`,
			planType: `1`,
			fixed: true,
			prices: [
				{
					title: `2x/semana`,
					value: `R$207,00`
				},
				{
					title: `3x/semana`,
					value: `R$230,00`
				},
				{
					title: `5x/semana`,
					value: `R$270,00`
				},
				{
					title: `8x/semana`,
					value: `R$297,00`
				},

			]
		},
		{
			id: `7`,
			title: `Semestral`,
			activityGroup: `1`,
			termsGroup: `3`,
			planType: `1`,
			fixed: true,
			prices: [
				{
					title: `2x/semana`,
					value: `R$197,00`
				},
				{
					title: `3x/semana`,
					value: `R$220,00`
				},
				{
					title: `5x/semana`,
					value: `R$257,00`
				},
				{
					title: `8x/semana`,
					value: `R$287,00`
				},

			]
		},
		{
			id: `10`,
			title: `Semestral`,
			activityGroup: `1`,
			termsGroup: `3`,
			planType: `2`,
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
		{
			id: `8`,
			title: `Anual`,
			activityGroup: `1`,
			termsGroup: `4`,
			planType: `1`,
			fixed: true,
			prices: [
				{
					title: `2x/semana`,
					value: `R$187,00`
				},
				{
					title: `3x/semana`,
					value: `R$207,00`
				},
				{
					title: `5x/semana`,
					value: `R$250,00`
				},
			]
		},
		{
			id: `2`,
			title: `Mensal`,
			activityGroup: `3`,
			termsGroup: `1`,
			planType: `1`,
			defaultSelectedPLan: true,
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
			defaultSelectedPLan: true,
			prices: [
				{
					title: `1x/semana`,
					value: `R$180,00`
				},
			]
		},
		{
			id: `4`,
			title: `Treino individualizado`,
			activityGroup: `1`,
			termsGroup: `6`,
			planType: `3`,
			prices: [
				{
					title: `1 aula`,
					value: `R$40,00`
				},
				{
					title: `4 aulas`,
					value: `R$140,00`
				},
			]
		},
		{
			id: `5`,
			title: `Aulas Especiais - Alune JoinT`,
			activityGroup: `1`,
			termsGroup: `5`,
			planType: `3`,
			defaultSelectedPLan: true,
			prices: [
				{
					title: `1 aula`,
					value: `R$30,00`
				},
				{
					title: `4 aulas`,
					value: `R$110,00`
				},
			]
		},
		{
			id: `9`,
			title: `Aulas Especiais - Não Alune`,
			activityGroup: `1`,
			termsGroup: `5`,
			planType: `3`,
			prices: [
				{
					title: `1 aula`,
					value: `R$40,00`
				},
				{
					title: `4 aulas`,
					value: `R$150,00`
				},
			]
		},

	],
	quotes: [
		{
			id: "1",
			author: "Maria",
			avatar: "./avatar.png",
			excerpt: "Cheguei no Joint faz pouco tempo e já me impressionei com a organização, a competência dos professores o ambiente acolhedor. Estão de parabéns!",
			full: ""
		},
		{
			id: "2",
			author: "Maria",
			avatar: "./avatar.png",
			excerpt: "A Joint veio pra mudar minha visão de treinos: 			",
			full: `1) Ela me foi recomendada por um professor de educação física do qual eu tenho muita confiança; 2) Logo na avaliação física (que é uma raridade em 
				academias convencionais), o professor perguntou se eu tinha alguma queixa de dor, qual era  minha rotina e se
				eu queria aprender algum movimento novo.`
		},
		{
			id: "3",
			author: "Maria",
			avatar: "./avatar.png",
			excerpt: "A Join-t me apresentou um jeito mais amigável e saudável de funcionamento de uma academia.",
			full: `Esbarrei nesse cenário diferente logo na primeira sessão que fui, quando meu professor quis saber o que eu tinha de objetivo (e eu poderia falar tudo, menos o tradicional "ficar forte, definido etc."), achei isso muito legal. Isso dá muita liberdade e ajuda o aluno a continuar na academia pois você é encorajado a pensar em coisas que realmente quer alcançar (e não algo culturalmente imposto pela sociedade).`
		}
	],
	profile:
	{
		whatsapp: "19971404714",
		instagram: "@jointtreinamento",
		email: "joint@jooint.com.br",
		address: `Rua Jerônimo Páttaro, 250. Barão Geraldo.  
			(Próximo ao Sorvete em Camadas)`,
		coordinates: "https://maps.app.goo.gl/QWuAJTGP3p9Pmtzb8",
	}

}


export default seed