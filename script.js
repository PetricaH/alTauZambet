// menu
function toggleMenu(element) {
    element.classList.toggle("change");
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle("show");

    document.body.style.overflow = (menuLinks.classList.contains("show")) ? "hidden" : "auto";
}

document.querySelectorAll('.menu-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        var menuButton = document.querySelector('.menu');
        toggleMenu(menuButton); // this closes the menu by toggling the menu button
    });
});

const cardsContainer = document.querySelector('.cards-part-specializari');
const cursor = document.querySelector(".cursor");

cardsContainer.addEventListener("mousemove", function(event) {
    if (event.target.closest('.cards-part-specializari')) {
        cursor.style.display = "block";
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
        
        const card = event.target.closest(".card");
        if (card) {
            const cardRect = card.getBoundingClientRect();
            cursor.style.bottom = cardRect.top + cardRect.height + "px";
        }
    } else {
        cursor.style.display = "none";
    }
});

