---
name: front-end-senior
description: "Skill para criar, revisar e iterar instruções de agente focadas em tarefas front-end."
---

# Skill: front-end-senior — Agent Customization


Resumo
– Esta skill descreve um fluxo reutilizável para criar, revisar e iterar instruções de agente (ex.: `.instructions.md`, `SKILL.md`, `copilot-instructions.md`) focadas em tarefas de front-end (web/mobile).

Escopo
– Destinado a engenheiros front-end e mantenedores de projeto que precisam padronizar processos repetíveis para arquitetura, revisão e entrega de tarefas de UI/UX e componentes.

Quando usar
- Criação de novos templates de agente para revisões de PR, geração de componentes, auditoria de performance ou checklist de acessibilidade.
- Padronizar respostas do agente quando o trabalho exige etapas verificáveis e critérios de qualidade.

Entrada esperada
- Contexto do repositório (estrutura, frameworks, arquivos chave).
- Objetivo claro (ex.: "Refatorar header para React + TypeScript", "Auditar CWV" ).

Saída esperada
- Um `SKILL.md` ou `.instructions.md` que define: passos, critérios de aceitação, checks automáticos e prompts de exemplo.

Passo a passo (workflow)
1. Coletar contexto
   - Ler `package.json`, rotas, arquivos de estilos, componentes centrais e README.
   - Identificar frameworks e tooling (React, Next, Vite, Tailwind, etc.).
2. Definir objetivo e escopo menores
   - Perguntar: qual a mudança mínima entregável? Qual o impacto esperado?
3. Mapear dependências e riscos
   - Tests, breaking changes, integrações com backend, contratos de API.
4. Gerar checklist inicial
   - Estrutura do componente, props/typing, testes unitários, E2E, acessibilidade (WCAG), performance (Lighthouse), bundle size.
5. Criar instruções do agente (draft)
   - Incluir templates de prompts, exemplos de entradas/saídas e critérios de aceitação.
6. Revisar com stakeholders (opcional)
7. Iterar até satisfazer critérios de qualidade

Pontos de decisão
- Se o PR altera APIs públicas, exigir migração documentada e testes de integração.
- Se a alteração impacta Core Web Vitals, exigir baseline e validação pós-merge.

Critérios de qualidade (Definition of Done)
- Code: tipado, lintado, sem warnings críticos.
- Testes: cobertura mínima configurada pelo projeto, com testes unitários + mocks.
- A11y: passar checklist mínimo (landmarks, labels, foco, leitura por leitor de tela).
- Performance: não aumentar bundle crítico; validação com Lighthouse/DevTools.
- Documentação: notas de mudança e migração quando aplicável.

Templates de prompts (exemplos)
- "Você é um engenheiro front-end sênior. Revise este componente React/TS e proponha melhorias para acessibilidade, performance e teste. Dê diffs e testes sugeridos." 
- "Gere um checklist de PR para alterações em layout responsivo incluindo passos de QA manual e comandos de teste." 

Checklist de iteração
- Validar builds locais (`npm run build`).
- Rodar testes (`npm test` / `vitest`).
- Rodar linter e correções automáticas.
- Medir bundle e CWV quando relevante.

Armazenamento e uso
- Colocar este arquivo em `agent-customization/SKILL.md` no repositório para reuso por outros mantenedores.
- Incluir exemplos curtos de prompts e links para templates de PR.

Exemplos de prompts para tentar
- "Use esta skill para gerar um checklist de migração de CSS para CSS Modules em um monorepo Next.js." 
- "Use esta skill para auditar acessibilidade de um formulário complexo e retornar uma lista priorizada de correções." 

Próximos passos recomendados
- Ajustar os critérios de qualidade ao padrão do seu repositório.
- Adicionar snippets de prompt específicos para tarefas recorrentes.
- Integrar checks automatizados (CI) que sigam o checklist.

Autor e manutenção
- Criado pelo agente `agent-customization` — revisar a cada grande mudança de fluxo ou tooling.
