# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER e Esquema Relacional

![Classes](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-schedule/assets/99439235/6551057e-aae7-46ab-be0a-0150ec8949ee)


## Modelo Físico

![Arquivo entregue no Canvas](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-schedule/assets/99439235/4612883c-3185-4357-b201-39933a0510a6)



## Tecnologias Utilizadas

Foi utilizado React Native Para consumir uma API de um Banco SQL onde as interações do usuário basicamente é um CRUD onde adiciona e remove informações do banco, além disso utilizamos também JWT como token de autenticação de usuários.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

**CARACTERÍSTICA**|**SUBCARACTERÍSTICA**|**JUSTIFICATIVA**|
--------------|-----------------|-------------|
Usabilidade|Inteligibilidade <br> Apreensibilidade <br> Operacionalidade |O objetivo deste projeto é desenvolver uma aplicação distribuída acessível em dispositivos móveis. Esta aplicação fornecerá informações e entre outros recursos, para garantir uma compreensão completa de seu funcionamento. Além disso, será criada uma interface amigável que permitirá aos usuários realizar operações de forma fácil e precisa.|
Funcionalidade| Acurácia <br>Conformidade <br>Segurança de Acesso|A aplicação será desenvolvida utilizando a Lei Geral de proteção de dados (LGPD) como base, com a autenticação do usuário através de senha e email. Se comprometendo também a alcançar o atendimento das necessidades do usuário através dos requisitos levantados.|
Portabilidade| Adaptabilidade |O plano de desenvolvimento desse produto contempla os usuários mobile.|
Eficiência| Comportamento em relação ao tempo | A construção da aplicação distribuída se dará observando os aspectos necessários para que o produto final seja uma ferramenta leve, capaz de gerar respostas rápidas às requisições do usuário.|

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
