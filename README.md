# Sistema de Agendamento de Consultas e Apoio Psicológico

## Visão Geral
Este projeto foi desenvolvido com o objetivo de oferecer um sistema de agendamento de consultas psicológicas e disseminar informações sobre saúde mental para a comunidade de Brasília Teimosa, localizada no bairro do Pina, Recife. A iniciativa surgiu da crescente demanda por serviços de saúde mental, destacada por tragédias locais e a necessidade de apoio psicológico acessível. Todo o projeto foi portotipado com o Figman.

## Link do prototipo no Figman:
- <a href="https://www.figma.com/design/zNuhTGWD8z9Geh1EQ5z6d5/Projeto-de-extens%C3%A3o---Prototipo-sistema-de-agendamento-de-consulta-e-apoio-psicologico?node-id=0-1&t=Oyaor7hWj7Nv6xQJ-1" target="_blank">Prototipo</a>
## Link para testar:
- <a href="https://pe-frontend-seven.vercel.app/" target="_blank">Clique aqui</a>

## Objetivo do Projeto
O sistema visa:
- Facilitar o agendamento de consultas psicológicas por meio de um formulário online.
- Enviar lembretes automáticos aos pacientes.
- Oferecer acesso a recursos informativos sobre saúde mental.
- Integrar os usuários a uma comunidade de acolhimento no Discord para suporte emocional.

## Principais Funcionalidades
1. **Agendamento de Consultas**
   - **Descrição**: Permite que pacientes agendem consultas em horários disponíveis.
   - **Critérios de Aceitação**:
     - Pacientes escolhem datas e horários disponíveis.
     - Sistema verifica a disponibilidade dos psicólogos.
     - Agendamentos são confirmados via WhatsApp.

2. **Login para Psicólogos**
   - **Descrição**: Psicólogos podem acessar o sistema para gerenciar suas consultas.
   - **Critérios de Aceitação**:
     - Login seguro com e-mail e senha.
     - Acesso à lista de pacientes agendados e opção de cancelamento de consultas.

3. **Notificações de Lembrete**
   - **Descrição**: Lembretes enviados um dia antes da consulta.
   - **Critérios de Aceitação**:
     - Mensagens enviadas por WhatsApp e/ou e-mail com detalhes da consulta.

4. **Página de Informações sobre Saúde Mental**
   - **Descrição**: Área dedicada a artigos e recursos sobre saúde mental.
   - **Critérios de Aceitação**:
     - Acesso livre a conteúdos educativos.

5. **Comunidade de Acolhimento no Discord**
   - **Descrição**: Espaço para discussões e suporte em grupo.
   - **Critérios de Aceitação**:
     - Canais específicos de apoio emocional e discussão moderada.

## Personas

### Paciente
- **Nome**: João Antônio
- **Idade**: 22 anos
- **Cenário**: Estudante universitário enfrentando ansiedade, busca apoio psicológico acessível.

## Jornada do Usuário
1. **Descoberta**: João descobre o projeto via redes sociais e acessa o site.
2. **Navegação**: Explora o site e encontra informações sobre como agendar consultas.
3. **Agendamento**: Realiza o agendamento e recebe uma confirmação.
4. **Lembrete**: Recebe um lembrete da consulta pelo WhatsApp.
5. **Consulta**: Participa da consulta e sente-se acolhido.
6. **Integração ao Discord**: É convidado para a comunidade no Discord para suporte contínuo.

## Tecnologias Utilizadas
- **Linguagem de Programação**: Javacript
- **Frameworks e Bibliotecas**: ReactJS + Node
- **Estilização**: Tailwindcss

## Como Executar o Projeto
1. **Clone o repositório**: 
```git
git clone [URL]
```
2. **Inicie o servidor**: 
``` node 
npm run dev
```

## Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Fork o repositório.
2. Crie uma branch para a nova funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit das mudanças (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça o push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.
