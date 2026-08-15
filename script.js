document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();

    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = year;
    }
}); //too lazy to update the C year myself