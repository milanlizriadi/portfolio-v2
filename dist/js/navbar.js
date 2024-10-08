const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
let isOpen = false;

// Initially set the mobile menu to be hidden
mobileMenu.classList.add("hidden");

mobileMenuButton.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.classList.remove("hidden", "scale-y-0", "opacity-0");
    mobileMenu.classList.add("scale-y-100", "opacity-100");
  } else {
    mobileMenu.classList.add("scale-y-0", "opacity-0");
    mobileMenu.classList.remove("scale-y-100", "opacity-100");

    // Wait for the transition to finish before hiding it
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300); // Match this to the duration in the CSS transition
  }
});
