$( document ).ready(function() {

  // Scroll to section of page
  $("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top - 50
    }, 1000);
  });

  $("#experience").click(function() {
    $('html, body').animate({
        scrollTop: $(".experience").offset().top - 50
    }, 1000);
  });
  
  $("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top - 50
    }, 1000);
  });

  $("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top - 50
    }, 1000);
  });

  $(".projects").on( "click", "#login", function() {
    if ($("#login-content").hasClass("hide") === false) {
      $("#login-content").addClass("hide");
      $("#login span").removeClass("flip-vertical");
    } else {
      $("#login-content").removeClass("hide");
      $("#login span").addClass("flip-vertical");
    }
  });

  $(".projects").on( "click", "#board", function() {
    if ($("#board-content").hasClass("hide") === false) {
      $("#board-content").addClass("hide");
      $("#board span").removeClass("flip-vertical");
    } else {
      $("#board-content").removeClass("hide");
      $("#board span").addClass("flip-vertical");
    }
  });

  $(".projects").on( "click", "#boards", function() {
    if ($("#boards-content").hasClass("hide") === false) {
      $("#boards-content").addClass("hide");
      $("#boards span").removeClass("flip-vertical");
    } else {
      $("#boards-content").removeClass("hide");
      $("#boards span").addClass("flip-vertical");
    }
  });

  $(".projects").on( "click", "#card", function() {
    if ($("#card-content").hasClass("hide") === false) {
      $("#card-content").addClass("hide");
      $("#card span").removeClass("flip-vertical");
    } else {
      $("#card-content").removeClass("hide");
      $("#card span").addClass("flip-vertical");
    }
  });

});