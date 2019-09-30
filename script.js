

function calculateSunsign(value) {
  console.log(value);
  let sunsign = 'placeholder';
  if (value <= 2.18 && value >= 1.20) {
    sunsign = 'Aquarius';
  }
  else if (value <= 3.2 && value >= 2.19) {
    sunsign = 'Pisces';
  }
  else if (value <= 4.19 && value >= 3.21) {
    sunsign = 'Aries';
  }
  else if (value <= 5.2 && value >= 4.2) {
    sunsign = 'Taurus';
  }
  else if (value <= 6.2 && value >= 5.21) {
    sunsign = 'Gemini';
  }
  else if (value <= 7.22 && value >= 6.21) {
    sunsign = 'Cancer';
  }
  else if (value <= 8.22 && value >= 7.23) {
    sunsign = 'Leo'; 
  }
  else if (value <= 9.22 && value >= 8.23) {
    sunsign = 'Virgo';
  }
  else if (value <= 10.22 && value >= 9.23) {
    sunsign = 'Libra';
  }
  else if (value <= 11.21 && value >= 10.23) {
    sunsign = 'Scorpio';
  }
  else if (value <= 12.21 && value >= 11.22) {
    sunsign = 'Sagittarius';
  }
  else {
    sunsign = 'Capricorn';
  }

  console.log(`${sunsign}`);
  nextForm(sunsign);
}

function watchFormTwo() {
  $('.js-horoscope').submit(event => {
    event.preventDefault();
    const sunsign = $('#js-sunsign').val();
    const day = $('#js-day').val();
    getHoroscope(sunsign, day);
  })
}

 function nextForm(sunsign) {
  This will create the content to show the next form, with sunsign, day, and submit PushSubscriptionOptions. 
}

function skipFormOne() {
  This will run if the skip button is chosen, rather than the submit button. 
  The page will reload ; 
  nextForm();
}

function watchFormOne() {
  $('.js-birth-date').submit(event => {
    event.preventDefault();
    const month = $('#js-month').val();
    const date = $('#js-date').val();
    let signValue = `${month}.${date}`
    calculateSunsign(signValue);
  });
}

$(watchFormOne);
