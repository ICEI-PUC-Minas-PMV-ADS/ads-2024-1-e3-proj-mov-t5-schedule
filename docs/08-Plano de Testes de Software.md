# Plano de Testes de Software
Um plano de teste de software é um documento detalhado que descreve a estratégia, os objetivos, o escopo, os recursos, o cronograma e as atividades necessárias para testar um software. O objetivo principal é garantir que o software atenda aos requisitos especificados e funcione corretamente em diferentes cenários e condições.

## Objetivo 
Garantir que a aplicação móvel de agenda funcione conforme o esperado, proporcionando uma experiência de usuário intuitiva e sem erros.
Escopo: Testes funcionais, de desempenho e de compatibilidade em dispositivos Android e iOS.

## Recursos Necessários
- Dispositivos de teste (diversos modelos e versões de Android e iOS)
- Ferramentas de automação de testes (Appium, Selenium)
- Ferramentas de gerenciamento de bugs (JIRA, Bugzilla)
- Ambiente de desenvolvimento integrado (IDE)
- Testadores (QA team)

## Componentes do Aplicativo a Serem Testados
1. Criação de eventos
2. Edição de eventos
3. Exclusão de eventos
4. Visualização de eventos
5. Interface do usuário (UI)

## Critérios de Aprovação e Rejeição
- Aprovação: Todos os casos de teste críticos passam, sem falhas em funções essenciais.
- Rejeição: Qualquer falha em funções essenciais ou mais de 5% dos casos de teste falhando.

## Plano de Teste
Abaixo está a lista de tarefas a serem executadas

| **PT - 1** 	| **Cadastro** 	|
|:---:	|:---:	|
| Objetivo do Teste 	| Verificar se o usuário pode se Cadastrar |
| Ações Necessárias 	| 1. Abrir a aplicação; <br> 2. Navegar ate a tela de cadastro; <br> Preencher as informações necessarias; <br> 3. Salvar |
| Resultado Esperado | Criação de um novo perfil |

| **PT - 2** 	| **Login** 	|
|:---:	|:---:	|
| Objetivo do Teste 	| Verificar se o usuário pode se Logar em sua conta |
| Ações Necessárias 	| 1. Abrir a aplicação; <br> 2. Navegar ate a tela de Login; <br> Preencher as informações necessarias; <br> 3. Clicar em "Entrar" |
| Resultado Esperado | Logar em um perfil |

| **PT - 3** 	| **Criação de Evento** 	|
|:---:	|:---:	|
| Objetivo do Teste 	| Verificar se o usuário pode criar um evento. |
| Ações Necessárias 	| 1. Abrir a aplicação; <br> 2. Navegar para a seção de criação de evento; <br> Inserir detalhes do evento (título, data); <br> 3. Salvar o Evento|
| Resultado Esperado | O evento é salvo e aparece na visualização de Eventos |

| **PT - 4** 	| **Edição de Evento** 	|
|:---:	|:---:	|
| Objetivo do Teste 	| Verificar se o usuário pode editar um evento existente. |
| Ações Necessárias 	| 1. Abrir a aplicação; <br> 2. Selecionar um evento existente; <br> Editar detalhes (título, data); <br> 3. Salvar as alterações|
| Resultado Esperado | As alterações são salvas e refletidas na visualização de Eventos |

| **PT - 5** 	| **Exclusão de Evento** 	|
|:---:	|:---:	|
| Objetivo do Teste 	| Verificar se o usuário pode excluir um evento. |
| Ações Necessárias 	| 1. Abrir a aplicação; <br> 2. Selecionar um evento existente; <br> Excluir o evento; <br> 3. Salvar as alterações|
| Resultado Esperado | O evento é removido da visualização de Eventos |

 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
