
function createContent(compatibility, mood, lucky, description) {
  $('.content-container').empty();
  $('.content-container').append(
  `<h2>Description:</h2>
  <section class="description">${description}</section>
  <h3>Compatibility</h3>
  <section class="compatibility">${compatibility}</section>
  <h3>Mood Forecast</h3>
  <section class="mood">${mood}</section>
  <h3>Lucky Number</h3>
  <section class="lucky number">${lucky}</section>
  <button type="button" id="restartButton">Restart?</button>`
  );
  watchRestart();
}

function calculateSunsign(value) {
  console.log(value);
  let sunsign = 'placeholder';
  let symbol = 'placeholder';
  if (value <= 2.18 && value >= 1.20) {
    sunsign = 'Aquarius';
    symbol = 'https://www.astrology-zodiac-signs.com/images/aquarius.jpg'
  }
  else if (value <= 3.2 && value >= 2.19) {
    sunsign = 'Pisces';
    symbol = 'https://www.astrology-zodiac-signs.com/images/pisces.jpg'
  }
  else if (value <= 4.19 && value >= 3.21) {
    sunsign = 'Aries';
    symbol = 'https://www.astrology-zodiac-signs.com/images/aries.jpg'
  }
  else if (value <= 5.2 && value >= 4.2) {
    sunsign = 'Taurus';
    symbol = 'https://www.astrology-zodiac-signs.com/images/taurus.jpg'
  }
  else if (value <= 6.2 && value >= 5.21) {
    sunsign = 'Gemini';
    symbol = 'https://www.astrology-zodiac-signs.com/images/gemini.jpg'
  }
  else if (value <= 7.22 && value >= 6.21) {
    sunsign = 'Cancer';
    symbol ='https://www.astrology-zodiac-signs.com/images/cancer.jpg'
  }
  else if (value <= 8.22 && value >= 7.23) {
    sunsign = 'Leo'; 
    symbol = 'https://www.astrology-zodiac-signs.com/images/leo.jpg'
  }
  else if (value <= 9.22 && value >= 8.23) {
    sunsign = 'Virgo';
    symbol = 'https://www.astrology-zodiac-signs.com/images/virgo.jpg'
  }
  else if (value <= 10.22 && value >= 9.23) {
    sunsign = 'Libra';
    symbol = 'https://www.astrology-zodiac-signs.com/images/libra.jpg'
  }
  else if (value <= 11.21 && value >= 10.23) {
    sunsign = 'Scorpio';
    symbol = 'https://www.astrology-zodiac-signs.com/images/scorpio.jpg'
  }
  else if (value <= 12.21 && value >= 11.22) {
    sunsign = 'Sagittarius';
    symbol = 'https://www.astrology-zodiac-signs.com/images/sagittarius.jpg'
  }
  else {
    sunsign = 'Capricorn';
    symbol = 'https://www.astrology-zodiac-signs.com/images/capricorn.jpg'
  }

  console.log(`${sunsign}`);
  nextForm(sunsign);
}

function getHoroscope(sunsign, query) {
  const url = `https://aztro.sameerkumar.website?sign=${sunsign}&day=${query}`
  console.log(url);

  fetch(url, {
    method: 'post'
  })
    .then(response => response.json())
    .then(json => {
    const compatibility = json.compatibility;
    const mood = json.mood;
    const lucky = json.lucky_number;
    const description = json.description;
    console.log(description);
    createContent(compatibility, mood, lucky, description)
});
}

function watchRestart() {
  $('.content-container').on('click', '#restartButton', function(event) {
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
   </fieldset>
   <p id="js-error-message" class="error-message"></p>`
  );
  watchFormTwo();
})
}

function watchFormTwo() {
  $('.js-horoscope').submit(event => {
    event.preventDefault();
    let sunsign = $('#js-sunsign').val().toLowerCase();
    let day = $('#js-query').val();
    getHoroscope(sunsign, day);
  })
}

 function nextForm(sunsign) {
   $('.content-container').empty();
   $('.content-container').append(
     `<section class='sign-indicator'>The date (if selected) is within the range of the ${sunsign} sign</section>
     <form class="js-horoscope">
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
   </fieldset>
   <p id="js-error-message" class="error-message"></p>`
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
