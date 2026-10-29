/**
 * Jonathan Weber Sacramento Caldas — Portfolio Application
 * Clean Editorial Architecture
 * 
 * Modules:
 * 1. Web Audio Synthesizer (Sutil e elegante, com controle de silêncio)
 * 2. View Mode Switcher (Showcase / Simulador / Terminal)
 * 3. Architecture Flow Simulator (Animação de esteira em 4 nós)
 * 4. Embedded Unix CLI Terminal (help, whoami, skills, projects, contact, clear)
 * 5. Deep-Dive Modal System
 * 6. Copy-to-Clipboard Helper
 */

// ==========================================================================
// 1. Web Audio Synthesizer (Zero external dependencies)
// ==========================================================================

class AudioSynth {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initialized = true;
      }
    } catch (e) {
      this.muted = true;
    }
  }

  tick() {
    if (this.muted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }

  success() {
    if (this.muted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.setValueAtTime(660, this.ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
    } catch (e) {}
  }

  toggle() {
    this.muted = !this.muted;
    return this.muted;
  }
}

const sound = new AudioSynth();

// ==========================================================================
// 2. View Mode Selector (Showcase / Simulador / Terminal)
// ==========================================================================

function initViewModeSelector() {
  const modeButtons = document.querySelectorAll('.mode-btn');
  const simSection = document.getElementById('simulador-section');
  const termSection = document.getElementById('terminal-section');
  const heroSection = document.getElementById('hero');

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.init();
      sound.tick();

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
// 3. Audio Toggle Controller
// ==========================================================================

function initAudioToggle() {
  const audioBtn = document.getElementById('audio-toggle');
  if (!audioBtn) return;

  audioBtn.addEventListener('click', () => {
    sound.init();
    const isMuted = sound.toggle();
    audioBtn.style.opacity = isMuted ? '0.5' : '1';
    const label = audioBtn.querySelector('.audio-label');
    if (label) {
      label.textContent = isMuted ? 'Mudo' : 'Som';
    }
  });
}

// ==========================================================================
// 4. Interactive Flow Simulator
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
    sound.init();
    sound.tick();

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
      sound.tick();
      statusLog.textContent = '[2/4] Sanitizando CPF, validando telefones e aplicando LGPD...';
      n1?.classList.remove('active-node');
      n2?.classList.add('active-node');

      setTimeout(() => {
        // Step 3: Round Robin
        sound.tick();
        statusLog.textContent = '[3/4] Fila Round-Robin alocando SDR disponível no CRM...';
        n2?.classList.remove('active-node');
        n3?.classList.add('active-node');

        setTimeout(() => {
          // Step 4: Database Persistence
          sound.success();
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
// 5. Embedded Unix CLI Terminal
// ==========================================================================

function initTerminal() {
  const input = document.getElementById('terminal-cli-input');
  const output = document.getElementById('term-output');

  if (!input || !output) return;

  const COMMANDS = {
    help: `Comandos disponíveis:
  whoami       - Informações sobre Jonathan Weber Caldas
  skills       - Habilidades interpessoais e técnicas
  projects     - Lista dos principais sistemas desenvolvidos
  cat crm      - Detalhes da plataforma Matriz CRM Whitelabel
  cat scoutx   - Detalhes da plataforma ScoutX
  contact      - Dados de contato direto (e-mail, WhatsApp, LinkedIn)
  clear        - Limpa o console do terminal`,

    whoami: `Jonathan Weber Sacramento Caldas
Cargo: Analista de Processos e Tecnologia | Desenvolvedor de Software
Localização: Salvador, Bahia — Brasil
Perfil: Habilidade analítica para mapear gargalos de processos e desenvolver
soluções técnicas que aumentam a eficiência de times comerciais e operacionais.
Formação: SENAI CIMATEC (Técnico e Ford <Enter>) | UCSAL (Engenharia de Software)`,

    skills: `Habilidades em Destaque:
- Ponte Estratégica Negócio-Engenharia: Diálogo fluido com times comerciais e lideranças
- Resolução Pragmática de Problemas: Criação de soluções orientadas a ganho de tempo
- Empatia com o Usuário Final: Interfaces limpas com foco em produtividade diária
- Stack Técnica: Node.js, TypeScript, React, PostgreSQL, Docker, Linux VPS, Nginx, APIs Cloud`,

    projects: `Projetos de Destaque:
1. atendimento   - Plataforma Matriz CRM Whitelabel Multi-Tenant (Duplo Funil SDR/Closer)
2. ScoutX        - Plataforma de Prospecção & Inteligência de Dados (Live na Vercel)
3. Operações LF  - Sistema sob medida de automação comercial e rotinas de crédito
4. VPS & Cloud   - Infraestrutura dedicada Linux, cluster PM2 e cofre Google Drive API v3
Use "cat <nome>" para detalhes adicionais (ex: cat crm, cat scoutx).`,

    'cat crm': `[atendimento] Matriz CRM Whitelabel Multi-Tenant:
- Injeção dinâmica de identidade visual (/api/whitelabel/config)
- Bancos PostgreSQL isolados com pools dedicados
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

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = input.value.trim().toLowerCase();
      input.value = '';

      if (!rawCmd) return;
      sound.init();
      sound.tick();

      if (rawCmd === 'clear') {
        const promptRow = output.querySelector('.terminal-prompt-row');
        output.innerHTML = '';
        if (promptRow) output.appendChild(promptRow);
        return;
      }

      // Print command line
      const line = document.createElement('div');
      line.className = 'terminal-output-block';
      line.innerHTML = `<span style="color:#38bdf8;">weber@vps:~$</span> ${rawCmd}`;

      const res = document.createElement('pre');
      res.style.marginTop = '6px';
      res.style.marginBottom = '14px';
      res.style.fontFamily = 'inherit';
      res.style.whiteSpace = 'pre-wrap';
      res.style.color = '#e4e4e7';

      if (COMMANDS[rawCmd]) {
        res.textContent = COMMANDS[rawCmd];
      } else {
        res.textContent = `Comando não reconhecido: "${rawCmd}". Digite "help" para ver as opções.`;
      }

      line.appendChild(res);

      const promptRow = output.querySelector('.terminal-prompt-row');
      output.insertBefore(line, promptRow);
      output.scrollTop = output.scrollHeight;
    }
  });
}

// ==========================================================================
// 6. Deep-Dive Modal System
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
        sound.init();
        sound.tick();
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
// 7. Copy-to-Clipboard Utility
// ==========================================================================

function initCopyEmail() {
  const btnCopy = document.getElementById('btn-copy-email');
  if (!btnCopy) return;

  btnCopy.addEventListener('click', () => {
    const email = 'jonathansacramento57@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      sound.init();
      sound.success();
      const orig = btnCopy.textContent;
      btnCopy.textContent = 'Copiado!';
      btnCopy.style.background = '#059669';
      btnCopy.style.color = '#ffffff';

      setTimeout(() => {
        btnCopy.textContent = orig;
        btnCopy.style.background = '';
        btnCopy.style.color = '';
      }, 2000);
    });
  });
}

// ==========================================================================
// Initialize on DOM Ready
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initViewModeSelector();
  initAudioToggle();
  initSimulator();
  initTerminal();
  initModals();
  initCopyEmail();
});
