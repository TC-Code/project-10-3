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
    carouselList.animate({ marginLeft: -800 }, 1000, moveFirstSlide);
  });

  $(".arrow-left").click(function() {});
});


