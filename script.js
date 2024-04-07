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

document.addEventListener("DOMContentLoaded", function () {
  const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

  let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
      lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
      lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
      lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      liTag += `<li class="${isToday}" data-date="${i}-${currMonth + 1}-${currYear}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

    const dayElements = document.querySelectorAll(".days li");
    dayElements.forEach(day => {
      day.addEventListener("click", () => {
        if (!day.classList.contains("inactive")) {
          const selectedDate = day.getAttribute("data-date");
          showModal(selectedDate);
        }
      });
    });
  };

  const showModal = (selectedDate) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Add event listener to submit button
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", () => {
      submitAppointment(selectedDate);
    });
  };

  const submitAppointment = (selectedDate) => {
    const hour = document.getElementById("hour").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // You can perform further validation here

    const appointmentData = {
      date: selectedDate,
      hour: hour,
      name: name,
      phone: phone
    };

    // Simulate sending the data to the dentist cabinet
    console.log("Appointment Data:", appointmentData);

    // Close modal after submitting
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  renderCalendar();

  prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
      currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

      if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth, new Date().getDate());
        currYear = date.getFullYear();
        currMonth = date.getMonth();
      } else {
        date = new Date();
      }
      renderCalendar();
    });
  });
});