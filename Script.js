const hamMenu = document.querySelector('.Menu-icon');

const offScreenMenu = document.querySelector('.Navigation-bar');

const cursordot = document.querySelector(".cursor-dot");
const cursoroutline = document.querySelector(".cursor-outline");

const input = document.querySelector("#phone");

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

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
});

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('#Menu-icon');
    offScreenMenu.classList.toggle('active');
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
