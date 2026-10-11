/* ============================================================
   Theme Initializer (Anti-FOUC)
   Loaded FIRST in <head> before CSS, before other scripts.
   ============================================================ */
(function () {
  try {
    var t = localStorage.getItem("ckg-theme") || "light";
    if (t === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (e) {
    // ignore (storage unavailable)
  }
})();
