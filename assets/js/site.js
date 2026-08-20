/* Mobile navigation toggle. Everything else on the site is plain HTML/CSS. */
(function () {
  var header = document.querySelector(".site-header");
  var toggle = header && header.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!header.classList.contains("is-open"));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
