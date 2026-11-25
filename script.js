
// ===========================
// MOBILE NAVIGATION
// ===========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    lucide.createIcons();

});

// Tutup menu setelah link ditekan

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.innerHTML =
            '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});


// ===========================
// SIMULASI AUDIO
// ===========================

const playButton = document.getElementById("playButton");
const audioNote = document.getElementById("audioNote");

let isPlaying = false;
let speechUtterance = null;

playButton.addEventListener("click", function () {

    if (!("speechSynthesis" in window)) {

        audioNote.textContent =
            "Browser Anda belum mendukung fitur suara.";

        return;

    }

    if (isPlaying) {

        window.speechSynthesis.cancel();

        isPlaying = false;

        playButton.innerHTML =
            '<i data-lucide="play"></i> <span>Putar Contoh Bacaan</span>';

        audioNote.textContent =
            "Audio dihentikan.";

        lucide.createIcons();

        return;

    }

    const textArab = "قُلْ هُوَ اللَّهُ أَحَدٌ";

    speechUtterance = new SpeechSynthesisUtterance(textArab);

    speechUtterance.lang = "ar-SA";
    speechUtterance.rate = 0.7;
    speechUtterance.pitch = 1;

    speechUtterance.onstart = function () {

        isPlaying = true;

        playButton.innerHTML =
            '<i data-lucide="pause"></i> <span>Hentikan Audio</span>';

        audioNote.textContent =
            "Sedang memutar contoh pelafalan...";

        lucide.createIcons();

    };

    speechUtterance.onend = function () {

        isPlaying = false;

        playButton.innerHTML =
            '<i data-lucide="play"></i> <span>Putar Ulang Bacaan</span>';

        audioNote.textContent =
            "Selesai. Silakan dengarkan kembali.";

        lucide.createIcons();

    };

    speechUtterance.onerror = function () {

        isPlaying = false;

        playButton.innerHTML =
            '<i data-lucide="play"></i> <span>Putar Contoh Bacaan</span>';

        audioNote.textContent =
            "Suara Arab tidak tersedia di browser ini.";

        lucide.createIcons();

    };

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speechUtterance);

});


// ===========================
// ANIMASI SAAT SCROLL
// ===========================

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);

document.querySelectorAll(
    ".feature-card, .testimonial-card, .stat-item, .curriculum-item"
).forEach(element => {

    observer.observe(element);

});


// ===========================
// TAHUN OTOMATIS FOOTER
// ===========================

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} TPQ DARUL AL-MANNAN. Semua Hak Dilindungi.`;

}
