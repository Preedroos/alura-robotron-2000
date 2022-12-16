const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

const botoes = document.querySelectorAll('[data-operacao]');

botoes.forEach(() => {
  addEventListener('click', operacao);
});

function operacao(event) {
  const botao = event.target;
  const idPeca = `#${botao.attributes['data-operacao'].value}`;
  botao.attributes['data-value'].value === '+'
    ? somar(idPeca)
    : subtrair(idPeca);
  atualizarEstatisticas();
}

function somar(id) {
  const peca = document.querySelector(id);
  peca.value = parseInt(peca.value) + 1;
}

function subtrair(id) {
  const peca = document.querySelector(id);
  peca.value = parseInt(peca.value) - 1;
}

const estatisticas = document.querySelectorAll('.estatistica-numero');
const contadores = document.querySelectorAll('.controle-contador');

function atualizarEstatisticas() {
  estatisticas.forEach(e => {
    let soma = 0;
    contadores.forEach(c => {
      if (c.value != 0) {
        soma += pecas[c.id][e.id] * parseInt(c.value);
      }
    });
    e.textContent = soma;
  });
}
