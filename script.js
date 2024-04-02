// menu
/* function toggleMenu(element) {
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
*/

function toggleMenu(element) {
  if (window.innerWidth < 930) {
    element.classList.toggle('change');
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('show');

    document.body.style.overflow = (menuLinks.classList.contains('show')) ? 'hidden' : 'auto';
  }
}

document.querySelectorAll('.menu-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    var menuButton = document.querySelector('.menu');
    if (window.innerWidth < 930) {
      toggleMenu(menuButton);
    }
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

//carousel

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const carouselTrack = document.querySelector(".carousel-track");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const indicators = document.querySelectorAll(".indicator");
  
    let currentIndex = 0;
    let itemWidth = carouselItems[0].offsetWidth;
  
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    nextBtn.addEventListener("click", () => {
      if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    function updateCarousel() {
      carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });
    }
  
    // Dragging functionality
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
  
    carouselTrack.addEventListener("mousedown", dragStart);
    carouselTrack.addEventListener("touchstart", dragStart);
    carouselTrack.addEventListener("mouseup", dragEnd);
    carouselTrack.addEventListener("touchend", dragEnd);
    carouselTrack.addEventListener("mouseleave", dragEnd);
    carouselTrack.addEventListener("mousemove", drag);
    carouselTrack.addEventListener("touchmove", drag);
  
    function dragStart(event) {
      if (event.type === "touchstart") {
        startPosition = event.touches[0].clientX;
      } else {
        startPosition = event.clientX;
      }
  
      isDragging = true;
    }
  
    function drag(event) {
      if (isDragging) {
        const currentPosition = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
        currentTranslate = prevTranslate + currentPosition - startPosition;
      }
    }
  
    function dragEnd() {
      isDragging = false;
  
      const threshold = itemWidth / 5;
  
      if (currentTranslate > threshold && currentIndex > 0) {
        currentIndex--;
      } else if (currentTranslate < -threshold && currentIndex < carouselItems.length - 1) {
        currentIndex++;
      }
  
      updateCarousel();
  
      prevTranslate = currentTranslate;
    }
  });

  // faq container

  const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));