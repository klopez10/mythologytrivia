// The API Feed.
const getStuff = 'https://opentdb.com/api.php?amount=1&category=20&type=multiple';

// Show the Data.
const showStuff = (data) => {
    
  // Check the Data.  
  console.log(data);
  // Data Length.
  console.log(data.results.length);
  // Single Data Entry. 
  console.log(data.results[0]);
  
  // Single Data Entry Loop. 
  for (i=0; i < data.results.length; i++) {
    
    // Template.
    let template =
      `<h1>Mythology Trivia</h1>

      <main class="scene scene--card">
        <div class="card">
          <div class="card__face card__face--front">
            <section id="question">
              <p>${data.results[i].question}</p>
            </section>
          </div>
          <div class="card__face card__face--back">
            <section id="answer">
              <p>${data.results[i].correct_answer}</p>
            </section>
          </div>
        </div>
      </main>

      <section id="refresh">
        <a onClick="window.location.reload()">Next Question</a>
      </section>`;
    
      // Show Data Within Template.
      $('#app').append(template);
    
  } // End of Loop.
    
  var card = document.querySelector('.card');
  
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });

}; // End of 'showStuff' Function.

// JSON From API. 
$.getJSON( getStuff, showStuff);