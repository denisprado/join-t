-- Populando tabela activity_groups
INSERT INTO activity_groups (id, title, image) VALUES
('84b1a7e9-e1aa-4917-a329-354f38474931', 'Treino Individualizado + Aulas Especiais', 'treino-image.png'),
('463f2d71-e18b-4c9f-b8a4-d1ee85b0dc03', 'Dança Contemporânea e Movimento Consciente', 'danca-image.png');

-- Populando tabela activities
INSERT INTO activities (id, name, description, images, schedules, teatcher, activity_group_id, videos) VALUES
('b3d8df62-84f5-4921-978f-a2a100d9cc07', 'Treino Individualizado', 'Treinos estruturados com um trabalho de mobilidade, força e condicionamento físico, respeitando as particularidades, necessidades e objetivos conversados na nossa avaliação de movimento inicial.', '{"treino-image.png"}', 'Segunda a sexta: 6h30 - 10h30 / 15h - 19h30 Sábado : 8h - 11h', 'Daniel Moda e Lucas Ambrosio', '84b1a7e9-e1aa-4917-a329-354f38474931', '{"https://www.youtube.com/watch?v=ntm42tvkngk", "https://www.youtube.com/watch?v=7Ty0ICZIVuE"}'),
('d8cb69ee-a1ae-4c30-b2b3-4076aa2fcde3', 'Aulas Especiais', 'Aulas em grupo de diferentes temas: parada de mãos, kettlebell, calistenia, alongamento e treinão (treino de alta intensidade)', '{"treino-image.png", "treino-image.png", "treino-image.png", "treino-image.png", "treino-image.png"}', 'Daniel Moda e Lucas Ambrosio', 'Segunda a sexta: 6h30 - 10h30 / 15h - 19h30 Sábado : 8h - 11h', '84b1a7e9-e1aa-4917-a329-354f38474931', null),
('921707e0-f84c-43ab-b05e-9a8fe9cf3848', 'Dança Contemporânea e Movimento Consciente', 'A DANÇA CONTEMPORÂNEA é uma forma de arte que valoriza a liberdade de expressão e a originalidade do movimento. Ela se diferencia dos estilos de dança mais tradicionais por sua abordagem experimental e pela busca constante por novas formas de se movimentar.', '{"danca-image.png"}', 'Segunda a sexta: 6h30 - 10h30 / 15h - 19h30 Sábado : 8h - 11h', 'Thais Esteves', '463f2d71-e18b-4c9f-b8a4-d1ee85b0dc03', null);

