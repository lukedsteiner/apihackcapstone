

function calculateSunsign(value) {
  console.log(value);
  typeof value;
  if (value <= 2.18 && value >= 1.20) {
    const sunsign = 'Aquarius';
  }
  else if (value <= 3.2 && value >= 2.19) {
    let sunsign = 'Pisces';
  }
  else if (value <= 4.19 && value >= 3.21) {
    let sunsign = 'Aries';
  }
  else if (value <= 5.2 && value >= 4.2) {
    let sunsign = 'Taurus';
  }
  else if (value <= 6.2 && value >= 5.21) {
    let sunsign = 'Gemini';
  }
  else if (value <= 7.22 && value >= 6.21) {
    let sunsign = 'Cancer';
  }
  else if (value <= 8.22 && value >= 7.23) {
    let sunsign = 'Leo'; 
  }
  else if (value <= 9.22 && value >= 8.23) {
    let sunsign = 'Virgo';
  }
  else if (value <= 10.22 && value >= 9.23) {
    let sunsign = 'Libra';
  }
  else if (value <= 11.21 && value >= 10.23) {
    let sunsign = 'Scorpio';
  }
  else if (value <= 12.21 && value >= 11.22) {
    let sunsign = 'Sagittarius';
  }
  else {
    let sunsign = 'Capricorn';
  }

  console.log(sunsign);
  // nextForm(sunsign)
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
