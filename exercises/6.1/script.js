const states = document.getElementById('estado-dropdown');

function createStates() {
    const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let i = 0; i < stateOptions.length; i += 1) {
      const createOptions = document.createElement('option');
      states.appendChild(createOptions).innerText = stateOptions[i];
      states.appendChild(createOptions).value = stateOptions[i];
    }
  }

createStates();

const cleanButton = document.getElementById('limpar');

function cleanAll() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
}


const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