-- Populando tabela terms_groups
INSERT INTO terms_groups (id, terms) VALUES
('82a46e23-241a-4590-926a-5bc8b000dbd2', '[{"title": "Duração", "value": "**30 dias**"}, {"title": "Cancelamento", "value": "Sendo necessário um **aviso prévio de 7 dias** para o cancelamento da renovação para o próximo mês. Não há multa por cancelamento (se respeitado o aviso de 7 dias)."}, {"title": "Renovação", "value": "Sim"}, {"title": "Cobrança", "value": "Mensal"}, {"title": "Trancamento", "value": "Não permitido"}, {"title": "Descontos Aplicáveis", "value": "R$ 20,00 - estudante (graduação, estrado e/ou doutorado) R$ 25,00 - parceria clubleu (não cumulativo com o desconto estudante)"}, {"title": "Métodos de Pagamento", "value": "Pix/Cartão de crédito/Débito recorrente"}]'),
('e01aecbf-1f07-4b37-a457-79e444fc5740', '[{"title": "Duração", "value": "3 meses"}, {"title": "Cancelamento", "value": "Multa proporcional ao tempo de uso e tempo restante do plano"}, {"title": "Renovação", "value": "Sim"}, {"title": "Cobrança", "value": "Mensal"}, {"title": "Trancamento", "value": "Trancamento de 15 dias (não necessariamente consecutivos). Sendo realizado normalmente o pagamento, e depois o sistema liberará as reposições de aulas/treinos."}, {"title": "Descontos Aplicáveis", "value": "R$ 20,00 - estudante (graduação, estrado e/ou doutorado) / R$ 25,00 - parceria clubleu (não cumulativo com o desconto estudante)"}, {"title": "Métodos de Pagamento", "value": "Pix/Cartão de crédito/Débito recorrente"}]'),
('ee840f29-33ba-4db4-a574-14776ed42d30', '[{"title": "Duração", "value": "6 meses"}, {"title": "Cancelamento", "value": "Multa proporcional ao tempo de uso e tempo restante do plano"}, {"title": "Renovação", "value": "Sim"}, {"title": "Cobrança", "value": "Mensal"}, {"title": "Trancamento", "value": "Trancamento de 30 dias (não necessariamente consecutivos). Sendo realizado normalmente o pagamento, e depois o sistema liberará as reposições de aulas/treinos."}, {"title": "Descontos Aplicáveis", "value": "R$ 20,00 - estudante (graduação, estrado e/ou doutorado) / R$ 25,00 - parceria clubleu (não cumulativo com o desconto estudante)"}, {"title": "Métodos de Pagamento", "value": "Pix/Cartão de crédito/Débito recorrente"}]'),
('9d8aa8fa-ad6d-43f4-a7c6-ce984b0c3aaf', '[{"title": "Duração", "value": "#12 meses"}, {"title": "Cancelamento", "value": "Multa proporcional ao tempo de uso e tempo restante do plano"}, {"title": "Renovação", "value": "Sim"}, {"title": "Cobrança", "value": "Mensal"}, {"title": "Trancamento", "value": "Trancamento de 60 dias (não necessariamente consecutivos). Sendo realizado normalmente o pagamento, e depois o sistema liberará as reposições de aulas/treinos."}, {"title": "Descontos Aplicáveis", "value": "R$ 20,00 - estudante (graduação, estrado e/ou doutorado) / R$ 25,00 - parceria clubleu (não cumulativo com o desconto estudante)"}, {"title": "Métodos de Pagamento", "value": "Pix/Cartão de crédito/Débito recorrente"}]'),
('507e11c7-d857-478e-b1fe-984a3353eb82', '[{"title": "Atividades", "value": "Aulas Especiais"}, {"title": "Duração", "value": "2 meses"}, {"title": "Métodos de Pagamento", "value": "Somente Pix"}]'),
('68f81a3c-600b-4d72-97e1-490a00ebec26', '[{"title": "Atividades", "value": "Treinos Individualizados"}, {"title": "Duração", "value": "2 meses"}, {"title": "Métodos de Pagamento", "value": "Somente Pix"}]');

-- Populando tabela plan_type
INSERT INTO plan_type (id, title, disclaimer) VALUES
('767db225-3dec-4b53-9a4e-b4c07c0fc4ee', 'Plano', null),
('d9c0ea2f-fd29-4144-98ff-d91f09a8158c', 'Plano Social', '**Sobre o Plano Social**\n\nEnquanto estúdio de treinamento, gerido por pessoas brancas, de classe média e com privilégios, entendemos que temos nosso papel social independente do estado.\n\nAcreditamos que todas as pessoas devem ter acesso ao exercício físico.\n\nFazendo um recorte social, encontramos pessoas que foram e são marginalizadas e que por muitas vezes não possuem acessos e oportunidades a essas práticas. Com isso, criamos o nosso plano social de valor diferenciado para que pessoas de baixa renda (hoje, no brasil são consideradas de baixa renda aquelas que possuem renda mensal por pessoa de até meio salário mínimo R$ 522,50 ou renda familiar total de até 3 salários mínimos R$3.135,00), pretas, trans, gordas maiores e indígenas em vulnerabilidade social tenham acesso as nossas práticas.\n\n**Outras condições**\n\nCaso você se enquadre no plano social mas pode pagar um pouco a mais do valor cobrado, este será destinado a descontos ainda maiores para pessoas que ainda sim, não conseguem arcar com os valores do nosso plano social.\n\nExemplo prático: caso você contrate o plano social 2x na semana (r$ 100,00) e pague r$ 130,00 por este plano, estes r$ 30,00 serão direcionados para alguém que gostaria de fechar o plano de 2x mas não consegue pagar, assim, será cobrado deste pessoa o valor de apenas r$ 70,00 pela contratação do plano.');

