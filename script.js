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

