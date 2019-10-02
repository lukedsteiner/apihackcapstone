


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
    const day = $('#js-query').val();
    getHoroscope(sunsign, day);
  })
}

 function nextForm(sunsign) {
   $('.content-container').empty();
   $('.content-container').append(
     `<form class="js-horoscope">
     <fieldset>
     <legend>Choose your Sunsign, and pick which day's horoscope you would like!</legend>
     <p>
     <select id = "js-sunsign">
             <option value = "Aquarius">Aquarius</option>
             <option value = "Pisces">Pisces</option>
             <option value = "Aries">Aries</option>
             <option value = "Taurus">Taurus</option>
             <option value = "Gemini">Gemini</option>
             <option value = "Cancer">Cancer</option>
             <option value = "Leo">Leo</option>
             <option value = "Virgo">Virgo</option>
             <option value = "Libra">Libra</option>
             <option value = "Scorpio">Scorpio</option>
             <option value = "Sagittarius">Sagittarius</option>
             <option value = "Capricorn">Capricorn</option>
     </select>
     <select id = "js-query">
             <option value = "yesterday">Yesterday</option>
             <option value = "today">Today</option>
             <option value = "tomorrow">Tomorrow</option>

     </select>
     <input type="submit" value="Submit">
     </p>
   </form>
   </fieldset>`
   )
  $(`#js-sunsign option[value="${sunsign}"]`).attr("selected",true);
  $('#js-query option[value="today"]').attr("selected",true);
  watchFormTwo();
}

function skipFormOne() {
  $('.js-birth-date').on('click', '#skipButton', function(event) {
  nextForm('Aquarius');
  });
};


function watchFormOne() {
  $('.js-birth-date').submit(event => {
    event.preventDefault();
    const month = $('#js-month').val();
    const date = $('#js-date').val();
    let signValue = `${month}.${date}`
    calculateSunsign(signValue);
  });
  skipFormOne();
}

$(watchFormOne);
