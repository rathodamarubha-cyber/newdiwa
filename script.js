/* =====================================
   NEWDIWA - MAIN JAVASCRIPT
   ===================================== */

document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const games = document.querySelectorAll(".game");


  /* =====================================
     GAME SEARCH
     ===================================== */

  function searchGames() {

    const query = searchInput.value
      .toLowerCase()
      .trim();

    games.forEach(function (game) {

      const gameName =
        game.getAttribute("data-name") ||
        game.innerText;

      if (gameName.toLowerCase().includes(query)) {

        game.style.display = "";

      } else {

        game.style.display = "none";

      }

    });

  }


  if (searchInput) {

    searchInput.addEventListener(
      "input",
      searchGames
    );

  }


  if (searchButton) {

    searchButton.addEventListener(
      "click",
      searchGames
    );

  }


  /* =====================================
     ENTER KEY SEARCH
     ===================================== */

  if (searchInput) {

    searchInput.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {

          event.preventDefault();

          searchGames();

        }

      }
    );

  }


  /* =====================================
     DOWNLOAD BUTTON
     ===================================== */

  const downloadButtons =
    document.querySelectorAll(".download-btn");


  downloadButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function (event) {

        const link =
          button.getAttribute("href");

        /*
         * Agar actual download link "#" hai,
         * to abhi message show hoga.
         *
         * Baad mein actual APK link
         * href mein add kar sakte ho.
         */

        if (
          !link ||
          link === "#" ||
          link === "javascript:void(0)"
        ) {

          event.preventDefault();

          alert(
            "Download link abhi add nahi kiya gaya hai."
          );

        }

      }
    );

  });


  /* =====================================
     SOCIAL BUTTONS
     ===================================== */

  const socialLinks =
    document.querySelectorAll(".social-row a");


  socialLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function (event) {

        const url =
          link.getAttribute("href");

        if (
          !url ||
          url === "#"
        ) {

          event.preventDefault();

        }

      }
    );

  });


  /* =====================================
     TELEGRAM BUTTON
     ===================================== */

  const telegramButton =
    document.querySelector(".telegram-bar");


  if (telegramButton) {

    telegramButton.addEventListener(
      "click",
      function (event) {

        const url =
          telegramButton.getAttribute("href");

        if (
          !url ||
          url === "#"
        ) {

          event.preventDefault();

          alert(
            "Telegram link abhi add nahi kiya gaya hai."
          );

        }

      }
    );

  }

});
