// Tiny enhancement: auto-set the current year in the footer
const yearSpan = document.querySelector(".year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Optional: little wiggle on hover for the hero badge
const badge = document.getElementById("download-badge");
if (badge) {
    badge.addEventListener("mouseenter", () => {
        badge.style.transition = "transform 0.1s ease-out";
        badge.style.transform += " rotate(-2deg)";
    });

    badge.addEventListener("mouseleave", () => {
        badge.style.transform = "";
    });
}
