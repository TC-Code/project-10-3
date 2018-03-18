$(function() {
  var carouselList = $(".carousel__image-list");
  var carouselInterval = setInterval(changeSlide, 5000);
  function changeSlide() {
    carouselList.animate({ marginLeft: -800 }, 1000, moveFirstSlide);
  }
  function moveFirstSlide() {
    var firstItem = carouselList.find(".image-list__item:first");
    var lastItem = carouselList.find(".image-list__item:last");
    lastItem.after(firstItem);
    carouselList.css({ marginLeft: 0 });
  }
  $(".arrow-right").on("click", function() {
    clearInterval(carouselInterval);
    carouselList.animate({ marginLeft: -800 }, 1000, moveFirstSlide);
    carouselInterval = setInterval(changeSlide, 5000);
  });

  $(".arrow-left").on("click", function() {
    clearInterval(carouselInterval);
    var firstItem = carouselList.find(".image-list__item:first");
    var lastItem = carouselList.find(".image-list__item:last");
    firstItem.before(lastItem);
    carouselList.css({ marginLeft: -800 });
    carouselList.animate({ marginLeft: 0 }, 1000);
    carouselInterval = setInterval(changeSlide, 5000);
  });
});
