$(function() {
  var carouselList = $("#carousel ul");
  setInterval(changeSlide, 5000);
  function changeSlide() {
    carouselList.animate({ marginLeft: -800 }, 1000, moveFirstSlide);
  }
  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({ marginLeft: 0 });
  }
  $(".arrow-right").click(function() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    carouselList.animate({ marginLeft: -800 }, 1000, moveFirstSlide);
  });

  $(".arrow-left").click(function() {});
});

// Forward !!!!!
/*
$(function() {
  $(".arrow-right").click(function() {
    carouselList.animate({ "left": "-=800px" }, "slow" );
  });
});

// Backwards !!!!!

$(function() {
    $(".arrow-left").click(function() {
      alert ('Backwards !!!!!');
    });
  }); */
