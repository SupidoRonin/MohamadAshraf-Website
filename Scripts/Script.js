const hamMenu = document.querySelector('.Menu-icon');
const offScreenMenu = document.querySelector('.Navigation-bar');

const cursordot = document.querySelector(".cursor-dot");
const cursoroutline = document.querySelector(".cursor-outline");

const input = document.querySelector("#phone");

const statusDiv = document.getElementById('status');

// Hamburger Menu Toggle
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('#Menu-icon');
    offScreenMenu.classList.toggle('active');
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop watching after it's visible
    }
  });
}, {
  threshold: 0.1
});

// Notification Fade Animation
document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});

// Notification Message
function showNotification(message, className) {
  statusDiv.textContent = message;
  statusDiv.className = `status-notification ${className} show`;

  // Hide after 5 seconds
  setTimeout(() => {
    statusDiv.classList.remove('show');
  }, 5000);
}

// Offline Mode
window.addEventListener('offline', () => {
  showNotification('You are offline', 'offline');
});

// Online Mode
window.addEventListener('online', () => {
  showNotification('You are back online', 'online');
});

// Mouse Position Indicator
window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursordot.style.left = `${posX}px`;
    cursordot.style.top = `${posY}px`;

    cursoroutline.animate({
        left: `${posX}px`,
        top: `${posY}px`,
    }, {duration: 50, fill: "forwards"})

    if (e.target.id === "dot"){
        cursordot.classList.add("active");
    }
    else{
        cursordot.classList.remove("active");
    }

    if (e.target.id === "outline"){
        cursoroutline.classList.add("active");
    }
    else{
        cursoroutline.classList.remove("active");
    }
});

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    })
});

window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: callback => {
      fetch('https://ipapi.co/json')
        .then(res => res.json())
        .then(data => callback(data.country_code))
        .catch(() => callback('us'));
    },
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
});