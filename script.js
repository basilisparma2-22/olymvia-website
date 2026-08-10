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

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

}

// ==========================
// Language Switcher
// ==========================

const translations = {

    gr: {
        navHome: "Αρχική",
        navServices: "Δράσεις",
        navAbout: "Σχετικά",
        navProjects: "Προγράμματα",
        navContact: "Επικοινωνία",

        heroText: "Δημιουργούμε ευκαιρίες για νέους μέσα από Erasmus+ ανταλλαγές, εκπαιδευτικά προγράμματα και εθελοντικές δράσεις.",
        heroButton: "Γίνε μέρος της εμπειρίας",

        servicesTitle: "Οι Δράσεις μας",
        youthExchangeText: "Συμμετοχή σε διεθνείς ανταλλαγές νέων, γνωριμία με διαφορετικούς πολιτισμούς και ανάπτυξη νέων δεξιοτήτων.",
        trainingText: "Εκπαιδευτικά προγράμματα που ενισχύουν την προσωπική ανάπτυξη, τη συνεργασία και τη δημιουργικότητα.",
        volunteeringTitle: "Εθελοντικές Δράσεις",
        volunteeringText: "Ευκαιρίες ενεργού συμμετοχής στην κοινωνία μέσα από τοπικές και ευρωπαϊκές πρωτοβουλίες.",
        
        aboutTitle: "Σχετικά με την OLYMVIA",

        aboutText1: 'Η OLYMVIA γεννήθηκε στην <a href="https://el.wikipedia.org/wiki/Πιερία" target="_blank" rel="noopener">Πιερία</a>, έναν τόπο όπου η ιστορία, η φύση και ο πολιτισμός συναντιούνται. Στη σκιά του μυθικού Ολύμπου, δημιουργούμε γέφυρες επικοινωνίας ανάμεσα στους νέους της Ελλάδας και της Ευρώπης.',

        aboutText2: "Μέσα από προγράμματα Erasmus+, ανταλλαγές νέων, εκπαιδευτικά σεμινάρια και εθελοντικές δράσεις, προσφέρουμε ευκαιρίες για μάθηση, προσωπική ανάπτυξη και ενεργή συμμετοχή.",

        aboutText3: "Ο Όλυμπος, το βουνό των Θεών, αποτελεί για εμάς σύμβολο έμπνευσης, εξέλιξης και νέων οριζόντων — αξίες που θέλουμε να μεταφέρουμε σε κάθε μας δράση.",

        aboutButton: "Ανακάλυψε τις δράσεις μας",

        projectsTitle: "Οι Ευκαιρίες μας",

        projectYouthText: "Διεθνείς ανταλλαγές νέων μέσω Erasmus+ με στόχο τη γνωριμία πολιτισμών, τη συνεργασία και την ανάπτυξη νέων δεξιοτήτων.",

        projectTrainingText: "Εκπαιδευτικά σεμινάρια για νέους που θέλουν να εξελιχθούν προσωπικά και επαγγελματικά.",

        projectVolunteerText: "Εθελοντικές δράσεις που ενισχύουν την ενεργή συμμετοχή και την κοινωνική προσφορά.",

        contactTitle: "Επικοινωνία",
        contactInfo: "Στοιχεία",

        phoneLabel: "Τηλέφωνο",
        emailLabel: "Email",
        locationLabel: "Πιερία, Ελλάδα",

        namePlaceholder: "Όνομα",
        emailPlaceholder: "Email",
        interestPlaceholder: "Επιλέξτε ενδιαφέρον",
        messagePlaceholder: "Το μήνυμά σας",
        submitButton: "Αποστολή",

        interestYouthExchange: "Erasmus+ Youth Exchange",
        interestTrainingCourse: "Training Course",
        interestVolunteering: "Εθελοντική Δράση",
        interestPartnership: "Συνεργασία οργανισμών",

        footerText: "Δημιουργούμε ευκαιρίες για νέους μέσα από Erasmus+ προγράμματα, εκπαιδευτικές δράσεις και εθελοντισμό στην Ελλάδα και την Ευρώπη.",

        copyright: "© 2026 OLYMVIA. Όλα τα δικαιώματα διατηρούνται.",

        teamTitle: "Η Ομάδα μας",

        teamPresident: "Πρόεδρος",
        teamPresidentText: "queeeeen slay",

        teamProjectManager: "Υπεύθυνος Έργων",
        teamProjectManagerText: "μαγειρεύει γενικά και έτσι",

        teamYouthWorker: "Youth Worker",
        teamYouthWorkerText: "Βλέπει τον καιρό",

        teamCoordinator: "Συντονιστής",
        teamCoordinatorText: "Βλέπει το μέλλον",

        teamVolunteerCoordinator: "Συντονιστής Εθελοντών",
        teamVolunteerCoordinatorText: "Δεν βλέπει (έχει μυωπία)",

        networkTitle: "Το Διεθνές μας Δίκτυο",
        networkText: "Συνεργαζόμαστε με οργανισμούς και συμμετέχοντες σε όλη την Ευρώπη.",

        headquarters: "Έδρα",
        partnerOrganizations: "Οργανισμοί-Εταίροι",
        trainingPartners: "Εκπαιδευτικοί Εταίροι",
        projects: "Προγράμματα",

        galleryTitle: "Στιγμές από τα Προγράμματά μας",
        galleryText: "Ανακάλυψε στιγμές από τις δράσεις μας, τις ανταλλαγές και τις διεθνείς εμπειρίες.",

        testimonialsTitle: "Τι λένε οι Συμμετέχοντες",
        testimonialsText: "Εμπειρίες και ιστορίες νέων που συμμετείχαν στα προγράμματά μας.",

        testimonial1: "«Αυτή η εμπειρία άλλαξε τον τρόπο που βλέπω την Ευρώπη. Γνώρισα υπέροχους ανθρώπους και έμαθα τόσα πολλά από διαφορετικούς πολιτισμούς.»",
        testimonial1Role: "Ισπανία - Συμμετέχουσα σε Youth Exchange",

        testimonial2: "«Το πρόγραμμα με βοήθησε να αναπτύξω νέες δεξιότητες, να αποκτήσω περισσότερη αυτοπεποίθηση και να δημιουργήσω φιλίες που διαρκούν.»",
        testimonial2Role: "Ιταλία - Συμμετέχων σε Erasmus+",

        testimonial3: "«Μια μοναδική ευκαιρία να συνδεθούμε, να μάθουμε και να αναλάβουμε δράση για ένα πιο βιώσιμο μέλλον.»",
        testimonial3Role: "Γερμανία - Συμμετέχουσα σε Training Course",

        phoneLabel: "Τηλέφωνο",
        emailLabel: "Email",
        locationLabel: "Πιερία, Ελλάδα",

        namePlaceholder: "Όνομα",
        emailPlaceholder: "Email",
        interestPlaceholder: "Επιλέξτε ενδιαφέρον",
        messagePlaceholder: "Το μήνυμά σας",
        submitButton: "Αποστολή",

        interestYouthExchange: "Erasmus+ Youth Exchange",
        interestTrainingCourse: "Training Course",
        interestVolunteering: "Εθελοντική Δράση",
        interestPartnership: "Συνεργασία οργανισμών",

        footerTagline: "Ancient Roots - New Horizons",

        namePlaceholder: "Όνομα",
        messagePlaceholder: "Το μήνυμά σας",

        formSending: "Αποστολή...",
        formSuccess: "Το μήνυμά σας στάλθηκε με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα.",
        formError: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.",
        formConnectionError: "Δεν ήταν δυνατή η αποστολή. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.",

        projectButton: "Μάθε περισσότερα",

    },

    en: {
        navHome: "Home",
        navServices: "Activities",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",

        heroText: "We create opportunities for young people through Erasmus+ exchanges, training programs and volunteering activities.",
        heroButton: "Be part of the experience",

        servicesTitle: "Our Activities",
        youthExchangeText: "Take part in international youth exchanges, discover different cultures and develop new skills.",
        trainingText: "Training programs that support personal development, cooperation and creativity.",
        volunteeringTitle: "Volunteering Activities",
        volunteeringText: "Opportunities to actively participate in society through local and European initiatives.",

        aboutTitle: "About OLYMVIA",

        aboutText1: 'OLYMVIA was born in <a href="https://en.wikipedia.org/wiki/Pieria_(regional_unit)" target="_blank" rel="noopener">Pieria</a>, a place where history, nature and culture meet. In the shadow of mythical Mount Olympus, we create bridges of communication between young people from Greece and Europe.',

        aboutText2: "Through Erasmus+ programs, youth exchanges, training courses and volunteering activities, we offer opportunities for learning, personal development and active participation.",

        aboutText3: "Mount Olympus, the mountain of the Gods, is a symbol of inspiration, growth and new horizons for us — values that we aim to carry into every activity we organize.",

        aboutButton: "Discover our activities",

        projectsTitle: "Our Opportunities",

        projectYouthText: "International youth exchanges through Erasmus+ focused on discovering cultures, cooperation and developing new skills.",

        projectTrainingText: "Training courses for young people who want to grow personally and professionally.",

        projectVolunteerText: "Volunteering activities that encourage active participation and social contribution.",

        contactTitle: "Contact",

        contactInfo: "Contact Details",

        footerText: "We create opportunities for young people through Erasmus+ programs, training activities and volunteering in Greece and across Europe.",

        copyright: "© 2026 OLYMVIA. All rights reserved.",

        teamTitle: "Meet Our Team",

        teamPresident: "President",
        teamPresidentText: "queeeeen slay",

        teamProjectManager: "Project Manager",
        teamProjectManagerText: "cooks in general and stuff",

        teamYouthWorker: "Youth Worker",
        teamYouthWorkerText: "Watches the weather",

        teamCoordinator: "Coordinator",
        teamCoordinatorText: "Sees the future",

        teamVolunteerCoordinator: "Volunteer Coordinator",
        teamVolunteerCoordinatorText: "Can't see (he's short-sighted)",

        networkTitle: "Our International Network",
        networkText: "We collaborate with organizations and participants across Europe.",

        headquarters: "Headquarters",
        partnerOrganizations: "Partner Organizations",
        trainingPartners: "Training Partners",
        projects: "Projects",

        galleryTitle: "Moments From Our Projects",
        galleryText: "Discover highlights from our activities, exchanges and international experiences.",

        testimonialsTitle: "What Participants Say",
        testimonialsText: "Experiences and stories from young people who joined our projects.",

        testimonial1: "\"This experience changed the way I see Europe. I met amazing people and learned so much from different cultures.\"",
        testimonial1Role: "Spain - Youth Exchange Participant",

        testimonial2: "\"The project helped me develop new skills, become more confident and create friendships that last.\"",
        testimonial2Role: "Italy - Erasmus+ Participant",

        testimonial3: "\"A unique opportunity to connect, learn and take action for a more sustainable future.\"",
        testimonial3Role: "Germany - Training Course Participant",

        phoneLabel: "Phone",
        emailLabel: "Email",
        locationLabel: "Pieria, Greece",

        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        interestPlaceholder: "Select your interest",
        messagePlaceholder: "Your message",
        submitButton: "Send",

        interestYouthExchange: "Erasmus+ Youth Exchange",
        interestTrainingCourse: "Training Course",
        interestVolunteering: "Volunteering Activity",
        interestPartnership: "Organization Partnership",

        footerTagline: "Ancient Roots - New Horizons",

        namePlaceholder: "Name",
        messagePlaceholder: "Your message",

        formSending: "Sending...",
        formSuccess: "Your message has been sent successfully! We will get back to you soon.",
        formError: "Something went wrong. Please try again.",
        formConnectionError: "Unable to send your message. Please check your connection and try again.",

        projectButton: "Learn more",

    }

};


