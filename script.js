const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// // Carregar preferência salva
if (localStorage.getItem("theme") === "light") {
    root.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
}

// Alternar tema
toggleBtn.addEventListener("click", () => {
    root.classList.toggle("light-mode");

    if (root.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "🌙";
    }
})