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
			id: `b3d8df62-84f5-4921-978f-a2a100d9cc07`,
			name: `Treino Individualizado`,
			description: `Treinos estruturados com um trabalho de mobilidade, força e condicionamento físico, respeitando as particularidades, necessidades e objetivos conversados na nossa avaliação de movimento inicial.`,
			images: [`treino-image.png`],
			schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h`,
			teatcher: `Daniel Moda e Lucas Ambrosio`,
			activityGroup: `1`,
			videos: []
		},
		{
			id: `d8cb69ee-a1ae-4c30-b2b3-4076aa2fcde3`,
			name: `Aulas Especiais`,
			description: `Aulas em grupo de diferentes temas: parada de mãos, kettlebell, calistenia, alongamento e treinão (treino de alta intensidade)`,
			images: [`treino-image.png`, 'treino-image.png', 'treino-image.png', 'treino-image.png', 'treino-image.png'],
			teatcher: `Daniel Moda e Lucas Ambrosio`,
			schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h`,
			activityGroup: `1`,

		}
		,
		// {
		// 	id: `3`,
		// 	name: `Yoga`,
		// 	description: `A YOGA é uma prática milenar que surgiu na Índia e se popularizou em todo o mundo por seus inúmeros benefícios para a saúde física e mental. Com a combinação de posturas corporais, exercícios de respiração e meditação, a Yoga promove o equilíbrio entre corpo e mente, aliviando o estresse, aumentando a flexibilidade, melhorando a concentração e trazendo paz interior. Praticar Yoga regularmente pode ajudar a melhorar a qualidade de vida e a encontrar um estado de tranquilidade e bem-estar.`,
		// 	images: [`yoga-image.png`],
		// 	teatcher: `Thais Esteves`,
		// 	schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30			Sábado : 8h - 11h`,
		// 	activityGroup: `2`,

		// },
		{
			id: `921707e0-f84c-43ab-b05e-9a8fe9cf3848`,
			name: `Dança Contemporânea e Movimento Consciente`,
			description: `A DANÇA CONTEMPORÂNEA é uma forma de arte que valoriza a liberdade de expressão e a originalidade do movimento. Ela se diferencia dos estilos de dança mais tradicionais por sua abordagem experimental e pela busca constante por novas formas de se movimentar. `,
			teatcher: `Thais Esteves`,
			images: [`danca_contemporanea-6.jpeg`, "danca_contemporanea-2.jpeg", "danca_contemporanea-3.jpeg", "danca_contemporanea-4.jpeg", "danca_contemporanea-5.jpeg", "danca_contemporanea-1.jpeg"],
			schedules: `Segunda a sexta: 6h30 - 10h30 / 15h - 19h30	 <br>
			
			Sábado : 8h - 11h`,
			activityGroupId: `463f2d71-e18b-4c9f-b8a4-d1ee85b0dc03`,

		}
	],
	activityGroups: [
		{
			id: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			title: `Treino Individualizado + Aulas Especiais`,
			image: `treino-image.png`,
		},
		// {
		// 	id: `2`,
		// 	title: `Yoga`,
		// 	image: `yoga-image.png`,
		// },

		{
			id: `463f2d71-e18b-4c9f-b8a4-d1ee85b0dc03`,
			title: `Dança Contemporânea e Movimento Consciente`,
			image: `danca-image.png`
		},

	],
	termsGroup: [
		{
			id: `82a46e23-241a-4590-926a-5bc8b000dbd2`,
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
			id: `e01aecbf-1f07-4b37-a457-79e444fc5740`,
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
			id: `ee840f29-33ba-4db4-a574-14776ed42d30`,
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
			id: `9d8aa8fa-ad6d-43f4-a7c6-ce984b0c3aaf`,
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
			id: `507e11c7-d857-478e-b1fe-984a3353eb82`,
			terms: [
				{ title: `Atividades`, value: `Aulas Especiais` },
				{ title: `Duração`, value: `2 meses` },
				{ title: `Métodos de Pagamento`, value: `Somente Pix` }
			]
		},
		{
			id: `68f81a3c-600b-4d72-97e1-490a00ebec26`,
			terms: [
				{ title: `Atividades`, value: `Treinos Individualizados` },
				{ title: `Duração`, value: `2 meses` },
				{ title: `Métodos de Pagamento`, value: `Somente Pix` }
			]
		},
	],
	planType: [
		{
			id: `767db225-3dec-4b53-9a4e-b4c07c0fc4ee`,
			title: `Plano`,

		},
		{
			id: `d9c0ea2f-fd29-4144-98ff-d91f09a8158c`,
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
			id: `99a9bae5-3d8f-43b2-8ed4-a5841168d16c`,
			title: `Aula  Avulsa`,

		},
	],
	plans: [
		{
			id: `201c60db-c94c-4da8-af5c-f71a94be97f5`,
			title: `Mensal`,
			activityGroupId: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			termsGroupId: `82a46e23-241a-4590-926a-5bc8b000dbd2`,
			planTypeId: '767db225-3dec-4b53-9a4e-b4c07c0fc4ee',
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
			id: `62faa88a-be20-4cf2-bcd0-9ccb7cde235f`,
			title: `Mensal`,
			activityGroupId: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			termsGroupId: `82a46e23-241a-4590-926a-5bc8b000dbd2`,
			planTypeId: 'd9c0ea2f-fd29-4144-98ff-d91f09a8158c',
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
			id: `06042977-3ab8-4666-8fe6-ae7944a37af3`,
			title: `Trimestral`,
			activityGroupId: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			termsGroupId: `e01aecbf-1f07-4b37-a457-79e444fc5740`,
			planTypeId: '767db225-3dec-4b53-9a4e-b4c07c0fc4ee',
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
			id: `3c4edf89-261f-4620-b634-79968a1b9f70`,
			title: `Semestral`,
			activityGroupId: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			termsGroupId: `ee840f29-33ba-4db4-a574-14776ed42d30`,
			planTypeId: '767db225-3dec-4b53-9a4e-b4c07c0fc4ee',
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
			id: `24d9cc66-b9bb-47a6-83a6-6fb368e398bc`,
			title: `Semestral`,
			activityGroupId: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			termsGroupId: `ee840f29-33ba-4db4-a574-14776ed42d30`,
			planTypeId: 'd9c0ea2f-fd29-4144-98ff-d91f09a8158c',
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
			id: `7acb65cb-a932-4305-9a5b-a96899174c99`,
			title: `Anual`,
			activityGroupId: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			termsGroupId: `9d8aa8fa-ad6d-43f4-a7c6-ce984b0c3aaf`,
			planTypeId: '767db225-3dec-4b53-9a4e-b4c07c0fc4ee',
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
			id: `dccfc8b2-bd76-491b-b15e-87e446479fb2`,
			title: `Mensal`,
			activityGroupId: `3`,
			termsGroupId: `82a46e23-241a-4590-926a-5bc8b000dbd2`,
			planTypeId: '767db225-3dec-4b53-9a4e-b4c07c0fc4ee',
			defaultSelectedPLan: true,
			prices: [
				{
					title: `1x/semana`,
					value: `R$180,00`
				},
			]
		},
		{
			id: `d11aa371-c2a2-4aed-90a1-7ae820e5b87f`,
			title: `Mensal`,
			activityGroupId: `2`,
			termsGroupId: `82a46e23-241a-4590-926a-5bc8b000dbd2`,
			planTypeId: '767db225-3dec-4b53-9a4e-b4c07c0fc4ee',
			defaultSelectedPLan: true,
			prices: [
				{
					title: `1x/semana`,
					value: `R$180,00`
				},
			]
		},
		{
			id: `41ba3164-2e18-437d-9e97-05a9fa1bcb95`,
			title: `Treino individualizado`,
			activityGroupId: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			termsGroupId: `68f81a3c-600b-4d72-97e1-490a00ebec26`,
			planTypeId: '99a9bae5-3d8f-43b2-8ed4-a5841168d16c',
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
			id: `a2203e2f-0c04-4f9b-a60e-b2e40f80739d`,
			title: `Aulas Especiais - Alune JoinT`,
			activityGroupId: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			termsGroupId: `507e11c7-d857-478e-b1fe-984a3353eb82`,
			planTypeId: '99a9bae5-3d8f-43b2-8ed4-a5841168d16c',
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
			id: `606c87bc-b2f6-4545-b401-eca942e169ba`,
			title: `Aulas Especiais - Não Alune`,
			activityGroupId: `84b1a7e9-e1aa-4917-a329-354f38474931`,
			termsGroupId: `507e11c7-d857-478e-b1fe-984a3353eb82`,
			planTypeId: '99a9bae5-3d8f-43b2-8ed4-a5841168d16c',
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
			author: "Paula Maria",
			avatar: "/quote_1.jpeg",
			excerpt: "A forma como o Join-T foi pensado, me faz ter esperança de que existem pessoas decentes e boas neste mundo.",
			full: "Na contramão de todo o tipo de espaço para atividade física, o Join-T incentiva corpos diferentes dividindo o mesmo espaço de forma saudável! Eu não preciso ter medo de ir treinar, pois sei que o ambiente é seguro para mim [...]!"
		},
		{
			id: "2",
			author: "Augusto César",
			avatar: "/quote_2.jpeg",
			excerpt: "Academias convencionais sempre foram chatas para mim",
			full: `Eu sempre tive muita dor lombar e meu foco era que isso melhorasse e, adivinhem só, melhorou! [...] hoje consigo fazer movimentos que eu nunca sequer pensei que fosse possível. Tudo isso sempre com muita paciência e correção de movimento ao longo dos treinos. Se hoje eu gosto de treinar, é por causa do Join-T e dos professores que trabalham nele.`
		},
		{
			id: "3",
			author: "André Paiva",
			avatar: "/quote_3.jpeg",
			excerpt: "O Join-T me apresentou um jeito mais amigável e saudável de funcionamento de uma academia.",
			full: `(...) você é encorajado a pensar em coisas que realmente quer alcançar e não algo culturalmente imposto pela sociedade. [...] sinto que o Join-T ajuda a gente reencontrar alguns prazeres presentes no exercício, mas que acabam ficando escondidos devido aos modelos maçantes de academias que estão por ai.`
		}
	],
	profile:
	{
		whatsapp: "19971404714",
		instagram: "@jointtreinamento",
		email: "jointtreinamento@gmail.com",
		address: `Rua Jerônimo Páttaro, 250. Barão Geraldo.  
			(Próximo ao Sorvete em Camadas)`,
		coordinates: "https://maps.app.goo.gl/QWuAJTGP3p9Pmtzb8",
	}

}


export default seed