-- Populando tabela plans
INSERT INTO plans (id, title, activity_group_id, terms_group_id, plan_type_id, fixed, default_selected_plan, prices) VALUES
  ('201c60db-c94c-4da8-af5c-f71a94be97f5', 'Mensal', '84b1a7e9-e1aa-4917-a329-354f38474931', '82a46e23-241a-4590-926a-5bc8b000dbd2', '767db225-3dec-4b53-9a4e-b4c07c0fc4ee', true, true, 
    '[
      {"title": "2x/semana", "value": "R$220,00"},
      {"title": "3x/semana", "value": "R$240,00"},
      {"title": "5x/semana", "value": "R$280,00"},
      {"title": "8x/semana", "value": "R$307,00"}
    ]'
  ),
  ('62faa88a-be20-4cf2-bcd0-9ccb7cde235f', 'Mensal', '84b1a7e9-e1aa-4917-a329-354f38474931', '82a46e23-241a-4590-926a-5bc8b000dbd2', 'd9c0ea2f-fd29-4144-98ff-d91f09a8158c', null, true, 
    '[
      {"title": "2x/semana", "value": "R$110,00"},
      {"title": "3x/semana", "value": "R$140,00"}
    ]'
  ),
  ('06042977-3ab8-4666-8fe6-ae7944a37af3', 'Trimestral', '84b1a7e9-e1aa-4917-a329-354f38474931', 'e01aecbf-1f07-4b37-a457-79e444fc5740', '767db225-3dec-4b53-9a4e-b4c07c0fc4ee', true, null, 
    '[
      {"title": "2x/semana", "value": "R$207,00"},
      {"title": "3x/semana", "value": "R$230,00"},
      {"title": "5x/semana", "value": "R$270,00"},
      {"title": "8x/semana", "value": "R$297,00"}
    ]'
  ),
  ('3c4edf89-261f-4620-b634-79968a1b9f70', 'Semestral', '84b1a7e9-e1aa-4917-a329-354f38474931', 'ee840f29-33ba-4db4-a574-14776ed42d30', '767db225-3dec-4b53-9a4e-b4c07c0fc4ee', true, null, 
    '[
      {"title": "2x/semana", "value": "R$197,00"},
      {"title": "3x/semana", "value": "R$220,00"},
      {"title": "5x/semana", "value": "R$257,00"},
      {"title": "8x/semana", "value": "R$287,00"}
    ]'
  ),
  ('24d9cc66-b9bb-47a6-83a6-6fb368e398bc', 'Semestral', '84b1a7e9-e1aa-4917-a329-354f38474931', 'ee840f29-33ba-4db4-a574-14776ed42d30', 'd9c0ea2f-fd29-4144-98ff-d91f09a8158c', null, null, 
    '[
      {"title": "2x/semana", "value": "R$100,00"},
      {"title": "3x/semana", "value": "R$130,00"}
    ]'
  ),
  ('7acb65cb-a932-4305-9a5b-a96899174c99', 'Anual', '84b1a7e9-e1aa-4917-a329-354f38474931', '9d8aa8fa-ad6d-43f4-a7c6-ce984b0c3aaf', '767db225-3dec-4b53-9a4e-b4c07c0fc4ee', true, null, 
    '[
      {"title": "2x/semana", "value": "R$187,00"},
      {"title": "3x/semana", "value": "R$207,00"},
      {"title": "5x/semana", "value": "R$250,00"}
    ]'
  ),
  ('dccfc8b2-bd76-491b-b15e-87e446479fb2', 'Mensal', '3', '82a46e23-241a-4590-926a-5bc8b000dbd2', '767db225-3dec-4b53-9a4e-b4c07c0fc4ee', true, true, 
    '[
      {"title": "1x/semana", "value": "R$180,00"}
    ]'
  ),
  ('d11aa371-c2a2-4aed-90a1-7ae820e5b87f', 'Mensal', '2', '82a46e23-241a-4590-926a-5bc8b000dbd2', '767db225-3dec-4b53-9a4e-b4c07c0fc4ee', true, true, 
    '[
      {"title": "1x/semana", "value": "R$180,00"}
    ]'
  ),
  ('41ba3164-2e18-437d-9e97-05a9fa1bcb95', 'Treino individualizado', '84b1a7e9-e1aa-4917-a329-354f38474931', '68f81a3c-600b-4d72-97e1-490a00ebec26', '99a9bae5-3d8f-43b2-8ed4-a5841168d16c', null, null, 
    '[
      {"title": "1 aula", "value": "R$40,00"},
      {"title": "4 aulas", "value": "R$140,00"}
    ]'
  ),
  ('a2203e2f-0c04-4f9b-a60e-b2e40f80739d', 'Aulas Especiais - Alune JoinT', '84b1a7e9-e1aa-4917-a329-354f38474931', '507e11c7-d857-478e-b1fe-984a3353eb82', '99a9bae5-3d8f-43b2-8ed4-a5841168d16c', true, true, 
    '[
      {"title": "1 aula", "value": "R$30,00"},
      {"title": "4 aulas", "value": "R$110,00"}
    ]'
  ),
  ('606c87bc-b2f6-4545-b401-eca942e169ba', 'Aulas Especiais - Não Alune', '84b1a7e9-e1aa-4917-a329-354f38474931', '507e11c7-d857-478e-b1fe-984a3353eb82', '99a9bae5-3d8f-43b2-8ed4-a5841168d16c', null, null, 
    '[
      {"title": "1 aula", "value": "R$40,00"},
      {"title": "4 aulas", "value": "R$150,00"}
    ]'
  );

