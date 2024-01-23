var swier = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  function cursorEffect() {
    var page1Contain = document.querySelector("#page1");
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
