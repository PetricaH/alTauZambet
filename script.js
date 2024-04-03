// menu


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
})

function toggleActive(event) {
  var links = document.querySelectorAll('.menu-links a');
  links.forEach(function(link) {
    link.classList.remove('active');
  });
  event.target.classList.add('active');
}

// function for moving the underline according to the section the user hovers

window.addEventListener('scroll', function() {
  var sections = this.document.querySelectorAll('#hero-section, #about-atz-section, #atz-specializari-section, #acreditari-atz-section, #intrebari-frecvente-section, #informatii-contact-section, #recenzii-section');
  var scrollPosition = window.scrollY;

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      var link = document.querySelector('a[href="#' + section.id + '"]');
      toggleActive({target: link});
    }
  });
});

// function for changing the background color of the header and its contents depending on the position of the user on the website

function adjustHeaderStyles() {
  var header = document.querySelector('.header');
  var logo = document.querySelector('#logo');
  var menuLinks = document.querySelectorAll('.menu-links a');
  var menuBars = document.querySelectorAll('.menu .bar');
  var heroSection = document.querySelector('#hero-section');

  if (window.scrollY > heroSection.clientHeight) {
      header.style.backgroundColor = '#f2f2f2';
      logo.style.filter = 'brightness(0)';
      menuLinks.forEach(function(link) {
          link.style.color = '#1e1e1e';
      });
      menuBars.forEach(function(bar) {
          bar.style.backgroundColor = '#1e1e1e';
      });
  } else {
      header.style.backgroundColor = 'transparent';
      logo.style.filter = 'brightness(1)';
      menuLinks.forEach(function(link) {
          link.style.color = '#f2f2f2';
      });
      menuBars.forEach(function(bar) {
          bar.style.backgroundColor = '#f2f2f2';
      });
  }
}

// Listen for scroll events to adjust header styles
window.addEventListener('scroll', function() {
  adjustHeaderStyles();
});

// function for the glowing efect under the cursor when user hovers over the cards

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