-- Populando tabela quotes
INSERT INTO quotes (id, author, avatar, excerpt, full) VALUES
('407a9abf-fcfd-4b81-ae2f-7aee2cc60926', 'Maria', '/avatar.png', 'Cheguei no Joint faz pouco tempo e já me impressionei com a organização, a competência dos professores o ambiente acolhedor. Estão de parabéns!', ''),
('9f7b0c36-9711-49f5-8eed-d221b400bd64', 'Maria', '/avatar.png', 'A Joint veio pra mudar minha visão de treinos:', '1) Ela me foi recomendada por um professor de educação física do qual eu tenho muita confiança; 2) Logo na avaliação física (que é uma raridade em academias convencionais), o professor perguntou se eu tinha alguma queixa de dor, qual era minha rotina e se eu queria aprender algum movimento novo.'),
('742d92c0-06cf-4c60-b314-241b7aa42805', 'Maria', '/avatar.png', 'A Join-t me apresentou um jeito mais amigável e saudável de funcionamento de uma academia.', 'Esbarrei nesse cenário diferente logo na primeira sessão que fui, quando meu professor quis saber o que eu tinha de objetivo (e eu poderia falar tudo, menos o tradicional "ficar forte, definido etc."), achei isso muito legal. Isso dá muita liberdade e ajuda o aluno a continuar na academia pois você é encorajado a pensar em coisas que realmente quer alcançar (e não algo culturalmente imposto pela sociedade).');

-- Populando tabela profile
INSERT INTO profile (whatsapp, instagram, email, address, coordinates) VALUES
('19971404714', '@jointtreinamento', 'joint@jooint.com.br', 'Rua Jerônimo Páttaro, 250. Barão Geraldo.  (Próximo ao Sorvete em Camadas)', 'https://maps.app.goo.gl/QWuAJTGP3p9Pmtzb8');
