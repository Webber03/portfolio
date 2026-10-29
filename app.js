/**
 * Weber Caldas Portfolio Application
 * Implements:
 * 1. Web Audio Synthesizer (SFX for clicks & terminal, inspired by ousmaneballondor.fr)
 * 2. Interactive Architecture Flow Simulator (inspired by g.ieffe.dev)
 * 3. Interactive Embedded Unix CLI Terminal (inspired by g.ieffe.dev)
 * 4. Instant Live Search & Taxonomy Filter with live counters (inspired by blueskyeating.com)
 * 5. Deep-Dive Case Study Modal System (inspired by ineagresta.com)
 * 6. Smooth Animated Metrics Counters & Ambient Cursor Tracker
 */

// ==========================================================================
// Comprehensive Project & Case Studies Data (All 11 Systems)
// ==========================================================================

const CASE_STUDIES = {
  'modal-whitelabel': {
    title: 'Plataforma Matriz CRM Whitelabel Multi-Tenant',
    category: 'SaaS & Arquitetura Corporativa',
    badge: 'Matriz SaaS Flagship',
    github: 'https://github.com/Webber03/atendimento',
    summary: 'Arquitetura matriz desenvolvida para gerar instâncias independentes de CRM comercial com customização dinâmica de marca, controle RBAC e isolamento total de banco de dados.',
    challenge: 'Construir um ecossistema comercial personalizável onde múltiplos escritórios jurídicos e financeiras possam utilizar o CRM com suas próprias marcas (logo, títulos, favicons, cores), sem qualquer vazamento de dados entre empresas e com rápida capacidade de provisionamento.',
    solution: [
      'Frontend 100% desacoplado de nomes ou logos fixos no código fonte.',
      'Identidade visual dinâmica injetada via API pública (/api/whitelabel/config) com suporte a logos em SVG, metatags e paletas dinâmicas via CSS Variables.',
      'Conexões PostgreSQL gerenciadas por PgPool dedicado com esquemas ou instâncias totalmente isoladas por empresa.',
      'Controle de acesso granular baseado em papéis (Admin, Supervisor, SDR, Closer) com autenticação JWT e criptografia Bcrypt.',
      'Scripts automatizados de migração para deploy de um novo cliente em menos de 10 minutos.'
    ],
    techStack: 'Node.js, Express.js, PostgreSQL, Docker, Nginx Proxy, JWT, Bcrypt, Vanilla JS Modular',
    results: 'Capacidade de subir novas instâncias corporativas em minutos, garantia jurídica estrita de isolamento de dados (LGPD) e zero dependência de plataformas SaaS de terceiros.'
  },

  'modal-simoes': {
    title: 'CRM Jurídico Simões Advogados',
    category: 'Instância Dedicada em Produção',
    badge: 'Porta 3003 • VPS Linux',
    github: 'https://github.com/Webber03/atendi-simoesadv',
    domain: 'simoesadv.vps11814.panel.icontainer.work',
    summary: 'Instância exclusiva para gestão de clientes previdenciários e cíveis, com esteira de triagem, SLA de atendimento, domínio dedicado e integração de pastas com Google Drive.',
    challenge: 'Adequar a esteira comercial para as particularidades de um escritório de advocacia previdenciária e cível, eliminando perdas de prazos no primeiro contato do lead e resolvendo o armazenamento de centenas de documentos probatórios pesados (laudos médicos, CNIS, procurações).',
    solution: [
      'Deploy em porta isolada (3003) no servidor VPS Linux com terminação SSL Nginx e domínio corporativo.',
      'Banco de dados PostgreSQL dedicado (simoesadv) rodando na rede interna Docker 172.17.0.1 com superuser exclusivo.',
      'Integração oficial com Google Drive API v3 via OAuth2: criação automática de pasta na nuvem para cada lead, com vinculação direta de ID no registro relacional.',
      'Kanban personalizado com fases de triagem de elegibilidade, conferência de benefício previdenciário e fechamento de honorários.'
    ],
    techStack: 'Node.js, PostgreSQL Dedicado, Google Cloud OAuth2, Google Drive API v3, Nginx Reverse Proxy',
    results: 'Redução a zero no atraso de qualificação de benefícios, 100% dos documentos na nuvem do escritório e zero vazamento ou lentidão no banco principal.'
  },

  'modal-itacred': {
    title: 'CRM Financeiro ITACRED',
    category: 'Instância Dedicada • Correspondente Bancário',
    badge: 'Porta 3001 • VPS Linux',
    github: 'https://github.com/Webber03/atendi-itacred',
    summary: 'Customização de CRM de alta rotatividade para correspondente bancário especializado em crédito consignado e antecipação de FGTS, com fila rápida de atendimento e esteira de aprovação.',
    challenge: 'Gerenciar um fluxo de centenas de contatos diários de crédito consignado (INSS, SIAPE e FGTS) com necessidade de qualificação em segundos, checagem de margem e distribuição rápida para consultores de fechamento.',
    solution: [
      'Instância isolada na porta 3001 com banco relacional exclusivo crm_itacred_db.',
      'Fila veloz de tabulação para SDRs com preenchimento simplificado de margem consignável e valor de empréstimo pretendido.',
      'Distribuição instantânea para Closers bancários com alerta de SLA para evitar que o lead procure outro correspondente.',
      'Painel de auditoria de motivos de perda (margem negativa, já tomou empréstimo, desistência).'
    ],
    techStack: 'Node.js, Express.js, PostgreSQL, Docker, Nginx, Kanban Especializado',
    results: 'Aumento de 40% na velocidade de primeiro contato, esteira de consignado padronizada e métricas analíticas diárias para a coordenação.'
  },

  'modal-drjessica': {
    title: 'CRM Especializado Dra. Jéssica',
    category: 'Instância Dedicada • Contencioso & Saúde',
    badge: 'Porta 3002 • VPS Linux',
    github: 'https://github.com/Webber03/atendi-DrJessica',
    summary: 'Instância exclusiva em VPS configurada com fluxo adaptado para atendimento contencioso e consultivo, gerenciando laudos médicos e documentos processuais sigilosos em banco independente.',
    challenge: 'Proteger dados médicos e processuais de altíssima sensibilidade com sigilo profissional inegociável, separando atendimento prévio de consulta e análise de viabilidade processual.',
    solution: [
      'Ambiente dedicado na porta 3002 com banco de dados independente drjessica.',
      'Criptografia de ponta a ponta e níveis de acesso restritos para equipe de atendimento preliminar vs advogada responsável.',
      'Pipeline visual com status de agendamento de consulta, conferência de perícia médica e peticionamento inicial.'
    ],
    techStack: 'Node.js, PostgreSQL, Linux VPS, Nginx, Segurança de Dados',
    results: 'Segurança absoluta de dados médicos e jurídicos, centralização do histórico do cliente e fluxo de triagem sem ruídos.'
  },

  'modal-educred': {
    title: 'CRM Educacional Educred',
    category: 'Instância Dedicada • Crédito Educacional',
    badge: 'Porta 3004 • VPS Linux',
    github: 'https://github.com/Webber03/atendi-educred',
    summary: 'Instância especializada no segmento de financiamento estudantil e bolsas, orquestrando fluxos de envio de comprovantes de matrícula, contratos de fiadores e análise de crédito.',
    challenge: 'Acompanhar o ciclo de captação de estudantes universitários, desde o interesse inicial por financiamento até a assinatura de fiador e matrícula na faculdade.',
    solution: [
      'Funil especializado com etapas de pré-análise de renda familiar, validação de fiador e aprovação de contrato de financiamento.',
      'Automação de lembretes para envio de documentação pendente do estudante.',
      'Relatórios de conversão por curso e faculdade parceira.'
    ],
    techStack: 'Node.js, Express, PostgreSQL, Kanban Especializado',
    results: 'Organização rigorosa da documentação de alunos e aceleração do tempo de deferimento do crédito estudantil.'
  },

  'modal-engine': {
    title: 'Motor Comercial de Duplo Funil (SDR + Closer) & Round-Robin',
    category: 'Engenharia Comercial & Algoritmos',
    badge: 'Core Engine',
    github: 'https://github.com/Webber03/atendimento',
    summary: 'Separação estruturada de Pré-Vendas (SDR) e Fechamento (Closer), com algoritmo de distribuição equitativa Round-Robin e auditoria de perda com categorização obrigatória.',
    challenge: 'Evitar o atrito comercial e disputas na distribuição de leads, impedir que oportunidades fiquem paradas sem contato por horas e garantir que leads frios não cheguem até os consultores de fechamento.',
    solution: [
      'Separação lógica em duas esteiras: Funil SDR (prospecção e validação cadastral) e Funil Closer (negociação e conversão).',
      'Algoritmo Round-Robin inteligente que mantém uma fila circular de Closers disponíveis, pulando consultores ausentes ou pausados.',
      'Passagem de bastão em 1-clique: quando o SDR qualifica, o lead é transferido instantaneamente com histórico completo de tabulações e notas.',
      'Temporizadores visuais de SLA na interface com mudança de cor conforme o tempo de espera aumenta.',
      'Obrigatoriedade de registro de motivo de perda estruturado para alimentar relatórios de melhoria de produto.'
    ],
    techStack: 'Vanilla JS Drag & Drop nativo, Algoritmos de Fila Circular, Triggers PostgreSQL, Express',
    results: 'Equidade total na distribuição de comissões, redução drástica do tempo médio de resposta e histórico comercial 100% auditável.'
  },

  'modal-drive': {
    title: 'Automação Documental com Google Drive API v3 & OAuth2',
    category: 'Cloud Storage & Integrações',
    badge: 'Google Cloud API',
    github: 'https://github.com/Webber03/atendi-simoesadv',
    summary: 'Módulo de criação automática de diretórios e sincronização de arquivos para cada lead gerado, reduzindo o tráfego do servidor de banco e garantindo backup redundante.',
    challenge: 'Arquivos PDF e imagens pesadas sobrecarregam bancos relacionais com backups lentos e altos custos de armazenamento em disco VPS.',
    solution: [
      'Integração oficial com Google Drive API v3 utilizando tokens persistidos via OAuth2 com renovação automática de refresh token.',
      'Criação programática de pastas dedicadas para cada lead dentro da pasta pai do cliente no Google Drive.',
      'Uploads e downloads transmitidos via streaming em Node.js com tratamento de erros e fallbacks.',
      'Vinculação direta do ID do Google Drive ao registro do lead no banco PostgreSQL.'
    ],
    techStack: 'Google Cloud Console, Google Drive API v3, OAuth2 Tokens, Node Streams',
    results: 'Armazenamento ilimitado e organizado diretamente no Google Workspace do cliente, com redundância na nuvem e facilidade de auditoria.'
  },

  'modal-analytics': {
    title: 'Dashboards Analíticos (Dash_producao & Dash_homo)',
    category: 'Business Intelligence & SQL',
    badge: 'Módulo BI Real-Time',
    github: 'https://github.com/Webber03/Dash_producao',
    summary: 'Central de métricas com contabilização por data real dos eventos, taxas de conversão de passagens, monitoramento de tempos médios e ranking de produtividade de operadores.',
    challenge: 'Dar visibilidade executiva em tempo real para gestores e diretores sobre as taxas de conversão entre etapas sem onerar as tabelas transacionais do CRM.',
    solution: [
      'Queries SQL analíticas com Window Functions e agregação temporal pela data real do evento (evitando distorções de data de criação).',
      'Taxa de conversão por etapa do funil (Prospectados ➔ Qualificados ➔ Em Negociação ➔ Fechados).',
      'Ranking de produtividade em tempo real para equipes de SDR e Closer com métricas individuais.',
      'Ambientes segregados de produção (Dash_producao) e homologação (Dash_homo) para teste seguro de novas métricas.'
    ],
    techStack: 'PostgreSQL Window Functions, Express.js Analytics Endpoints, Dashboard UI Dinâmica',
    results: 'Decisões operacionais baseadas em dados consolidados e diagnóstico instantâneo de gargalos na esteira comercial.'
  },

  'modal-tracker': {
    title: 'Super Tracker — Telemetria de Conversão & Marketing Ops',
    category: 'Telemetria & Rastreamento',
    badge: 'Analytics Engine',
    github: 'https://github.com/Webber03/super-tracker',
    summary: 'Sistema de rastreamento de campanhas de tráfego pago, captura de parâmetros UTMs e identificação de jornada de aquisição do lead antes de entrar no funil de vendas do CRM.',
    challenge: 'Identificar com precisão qual anúncio, campanha ou palavra-chave gerou a oportunidade que fechou contrato no CRM para cálculo real de ROI.',
    solution: [
      'Script leve de captura automática de parâmetros UTM (source, medium, campaign, content, term) e cookies de sessão.',
      'Injeção transparente dos metadados de origem na criação do lead via formulários web ou landing pages.',
      'Associação da origem do tráfego ao valor final fechado no CRM para atribuição exata de faturamento.'
    ],
    techStack: 'JavaScript Vanilla, Telemetria Web, URLSearchParams, APIs de Ingestão',
    results: 'Visibilidade completa do retorno sobre investimento em anúncios (ROAS) conectado diretamente ao CRM.'
  },

  'modal-lgpd': {
    title: 'SPRINT_LGPD — Módulo de Conformidade & Governança',
    category: 'Segurança & LegalTech',
    badge: 'Conformidade Legal',
    github: 'https://github.com/Webber03/SPRINT_LGPD',
    summary: 'Arquitetura de governança para consentimento explícito, registro de opt-in/opt-out e retenção de logs de consentimento em conformidade estrita com a LGPD e sigilo bancário.',
    challenge: 'Garantir que operações de prospecção e tratamento de dados de clientes atendam às exigências da Lei Geral de Proteção de Dados (Lei 13.709/2018).',
    solution: [
      'Interface e APIs de aceite formal de Termos de Uso e Políticas de Privacidade.',
      'Armazenamento imutável de logs de consentimento (data/hora, IP, hash do documento e versão do termo aceito).',
      'Rotinas preparadas para atendimento a solicitações de revogação de consentimento e anonimização.'
    ],
    techStack: 'HTML5 Semântico, CSS3, JavaScript, Criptografia Hash, Conformidade LGPD',
    results: 'Segurança jurídica para a empresa e seus clientes contra autuações e processos relacionados a vazamento de dados.'
  },

  'modal-validador': {
    title: 'Validador Documental & Proxy Redirect',
    category: 'Utilitários & Infraestrutura',
    badge: 'Validações & Proxies',
    github: 'https://github.com/Webber03/validador',
    summary: 'Conjunto de ferramentas para validação sintática e algorítmica de CPFs, telefones no padrão E.164 e proxy PHP de redirecionamento dinâmico de tráfego com cabeçalhos seguros.',
    challenge: 'Impedir a entrada de dados incorretos, CPFs inválidos ou telefones quebrados no banco relacional, evitando perda de tempo dos operadores.',
    solution: [
      'Algoritmo matemático oficial de cálculo e conferência de dígitos verificadores de CPF.',
      'Sanitização e normalização de telefones celulares para formato internacional (+55 E.164) pronto para WhatsApp API.',
      'Script phpredirect para redirecionamento dinâmico de campanhas de tráfego com preservação de cabeçalhos e segurança.'
    ],
    techStack: 'JavaScript ES6, Expressões Regulares (RegEx), PHP, Sanitização de Dados',
    results: 'Taxa de erro de digitação reduzida a praticamente zero na entrada dos leads do CRM.'
  }
};

