const searchInput = document.getElementById("searchInput");
const games = document.querySelectorAll(".game");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    games.forEach(function(game) {

        const gameName = game
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (gameName.includes(searchText)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }

    });

});
