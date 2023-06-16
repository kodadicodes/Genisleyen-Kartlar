// Öncelikle, "panel" sınıfına sahip tüm öğeleri seçiyoruz. Bu öğeler bir NodeList olarak döndürülür.
const panels = document.querySelectorAll(".panel");

// Sonra, her panel için bir işlev tanımlıyoruz. Bu işlevi forEach yöntemi ile her panel için çalıştırıyoruz.
panels.forEach(panel => {
    // Bu işlev panel tıklandığında çalışacak. Bunu addEventListener yöntemi ile yapıyoruz.
    panel.addEventListener("click", () => {
        // Tüm panellerden "active" sınıfını kaldırıyoruz. Bunun için aşağıda removeActive adlı bir işlev tanımladık.
        removeActive();
        // Ve tıklanan panelde "active" sınıfını ekliyoruz. Bunu classList.add yöntemi ile yapıyoruz.
        panel.classList.add("active");
    });
})

// Tüm panellerden "active" sınıfını kaldıran bir işlev de tanımlıyoruz. Bu işlevi removeActive adıyla tanımladık.
function removeActive(){
    // Bu işlev forEach yöntemi ile her panel için çalıştırılır.
    panels.forEach(panel => {
        // Her panelde classList.remove yöntemi ile "active" sınıfını kaldırırız.
        panel.classList.remove("active");
    })
}
