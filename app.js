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
    genai: {
      name: 'IA & Extração de Dados',
      nodes: [
        { title: '1. Leitura de Dados', sub: 'Recebimento de mensagens, contratos e PDFs para extração das informações-chave' },
        { title: '2. Regras do Negócio', sub: 'Aplicação de diretrizes e regras comerciais para orientar as decisões da IA' },
        { title: '3. Processamento & Validação', sub: 'Chamada aos modelos de IA com checagem rígida contra erros antes de salvar' },
        { title: '4. Integração no Sistema', sub: 'Inserção automática no CRM ou banco de dados, poupando tempo da equipe' }
      ],
      logs: [
        '[Passo 1/4 - Leitura de Dados] Recebo documentos e textos brutos, organizando as informações essenciais em formato limpo...',
        '[Passo 2/4 - Regras de Negócio] Injeto o contexto e as regras comerciais da empresa para garantir respostas precisas e seguras...',
        '[Passo 3/4 - Processamento & Validação] Envio para o modelo de IA e valido o formato da resposta, prevenindo dados incorretos...',
        '[Passo 4/4 - Integração Final] Dados aprovados e inseridos no sistema automaticamente, sem retrabalho manual para a equipe.'
      ]
    },
    automacao: {
      name: 'Automação de Tarefas',
      nodes: [
        { title: '1. Mapeamento da Rotina', sub: 'Identificação de onde a equipe perde tempo com tarefas manuais e repetitivas' },
        { title: '2. Criação do Script & APIs', sub: 'Desenvolvimento do código e conexão direta entre os sistemas da empresa' },
        { title: '3. Execução Contínua', sub: 'Configuração no servidor Linux com alertas automáticos em caso de falha' },
        { title: '4. Economia de Tempo', sub: 'Processos finalizados em segundos, sem falhas humanas ou retrabalho' }
      ],
      logs: [
        '[Passo 1/4 - Diagnóstico] Converso com o time para entender a rotina manual e mapear onde o tempo é desperdiçado...',
        '[Passo 2/4 - Desenvolvimento] Crio scripts rápidos e integro os sistemas via APIs para que conversem entre si sem atrito...',
        '[Passo 3/4 - Servidor] Subo a automação no servidor para rodar 24/7 com monitoramento contínuo e tolerância a falhas...',
        '[Passo 4/4 - Resultado] Rotina 100% automatizada! A empresa poupa dezenas de horas semanais com dados sempre em dia.'
      ]
    },
    plataforma: {
      name: 'Sistemas Sob Medida',
      nodes: [
        { title: '1. Entendimento do Fluxo', sub: 'Definição de regras comerciais, níveis de acesso e necessidades dos usuários' },
        { title: '2. Construção da Aplicação', sub: 'Desenvolvimento de telas intuitivas e uma estrutura de código rápida e estável' },
        { title: '3. Banco Dedicado & Proteção', sub: 'Banco de dados isolado (PostgreSQL) com senhas e dados totalmente criptografados' },
        { title: '4. Operação Ágil', sub: 'Equipe trabalhando com velocidade e relatórios analíticos em tempo real' }
      ],
      logs: [
        '[Passo 1/4 - Alinhamento] Mapeio quem usará o sistema (operador, gestor, admin) e quais etapas aceleram a rotina comercial...',
        '[Passo 2/4 - Engenharia Full Stack] Construo uma interface limpa e APIs rápidas que respondem de imediato, sem travamentos...',
        '[Passo 3/4 - Segurança & Banco] Isolo o banco de dados dedicado com PostgreSQL e aplico criptografia para proteger dados sensíveis...',
        '[Passo 4/4 - Sistema no Ar] Plataforma entregue em produção! Atendimento mais rápido aos clientes e controle total para a gestão.'
      ]
    },
    infra: {
      name: 'Nuvem & Servidores',
      nodes: [
        { title: '1. Planejamento de Custos', sub: 'Análise de tráfego e armazenamento para estruturar uma nuvem econômica' },
        { title: '2. Conexão com Serviços Cloud', sub: 'Conexão segura com Google Drive, disparos de email e webhooks externos' },
        { title: '3. Servidor & Certificado SSL', sub: 'Servidor Linux com cadeado de segurança (HTTPS) e bloqueio a acessos suspeitos' },
        { title: '4. Alta Estabilidade (99,9%)', sub: 'Sistema sempre online, com carregamento veloz e baixo custo de manutenção' }
      ],
      logs: [
        '[Passo 1/4 - Diagnóstico Cloud] Analiso o volume de acessos e arquivos para desenhar uma estrutura de nuvem enxuta e econômica...',
        '[Passo 2/4 - Conexões Externas] Conecto ferramentas em nuvem (como Google Cloud) usando autenticação segura e envio assíncrono...',
        '[Passo 3/4 - Blindagem do Servidor] Configuro o servidor Linux com Nginx, certificados SSL automáticos e proteção de portas...',
        '[Passo 4/4 - Alta Disponibilidade] Servidor 99,9% estável no ar! Navegação instantânea, arquivos seguros e custo sob controle.'
      ]
    }
  };

  let activeScenario = 'genai';
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

    statusLog.textContent = `Cenário selecionado: ${data.name}. Clique em "Executar Demonstração" para simular...`;
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

    ai: `Engenharia de Software & IA Aplicada ao Negócio:
- Foco: Construir software robusto que utiliza APIs de IA e LLMs para resolver gargalos reais de negócio
- Padrões Técnicos: Extração estruturada (JSON Schema), Function Calling, automação de fluxos com APIs modernas
- Rigor de Engenharia: Validação estrita de schemas, tratamento de exceções, observabilidade de latência e custo
- Impacto Prático: Redução drástica de tempo operacional em análise de documentos e rotinas repetitivas
- Stack: TypeScript, Node.js, Python, APIs de IA (OpenAI, Gemini, Anthropic), PostgreSQL, Docker, Linux VPS
- Dica: digite "cat genai" ou "cat crm" para detalhes arquiteturais específicos.`,

    projects: `Projetos de Destaque:
1. Automação com IA   - Extração Estruturada & Processos com LLMs (IA Aplicada)
2. Atendimento CRM   - Plataforma Matriz Whitelabel Multi-Tenant (Duplo Funil SDR/Closer)
3. LF Promotora LP   - Landing Page Institucional & Captação Digital (lfpromotora.com.br)
4. ScoutX            - Plataforma de Prospecção & Inteligência de Dados (TypeScript & React)
5. Operações LF      - Sistema sob medida de automação comercial e rotinas de crédito
6. VPS & Cloud       - Infraestrutura dedicada Linux, cluster PM2 e cofre Google Drive API v3
Dica: digite "cat genai", "cat crm", "cat lf" ou "cat scoutx" para inspecionar os detalhes técnicos.`,

    'cat genai': `[Automação com IA] Extração Estruturada & Integração de Modelos de Linguagem:
- Ingestão de documentos contratuais e extração determinística via Function Calling
- Injeção de contexto e validação estrita com JSON Schema para evitar inconsistências
- Conexão direta com APIs corporativas e bancos de dados relacionais
- Status: Operacional em Produção`,

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
    ia: 'ai',
    ai: 'ai',
    genai: 'ai',
    rag: 'ai',
    llm: 'ai',
    agentes: 'ai',
    agent: 'ai',
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
