// Icons
let moonIcon = document.querySelector(".moon");
let sunIcon = document.querySelector(".sun");
let icons = document.querySelectorAll("svg");
let cont = document.querySelector(".cont");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
    icons.forEach(el => {
        el.classList.toggle("active");
        // Add Background
        if (sunIcon.classList.contains("active")) {
            cont.classList.remove("bg-gray-900");
            cont.classList.add("bg-white");
        } else if (moonIcon.classList.contains("active")) {
            cont.classList.add("bg-gray-900");
            cont.classList.remove("bg-white");
        }
    });
}

// Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("active");
        cont.classList.add("bg-gray-900");
        cont.classList.remove("bg-white");
        return;
    }
    sunIcon.classList.add("active");
    cont.classList.remove("bg-gray-900");
    cont.classList.add("bg-white");
}

// Manuel Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    iconToggle();
}

// Call theme switch function
cont.addEventListener("click", handleToggle);
function handleToggle() {
    themeSwitch();
}

// Invoke the Theme Check Function
themeCheck();

/* Hide Fixed Header */
// Get a reference to the header element
const header = document.querySelector('.header');

// Set the scroll position where you want the header to start hiding
const scrollThreshold = 200; // Adjust this value as needed

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Toggle the "hide-header" class based on the scroll position
    if (scrollPosition > scrollThreshold) {
        header.classList.add('hide-header');
    } else {
        header.classList.remove('hide-header');
    }
});

/* Active Trick */
const links = document.querySelectorAll(".links a li");

links.forEach(el => {
    el.addEventListener("click", () => {
        links.forEach(el => {
            el.classList.remove("on");
        });
        el.classList.add("on");
    });
});

/* Toggle Navbar */
const navIcon = document.querySelector(".nav-icon");
const ulLinks = document.querySelector(".links");

navIcon.addEventListener("click", toggleNavbar);

function toggleNavbar() {
    ulLinks.classList.toggle("hidden");

    // Adjust Margin based on links position
    const darkSwitch = document.querySelector(".dark-switch");
    if (!ulLinks.classList.contains("hidden")) {
        darkSwitch.classList.remove("pt-32");
        darkSwitch.classList.add("pt-80");
    } else if (ulLinks.classList.contains("hidden")) {
        darkSwitch.classList.remove("pt-80");
        darkSwitch.classList.add("pt-32");
    }
}