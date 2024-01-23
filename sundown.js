
var pageC = document.querySelector("#page-container")
var fix = document.querySelector("#fixed")

pageC.addEventListener("mouseenter", function() {
    fix.style.display = "block"
});
pageC.addEventListener("mouseleave", function() {
    fix.style.display = "none"
});

var elem = document.querySelectorAll("#elem1")
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var b = e.getAttribute("data-type")
        fix.style.backgroundImage = `url(${b})`
    })
});

var swier = new Swiper(".mySwiper", {
  slidesPerView:3.5,
  centeredSlides: true,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

  function cursorEffect() {
    var page1Contain = document.querySelector("#page5");
    var cursor = document.querySelector("#cursor");

    page1Contain.addEventListener("mousemove", function (dets) {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
      });
    });
    page1Contain.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });
    page1Contain.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  }
  cursorEffect();