// ==========================================================================
// Web Audio Synthesizer (SFX Engine inspired by ousmaneballondor.fr)
// ==========================================================================

class AudioSynth {
  constructor() {
    this.enabled = false;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.playTone(520, 'sine', 0.08, 0.15);
    }
    return this.enabled;
  }

  playTone(freq = 440, type = 'sine', duration = 0.05, volume = 0.1) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio not permitted or suspended
    }
  }

  tick() {
    this.playTone(880, 'triangle', 0.03, 0.05);
  }

  success() {
    if (!this.enabled || !this.ctx) return;
    this.playTone(440, 'sine', 0.06, 0.08);
    setTimeout(() => this.playTone(880, 'sine', 0.1, 0.08), 60);
  }

  terminalBeep() {
    this.playTone(720, 'sawtooth', 0.04, 0.04);
  }
}

const sound = new AudioSynth();

// ==========================================================================
// Main Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initViewModeSelector();
  initAudioToggle();
  initCursorTracker();
  initMetricsCounter();
  initProjectSearchAndFilters();
  initModal();
  initInteractiveSimulator();
  initTerminalCLI();
  initClipboard();
});

// 1. Navbar Scroll Effect & Mobile Menu
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      sound.tick();
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

// 2. View Mode Selector (Showcase vs Simulator vs Terminal)
function initViewModeSelector() {
  const modeButtons = document.querySelectorAll('.mode-btn');

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      sound.tick();

      const mode = btn.dataset.mode;
      if (mode === 'editorial') {
        const target = document.getElementById('projects');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else if (mode === 'simulator') {
        const target = document.getElementById('simulator-section');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else if (mode === 'terminal') {
        const target = document.getElementById('cli-terminal-section');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          const termInput = document.getElementById('terminal-input');
          if (termInput) setTimeout(() => termInput.focus(), 600);
        }
      }
    });
  });

  // Hero button triggers
  const btnHeroTerminal = document.getElementById('btn-open-terminal-hero');
  if (btnHeroTerminal) {
    btnHeroTerminal.addEventListener('click', () => {
      const termSection = document.getElementById('cli-terminal-section');
      if (termSection) {
        termSection.scrollIntoView({ behavior: 'smooth' });
        const termInput = document.getElementById('terminal-input');
        if (termInput) setTimeout(() => termInput.focus(), 600);
      }
      sound.tick();
    });
  }
}

