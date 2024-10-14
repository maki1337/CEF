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

    changePasswordBtn.classList.add("hidden");

    profileInputGroups.forEach((group) => {
      group.classList.add("mobile-profile-input-group");
      group.classList.remove("hidden");
    });

    const h3Elements = document.querySelectorAll(".profile-input-group h3");
    const inputs = document.querySelectorAll(
      ".profile-input-group input, .profile-input-group select"
    );

    h3Elements.forEach((h3) => {
      h3.classList.add("hidden");
    });

    inputs.forEach((input) => {
      input.classList.remove("hidden");
    });

    const selectParents = document.querySelectorAll(
      ".profile-input-group .select-parent"
    );
    selectParents.forEach((selectParent) => {
      selectParent.classList.remove("hidden");
    });
  });

  changePasswordBtn.addEventListener("click", () => {
    stickyBanner.classList.add("visible");

    changePasswordBtn.classList.add("hidden");

    profileInputGroups.forEach((group) => {
      group.classList.add("mobile-profile-input-group");
      group.classList.remove("hidden");
    });

    const h3Elements = document.querySelectorAll(".profile-input-group h3");
    const inputs = document.querySelectorAll(
      ".profile-input-group input, .profile-input-group select"
    );

    h3Elements.forEach((h3) => {
      h3.classList.add("hidden");
    });

    inputs.forEach((input) => {
      input.classList.remove("hidden");
    });

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

    profileInputGroups.forEach((group) => {
      group.classList.remove("mobile-profile-input-group");
    });
  });

  cancelButton.addEventListener("click", () => {
    stickyBanner.classList.remove("visible");

    changePasswordBtn.classList.remove("hidden");
    profileInputGroups.forEach((group) => {
      group.classList.remove("mobile-profile-input-group");
    });

    const passwordInputGroup = document.querySelectorAll(
      "#password_information .profile-input-group"
    );

    passwordInputGroup.forEach((group) => {
      group.classList.add("hidden");
    });

    const h3Elements = document.querySelectorAll(".profile-input-group h3");
    const inputs = document.querySelectorAll(
      ".profile-input-group input, .profile-input-group select"
    );

    h3Elements.forEach((h3) => {
      h3.classList.remove("hidden");
    });

    inputs.forEach((input) => {
      input.classList.add("hidden");
    });
  });
});
