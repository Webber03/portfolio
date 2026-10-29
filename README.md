# 💼 Portfólio Profissional - Weber Caldas (Full Stack & CRM Architect)

Este diretório contém o material completo e a aplicação web interativa de portfólio baseada em **todos os projetos e soluções de alta complexidade desenvolvidos até o momento**.

---

## 📂 Estrutura do Diretório `portfolio/`

```
portfolio/
├── index.html               # Aplicação web moderna, interativa e responsiva do portfólio
├── style.css                # Design system exclusivo (Dark Glassmorphism, tipografia premium e micro-animações)
├── app.js                   # Lógica interativa (filtros de projetos, modal de estudo de caso, estatísticas)
├── CASES_AND_PROJECTS.md    # Estudos de caso detalhados (desafios, arquitetura, soluções e métricas para propostas e LinkedIn)
└── README.md                # Este guia de uso e instruções de deploy
```

---

## 🌟 Projetos e Soluções em Destaque no Portfólio

1. **Plataforma SaaS CRM Whitelabel Multi-Tenant**:
   - Arquitetura isolada por container e banco de dados PostgreSQL por cliente.
   - Branding 100% dinâmico (logos, títulos, temas) via `.env` e endpoints dedicados.
2. **Instância Dedicada Simões Advogados (`simoesadv`)**:
   - Gestão jurídica de atendimento previdenciário e cível.
   - Automação de documentação com Google Drive API e tokens OAuth2.
3. **Engine Comercial com Duplo Funil (SDR + Closer)**:
   - Rodízio inteligente de leads (Round-Robin).
   - Regras de SLA em tempo real com alertas visuais e registro de motivos de perda.
4. **Painel Analítico & BI em Tempo Real**:
   - Gráficos e métricas de conversão baseados em datas reais de eventos.
   - Ranking de produtividade para SDRs e Closers.
5. **Infraestrutura Cloud & DevOps (VPS Linux)**:
   - Nginx Reverse Proxy com SSL Let's Encrypt automático.
   - Orquestração com PM2 e Docker em rede interna segura (`172.17.0.1`).

---

## 🚀 Como Visualizar Localmente

Abra o arquivo `index.html` em qualquer navegador:
- Dê dois cliques em `portfolio/index.html` ou abra com a extensão Live Server do VS Code / Antigravity IDE.
- Ou via terminal na raiz do projeto:
  ```bash
  npx serve portfolio
  ```

---

## 🌐 Opções Gratuitas de Hospedagem / Deploy

1. **GitHub Pages**:
   - Crie um repositório no GitHub para o portfólio e ative o GitHub Pages nas configurações.
2. **Vercel / Netlify**:
   - Arraste a pasta `portfolio` para a plataforma para ter deploy instantâneo com link HTTPS público.
3. **Na VPS Própria (Nginx)**:
   - Aponte um subdomínio (ex: `portfolio.seudominio.com`) para a pasta `portfolio`.
