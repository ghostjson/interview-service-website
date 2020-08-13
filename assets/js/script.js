// menu logic

$("#menu-open").click(function () {
  $(".navigation").slideDown();
  $(this).hide();
  $("#menu-close").show();
});

$("#menu-close").click(function () {
  $(".navigation").slideUp();
  $(this).hide();
  $("#menu-open").show();
});

// testimonial carousel logic
$(document).ready(function () {
  let owl = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
  });

    $(".slide-previous").click(() => {
      console.log('previous')
    owl.trigger("prev.owl.carousel");
  });

    $(".slide-next").click(() => {
            console.log("next");

    owl.trigger("next.owl.carousel");
  });
});
