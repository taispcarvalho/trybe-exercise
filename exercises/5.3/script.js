function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDays() {
      const dezListSelected = document.querySelector('#days');
  
      for (let i = 0; i < dezDaysList.length; i += 1) {
          const dezDays = dezDaysList[i];
          const dezDayItens = document.createElement('li');
              
      if (dezDays === 24 | dezDays === 31){
          dezDayItens.className = 'day holiday';
          dezDayItens.innerText = dezDays;
          dezListSelected.appendChild(dezDayItens);
      } else if (dezDays === 4 | dezDays === 11 | dezDays === 18) {
        dezDayItens.className = 'day friday';
          dezDayItens.innerText = dezDays;
          dezListSelected.appendChild(dezDayItens);
      } else if (dezDays === 25) {
        dezDayItens.className = 'day holiday friday'
          dezDayItens.innerText = dezDays;
          dezListSelected.appendChild(dezDayItens);
      } else {
        dezDayItens.className = 'day';
          dezDayItens.innerText = dezDays;
          dezListSelected.appendChild(dezDayItens);
      }; 
    };  
  };
     
  createDays();

   // 2
   function holidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');

    newButton.innerText = buttonName;
    newButton.id = 'btn-holiday';
    buttonContainer.appendChild(newButton);
   };
   
   holidayButton('Feriado');

   // 3
function clickButtonHolidays() {
 let holidayButton = document.querySelector('#btn-holiday');
 let holidayDays = document.querySelectorAll('.holiday');
 let newColor = 'rgb(238,238,238)';
 let whiteColor = 'white';

 holidayButton.addEventListener('click', (event) => {
   for (let i = 0; i < holidayDays.length; i += 1) {
     if (holidayDays[i].style.backgroundColor === whiteColor) {
       holidayDays[i].style.backgroundColor = newColor;
     } else {
       holidayDays[i].style.backgroundColor = whiteColor;
     }
   }
 })
};

clickButtonHolidays();


// 4
function fridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');

    newButton.innerText = buttonName;
    newButton.id = 'btn-friday';
    buttonContainer.appendChild(newButton);
};

fridayButton('Sexta-Feira');

// 5
function clickFridayButton(arrayFridays) {
    let fridayButton = document.querySelector('#btn-friday');
    let fridayDays = document.querySelectorAll('.friday');
    let newText = 'SEXTA';

    fridayButton.addEventListener('click', function() {
        for (let i = 0; i < fridayDays.length; i += 1) {
            if (fridayDays[i].innerText !== newText) {
                fridayDays[i].innerText = newText;
            } else {
                fridayDays[i].innerText = arrayFridays[i];
            }
        }
    })
}

clickFridayButton([ 4, 11, 18, 25 ]);




