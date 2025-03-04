function scrollToCategory(categoryId) {
    document.getElementById(categoryId).scrollIntoView({ behavior: "smooth" });
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function searchProduk() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".produk").forEach(produk => {
        const title = produk.querySelector("h3").textContent.toLowerCase();
        produk.style.display = title.includes(input) ? "block" : "none";
    });
}

function topUp(produkName) {
    const text = encodeURIComponent(`Mau beli ${produkName}`);
    window.location.href = `https://wa.me/6285168634922?text=${text}`;
}