// 3. Audio Toggle Button
function initAudioToggle() {
  const audioToggle = document.getElementById('audio-toggle');
  if (!audioToggle) return;

  audioToggle.addEventListener('click', () => {
    const isNowEnabled = sound.toggle();
    const icon = audioToggle.querySelector('.audio-icon');
    const label = audioToggle.querySelector('.audio-label');

    if (isNowEnabled) {
      audioToggle.classList.add('audio-active');
      if (icon) icon.textContent = '🔊';
      if (label) label.textContent = 'Sound ON';
      showToast('🔊 Efeitos sonoros Web Audio ativados!');
    } else {
      audioToggle.classList.remove('audio-active');
      if (icon) icon.textContent = '🔇';
      if (label) label.textContent = 'Sound';
      showToast('🔇 Efeitos sonoros silenciados.');
    }
  });
}

// 4. Custom Ambient Cursor Glow
function initCursorTracker() {
  const cursor = document.getElementById('cursor-glow');
  if (!cursor || window.innerWidth < 768) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX;
  let curY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderCursor() {
    curX += (mouseX - curX) * 0.12;
    curY += (mouseY - curY) * 0.12;
    cursor.style.left = `${curX}px`;
    cursor.style.top = `${curY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}

// 5. Animated Metrics Counter (Dembélé Style)
function initMetricsCounter() {
  const counters = document.querySelectorAll('.metric-val.counter');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 1800;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeProgress * target;

            if (isDecimal) {
              counter.textContent = currentVal.toFixed(1);
            } else {
              counter.textContent = Math.floor(currentVal);
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = isDecimal ? target.toFixed(1) : target;
            }
          }
          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.hero-metrics-bar');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

// 6. Project Live Search & Category Filters (Blue Sky Eating Style)
function initProjectSearchAndFilters() {
  const searchInput = document.getElementById('project-search-input');
  const clearBtn = document.getElementById('btn-clear-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  let activeFilter = 'all';
  let searchTerm = '';

  function applyFilters() {
    let visibleCount = 0;

    projectCards.forEach(card => {
      const categories = (card.getAttribute('data-category') || '').toLowerCase();
      const cardName = (card.getAttribute('data-name') || '').toLowerCase();
      const cardText = card.textContent.toLowerCase();

      const matchesCategory = (activeFilter === 'all') || categories.includes(activeFilter);
      const matchesSearch = !searchTerm || cardName.includes(searchTerm) || cardText.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        visibleCount++;
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });

    const countAll = document.getElementById('count-all');
    if (countAll && activeFilter === 'all' && !searchTerm) {
      countAll.textContent = projectCards.length;
    }
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      sound.tick();
      applyFilters();
    });
  });

  // Search Input Events
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = searchTerm ? 'block' : 'none';
      }
      applyFilters();
    });
  }

  // Clear Search Button
  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchTerm = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
      sound.tick();
      applyFilters();
    });
  }
}

// 7. Interactive Architecture Simulator (g.ieffe.dev inspiration)
function initInteractiveSimulator() {
  const instanceBtns = document.querySelectorAll('#sim-instance-buttons .inst-btn');
  const btnRun = document.getElementById('btn-run-simulation');
  const btnDrive = document.getElementById('btn-test-drive-api');
  const btnRoundRobin = document.getElementById('btn-test-round-robin');
  const btnClearLogs = document.getElementById('btn-clear-sim-logs');
  const logsContainer = document.getElementById('sim-logs');

  const displayApp = document.getElementById('display-app-name');
  const displayDb = document.getElementById('display-db-name');

  const nodeOrigin = document.getElementById('node-origin');
  const nodeNginx = document.getElementById('node-nginx');
  const nodeApp = document.getElementById('node-app');
  const nodeDb = document.getElementById('node-db');
  const nodeDrive = document.getElementById('node-drive');

  const path1 = document.getElementById('path-1');
  const path2 = document.getElementById('path-2');
  const pathDb = document.getElementById('path-db');
  const pathDrive = document.getElementById('path-drive');

  let activeInstance = {
    id: 'simoesadv',
    name: 'Simões Advogados',
    port: '3003',
    db: 'simoesadv',
    driveFolder: 'Simões_Atendimentos_Docs'
  };

  const instanceMap = {
    simoesadv: { id: 'simoesadv', name: 'Simões Advogados', port: '3003', db: 'simoesadv', driveFolder: 'Simoes_Juridico_Docs' },
    itacred: { id: 'itacred', name: 'ITACRED Financeira', port: '3001', db: 'crm_itacred_db', driveFolder: 'ITACRED_Consignado_Docs' },
    drjessica: { id: 'drjessica', name: 'Dra. Jéssica Contencioso', port: '3002', db: 'drjessica', driveFolder: 'DrJessica_Processos_Docs' },
    educred: { id: 'educred', name: 'Educred Financiamento', port: '3004', db: 'educred', driveFolder: 'Educred_Estudantil_Docs' }
  };

  function appendLog(text, type = 'text-muted') {
    if (!logsContainer) return;
    const time = new Date().toLocaleTimeString('pt-BR');
    const line = document.createElement('div');
    line.className = `log-line ${type}`;
    line.innerHTML = `<span style="color:#64748b;">[${time}]</span> ${text}`;
    logsContainer.appendChild(line);
    logsContainer.scrollTop = logsContainer.scrollHeight;
  }

  // Instance Switcher
  instanceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      instanceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-instance');
      if (instanceMap[targetId]) {
        activeInstance = instanceMap[targetId];
        if (displayApp) displayApp.textContent = `Instância Node.js (:${activeInstance.port})`;
        if (displayDb) displayDb.textContent = `PostgreSQL: ${activeInstance.db}`;
        appendLog(`Alternado para cliente <strong>${activeInstance.name}</strong> (Porta :${activeInstance.port}, Banco: ${activeInstance.db})`, 'log-cyan');
        sound.tick();
      }
    });
  });

  // Run Full Lead Ingestion Simulation
  if (btnRun) {
    btnRun.addEventListener('click', () => {
      sound.tick();
      appendLog(`▶ <strong>Nova solicitação de Lead recebida via HTTPS</strong> para <em>${activeInstance.name}</em>`, 'log-cyan');

      // Step 1: Origin
      if (nodeOrigin) nodeOrigin.classList.add('active-node');
      if (path1) path1.classList.add('transmitting');

      setTimeout(() => {
        if (nodeOrigin) nodeOrigin.classList.remove('active-node');
        if (path1) path1.classList.remove('transmitting');
        if (nodeNginx) nodeNginx.classList.add('active-node');
        if (path2) path2.classList.add('transmitting');
        appendLog(`[NGINX SSL] Roteando virtual host para upstream interno <code>127.0.0.1:${activeInstance.port}</code>`, 'text-muted');
      }, 500);

      setTimeout(() => {
        if (nodeNginx) nodeNginx.classList.remove('active-node');
        if (path2) path2.classList.remove('transmitting');
        if (nodeApp) nodeApp.classList.add('active-node');
        if (pathDb) pathDb.classList.add('transmitting');
        if (pathDrive) pathDrive.classList.add('transmitting');
        appendLog(`[NODE ENGINE] Instância :${activeInstance.port} validou JWT e disparou Duplo Funil (SDR Qualificação)`, 'log-purple');
      }, 1000);

      setTimeout(() => {
        if (nodeApp) nodeApp.classList.remove('active-node');
        if (pathDb) pathDb.classList.remove('transmitting');
        if (pathDrive) pathDrive.classList.remove('transmitting');
        if (nodeDb) nodeDb.classList.add('active-node');
        if (nodeDrive) nodeDrive.classList.add('active-node');
        appendLog(`[POSTGRESQL] <code>INSERT INTO leads</code> no banco isolado <strong>${activeInstance.db}</strong> (Latency: 4ms)`, 'log-success');
        appendLog(`[GOOGLE DRIVE API v3] Pasta criada com sucesso: <code>/${activeInstance.driveFolder}/LEAD_4892</code>`, 'log-success');
        sound.success();
      }, 1600);

      setTimeout(() => {
        if (nodeDb) nodeDb.classList.remove('active-node');
        if (nodeDrive) nodeDrive.classList.remove('active-node');
        appendLog(`✔ <strong>Fluxo completo em 28ms!</strong> Lead ativo na esteira comercial com SLA inicializado.`, 'log-success');
      }, 2300);
    });
  }

  // Google Drive Simulation
  if (btnDrive) {
    btnDrive.addEventListener('click', () => {
      sound.tick();
      appendLog(`▶ [GOOGLE OAUTH2] Requisitando refresh_token para Drive API v3...`, 'log-cyan');
      if (nodeDrive) nodeDrive.classList.add('active-node');
      setTimeout(() => {
        appendLog(`✔ Token renovado. Chamada: <code>POST https://www.googleapis.com/drive/v3/files</code> (MIME: folder)`, 'log-purple');
        appendLog(`✔ Pasta criada no Google Drive institucional com ID: <code>1AbC9...${Math.floor(Math.random() * 90000)}</code>`, 'log-success');
        if (nodeDrive) nodeDrive.classList.remove('active-node');
        sound.success();
      }, 700);
    });
  }

  // Round-Robin Test
  if (btnRoundRobin) {
    btnRoundRobin.addEventListener('click', () => {
      sound.tick();
      const closers = ['Consultor 1 (Carlos)', 'Consultora 2 (Mariana)', 'Consultor 3 (Roberto)'];
      const chosen = closers[Math.floor(Math.random() * closers.length)];
      appendLog(`▶ [ROUND-ROBIN ENGINE] Fila circular avaliando 3 Closers ativos na instância :${activeInstance.port}`, 'log-cyan');
      setTimeout(() => {
        appendLog(`✔ Oportunidade distribuída equitativamente para: <strong>${chosen}</strong> (SLA: 15 minutos)`, 'log-success');
        sound.success();
      }, 600);
    });
  }

  // Clear Logs
  if (btnClearLogs && logsContainer) {
    btnClearLogs.addEventListener('click', () => {
      logsContainer.innerHTML = `<div class="log-line text-muted">[LOG REINICIALIZADO] Aguardando novas ações no simulador.</div>`;
      sound.tick();
    });
  }
}

