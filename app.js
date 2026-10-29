function initViewModeSelector() {
  const modeButtons = document.querySelectorAll('.mode-btn');
  const simSection = document.getElementById('simulador-section');
  const termSection = document.getElementById('terminal-section');
  const heroSection = document.getElementById('hero');

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.getAttribute('data-mode');

      if (mode === 'editorial') {
        heroSection?.scrollIntoView({ behavior: 'smooth' });
      } else if (mode === 'simulator') {
        simSection?.scrollIntoView({ behavior: 'smooth' });
      } else if (mode === 'terminal') {
        termSection?.scrollIntoView({ behavior: 'smooth' });
        const input = document.getElementById('terminal-cli-input');
        input?.focus();
      }
    });
  });
}

function initSimulator() {
  const btnRun = document.getElementById('btn-run-sim');
  const statusLog = document.getElementById('sim-status-log');
  const scenarioBtns = document.querySelectorAll('.sim-scenario-btn');

  const n1 = document.getElementById('sim-node-1');
  const n2 = document.getElementById('sim-node-2');
  const n3 = document.getElementById('sim-node-3');
  const n4 = document.getElementById('sim-node-4');

  const t1 = document.getElementById('sim-node-1-title');
  const s1 = document.getElementById('sim-node-1-sub');
  const t2 = document.getElementById('sim-node-2-title');
  const s2 = document.getElementById('sim-node-2-sub');
  const t3 = document.getElementById('sim-node-3-title');
  const s3 = document.getElementById('sim-node-3-sub');
  const t4 = document.getElementById('sim-node-4-title');
  const s4 = document.getElementById('sim-node-4-sub');

  if (!btnRun || !statusLog) return;

  const SCENARIOS = {
    automacao: {
      name: 'Automação de Processos & APIs',
      nodes: [
        { title: '1. Diagnóstico do Gargalo', sub: 'Mapeio processos manuais e tarefas repetitivas' },
        { title: '2. Desenvolvimento de Scripts & APIs', sub: 'Crio rotinas de automação e conecto serviços' },
        { title: '3. Agendamento & Monitoramento', sub: 'Configuro execuções contínuas com PM2/Linux' },
        { title: '4. Eliminação de Retrabalho', sub: 'Processos rodam automaticamente sem erros humanos' }
      ],
      logs: [
        '[Passo 1/4 - Diagnóstico] Sento com a equipe para mapear o fluxo manual, identificar onde o tempo é desperdiçado e desenhar a arquitetura técnica...',
        '[Passo 2/4 - Engenharia] Desenvolvo scripts em código limpo, realizo parsing de dados complexos e integro endpoints de APIs externas...',
        '[Passo 3/4 - Resiliência] Subo as automações em servidor Linux com gerenciamento PM2, tolerância a falhas e alertas de execução...',
        '[Passo 4/4 - Resultado] Automação 100% operacional! Centenas de horas poupadas para a empresa e zero erro operacional manual.'
      ]
    },
    plataforma: {
      name: 'SaaS & Plataformas Sob Medida',
      nodes: [
        { title: '1. Entendimento do Fluxo Comercial', sub: 'Mapeio funis, regras de negócio e permissões RBAC' },
        { title: '2. Arquitetura Full Stack', sub: 'Desenvolvo frontend intuitivo e backend escalável' },
        { title: '3. Banco Dedicado & Segurança', sub: 'Persistência isolada com PostgreSQL e autenticação JWT' },
        { title: '4. Esteira Operacional Ágil', sub: 'Equipe comercial operando com máxima velocidade' }
      ],
      logs: [
        '[Passo 1/4 - Diagnóstico] Alinho com a diretoria as regras de negócio, níveis de acesso (Admin/Supervisor/Operador) e SLAs de atendimento...',
        '[Passo 2/4 - Engenharia] Construo a aplicação full stack modular, priorizando uma interface sem atrito e APIs REST de resposta rápida...',
        '[Passo 3/4 - Resiliência] Configuro banco relacional dedicado por cliente, encriptação de senhas (Bcrypt) e isolamento total de dados...',
        '[Passo 4/4 - Resultado] Plataforma corporativa no ar! Resposta imediata para os clientes e visibilidade analítica para a gestão.'
      ]
    },
    infra: {
      name: 'Integrações em Nuvem & Infraestrutura',
      nodes: [
        { title: '1. Análise de Custo & Escalabilidade', sub: 'Avalio tráfego, volume de documentos e nuvem' },
        { title: '2. Conexão de APIs Cloud', sub: 'Integro Google Cloud (Drive v3), OAuth2 e webhooks' },
        { title: '3. Proxy Nginx & SSL TLS 1.3', sub: 'Configuro servidor Linux com certificados e rate limit' },
        { title: '4. Uptime 99.9% & Governança', sub: 'Infraestrutura blindada, rápida e de baixo custo' }
      ],
      logs: [
        '[Passo 1/4 - Diagnóstico] Mapeio o volume de arquivos e segurança exigida, projetando uma arquitetura de nuvem econômica e escalável...',
        '[Passo 2/4 - Engenharia] Desenvolvo integração com a Google Drive API v3 via OAuth2, upload assíncrono em chunks e validação de arquivos...',
        '[Passo 3/4 - Resiliência] Configuro proxy reverso Nginx com cabeçalhos de segurança (HSTS/CSP), SSL TLS 1.3 e portas de banco isoladas...',
        '[Passo 4/4 - Resultado] Infraestrutura de alta disponibilidade em produção! Uptime de 99.9% com armazenamento seguro em nuvem.'
      ]
    }
  };

  let activeScenario = 'automacao';
  let isRunning = false;

  function updateScenarioUI(key) {
    const data = SCENARIOS[key];
    if (!data) return;

    if (t1) t1.textContent = data.nodes[0].title;
    if (s1) s1.textContent = data.nodes[0].sub;
    if (t2) t2.textContent = data.nodes[1].title;
    if (s2) s2.textContent = data.nodes[1].sub;
    if (t3) t3.textContent = data.nodes[2].title;
    if (s3) s3.textContent = data.nodes[2].sub;
    if (t4) t4.textContent = data.nodes[3].title;
    if (s4) s4.textContent = data.nodes[3].sub;

    statusLog.textContent = `Desafio selecionado: ${data.name}. Clique em "Executar Minha Atuação" para simular...`;
  }

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isRunning) return;
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeScenario = btn.getAttribute('data-scenario') || 'automacao';
      updateScenarioUI(activeScenario);
    });
  });

  btnRun.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;

    btnRun.disabled = true;
    btnRun.style.opacity = '0.6';

    const currentData = SCENARIOS[activeScenario];

    statusLog.textContent = currentData.logs[0];
    n1?.classList.add('active-node');
    n2?.classList.remove('active-node');
    n3?.classList.remove('active-node');
    n4?.classList.remove('active-node');

    setTimeout(() => {
      statusLog.textContent = currentData.logs[1];
      n1?.classList.remove('active-node');
      n2?.classList.add('active-node');

      setTimeout(() => {
        statusLog.textContent = currentData.logs[2];
        n2?.classList.remove('active-node');
        n3?.classList.add('active-node');

        setTimeout(() => {
          statusLog.textContent = currentData.logs[3];
          n3?.classList.remove('active-node');
          n4?.classList.add('active-node');

          setTimeout(() => {
            btnRun.disabled = false;
            btnRun.style.opacity = '1';
            isRunning = false;
          }, 1200);
        }, 950);
      }, 950);
    }, 950);
  });
}

