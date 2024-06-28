document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      var dropdown = toggle.parentNode;
      var isActive = dropdown.classList.contains("active");

      // Close all dropdowns except the current one
      closeAllDropdownsExcept(dropdown);

      // Toggle current dropdown
      dropdown.classList.toggle("active");

      // Prevent default behavior to stop event propagation
      event.stopPropagation();
    });
  });

  // Close dropdowns when clicking outside of any open dropdown
  document.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown-toggle")) {
      closeAllDropdowns();
    }
  });

  function closeAllDropdownsExcept(excludeDropdown) {
    var dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
      if (
        dropdown !== excludeDropdown &&
        dropdown.classList.contains("active")
      ) {
        dropdown.classList.remove("active");
      }
    });
  }

  function closeAllDropdowns() {
    var dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("active");
    });
  }
});
