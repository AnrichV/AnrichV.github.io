document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".main-nav-bar");
  const icon = document.querySelector(".menu-icon");

  if (!toggle || !menu || !icon) {
    console.warn("Missing element(s)", { toggle, menu, icon });
    return;
  }

  // Close menu on click outside
  document.addEventListener("click", function (e) {
    if (!toggle.checked) return;

    const clickedInsideMenu = menu.contains(e.target);
    const clickedIcon = icon.contains(e.target);
    const clickedToggle = e.target === toggle;

    if (!clickedInsideMenu && !clickedIcon && !clickedToggle) {
      toggle.checked = false;
    }
  });

  // Close menu on scroll
  window.addEventListener("scroll", function () {
    if (toggle.checked) {
      toggle.checked = false;
    }
  });
});
