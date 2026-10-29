/**
 * Jonathan Weber Sacramento Caldas — Portfolio Application
 * Clean Editorial Architecture
 * 
 * Modules:
 * 1. View Mode Switcher (Showcase / Simulador / Terminal)
 * 2. Architecture Flow Simulator (Animação de esteira em 4 nós)
 * 3. Embedded Unix CLI Terminal (help, whoami, skills, projects, contact, clear)
 * 4. Deep-Dive Modal System
 */

// ==========================================================================
// 1. View Mode Selector (Showcase / Simulador / Terminal)
// ==========================================================================

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

// ==========================================================================
// 2. Interactive Flow Simulator
// ==========================================================================

function initSimulator() {
  const btnRun = document.getElementById('btn-run-sim');
  const statusLog = document.getElementById('sim-status-log');
  const n1 = document.getElementById('sim-node-1');
  const n2 = document.getElementById('sim-node-2');
  const n3 = document.getElementById('sim-node-3');
  const n4 = document.getElementById('sim-node-4');

  if (!btnRun || !statusLog) return;

  let isRunning = false;

  btnRun.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;

    btnRun.disabled = true;
    btnRun.style.opacity = '0.6';

    // Step 1: Input
    statusLog.textContent = '[1/4] Lead recebido via canal de entrada...';
    n1?.classList.add('active-node');
    n2?.classList.remove('active-node');
    n3?.classList.remove('active-node');
    n4?.classList.remove('active-node');

    setTimeout(() => {
      // Step 2: Validation
      statusLog.textContent = '[2/4] Sanitizando CPF, validando telefones e aplicando LGPD...';
      n1?.classList.remove('active-node');
      n2?.classList.add('active-node');

      setTimeout(() => {
        // Step 3: Round Robin
        statusLog.textContent = '[3/4] Fila Round-Robin alocando SDR disponível no CRM...';
        n2?.classList.remove('active-node');
        n3?.classList.add('active-node');

        setTimeout(() => {
          // Step 4: Database Persistence
          statusLog.textContent = '[4/4] Gravado no banco PostgreSQL com sucesso. Transação concluída!';
          n3?.classList.remove('active-node');
          n4?.classList.add('active-node');

          setTimeout(() => {
            btnRun.disabled = false;
            btnRun.style.opacity = '1';
            isRunning = false;
          }, 1200);
        }, 800);
      }, 800);
    }, 800);
  });
}

// ==========================================================================
// 3. Embedded Unix CLI Terminal
// ==========================================================================

function initTerminal() {
  const terminalWindow = document.getElementById('terminal-window');
  const input = document.getElementById('terminal-cli-input');
  const history = document.getElementById('terminal-history');
  const output = document.getElementById('term-output');
  const form = document.getElementById('terminal-form');

  if (!input || !history || !output) return;

  // Clicking anywhere on the terminal window immediately focuses the input!
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
2. ScoutX            - Plataforma de Prospecção & Inteligência de Dados (Live na Vercel)
3. Operações LF      - Sistema sob medida de automação comercial e rotinas de crédito
4. VPS & Cloud       - Infraestrutura dedicada Linux, cluster PM2 e cofre Google Drive API v3
Dica: digite "cat crm" ou "cat scoutx" para inspecionar os detalhes técnicos.`,

    'cat crm': `[atendimento] Matriz CRM Whitelabel Multi-Tenant:
- Injeção dinâmica de identidade visual (/api/whitelabel/config)
- Bancos PostgreSQL isolados com pools dedicados por inquilino
- Separação entre qualificação de leads (SDR) e fechamento (Closer)
- Sustenta instâncias em produção em escritórios jurídicos e financeiras
Repositório: https://github.com/Webber03/atendimento`,

    'cat scoutx': `[ScoutX] Inteligência de Dados & Prospecção:
- Desenvolvido em TypeScript e React moderno
- Busca e filtragem em tempo real de critérios corporativos
- Publicado em produção na nuvem: https://scoutx-final.vercel.app
Repositório: https://github.com/Webber03/Scoutx-Final`,

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

  // Handle Form Submit (Both desktop Enter and mobile virtual keyboards)
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCommand(input.value);
    });
  }

  // Keyboard navigation for history (Up/Down arrows)
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

  // Action chips in header
  document.querySelectorAll('.term-action-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) executeCommand(cmd);
    });
  });

  // Clickable command triggers in text
  document.querySelectorAll('.t-cmd').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const cmd = el.getAttribute('data-cmd') || el.textContent;
      if (cmd) executeCommand(cmd);
    });
  });
}

// ==========================================================================
// 4. Deep-Dive Modal System
// ==========================================================================

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

// ==========================================================================
// Initialize on DOM Ready
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initViewModeSelector();
  initSimulator();
  initTerminal();
  initModals();
});
