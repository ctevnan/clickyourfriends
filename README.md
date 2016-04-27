# timedClickGame

Synopsis

Welcome to timedClickGame, a basic Javascript Game that has a delightful Easter theme for kids, and kids at heart, to enjoy.
In this game, there is only 20 seconds to click on as many Easter Eggs as the player can. At  the end of the 20 second time limit,
the players score is returned to them.

Code Example

Scarcity of time is what makes this game fun and challenging.
Here we can see the code that makes the score modal function at the end of the 20 second time limit;


 function countDescd() {
    setTimeout(function count() {
      $("#scoreModal .modal-body").empty();

      $("#scoreModal .modal-body").append("<p>The game is over. You clicked " + trackGameScore + " eggs!</p>");

      $("#scoreModal").modal("show");

      $("#scoreModal").on("hide.bs.modal", function() {
        $("score").text("");
      });
      $(".img-responsive").attr("disabled", true);
    }, 20000);
  }


Motivation

Inspiration to create this game in the style of an Easter themed game for kids struck during Easter 2016. The game was already 
functional, but the styling needed something more. I love celebrating Easter with my family in Connecticut, so I grabbed my mobile
hotspot and styled the game en route. My nieces Molly and Brooke inspired me to style this game the way I did. They love the color pink!

Contributor

Carolyn Tevnan

