const searchInput =
  document.getElementById("searchInput");

const games =
  document.querySelectorAll(".game-card");

const gameCount =
  document.getElementById("gameCount");

const noResults =
  document.getElementById("noResults");

const message =
  document.getElementById("message");

const closeBtn =
  document.getElementById("closeBtn");



/* SEARCH */

function searchGames() {

  const search =
    searchInput.value
      .toLowerCase()
      .trim();

  let visibleGames = 0;


  games.forEach(function(game) {

    const name =
      game.dataset.name.toLowerCase();


    if (
      name.includes(search)
      || search === ""
    ) {

      game.style.display = "";

      visibleGames++;

    } else {

      game.style.display = "none";

    }

  });


  gameCount.textContent =
    visibleGames +
    (visibleGames === 1
      ? " Game"
      : " Games");


  if (visibleGames === 0) {

    noResults.style.display =
      "block";

  } else {

    noResults.style.display =
      "none";

  }

}


searchInput.addEventListener(
  "input",
  searchGames
);



/* BUTTON MESSAGE */

function showMessage(text) {

  message.textContent = text;

  message.classList.add("show");


  setTimeout(function() {

    message.classList.remove("show");

  }, 2200);

}



/* GAME BUTTONS */

const buttons =
  document.querySelectorAll(".game-btn");


buttons.forEach(function(button) {

  button.addEventListener(
    "click",
    function() {

      const gameName =
        button.dataset.game;

      showMessage(
        gameName +
        " selected!"
      );

    }
  );

});



/* CLOSE BUTTON */

closeBtn.addEventListener(
  "click",
  function() {

    showMessage(
      "Close button clicked"
    );

  }
);



/* START */

searchGames();
