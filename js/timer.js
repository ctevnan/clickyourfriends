$(document).ready(function() {
  var trackGameScore = 0;
  
  $("td img").addClass("img-responsive");

  $(".img-responsive").attr("disabled", true);

  function countInc() {
    trackGameScore +=1;

    $("score").text(trackGameScore);
  }
})

  function countDescd() {
    setTimeout(function count() {
      $("#scoreModal .modal-body").empty();

      $("#scoreModal .modal-body").append("<p>The game is over. You clicked" + trackGameScore + " Shamoons.</p>");

      $("#scoreModal").modal("show");

      $("#scoreModal").on("hide.bs.modal", function() {
        $("score").text("");
      });
      $(".img-responsive").attr("disabled", true);
    }, 20000);
  }

  $(".img-responsive").on("click", function() {
    if ($(this).attr("disabled")) {
      return;
    }
    $(this).removeClass("gameRunning").addClass("gameNotRunning").attr("disabled", true);
    countInc();
  });
  
  $(".btn-block").on("click", function() {
    trackGameScore =0;

    $(".img-responsive").attr("disabled", false).removeClass("gameNotRunning").addClass("gameRunning");

    countDescd();
  });  
;