// Change language

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(element => {

        const key = element.getAttribute("data-translate");

        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }

    });

    const placeholders = document.querySelectorAll("[data-translate-placeholder]");

    placeholders.forEach(element => {

        const key = element.getAttribute("data-translate-placeholder");

        if (translations[language][key]) {
            element.placeholder = translations[language][key];
        }

    });

    // Change active button

    document.getElementById("gr-btn").classList.remove("active");
    document.getElementById("en-btn").classList.remove("active");

    if (language === "gr") {
        document.getElementById("gr-btn").classList.add("active");
    } else {
        document.getElementById("en-btn").classList.add("active");
    }

    document.documentElement.lang = language === "gr" ? "el" : "en";

}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");
    const currentLanguage =
        document.documentElement.lang === "en" ? "en" : "gr";

    submitButton.disabled = true;
    submitButton.textContent = translations[currentLanguage].formSending;

    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            contactForm.reset();

            formStatus.textContent =
                translations[currentLanguage].formSuccess;

            formStatus.classList.add("success");

        } else {

            formStatus.textContent =
                translations[currentLanguage].formError;

            formStatus.classList.add("error");
        }

    } catch (error) {

        formStatus.textContent =
            translations[currentLanguage].formConnectionError;

        formStatus.classList.add("error");

    } finally {

        submitButton.disabled = false;

        const submitKey = "submitButton";

        submitButton.textContent =
            translations[currentLanguage][submitKey];
    }

});