function initTerminal() {
  const terminalWindow = document.getElementById('terminal-window');
  const input = document.getElementById('terminal-cli-input');
  const history = document.getElementById('terminal-history');
  const output = document.getElementById('term-output');
  const form = document.getElementById('terminal-form');

  if (!input || !history || !output) return;

  terminalWindow?.addEventListener('click', (e) => {
    if (!e.target.closest('button') && !e.target.closest('.t-cmd')) {
      input.focus();
    }
  });

  const COMMANDS = {
    help: `Comandos disponíveis:
  whoami       - Informações sobre Jonathan Weber Sacramento Caldas
  skills       - Habilidades interpessoais, IA, automação e técnicas
  projects     - Lista dos principais sistemas desenvolvidos
  cat crm      - Detalhes da plataforma Matriz CRM Whitelabel
  cat scoutx   - Detalhes da plataforma ScoutX
  contact      - Dados de contato direto (e-mail, WhatsApp, LinkedIn)
  clear        - Limpa o histórico de comandos do terminal`,

    whoami: `Jonathan Weber Sacramento Caldas
Cargo: Analista de Processos e Tecnologia | Desenvolvedor de Software
Localização: Salvador, Bahia — Brasil
Perfil: Habilidade analítica para mapear gargalos de processos e desenvolver
soluções técnicas que aumentam a eficiência de times comerciais e operacionais.
Formação: SENAI CIMATEC (Técnico e Ford <Enter>) | UCSAL (Engenharia de Software)`,

    skills: `Habilidades em Destaque:
- Ponte Estratégica Negócio-Engenharia: Diálogo fluido com times comerciais e lideranças
- Resolução Pragmática de Problemas: Criação de sistemas orientados a ganho de tempo
- IA & Automação: Aplicação de inteligência de processos, scripts e rotinas inteligentes
- Empatia com o Usuário Final: Interfaces limpas com foco em produtividade diária
- Stack Técnica: Node.js, TypeScript, React, PostgreSQL, Docker, Linux VPS, Nginx, APIs Cloud`,

    projects: `Projetos de Destaque:
1. Atendimento CRM   - Plataforma Matriz Whitelabel Multi-Tenant (Duplo Funil SDR/Closer)
2. LF Promotora LP   - Landing Page Institucional & Captação Digital (lfpromotora.com.br)
3. ScoutX            - Plataforma de Prospecção & Inteligência de Dados (TypeScript & React)
4. Operações LF      - Sistema sob medida de automação comercial e rotinas de crédito
5. VPS & Cloud       - Infraestrutura dedicada Linux, cluster PM2 e cofre Google Drive API v3
Dica: digite "cat crm", "cat lf" ou "cat scoutx" para inspecionar os detalhes técnicos.`,

    'cat crm': `[Atendimento CRM] Matriz Whitelabel Multi-Tenant:
- Injeção dinâmica de identidade visual (/api/whitelabel/config)
- Bancos PostgreSQL isolados com pools dedicados por inquilino
- Separação entre qualificação de leads (SDR) e fechamento (Closer)
- Sustenta instâncias corporativas em produção ativa
- Status: Produção Corporativa Privada`,

    'cat lf': `[LF Promotora] Landing Page Institucional & Captação Digital:
- Site Oficial: https://lfpromotora.com.br/
- Desenvolvido em Vite + React com carregamento ultrarrápido (< 1s)
- Acessibilidade sênior: tipografia de alto contraste e fluxo intuitivo
- Simulador interativo de crédito e roteamento direto para consultores LF`,

    'cat scoutx': `[ScoutX] Inteligência de Dados & Prospecção:
- Desenvolvido em TypeScript estrito e arquitetura modular em React
- Busca e filtragem em tempo real de critérios corporativos
- Interface otimizada com renderização de alta densidade de dados
- Status: Operacional`,

    contact: `Informações de Contato Direto:
- E-mail: jonathansacramento57@gmail.com
- Telefone / WhatsApp: (71) 99741-3125
- LinkedIn: https://www.linkedin.com/in/weber-dev/
- GitHub: https://github.com/Webber03
- Salvador, Bahia`
  };

  const ALIASES = {
    ajuda: 'help',
    '?': 'help',
    sobre: 'whoami',
    bio: 'whoami',
    perfil: 'whoami',
    weber: 'whoami',
    jonathan: 'whoami',
    habilidades: 'skills',
    competencias: 'skills',
    stack: 'skills',
    ia: 'skills',
    ai: 'skills',
    projetos: 'projects',
    repos: 'projects',
    ls: 'projects',
    dir: 'projects',
    portfolio: 'projects',
    crm: 'cat crm',
    atendimento: 'cat crm',
    whitelabel: 'cat crm',
    lf: 'cat lf',
    lp: 'cat lf',
    promotora: 'cat lf',
    scoutx: 'cat scoutx',
    scout: 'cat scoutx',
    contato: 'contact',
    email: 'contact',
    whatsapp: 'contact',
    telefone: 'contact',
    linkedin: 'contact',
    github: 'contact',
    limpar: 'clear',
    cls: 'clear'
  };

  const commandHistory = [];
  let historyIndex = -1;

  function executeCommand(rawInput) {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;

    const lower = trimmed.toLowerCase();
    const resolvedCmd = ALIASES[lower] || lower;

    if (resolvedCmd === 'clear') {
      history.innerHTML = '';
      input.value = '';
      input.focus();
      return;
    }

    const block = document.createElement('div');
    block.className = 'terminal-output-block';

    const cmdLine = document.createElement('div');
    cmdLine.innerHTML = `<span style="color:#38bdf8;">weber@vps:~$</span> ${escapeHTML(trimmed)}`;
    block.appendChild(cmdLine);

    const res = document.createElement('pre');
    res.style.marginTop = '6px';
    res.style.marginBottom = '14px';
    res.style.fontFamily = 'inherit';
    res.style.whiteSpace = 'pre-wrap';
    res.style.color = '#e4e4e7';

    if (COMMANDS[resolvedCmd]) {
      res.textContent = COMMANDS[resolvedCmd];
    } else {
      res.textContent = `Comando não reconhecido: "${trimmed}". Digite "help" para ver os comandos disponíveis.`;
    }

    block.appendChild(res);
    history.appendChild(block);

    input.value = '';
    output.scrollTop = output.scrollHeight;
    input.focus();
  }

  function escapeHTML(str) {
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCommand(input.value);
    });
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        input.value = commandHistory[historyIndex] || '';
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        input.value = commandHistory[historyIndex] || '';
      } else {
        historyIndex = commandHistory.length;
        input.value = '';
      }
    }
  });

  document.querySelectorAll('.term-action-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) executeCommand(cmd);
    });
  });

  document.querySelectorAll('.t-cmd').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const cmd = el.getAttribute('data-cmd') || el.textContent;
      if (cmd) executeCommand(cmd);
    });
  });
}

function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');
  const overlays = document.querySelectorAll('.modal-overlay');

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
        targetModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(overlay => {
        if (overlay.classList.contains('active')) {
          closeModal(overlay);
        }
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initViewModeSelector();
  initSimulator();
  initTerminal();
  initModals();
});
