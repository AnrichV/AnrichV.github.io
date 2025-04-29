// document.addEventListener("DOMContentLoaded", function () {
//     const toggle = document.getElementById("menu-toggle");
//     const menu = document.querySelector(".main-nav-bar");
//     const icon = document.querySelector(".menu-icon");

//     if (!toggle || !menu || !icon) {
//       console.warn("Missing element(s)", { toggle, menu, icon });
//       return;
//     }

//     // Function to open/close the menu
//     function toggleMenu() {
//       const isOpen = menu.classList.toggle("open");
//       // Optional: Add ARIA attribute for accessibility
//       toggle.setAttribute("aria-expanded", isOpen);
//     }

//     // Open/close the menu when the hamburger button is clicked
//     toggle.addEventListener("click", function (e) {
//       toggleMenu();
//     });

//     // Close menu when clicking outside of the menu or the hamburger icon
//     document.addEventListener("click", function (e) {
//       if (menu.classList.contains("open") && !menu.contains(e.target) && !icon.contains(e.target) && e.target !== toggle) {
//         menu.classList.remove("open");
//         toggle.setAttribute("aria-expanded", "false");
//       }
//     });

//     // Close menu on scroll
//     window.addEventListener("scroll", function () {
//       if (menu.classList.contains("open")) {
//         menu.classList.remove("open");
//         toggle.setAttribute("aria-expanded", "false");
//       }
//     });
//   });
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".main-nav-bar");
  const icon = document.querySelector(".menu-icon");

  if (!toggle || !menu || !icon) {
    console.warn("Missing element(s)", { toggle, menu, icon });
    return;
  }

  // Function to open/close the menu
  function toggleMenu() {
    const isOpen = menu.classList.toggle("open");
    // Optional: Add ARIA attribute for accessibility
    toggle.setAttribute("aria-expanded", isOpen);
  }

  // Open/close the menu when the hamburger button is clicked
  toggle.addEventListener("click", function (e) {
    toggleMenu();
  });

  // Close menu when clicking outside of the menu or the hamburger icon
  document.addEventListener("click", function (e) {
    if (
      menu.classList.contains("open") &&
      !menu.contains(e.target) &&
      !icon.contains(e.target) &&
      e.target !== toggle
    ) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu on scroll
  window.addEventListener("scroll", function () {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