// 8. Interactive Embedded Unix CLI Terminal (g.ieffe.dev inspiration)
function initTerminalCLI() {
  const terminalInput = document.getElementById('terminal-input');
  const historyContainer = document.getElementById('terminal-history');
  const terminalScreen = document.getElementById('terminal-screen');
  const btnHelpTrigger = document.getElementById('btn-term-help-trigger');
  const cmdChips = document.querySelectorAll('.cmd-chip');

  if (!terminalInput || !historyContainer) return;

  const commandHistory = [];
  let historyIndex = -1;

  const COMMANDS = {
    help: () => `
Comandos disponíveis no terminal de Weber Caldas:
  • <span class="log-cyan">projects</span> / <span class="log-cyan">ls</span>    : Lista todos os 11 projetos e repositórios
  • <span class="log-cyan">cat &lt;nome&gt;</span>       : Exibe detalhes técnicos do projeto (ex: cat simoesadv, cat scoutx, cat itacred)
  • <span class="log-cyan">curl api</span>         : Simula requisição à API Whitelabel (/api/whitelabel/config)
  • <span class="log-cyan">ping vps</span>         : Testa conectividade com o servidor VPS Linux
  • <span class="log-cyan">stats</span>            : Exibe métricas de instâncias ativas e banco de dados
  • <span class="log-cyan">skills</span>           : Lista domínios de conhecimento técnico e stack
  • <span class="log-cyan">github</span>           : Exibe link do perfil GitHub (@Webber03)
  • <span class="log-cyan">linkedin</span>         : Exibe link do perfil LinkedIn (@weber-dev)
  • <span class="log-cyan">contact</span>          : Informações para contratação, e-mail e WhatsApp
  • <span class="log-cyan">clear</span>            : Limpa a tela do terminal
  • <span class="log-cyan">sudo hire</span>        : Executa protocolo de contratação imediata ;)
`,

    projects: () => `
<strong class="log-cyan">PROJETOS & REPOSITÓRIOS GITHUB (Weber Caldas / @Webber03):</strong>
-------------------------------------------------------------------------------
1.  <span class="log-success">atendimento</span>        - Matriz Whitelabel CRM Multi-Tenant (Node/Postgres)
2.  <span class="log-success">atendi-simoesadv</span>   - Instância Jurídica Simões Advogados (VPS :3003 + Drive API)
3.  <span class="log-success">atendi-itacred</span>     - Instância Financeira / Crédito Consignado (VPS :3001)
4.  <span class="log-success">atendi-DrJessica</span>   - Instância Jurídica & Médica Contenciosa (VPS :3002)
5.  <span class="log-success">atendi-educred</span>     - Instância Crédito Educacional
6.  <span class="log-purple">ScoutX / Final</span>      - Plataforma de Prospecção & Dados em TypeScript (Vercel)
7.  <span class="log-purple">Dash_producao</span>       - Dashboard Analítico & BI em Tempo Real (SQL Aggregations)
8.  <span class="log-purple">Dash_homo</span>           - Ambiente de Homologação de Métricas de BI
9.  <span class="log-warn">super-tracker</span>       - Telemetria de Conversão, UTMs e Atribuição de Tráfego
10. <span class="log-warn">SPRINT_LGPD</span>         - Módulo de Consentimento e Conformidade com LGPD
11. <span class="log-warn">validador</span>           - Validações de CPF, E.164 e Utilitários de Redirecionamento
-------------------------------------------------------------------------------
Use <em>cat &lt;nome&gt;</em> (ex: <code>cat simoesadv</code>) para detalhes.
`,

    ls: () => COMMANDS.projects(),

    'cat simoesadv': () => `
<strong class="log-cyan">[ESTUDO DE CASO] CRM Jurídico Simões Advogados</strong>
-------------------------------------------------------------------------------
• Domínio: simoesadv.vps11814.panel.icontainer.work (Porta :3003)
• Banco: simoesadv (PostgreSQL exclusivo na rede Docker 172.17.0.1)
• Integração Cloud: Google Drive API v3 via OAuth2 com upload por streaming
• Esteira: Triagem previdenciária, contagem de tempo CNIS e honorários
• Repositório: https://github.com/Webber03/atendi-simoesadv
`,

    'cat itacred': () => `
<strong class="log-cyan">[ESTUDO DE CASO] CRM Financeiro ITACRED</strong>
-------------------------------------------------------------------------------
• Porta VPS: :3001 (Ubuntu Server Nginx Proxy)
• Banco: crm_itacred_db (PostgreSQL isolado)
• Foco: Crédito consignado, margem INSS/SIAPE e antecipação de FGTS
• Repositório: https://github.com/Webber03/atendi-itacred
`,

    'cat scoutx': () => `
<strong class="log-cyan">[PROJETO] ScoutX — Inteligência & Prospecção de Dados</strong>
-------------------------------------------------------------------------------
• Live App: https://scoutx-final.vercel.app
• Stack: TypeScript, React, Serverless Functions, Vercel Edge
• Funcionalidades: Busca avançada de leads B2B, enriquecimento de contatos
• Repositório: https://github.com/Webber03/Scoutx-Final
`,

    'cat atendimento': () => `
<strong class="log-cyan">[MATRIZ SAAS] Atendimento — Core Whitelabel Multi-Tenant</strong>
-------------------------------------------------------------------------------
• Arquitetura: Node.js + Express + PgPool isolado por cliente
• Frontend: Drag & Drop Kanban nativo, injeção de branding dinâmico via API
• Engenharia Comercial: Duplo Funil (SDR + Closer) com algoritmo Round-Robin
• Repositório: https://github.com/Webber03/atendimento
`,

    'curl api': () => `
<span class="log-purple">HTTP/1.1 200 OK</span>
Content-Type: application/json; charset=utf-8
Access-Control-Allow-Origin: *

{
  "status": "success",
  "tenant": "simoesadv",
  "branding": {
    "companyName": "Simões Advogados Associados",
    "logoUrl": "/assets/branding/simoes_logo.svg",
    "theme": "navy-gold",
    "primaryColor": "#1e3a8a",
    "accentColor": "#d97706"
  },
  "modules": {
    "doubleFunnel": true,
    "roundRobin": true,
    "googleDriveVault": true,
    "slaAlerts": true
  },
  "database": {
    "host": "172.17.0.1",
    "isolated": true,
    "ssl": true
  }
}
`,

    'ping vps': () => `
PING vps11814.panel.icontainer.work (172.17.0.1): 56 data bytes
64 bytes from vps11814: icmp_seq=0 ttl=64 time=1.24 ms
64 bytes from vps11814: icmp_seq=1 ttl=64 time=1.12 ms
64 bytes from vps11814: icmp_seq=2 ttl=64 time=1.35 ms
--- vps11814 ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss
round-trip min/avg/max = 1.12/1.23/1.35 ms
`,

    stats: () => `
<strong class="log-cyan">MÉTRICAS DO SISTEMA EM PRODUÇÃO:</strong>
• Instâncias Ativas no VPS: 4 (ITACRED, Dra. Jéssica, Simões Advogados, Educred)
• Uptime do Servidor: 99.9% gerenciado via PM2 Cluster
• Bancos de Dados: PostgreSQL dedicados com conexões isoladas
• Repositórios GitHub: 11+ projetos mantidos por @Webber03
• Integrações Cloud: Google Drive API v3 (OAuth2) + Vercel
`,

    skills: () => `
<strong class="log-cyan">DOMÍNIOS TÉCNICOS DE WEBER CALDAS:</strong>
• Backend: Node.js, Express, PostgreSQL, PgPool, JWT, Bcrypt, RESTful APIs
• Frontend: JavaScript Moderno (ES6+), TypeScript, Kanban Drag & Drop, CSS3
• Cloud & Infra: Ubuntu Linux VPS, Nginx Reverse Proxy, SSL, PM2, Docker, Drive API
• Arquitetura: Multi-Tenant Whitelabel, Duplo Funil (SDR/Closer), Round-Robin
`,

    github: () => `
GitHub de Weber Caldas: <a href="https://github.com/Webber03" target="_blank" class="log-cyan">https://github.com/Webber03</a>
`,

    linkedin: () => `
LinkedIn de Weber Caldas: <a href="https://www.linkedin.com/in/weber-dev/" target="_blank" class="log-cyan">https://www.linkedin.com/in/weber-dev/</a>
`,

    contact: () => `
<strong class="log-cyan">INFORMAÇÕES DE CONTATO:</strong>
• E-mail Direto: <a href="mailto:jonathansacramento57@gmail.com" class="log-cyan">jonathansacramento57@gmail.com</a>
• LinkedIn: <a href="https://www.linkedin.com/in/weber-dev/" target="_blank" class="log-cyan">linkedin.com/in/weber-dev</a>
• GitHub: <a href="https://github.com/Webber03" target="_blank" class="log-cyan">github.com/Webber03</a>
• WhatsApp: <a href="https://api.whatsapp.com/send?phone=5571999999999" target="_blank" class="log-cyan">Iniciar conversa</a>
`,

    'sudo hire': () => `
<span class="log-success">
[PRIVILEGED ACCESS GRANTED]
===============================================================================
Iniciando protocolo de contratação de Weber Caldas:
  ✔ Experiência comprovada em sistemas reais de missão crítica
  ✔ Domínio de ponta a ponta (Frontend, Backend, Banco e Infra VPS)
  ✔ Disponibilidade para projetos SaaS, consultorias e posições Full Stack
===============================================================================
Envie um e-mail agora: jonathansacramento57@gmail.com
</span>
`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    sound.terminalBeep();
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    // Create Entry in Terminal
    const entry = document.createElement('div');
    entry.className = 'term-entry';

    const cmdEcho = document.createElement('div');
    cmdEcho.className = 'term-cmd-echo';
    cmdEcho.innerHTML = `<span class="term-prompt-user">weber@vps</span><span class="term-prompt-sep">:</span><span class="term-prompt-dir">~/portfolio</span><span class="term-prompt-char">$</span> <span>${escapeHtml(cmd)}</span>`;
    entry.appendChild(cmdEcho);

    const result = document.createElement('div');
    result.className = 'term-result';

    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === 'clear') {
      historyContainer.innerHTML = '';
      terminalInput.value = '';
      return;
    }

    if (COMMANDS[lowerCmd]) {
      result.innerHTML = COMMANDS[lowerCmd]();
    } else if (lowerCmd.startsWith('cat ')) {
      const target = lowerCmd.replace('cat ', '').trim();
      const matchedKey = Object.keys(COMMANDS).find(k => k.startsWith('cat ') && k.includes(target));
      if (matchedKey) {
        result.innerHTML = COMMANDS[matchedKey]();
      } else {
        result.innerHTML = `<span class="log-warn">Arquivo não encontrado: ${escapeHtml(target)}. Tente 'cat simoesadv', 'cat itacred', 'cat scoutx' ou 'projects'.</span>`;
      }
    } else {
      result.innerHTML = `<span class="log-warn">Comando não reconhecido: '${escapeHtml(cmd)}'. Digite <strong class="log-cyan">help</strong> para a lista de comandos.</span>`;
    }

    entry.appendChild(result);
    historyContainer.appendChild(entry);
    terminalInput.value = '';

    if (terminalScreen) {
      terminalScreen.scrollTop = terminalScreen.scrollHeight;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Keydown handler
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });

  // Clickable command chips
  cmdChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd') || chip.textContent.trim();
      terminalInput.value = cmd;
      executeCommand(cmd);
      terminalInput.focus();
    });
  });

  if (btnHelpTrigger) {
    btnHelpTrigger.addEventListener('click', () => {
      terminalInput.value = 'help';
      executeCommand('help');
      terminalInput.focus();
    });
  }
}

