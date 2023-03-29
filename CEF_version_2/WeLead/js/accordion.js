document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      let icon = this.querySelector(".accordion-icon"); // Get the icon element

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove("open"); // Remove the 'open' class from the icon
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("open"); // Add the 'open' class to the icon
      }

      accordionButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("active");
          let otherContent = otherButton.nextElementSibling;
          let otherIcon = otherButton.querySelector(".accordion-icon"); // Get the other icon element
          if (otherContent.style.maxHeight) {
            otherContent.style.maxHeight = null;
            otherIcon.classList.remove("open"); // Remove the 'open' class from the other icon
          }
        }
      });
    });
  });
});
