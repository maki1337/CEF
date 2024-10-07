document.addEventListener("DOMContentLoaded", function () {
  const cardContainers = document.querySelectorAll(".overflow-card-container");

  cardContainers.forEach((cardContainer) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Handle mouse events
    cardContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      cardContainer.classList.add("active");
      startX = e.pageX - cardContainer.offsetLeft;
      scrollLeft = cardContainer.scrollLeft;
    });

    cardContainer.addEventListener("mouseleave", () => {
      isDown = false;
      cardContainer.classList.remove("active");
    });

    cardContainer.addEventListener("mouseup", () => {
      isDown = false;
      cardContainer.classList.remove("active");
    });

    cardContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - cardContainer.offsetLeft;
      const walk = (x - startX) * 3; // Scroll speed
      cardContainer.scrollLeft = scrollLeft - walk;
    });

    // Handle touch events for mobile
    cardContainer.addEventListener("touchstart", (e) => {
      isDown = true;
      cardContainer.classList.add("active");
      startX = e.touches[0].pageX - cardContainer.offsetLeft;
      scrollLeft = cardContainer.scrollLeft;
    });

    cardContainer.addEventListener("touchend", () => {
      isDown = false;
      cardContainer.classList.remove("active");
    });

    cardContainer.addEventListener("touchmove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - cardContainer.offsetLeft;

      const walk = (x - startX) * 1.5; // Reduced multiplier for slower scroll
      cardContainer.scrollLeft = scrollLeft - walk;
    });
  });
});