// Language buttons

document.getElementById("gr-btn").addEventListener("click", () => {
    changeLanguage("gr");
});

document.getElementById("en-btn").addEventListener("click", () => {
    changeLanguage("en");
});

changeLanguage("gr");

const customScrollbar = document.getElementById("custom-scrollbar");
const scrollThumb = document.getElementById("scroll-thumb");

function updateCustomScrollbar() {

    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const maxScroll = documentHeight - windowHeight;
    const trackHeight = windowHeight;
    const thumbHeight = scrollThumb.offsetHeight;

    const maxThumbPosition = trackHeight - thumbHeight;

    const thumbPosition =
        (scrollTop / maxScroll) * maxThumbPosition;

    scrollThumb.style.top = `${thumbPosition}px`;
}

window.addEventListener("scroll", updateCustomScrollbar);
window.addEventListener("resize", updateCustomScrollbar);

updateCustomScrollbar();

let isDraggingScrollbar = false;

scrollThumb.addEventListener("mousedown", (e) => {

    isDraggingScrollbar = true;

    e.preventDefault();

});

document.addEventListener("mousemove", (e) => {

    if (!isDraggingScrollbar) return;

    const trackHeight = window.innerHeight;
    const thumbHeight = scrollThumb.offsetHeight;

    const maxThumbPosition = trackHeight - thumbHeight;

    let newPosition = e.clientY - (thumbHeight / 2);

    newPosition = Math.max(0, newPosition);
    newPosition = Math.min(maxThumbPosition, newPosition);

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const maxScroll = documentHeight - windowHeight;

    const scrollPosition =
        (newPosition / maxThumbPosition) * maxScroll;

    window.scrollTo({
        top: scrollPosition,
        behavior: "instant"
    });

});

document.addEventListener("mouseup", () => {

    isDraggingScrollbar = false;

});

document.addEventListener("mousemove", (e) => {

    if (!isDraggingScrollbar) return;

    const deltaY = e.clientY - dragStartY;

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const maxScroll = documentHeight - windowHeight;

    const trackHeight = windowHeight;
    const thumbHeight = scrollThumb.offsetHeight;

    const maxThumbPosition = trackHeight - thumbHeight;

    const scrollAmount =
        (deltaY / maxThumbPosition) * maxScroll;

    window.scrollTo(
        0,
        dragStartScroll + scrollAmount
    );

});

document.addEventListener("mouseup", () => {

    isDraggingScrollbar = false;

});