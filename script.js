// Επιλογή όλων των στοιχείων με class="hidden"
const hiddenElements = document.querySelectorAll(".hidden");

// Δημιουργία observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
        }

    });
});

// Παρακολούθηση όλων των sections
hiddenElements.forEach((element) => {
    observer.observe(element);
});

// Navbar Scroll Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

const map = L.map('map').setView([50, 10], 4);


L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO'
}).addTo(map);


const countries = [
    {
        name: "Greece 🇬🇷",
        coords: [39.0742, 21.8243],
        type: "Headquarters",
        info: "Youth Exchanges, Training Courses and Environmental Projects"
    },

    {
        name: "Spain 🇪🇸",
        coords: [40.4637, -3.7492],
        type: "Partner Organization",
        info: "European cooperation and youth mobility projects"
    },

    {
        name: "Italy 🇮🇹",
        coords: [41.8719, 12.5674],
        type: "Training Partner",
        info: "Learning activities and Erasmus+ collaborations"
    },

    {
        name: "Germany 🇩🇪",
        coords: [51.1657, 10.4515],
        type: "Partner Organization",
        info: "International networking and cooperation"
    }
];

const blueIcon = L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    iconSize: [32,32]
});

const redIcon = L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    iconSize: [32,32]
});

const greenIcon = L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
    iconSize: [32,32]
});

const yellowIcon = L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    iconSize: [32,32]
});

const purpleIcon = L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png',
    iconSize: [32,32]
});



countries.forEach(country => {

    let icon;

    if (country.type === "Headquarters") {
        icon = yellowIcon;
    }
    else if (country.type === "Partner Organization") {
        icon = blueIcon;
    }
    else if (country.type === "Training Partner") {
        icon = purpleIcon;
    }
    else {
        icon = greenIcon;
    }


    L.marker(country.coords, {
        icon: icon
    })
    .addTo(map)
    .bindPopup(`
        <div class="map-popup">
            <h3>${country.name}</h3>
            <strong>${country.type}</strong>
            <p>${country.info}</p>
        </div>
    `);

});

const teamContainer = document.querySelector(".team-container");
const teamNext = document.querySelector(".team-next");
const teamPrev = document.querySelector(".team-prev");

teamNext.addEventListener("click", () => {

    const card = teamContainer.querySelector(".team-card");
    const gap = 20;
    const slideWidth = card.offsetWidth + gap;

    teamContainer.scrollBy({
        left: slideWidth,
        behavior: "smooth"
    });

});

teamPrev.addEventListener("click", () => {

    const card = teamContainer.querySelector(".team-card");
    const gap = 20;
    const slideWidth = card.offsetWidth + gap;

    teamContainer.scrollBy({
        left: -slideWidth,
        behavior: "smooth"
    });

});

const galleryContainer = document.querySelector(".gallery-container");
const galleryNext = document.querySelector(".gallery-next");
const galleryPrev = document.querySelector(".gallery-prev");

galleryNext.addEventListener("click", () => {

    const slideWidth = galleryContainer.clientWidth;

    galleryContainer.scrollBy({
        left: slideWidth + 20,
        behavior: "smooth"
    });

});

galleryPrev.addEventListener("click", () => {

    const slideWidth = galleryContainer.clientWidth;

    galleryContainer.scrollBy({
        left: -(slideWidth + 20),
        behavior: "smooth"
    });

});

const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialNext = document.querySelector(".testimonial-next");
const testimonialPrev = document.querySelector(".testimonial-prev");

testimonialNext.addEventListener("click", () => {

    const card = testimonialContainer.querySelector(".testimonial-card");
    const gap = 20;
    const slideWidth = card.offsetWidth + gap;

    testimonialContainer.scrollBy({
        left: slideWidth,
        behavior: "smooth"
    });

});

testimonialPrev.addEventListener("click", () => {

    const card = testimonialContainer.querySelector(".testimonial-card");
    const gap = 20;
    const slideWidth = card.offsetWidth + gap;

    testimonialContainer.scrollBy({
        left: -slideWidth,
        behavior: "smooth"
    });

});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}