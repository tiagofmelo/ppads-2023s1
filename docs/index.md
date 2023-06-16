
Integrantes:

Elido Gonzalez - TIA: 20502702
Isabela Mori - TIA: 21010234
Isabelle Mendes - TIA: 21013845
Tiago Ferreira Melo - TIA: 21011028

CoinKeeper

Introdução

Aplicativo de resumo financeiro. Ele foca somente na inserção de dados de débitos e créditos bancários manualmente pelo usuário, para que ele tenha um controle de pagamentos de dividendos na data correta. O app avisará o usuário através de um alerta de pop-up que o prazo para pagamento de sua dívida está próximo, bem como estará visualmente no calendário do aplicativo a data, valor e o dividendo.

Interessados:

Usuários que buscam simplicidade na hora de controlar seu financeiro, onde você tem de forma resumida um calendário que reúne entradas e saídas monetárias (débitos e créditos) sem muito detalhamento, focando somente em prazos finais para os pagamentos.

Objetivos funcionais:

Orçamento: monitoramento dos gastos mensais, na tela inicial do aplicativo estará disponível um dashboard com o comparativo das despesas dos últimos meses, facilitando a organização do usuário para projetos futuros. 
Alarmes de contas a vencer: o aplicativo pode mandar avisos sonoros próximos ou no dia de vencimento de contas, evitando cobranças adicionais por atrasos. 
Economias: os rendimentos mensais podem ser adicionados ao aplicativo, assim, sempre que o usuário adicionar as contas que serão pagas no mês, o valor restante será mostrado instantaneamente, monitorando o saldo em conta.


Objetivos não funcionais:

Desempenho: manter o sistema funcionando sem lentidão e sem problemas por falta de espaço físico, mantendo a qualidade ao ser utilizado.
Disponibilidade: garantir que o sistema fique disponível no momento em que o usuário desejar realizar o seu uso.
Segurança: possuir segurança nas informações que os usuários insere, mantendo seguro seu usuário, senha e dados pessoais.
Compatibilidade: ter um sistema multiplataforma que funcione e atenda o usuário, independente do dispositivo que a aplicação seja acessada.
Eficiência: permitir que o sistema garanta um bom funcionamento, independente da quantidade de usuários que estejam utilizando ao mesmo tempo.

Descrição dos casos de uso:

Controle financeiro: promove monitoramento das despesas e ganhos, voltado para aqueles que tem objetivo financeiro a longo prazo e precisam poupar dinheiro por motivos pessoais, como a compra de imovel, carro etc
Organização financeira: auxilia o usuário a manter o gerenciamento de contas a pagar, com as notificações recorrentes, o usuário se mantém informado sobre os prazos de vencimento, evitando gastos extras com multas por atraso.
Controle de gastos por categoria: Separa na entrada de gastos a categoria de débito e no final do mês o usuário teria uma visão geral do item em que ele mais teve gastos, podendo assim, se for de necessidade pessoal dele, se controlar para diminuí-lo no mês seguinte.

Guia do usuário:
Instalação e configuração inicial 
Download do aplicativo, disponível para Android
Após a instalação, abra o aplicativo e siga as instruções na tela para configurar sua conta. Algumas informações básicas precisam ser fornecidas para cadastro, como login, senha e e-mail.
Após a configuração inicial, você será direcionado para a tela principal do aplicativo.
Tela Principal: área de controle central, nela você encontrará um resumo das suas finanças e acesso rápido a várias funcionalidades. Principais seções:
Cadastro do salário mensal: 
Clique em “Cadastre seu salário" e insira o valor correspondente
Calendário 
As contas a vencer serão mostradas na data correspondente de cadastro
Gráfico de gastos mensais:
Nesta seção, os gastos dos últimos meses são mostrados em categorias 
Adicionando notificação de vencimento de contas:
Toque em “adicionar contas a pagar” para adicionar uma nova conta
Preencha os detalhes da conta, incluindo nome da conta, valor e data de vencimento.
Após salvar as informações, você receberá notificações antes da data de vencimento da conta para ajudá-lo a lembrar de pagá-la.
Pagando Contas e Atualizando o Saldo 
Na notificação, escolha silenciar e marque a conta como paga 
Outra opção, é acessar a conta cadastrada pelo calendário e marcar como paga 
 O valor da conta será deduzido do seu saldo mensal, que pode ser visualizado na seção "Salário Mensal" da tela principal.
O valor gasto fará parte do Gráfico de Gastos
Personalização e Configurações
Para acessar as configurações do aplicativo, toque no ícone Perfil

