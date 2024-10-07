document.addEventListener("DOMContentLoaded", function () {
  const editProfileBtn = document.getElementById("edit-profile-btn");
  const stickyBanner = document.getElementById("sticky-banner");
  const updateButton = document.querySelector(".banner-button.update");
  const cancelButton = document.querySelector(".banner-button.cancel");
  const changePasswordBtn = document.getElementById("change-password-btn");

  // Select all profile-input-group elements within main#profile_layout
  const profileInputGroups = document.querySelectorAll(
    "main#profile_layout .profile-input-group"
  );

  editProfileBtn.addEventListener("click", () => {
    stickyBanner.classList.add("visible");

    // Hide change-password-btn
    changePasswordBtn.classList.add("hidden");

    // Add the mobile-profile-input-group class to all .profile-input-group elements
    profileInputGroups.forEach((group) => {
      group.classList.add("mobile-profile-input-group");
      group.classList.remove("hidden"); // Show all password input groups
    });

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

  changePasswordBtn.addEventListener("click", () => {
    stickyBanner.classList.add("visible");

    // Hide change-password-btn
    changePasswordBtn.classList.add("hidden");

    // Add the mobile-profile-input-group class to all .profile-input-group elements
    profileInputGroups.forEach((group) => {
      group.classList.add("mobile-profile-input-group");
      group.classList.remove("hidden"); // Show all password input groups
    });

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

    // Remove the mobile-profile-input-group class from all elements
    profileInputGroups.forEach((group) => {
      group.classList.remove("mobile-profile-input-group");
    });
  });

  cancelButton.addEventListener("click", () => {
    stickyBanner.classList.remove("visible");

    // Revert changes on cancel: show change-password-btn again and hide password input groups
    changePasswordBtn.classList.remove("hidden");
    profileInputGroups.forEach((group) => {
      group.classList.add("hidden");
      group.classList.remove("mobile-profile-input-group");
    });
  });
});
