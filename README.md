# 💼 Portfólio Profissional — Weber Caldas
### Engenheiro de Software Full Stack & Arquiteto CRM SaaS
> **🌐 Site Oficial**: [https://portfolio-weber-dev.vercel.app/](https://portfolio-weber-dev.vercel.app/) • **GitHub**: [https://github.com/Webber03](https://github.com/Webber03) • **LinkedIn**: [https://www.linkedin.com/in/weber-dev/](https://www.linkedin.com/in/weber-dev/) • **E-mail**: [jonathansacramento57@gmail.com](mailto:jonathansacramento57@gmail.com)

---

## 🎨 Síntese das 4 Referências de Design

Este portfólio combina de forma coesa a identidade visual e as melhores práticas das seguintes referências:
1. **[ousmaneballondor.fr](https://www.ousmaneballondor.fr/)**: Estética editorial dark de luxo com tipografia expressiva (*Syne* + *Outfit*), contadores de métricas animados (`4+`, `11+`, `100%`, `99.9%`), fita de marquee infinita, linha do tempo em 6 capítulos técnicos e efeitos sonoros Web Audio (com botão mute/unmute).
2. **[g.ieffe.dev](https://g.ieffe.dev/)**: Barra superior com alternador de modos (*Showcase*, *Simulador*, *Terminal*), **Simulador de Arquitetura Interativo** com transmissão de pacotes e logs em tempo real, **Terminal Unix CLI** interativo com histórico (↑/↓) e comandos executáveis (`projects`, `cat simoesadv`, `ping vps`, `curl api`, `stats`, `sudo hire`), e rastreador de cursor luminoso.
3. **[ineagresta.com](https://ineagresta.com/)**: Design refinado, acabamento visual apurado e **Modal de Estudo de Caso Aprofundado** com desafio, solução de engenharia, stack de código e resultados em produção.
4. **[blueskyeating.com](https://blueskyeating.com/)**: Barra de busca instantânea em tempo real (filtra por nome, tecnologia ou tag), abas de taxonomia com contadores dinâmicos e caixas técnicas de "Receita da Solução" em cada card.

---

## 📂 Estrutura do Projeto

```
portfolio/
├── index.html               # Aplicação web moderna, interativa e responsiva do portfólio
├── style.css                # Design system exclusivo (Luxury Dark, tipografia Syne/Outfit, animações)
├── app.js                   # Lógica interativa (Simulador de fluxo, Terminal CLI, Web Audio, Busca e Modais)
├── CASES_AND_PROJECTS.md    # Estudos de caso detalhados (desafios, arquitetura, soluções e métricas)
└── README.md                # Este guia de uso e documentação técnica
```

---

## 🌟 Todos os 11 Projetos & Repositórios Documentados

1. **Plataforma Matriz CRM Whitelabel Multi-Tenant** (`atendimento`) — Core Whitelabel com injeção dinâmica de branding via API pública (`/api/whitelabel/config`), isolamento multi-tenant e RBAC.
2. **CRM Jurídico Simões Advogados** (`atendi-simoesadv`) — Instância dedicada em VPS porta `3003` com PostgreSQL isolado e integração Google Drive API v3 OAuth2.
3. **CRM Financeiro ITACRED** (`atendi-itacred`) — Instância dedicada em VPS porta `3001` especializada em crédito consignado e antecipação FGTS com regras rígidas de SLA.
4. **CRM Especializado Dra. Jéssica** (`atendi-DrJessica`) — Instância dedicada em VPS porta `3002` com proteção a dados médicos sensíveis e contencioso.
5. **CRM Educacional Educred** (`atendi-educred`) — Instância dedicada em VPS porta `3004` para financiamento estudantil e análise de fiadores.
6. **ScoutX & Scoutx-Final** (`Scoutx-Final`) — Plataforma moderna de prospecção e inteligência comercial em TypeScript com deploy na Vercel ([scoutx-final.vercel.app](https://scoutx-final.vercel.app)).
7. **Dashboards Analíticos** (`Dash_producao` & `Dash_homo`) — Módulo executivo de BI em tempo real com agregações SQL por data real de ocorrência.
8. **Motor Comercial de Duplo Funil & Algoritmo Round-Robin** — Distribuição equitativa de oportunidades, passagem SDR ➔ Closer em 1 clique e auditoria de perda.
9. **Super Tracker** (`super-tracker`) — Telemetria de conversão, captura de parâmetros UTM e atribuição de tráfego de campanhas.
10. **SPRINT_LGPD** (`SPRINT_LGPD`) — Módulo de conformidade legal, opt-in/opt-out e retenção de logs com hashing criptográfico.
11. **Validador Documental & Proxy Redirect** (`validador`, `phpredirect`) — Algoritmos de validação de CPF, padrão telefônico E.164 e proxies seguros.

---

## 🚀 Como Rodar Localmente

O portfólio utiliza HTML5, CSS3 moderno e Vanilla JavaScript (zero dependências externas pesadas).

### Opção 1: Servidor Python
```bash
python -m http.server 8080
```
Acesse em: `http://localhost:8080`

### Opção 2: Servidor Node.js
```bash
npx serve .
```

### Opção 3: Direto no Navegador
Basta abrir o arquivo `index.html` em qualquer navegador web.

---

## 🌐 Opções Gratuitas de Deploy

1. **Vercel**: Execute `npx vercel` na pasta para deploy instantâneo com HTTPS.
2. **GitHub Pages**: No repositório [Webber03/portfolio](https://github.com/Webber03), ative o GitHub Pages na aba *Settings > Pages*.
3. **VPS Linux Próprio**: Aponte o proxy reverso Nginx para a pasta local com certificado Let's Encrypt.