// 9. Detailed Case Study Modal System (Ine Agresta style)
function initModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const detailButtons = document.querySelectorAll('.btn-card-details[data-modal]');

  function openModal(modalKey) {
    const data = CASE_STUDIES[modalKey];
    if (!data || !modalBody || !backdrop) return;

    sound.tick();

    let solutionsHtml = '';
    if (Array.isArray(data.solution)) {
      solutionsHtml = `<ul>${data.solution.map(item => `<li>${item}</li>`).join('')}</ul>`;
    } else {
      solutionsHtml = `<p>${data.solution || ''}</p>`;
    }

    modalBody.innerHTML = `
      <div class="modal-content-wrapper">
        <span class="modal-category-tag">${data.badge || data.category}</span>
        <h3>${data.title}</h3>
        <p class="modal-summary">${data.summary || ''}</p>

        <div class="modal-block">
          <h4>Desafio Arquitetural & de Negócio</h4>
          <p>${data.challenge}</p>
        </div>

        <div class="modal-block">
          <h4>Solução de Engenharia Implementada</h4>
          ${solutionsHtml}
        </div>

        <div class="modal-block">
          <h4>Stack Tecnológica & Algoritmos</h4>
          <p><code>${data.techStack}</code></p>
        </div>

        <div class="modal-block">
          <h4>Resultados em Produção</h4>
          <p>${data.results}</p>
        </div>

        <div class="modal-footer-cta">
          ${data.github ? `
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <span>Ver Código no GitHub</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          ` : ''}
          ${data.domain ? `
            <a href="https://${data.domain}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              <span>Acessar Domínio Ativo</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;

    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!backdrop) return;
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    sound.tick();
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = btn.getAttribute('data-modal');
      openModal(modalKey);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop && backdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

// 10. Copy to Clipboard & Toast Notifications
function initClipboard() {
  const btnCopyEmail = document.getElementById('btn-copy-email');
  const emailLink = document.getElementById('email-link');

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = emailLink ? emailLink.textContent.trim() : 'jonathansacramento57@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        sound.success();
        showToast('E-mail copiado para a área de transferência!');
        btnCopyEmail.textContent = 'Copiado!';
        setTimeout(() => {
          btnCopyEmail.textContent = 'Copiar';
        }, 2500);
      }).catch(() => {
        showToast('Erro ao copiar e-mail.');
      });
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
