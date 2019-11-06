"use strict";
//These hold the values so that these are preloaded when resetting//
let month = '';
let date = '';
let sunsign = '';


//This creates the final page, in which the horoscope lives//
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

//This takes the date input value and assigns a sunsign using the ranges/if statements//
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
  nextForm();
}

//takes the sunsign and the date inputs and grabs information from the horoscopes API//
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

//Takes the birthdate provided and pulls data//
function getBirthdays(month, date) {
  const url2 = `https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date/${month}/${date}`
  fetch(url2, {
    method: 'get'
  })
    .then(response => response.json())
    .then(json => {
//Creates a births value, and a names object. The .text array in the json is then iterated over to push the first 5 values into the object//
    const births = json.data.Births;
    let namesList = {};
    for (let i=0; i<5; i++) {
      namesList[i] = births[i].text;
    };
  //creates a new variable that is an array of the list of names, then pushes those names as list items into the DOM//
    let names = Object.values(namesList);
    $('.loader').remove();
    for (let i=0; i<5; i++) {
      $('.names').append('<li>'+names[i]+'</li>');
    }
});
}

//Watches the clear button, which if used, repushes the original form//
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

//Watches the "horoscope" form and sets the sunsign and day variables, before passing them to the API function//
function watchFormTwo() {
  $('.js-horoscope').submit(event => {
    event.preventDefault();
    sunsign = $('#js-sunsign').val().toLowerCase();
    let day = $('#js-query').val();
    getHoroscope(sunsign, day);
  })
}

//Upon sending the date, this creates the horoscopes form, and creates the unordered list//
 function nextForm() {
   $('.content-container').empty();
   $('.content-container').append(
     `<section class='sign-indicator'>That date is within the range of the ${sunsign} sign</section>
     <section class='famous-people'>These figures share that birth date:  <section class="loader"></section></section>
     <ul class="names">
     </ul>
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
  getBirthdays(month, date);
  watchFormTwo();
}


//This watches the original form and sets the variables for month and day. Subsequently, it creates a single numeric value for the sunsign script to use in its ranges//
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
