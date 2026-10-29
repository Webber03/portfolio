# 💼 Estudos de Caso & Portfólio Técnico - Weber Caldas

> **Perfil**: Engenheiro de Software Full Stack & Arquiteto de Soluções CRM / SaaS  
> **Contato**: [jonathansacramento57@gmail.com](mailto:jonathansacramento57@gmail.com)  
> **Especialidade**: Arquitetura Multi-Tenant, Automação de Processos Comerciais (SDR/Closer), Integrações Cloud (Google APIs, OAuth2) e DevOps (Docker, Linux VPS, Nginx, PostgreSQL).

---

## 🚀 Caso 1: Plataforma SaaS CRM Whitelabel Multi-Tenant

### 📋 Visão Geral
Concepção e desenvolvimento de uma plataforma proprietária de CRM voltada para empresas prestadoras de serviços (escritórios jurídicos, correspondentes bancários e financeiras). O sistema foi arquitetado como uma matriz Whitelabel expansível, permitindo implantações rápidas de instâncias isoladas com zero acoplamento de dados entre empresas.

### ⚙️ Desafios Técnicos Superados
- **Isolamento Completo de Dados**: Necessidade estrita de conformidade com LGPD e sigilo de informações bancárias/processuais. Resolvido com a criação de bancos PostgreSQL dedicados e instâncias conteinerizadas por cliente.
- **Identidade Visual Dinâmica (Branding)**: O frontend não possui referências hardcoded. Logotipos, nomes de empresa, favicons e metatags são injetados sob demanda via API (`/api/whitelabel/config`) e variáveis de ambiente.
- **Deploy Padronizado e Repetível**: Criação de scripts automatizados de migração e templates de ambiente para subida de novos clientes em minutos.

### 🛠️ Stack Tecnológica
- **Backend**: Node.js, Express.js, JWT, Bcrypt, PG Pool.
- **Banco de Dados**: PostgreSQL com conexões isoladas e índices de alta performance em busca textual (CPF, telefone, nomes).
- **Frontend**: Vanilla JavaScript modular, CSS3 com variáveis dinâmicas e Kanban drag-and-drop nativo.
- **Infraestrutura**: Linux VPS, Docker, PM2, Nginx Reverse Proxy com terminação SSL automática.

---

## ⚖️ Caso 2: Instância Dedicada Simões Advogados (`simoesadv`)

### 📋 Visão Geral
Customização e implantação da instância de CRM dedicada para a banca **Simões Advogados**, adaptando fluxos de prospecção, qualificação jurídica e fechamento de contratos previdenciários e cíveis.

### ⚙️ Funcionalidades Chave Implementadas
- **Pipeline Jurídico Especializado**: Fases sob medida para análise documental, triagem de elegibilidade de benefícios e fechamento de contrato de honorários.
- **Integração OAuth2 com Google Drive**: Criação e organização automática de pastas na nuvem por cliente/processo, eliminando anexos pesados no banco relacional e garantindo backup contínuo.
- **Configuração de VPS com Domínio Próprio**: Deploy na VPS iContainer (`simoesadv.vps11814.panel.icontainer.work`) rodando em porta isolada (`3003`) com banco `simoesadv` protegido em rede interna (`172.17.0.1`).

### 📈 Resultados Alcançados
- **Zero Vazamento de Dados**: Banco relacional 100% exclusivo com superuser próprio.
- **Centralização Documental**: 100% dos documentos organizados no Google Drive institucional automaticamente vinculados ao lead.

---

## 🎯 Caso 3: Motor Comercial de Duplo Funil (SDR + Closer) & Rodízio Inteligente

### 📋 Visão Geral
Estruturação de um mecanismo de vendas avançado com divisão clara entre Pré-Vendas (SDR/Qualificador) e Fechamento (Closer/Consultor), incluindo algoritmo de distribuição equitativa de leads.

### ⚙️ Desafios e Soluções
- **Passagem de Bastão Transparente**: Criação de fluxo onde o SDR valida dados preliminares e avança o lead com um clique, registrando histórico completo de interações, notas e tabulações.
- **Algoritmo de Rodízio (Round-Robin)**: Fila automatizada de Closers ativos, distribuindo novas oportunidades com equidade e respeitando status de disponibilidade dos consultores.
- **Gestão de SLA e Alertas Visuais**: Temporizadores visuais que alertam a equipe quando um lead ultrapassa o tempo limite sem atendimento na esteira.
- **Auditoria de Motivos de Perda**: Exigência de preenchimento estruturado de motivos de descarte para alimentar relatórios analíticos de inteligência comercial.

---

## 📊 Caso 4: Dashboard Analítico em Tempo Real & Métricas de Conversão

### 📋 Visão Geral
Criação de um módulo completo de Business Intelligence (BI) integrado ao CRM, permitindo que coordenadores e gestores acompanhem o desempenho da equipe em tempo real sem lentidão nas consultas operacionais.

### ⚙️ Métricas Monitoradas
- **Volume de Prospectados e Qualificados** por período.
- **Taxa de Conversão por Etapa do Funil** (Passagens SDR ➔ Closer ➔ Fechado).
- **Tempo Médio de Atendimento (SLA)**.
- **Ranking Dinâmico de Produtividade** individual por SDR e por Closer.
- **Filtragem por Data Real do Evento**: Evita distorções estatísticas ao contabilizar quando a ação de fato ocorreu na timeline do cliente.

---

## ☁️ Caso 5: Infraestrutura Cloud & Automações Google Workspace

### 📋 Arquitetura de Produção
```
                                 [ Internet / Usuários ]
                                            │
                                            ▼
                       [ Nginx Reverse Proxy (SSL / HTTPS) ]
                                            │
            ┌───────────────────────────────┼───────────────────────────────┐
            ▼                               ▼                               ▼
    [ Porta 3001 ]                   [ Porta 3002 ]                  [ Porta 3003 ]
      (ITACRED)                      (Dra. Jéssica)                 (Simões Advogados)
            │                               │                               │
            ▼                               ▼                               ▼
   [ DB: crm_itacred_db ]           [ DB: drjessica ]             [ DB: simoesadv ]
            │                               │                               │
            └───────────────────────────────┴───────────────────────────────┘
                                            │
                                            ▼
                           [ Google Drive API / OAuth2 ]
                       (Armazenamento de Pastas por Cliente)
```

### ⚙️ Destaques de Engenharia
- **Ambiente Linux VPS Seguro**: Portas de banco e serviços internos fechadas externamente, acessíveis apenas pela rede local interna Docker.
- **Automação Google Drive v3**: Manipulação de pastas e subpastas via Node.js utilizando credenciais seguras e tokens persistidos.
- **Gestão de Processos com PM2**: Inicialização automática (`pm2 save`), monitoramento de consumo de memória e auto-restart em caso de falha.

---

## 💬 Resumo para Currículo / Propostas / LinkedIn

> *"Arquiteto de Software e Desenvolvedor Full Stack especializado em ecossistemas comerciais, plataformas SaaS Whitelabel e integrações de alto impacto. Responsável pela concepção e deploy de arquiteturas multi-tenant em Node.js e PostgreSQL, com automações em nuvem (Google APIs), gestão de filas de atendimento (SDR/Closer com SLA) e infraestrutura em VPS Linux (Docker/Nginx)."*
