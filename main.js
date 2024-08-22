/* const nav = document.querySelector("header");

let prevScrollPos = windows.pageYoffset;

window.onscroll = function () {
  let currentScrollPosition = window.pageYoffset;

  if (prevScrollPos > currentScrollPosition) {
    nav.classList.remove("scroll");
  } else {
    nav.classList.add("scroll");
  }

  prevScrollPos = currentScrollPosition;
};
 */

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener(
    "scroll",
    function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }

      const distanceFromTop = Math.min(scrollTop, 500);

      const backgroundColorOpacity = distanceFromTop / 500;

      navbar.style.backgroundColor = `rgba(48, 48, 48, ${backgroundColorOpacity})`;

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    false
  );
});
