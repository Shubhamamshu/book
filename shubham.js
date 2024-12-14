let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if ((page = currentPage - 1)) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
  function movePage(element, pageNum) {
  // Add a class to simulate flipping animation
  element.style.transform = `rotateY(${180 * pageNum}deg)`;
  element.style.transition = "transform 0.6s";
}

// Adjust dynamic heights for responsiveness
function adjustPageHeights() {
  const pages = document.querySelectorAll(".page");
  const viewportHeight = window.innerHeight;

  pages.forEach((page) => {
    page.style.minHeight = `${viewportHeight * 0.8}px`;
  });
}

// Run on page load
document.addEventListener("DOMContentLoaded", function () {
  adjustPageHeights();
});

// Adjust on resize
window.addEventListener("resize", adjustPageHeights);

}
