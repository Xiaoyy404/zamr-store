function scrollToCategory(categoryId) {
    document.getElementById(categoryId).scrollIntoView({ behavior: "smooth" });
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function searchGame() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".game").forEach(game => {
        const title = game.querySelector("h3").textContent.toLowerCase();
        game.style.display = title.includes(input) ? "block" : "none";
    });
}

function topUp(gameName) {
    window.location.href = `https://wa.me/628xxxxxxx?text=mau%20beli%20${gameName}`;
}