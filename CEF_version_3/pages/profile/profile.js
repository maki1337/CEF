document.addEventListener("DOMContentLoaded", function () {
  const editProfileBtn = document.getElementById("edit-profile-btn");
  const stickyBanner = document.getElementById("sticky-banner");
  const updateButton = document.querySelector(".banner-button.update");
  const cancelButton = document.querySelector(".banner-button.cancel");
  const changePasswordBtn = document.getElementById("change-password-btn");
  const passwordInputGroup = document.querySelector(
    "#password_information .profile-input-group"
  );

  editProfileBtn.addEventListener("click", () => {
    stickyBanner.classList.add("visible");

    // Hide change-password-btn
    changePasswordBtn.classList.add("hidden");

    // Show password input group by removing hidden class
    passwordInputGroup.classList.remove("hidden");

    // Select all h3 elements and input/select elements within the .profile-input-group
    const h3Elements = document.querySelectorAll(".profile-input-group h3");
    const inputs = document.querySelectorAll(
      ".profile-input-group input, .profile-input-group select"
    );

    // Hide all h3 elements
    h3Elements.forEach((h3) => {
      h3.classList.add("hidden");
    });

    // Show all input and select elements
    inputs.forEach((input) => {
      input.classList.remove("hidden");
    });

    // Also show select parents if they're hidden
    const selectParents = document.querySelectorAll(
      ".profile-input-group .select-parent"
    );
    selectParents.forEach((selectParent) => {
      selectParent.classList.remove("hidden");
    });
  });

  updateButton.addEventListener("click", () => {
    stickyBanner.classList.remove("visible");
    alert("Information updated!");
  });

  cancelButton.addEventListener("click", () => {
    stickyBanner.classList.remove("visible");

    // Revert changes on cancel: hide password input group and show change-password-btn again
    changePasswordBtn.classList.remove("hidden");
    passwordInputGroup.classList.add("hidden");
  });
});
