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

           <section class="question">
            <p>${data.results[i].question}</p>
           </section>

           <section class="refresh">
            <a onClick="window.location.reload()">Next Question</a>
           </section>`; //Refresh Code Source. https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click.
    
      // Show Data Within Template.
      $('#app').append(template);
    
  } // End of Loop.
    
}; // End of 'showStuff' Function.

// JSON From API. 
$.getJSON( getStuff, showStuff);