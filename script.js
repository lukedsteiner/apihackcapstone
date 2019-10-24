let sunsign = 'aquarius';
let symbol = 'https://www.astrology-zodiac-signs.com/images/aquarius.jpg';
let month = '';
let date = '';
let people = {};

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
  <button type="button" id="clearButton">Restart?</button>`
  );
  watchClear();
}

function calculateSunsign(value) {
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
  getBirthdays(month, date);
}

function getHoroscope(sunsign, query) {
  const url= `https://aztro.sameerkumar.website?sign=${sunsign}&day=${query}`

  fetch(url, {
    method: 'post'
  })
    .then(response => response.json())
    .then(json => {
    const compatibility = json.compatibility;
    const mood = json.mood;
    const lucky = json.lucky_number;
    const description = json.description;
    createContent(compatibility, mood, lucky, description)
});
}

function getBirthdays(month, date) {
  const url2 = `https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date/${month}/${date}`
  fetch(url2, {
    method: 'get'
  })
    .then(response => response.json())
    .then(json => {
    const births = json.data.Births;
    for (i=0; i<5; i++) {
      people[i] = births[i].text;
      console.log(people)
    };
});
console.log(people);
nextForm(sunsign, people);
}

function watchClear() {
  $('.content-container').on('click', '#clearButton', function(event) {
    $('.content-container').empty();
   $('.content-container').append(
     `<form class="js-birth-date">
     <fieldset>
         <legend>Tell us your birthday, and find your sunsign!</legend>
         <p>
         <select id = "js-month">
                 <option value = "1">January</option>
                 <option value = "2">February</option>
                 <option value = "3">March</option>
                 <option value = "4">April</option>
                 <option value = "5">May</option>
                 <option value = "6">June</option>
                 <option value = "7">July</option>
                 <option value = "8">August</option>
                 <option value = "9">September</option>
                 <option value = "10">October</option>
                 <option value = "11">November</option>
                 <option value = "12">December</option>
         </select>
         <select id = "js-date">
                 <option value = "01">1</option>
                 <option value = "02">2</option>
                 <option value = "03">3</option>
                 <option value = "04">4</option>
                 <option value = "05">5</option>
                 <option value = "06">6</option>
                 <option value = "07">7</option>
                 <option value = "08">8</option>
                 <option value = "09">9</option>
                 <option value = "10">10</option>
                 <option value = "11">11</option>
                 <option value = "12">12</option>
                 <option value = "13">13</option>
                 <option value = "14">14</option>
                 <option value = "15">15</option>
                 <option value = "16">16</option>
                 <option value = "17">17</option>
                 <option value = "18">18</option>
                 <option value = "19">19</option>
                 <option value = "20">20</option>
                 <option value = "21">21</option>
                 <option value = "22">22</option>
                 <option value = "23">23</option>
                 <option value = "24">24</option>
                 <option value = "25">25</option>
                 <option value = "26">26</option>
                 <option value = "27">27</option>
                 <option value = "28">28</option>
                 <option value = "29">29</option>
                 <option value = "30">30</option>
                 <option value = "31">31</option>
         </select>
         <input type="submit" value="Submit">
         </p>
       </form>
       </fieldset>`);
       $(`#js-date option[value="${date}"]`).attr("selected",true);
       $(`#js-month option[value="${month}"]`).attr("selected",true);
    watchFormOne();
})}

function watchFormTwo() {
  $('.js-horoscope').submit(event => {
    event.preventDefault();
    sunsign = $('#js-sunsign').val().toLowerCase();
    let day = $('#js-query').val();
    getHoroscope(sunsign, day);
  })
}

 function nextForm(sunsign, people) {
   $('.content-container').empty();
   $('.content-container').append(
     `<section class='sign-indicator'>The date (if selected) is within the range of the ${sunsign} sign</section>
     <section class='famous-people'>These famous individuals share that same birth date:` +people+ `</section>
     <form class="js-horoscope">
     <fieldset>
     <legend>Choose your Sunsign, and pick which day's horoscope you would like!</legend>
     <p>
     <label for="js-sunsign">
      Sunsign
    </label>
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
     <label for="js-query">
     Which day's horoscope?
     </label>
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



function watchFormOne() {
  $('.js-birth-date').submit(event => {
    event.preventDefault();
    month = $('#js-month').val();
    date = $('#js-date').val();
    let signValue = `${month}.${date}`
    calculateSunsign(signValue);
  });
}

$(watchFormOne);