Plano de teste
Teste de desenvolvimento: 
Objetivo é averiguar se as funcionalidades independentes estão funcionando como esperado
Identificação única: 
TST-001 Validação componentes
Caso de uso em que se baseia: 
Teste dos componentes pelo desenvolvedor
Cenário:
Fluxo principal
Preparação:
O desenvolvedor irá utilizar dados fictícios para realizar os testes. Irá utilizar os dados de “João Carlos” que deverá possuir um cadastro ativo no sistema, com  seu login 111.111.111-11, e senha 123456789, também irá cadastrar informações de gastos nos meses anteriores e nos meses futuros para consulta na lista de principal, assim como deverá cadastrar dados de valores recebidos para realizar os testes.
Resultado esperado: 
1) Ao entrar com as credenciais corretas o desenvolvedor deve ter o acesso permitido ao aplicativo, caso alguma informação esteja incorreta, a mensagem de erro deve ser informada e permanecerá na tela de login. 
2) Na “tela inicial”, validar o layout dos componentes e conferir os valores e se os mesmos constam no calendário;
3) Na tela “dashboard”, validar o layout dos componentes e se é possível fazer a comparação dos valores com os meses anteriores;
4) Na tela “criação de lançamentos”, validar o layout dos componentes e validar se é possível incluir os registros de débito e crédito, na mesma validação testar todos os campos disponíveis para edição e conferir se o comportamento está adequado, finalizando a validação concluindo o registro e salvando com sucesso;
5) Na tela “lista de lançamentos”, validar o layout dos componentes e se todos os lançamentos aparecem na listagem, verificar se os valores coincidem com os valores que foram inseridos e por fim, validar a funcionalidade dos botões que aparecem na tela.
6) Aguardar e verificar se irá chegar a notificação de acordo com o que foi configurado na tela de “criação de lançamentos”.
Resultado esperado:
1) Credenciais corretas: sucesso no login;
2) Layout e informações corretas na tela e no calendário;
3) Layout e informações corretas possibilitando a criação dos relatórios do dashboard;
4) Layout e informações corretas na tela, campos editáveis e registro concluído com sucesso;
5) Layout, informações e listagem corretas na tela, funcionalidade dos botões funcionando com sucesso;
6) Notificação recebida.
Resultado do teste:
Valores possíveis: NÃO EXECUTADO, SUCESSO, FALHA, CANCELADO.
Teste de lançamento (Release)
Teste com o objetivo de conferir se o sistema cumpre seus requisitos e está pronto para ser utilizado pelos clientes do sistema.
Identificação única:
TST-002 Teste de funcionamento
Casos de uso em que se baseia:
Testes das funcionalidades em geral, após a publicação.
Cenário:
Fluxo principal
Preparação:
O cliente “João Carlos” deverá possuir um cadastro ativo no sistema, com  seu login 111.111.111-11, e senha 123456789, também deve ter informações de gastos cadastradas nos meses anteriores e nos meses futuros para consulta na lista de principal, assim como deverá possuir dados de valores recebidos.
Passos para a execução do teste:
1) Inserir no campo “login”, o valor: 111.111.111-11;
2) Inserir no campo “senha”, o valor: 123456789;
3) Na “tela inicial”, validar os valores recebidos e os valores gastos no mês e conferir se os valores constam no calendário;
4) Na tela “dashboard”, validar se é possível fazer a comparação dos valores com os meses anteriores;
5) Na tela “criação de lançamentos”, realizar a inclusão de uma entrada na opção “realizar débito” e a inclusão de uma saída na opção “realizar débito”;
6) Na tela “criação de lançamentos”, após selecionar uma das opções anteriores inserir a descrição no campo “adicionar descrição”, selecionar se deseja ou não receber notificação na opção “ativar notificação”, inserir a data da operação na opção “selecione a data de vencimento” clicando em “selecionar” e escolhendo a data no calendário, inserir o valor do registro no campo “digite o valor”, e concluir a inclusão clicando no botão superior direito “adicionar”;
7) Na tela “lista de lançamentos”, validar se todos os lançamentos aparecem na listagem, verificar se os valores coincidem com os valores que foram inseridos;
8) Na tela “lista de lançamentos”, realizar a remoção do item através do botão com sinal “-” e verificar se o item é removido da listagem;
9) Na tela “lista de lançamentos”, realizar a busca de um lançamento através do botão com sinal lupa e verificar se ocorre a filtragem na lista;
10) Na tela “lista de lançamentos”, utilizar o botão com sinal casa e verificar se ocorre o redirecionamento para a tela inicial;
11) Aguardar e verificar se irá chegar a notificação de acordo com o que foi configurado na tela de “criação de lançamentos”.
Resultado esperado:
1) Preenchimento do usuário para login;
2) Preenchimento com a senha;
3) Exibição dos valores recebidos e dos valores gastos na tela e no calendário;
4) Exibição dos relatórios dos meses anteriores;
5) Redirecionamento para a tela de inclusão de débito ou de crédito;
6) Permitir a inclusão de todos os campos na tela, com os valores corretos;
7) Exibição de todos os lançamentos na listagem,  com os valores que foram inseridos;
8) Realizar a remoção do item da listagem;
9) Realizar a filtragem do registro na lista;
10) Permitir o redirecionamento para a tela inicial;
11) Notificação recebida.
Resultado do teste:
Valores possíveis: NÃO EXECUTADO, SUCESSO, FALHA, CANCELADO.
Teste de Usuário (Alfa)
Teste com o objetivo que o usuário utilize o novo produto.
Identificação única:
TST-003 Teste de usuário.
Casos de uso em que se baseia:
Testes das funcionalidades em geral, porém já nas mãos do usuário.
Cenário:
Fluxo principal
Preparação:
O usuário irá possuir um cadastro ativo no sistema, com  um login e senha, o próprio usuário deverá inserir informações de gastos nos meses anteriores e nos meses futuros para teste das funcionalidades em geral.
Passos para a execução do teste:
Realizar os procedimentos do teste: TST-002 Teste de lançamento.
Resultado esperado:
Resultados esperados semelhantes aos do teste: TST-002 Teste de lançamento.
Resultado do teste:
Valores possíveis: NÃO EXECUTADO, SUCESSO, FALHA, CANCELADO.
