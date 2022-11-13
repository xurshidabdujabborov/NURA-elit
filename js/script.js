window.addEventListener("load", function (e) {
    // header navbar menu toggle
    $("header .activeBars").click(function () {
      $("header .activeMenuBars").slideToggle(1000);
    });
    // videos
    $(".videos .fa-play").click(function () {
      document.querySelector(".videoPlayer video").play();
      $(".videos .videoPlayer").addClass("active");
      $(this).fadeOut();
    });
  
    $(".videos .videoPlayer").mouseover(function () {
      if ($(this).hasClass("active")) {
        $(".videos .fa-pause").fadeIn(); // block
        $(".videos .fa-pause").css("display", "flex");
      }
    });
  
    $(".videos .videoPlayer").mouseout(function () {
      $(".videos .fa-pause").fadeOut();
    });
  
    $(".videos .fa-pause").click(function () {
      document.querySelector(".videoPlayer video").pause();
      $(".videos .fa-play").fadeIn();
      $(".videos .videoPlayer").removeClass("active");
    });
    // form
    $(".work .eyes").click(function () {
      var attr = $(".work .pass input").attr("type");
      if (attr == "password") {
        $(".work .pass input").attr("type", "text");
      } else {
        $(".work .pass input").attr("type", "password");
      }
    });
  
    // header navbar signin form error Validation togirlash kerak
  
    $(".headerLogin button").click(function (e) {
      e.preventDefault();
      if ($(".headerLogin input").val() === "") {
        $(".errorMsg").show();
      } else {
        $(".errorMsg").hide();
      }
    });
  
    /// header navbar signin close
  
    $(".headerLogin .close").click(function () {
      $(".headerLogin").fadeOut(500);
    });
  
    $(".work .signUp").click(function () {
      $(".headerLogin").fadeIn();
      $(".headerLogin").css("display", "flex");
    });
    // owl
    $(".owl .owl-carousel").owlCarousel({
      items: 3,
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      nav: true,
    });
});
