function calculoAbatimentoConta() {
  const valorSc = parseFloat(document.querySelector('#scValue').value.replace(',', '.'));
  const divida = parseFloat(document.querySelector('#account').value.replace(',', '.'));

  const scValue = valorSc - (valorSc * 0.015);
  const account = divida;

  console.log('Valor inicial do saco: ' + scValue);
  console.log('Valor da dívida: ' + account);

  const qtdSC = Math.ceil(account / scValue * 100) / 100;
  const qtdKG = Math.ceil(qtdSC * 60);
  const qtdSCConvert = qtdKG / 60;
  const payValue = qtdSCConvert * scValue;

  console.log('Valor final dos sacos: ' + qtdSCConvert);
  console.log('Valor das quantidades de sacos: ' + qtdSC);
  console.log('Quantidade de quilos: ' + qtdKG);

  document.querySelector('#answerSC').innerHTML = formatarNumero(qtdSCConvert.toFixed(2));
  document.querySelector('#answerKG').innerHTML = formatarNumero(qtdKG);
  document.querySelector('#answerValue').innerHTML = formatarNumero(payValue.toFixed(2));
}

function formatarNumero(numero) {
  const partes = numero.toString().split('.');
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return partes.join(',');
}

// Evento de escuta de teclado
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calculoAbatimentoConta();
  }
});

