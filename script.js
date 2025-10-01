const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;
const linksContainer = document.getElementById("links-container");

// Carregar preferência salva
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

// Carregar links dinamicamente
async function loadLinks() {
    try {
        const response = await fetch("links.json");
        const links = await response.json();

        links.forEach(link => {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.setAttribute("aria-label", link.aria);

            if (link.download) {
                a.setAttribute("download", "Victor-Carvalho-CV.pdf");
            }

            const icon = document.createElement("i");
            link.icon.split(" ").forEach(cls => icon.classList.add(cls));

            a.appendChild(icon);
            a.appendChild(document.createTextNode(link.name));

            li.appendChild(a);
            linksContainer.appendChild(li);
        });
    } catch (error) {
        console.error("Erro ao carregar links:", error);
    }
}

loadLinks();