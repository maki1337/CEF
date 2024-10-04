document.addEventListener("DOMContentLoaded", function () {
  // Get the button and the overlay elements
  const applyFilterBtn = document.getElementById("apply-filter-btn");
  const filterOverlay = document.getElementById("filter-overlay");
  const closeOverlayBtn = document.getElementById("close-overlay-btn");
  const saveFiltersBtn = document.getElementById("save-filters-btn");

  // Show the overlay and disable scrolling when the button is clicked
  applyFilterBtn.addEventListener("click", function () {
    filterOverlay.classList.remove("hidden");
    document.body.classList.add("no-scroll"); // Disable body scroll
  });

  // Hide the overlay and re-enable scrolling when the close button is clicked
  closeOverlayBtn.addEventListener("click", function () {
    filterOverlay.classList.add("hidden");
    document.body.classList.remove("no-scroll"); // Enable body scroll
  });

  // Handle saving filters and closing the overlay
  saveFiltersBtn.addEventListener("click", function () {
    // You can handle saving filter logic here

    // After saving, hide the overlay and re-enable scrolling
    filterOverlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  });
});
