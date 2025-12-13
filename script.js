document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    // Toggle navigation menu on hamburger click
    hamburgerMenu.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        
        // Optional: Ganti ikon hamburger menjadi X saat terbuka
        const icon = hamburgerMenu.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Ikon X
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Kembali ke ikon hamburger
        }
    });

    // Close navigation menu when a link is clicked (for mobile)
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                // Pastikan ikon kembali ke hamburger
                hamburgerMenu.querySelector('i').classList.remove('fa-times');
                hamburgerMenu.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Tambahkan bayangan ke header saat di-scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    
});
    // =======================================
    // FUNGSI SCROLL NAVIGASI TIM DI HOMEPAGE
    // =======================================
    const homeTeamWrapper = document.querySelector('.homepage-team-wrapper');
    const homeNavLeft = document.querySelector('.team-nav-left');
    const homeNavRight = document.querySelector('.team-nav-right');

    if (homeTeamWrapper && homeNavLeft && homeNavRight) {
        // Jarak scroll dalam piksel (disesuaikan dengan lebar kartu + gap)
        // Kartu = 280px + Gap (sekitar 30px) = 310px
        const scrollDistance = 310; 

        homeNavLeft.addEventListener('click', () => {
            homeTeamWrapper.scrollBy({
                left: -scrollDistance,
                behavior: 'smooth'
            });
        });

        homeNavRight.addEventListener('click', () => {
            homeTeamWrapper.scrollBy({
                left: scrollDistance,
                behavior: 'smooth'
            });
        });

        // Catatan: Karena di homepage ada animasi infinite scroll, kita tidak perlu 
        // menyembunyikan panah saat scroll mencapai ujung.
    }
    
    // =======================================
    // FUNGSI ACCORDION FAQ (WAJIB)
    // =======================================
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Tutup semua item yang aktif
            document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                if (activeItem !== item) {
                    activeItem.classList.remove('active');
                    activeItem.querySelector('.faq-answer').style.maxHeight = 0;
                }
            });

            // Toggle item yang diklik
            if (!isActive) {
                item.classList.add('active');
                // Set max-height ke scrollHeight untuk animasi
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                item.classList.remove('active');
                answer.style.maxHeight = 0;
            }
        });
    });

// FUNGSI ACCORDION FAQ
// =======================================
document.addEventListener('DOMContentLoaded', function() {
    // ... (kode JS lainnya di sini) ...

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // 1. Tutup semua item yang aktif selain item yang sedang diklik
            document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                if (activeItem !== item) {
                    activeItem.classList.remove('active');
                    // Atur maxHeight ke 0 untuk animasi penutupan
                    activeItem.querySelector('.faq-answer').style.maxHeight = 0; 
                }
            });

            // 2. Toggle (buka/tutup) item yang sedang diklik
            if (!isActive) {
                // BUKA
                item.classList.add('active');
                // Set max-height ke scrollHeight untuk animasi pembukaan
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                // TUTUP (INI ADALAH BAGIAN YANG MUNGKIN HILANG/RUSAK)
                item.classList.remove('active');
                answer.style.maxHeight = 0;
            }
        });
    });

    // ... (kode JS lainnya di sini) ...
});

    // FUNGSI SCROLL NAVIGASI STAF DI SUBPAGE
    // =======================================
    const staffWrapper = document.querySelector('.staff-scroll-wrapper');
    const staffNavLeft = document.querySelector('.staff-nav-left');
    const staffNavRight = document.querySelector('.staff-nav-right');

    if (staffWrapper && staffNavLeft && staffNavRight) {
        const scrollDistance = 310; // Jarak scroll (Lebar Kartu + Gap)

        staffNavLeft.addEventListener('click', () => {
            staffWrapper.scrollBy({
                left: -scrollDistance,
                behavior: 'smooth'
            });
        });

        staffNavRight.addEventListener('click', () => {
            staffWrapper.scrollBy({
                left: scrollDistance,
                behavior: 'smooth'
            });
        });

        // Logika untuk menyembunyikan/menampilkan panah saat di ujung scroll
        const updateStaffNavVisibility = () => {
             // Hanya aktif di mobile/tablet
             if (window.innerWidth <= 1024) {
                 const maxScroll = staffWrapper.scrollWidth - staffWrapper.clientWidth;
                 
                 // Panah Kiri (Hilang saat scroll di posisi 0)
                 staffNavLeft.style.opacity = staffWrapper.scrollLeft === 0 ? '0' : '1';
                 staffNavLeft.style.pointerEvents = staffWrapper.scrollLeft === 0 ? 'none' : 'auto';

                 // Panah Kanan (Hilang saat scroll mencapai ujung)
                 // Toleransi 5px untuk mengatasi floating point issues
                 const isAtEnd = staffWrapper.scrollLeft >= (maxScroll - 5); 
                 staffNavRight.style.opacity = isAtEnd ? '0' : '1';
                 staffNavRight.style.pointerEvents = isAtEnd ? 'none' : 'auto';
             }
        };

        // Jalankan saat load, scroll, dan resize
        updateStaffNavVisibility();
        staffWrapper.addEventListener('scroll', updateStaffNavVisibility);
        window.addEventListener('resize', updateStaffNavVisibility);
    }
    // =======================================
    // FUNGSI SCROLL NAVIGASI LEGALITAS
    // =======================================
    const legalitasWrapper = document.querySelector('.legalitas-scroll-wrapper');
    const legalitasNavLeft = document.querySelector('.legalitas-nav-left');
    const legalitasNavRight = document.querySelector('.legalitas-nav-right');

    if (legalitasWrapper && legalitasNavLeft && legalitasNavRight) {
        // Jarak scroll dalam piksel (Lebar Kartu + Gap)
        const scrollDistance = 270; 

        legalitasNavLeft.addEventListener('click', () => {
            legalitasWrapper.scrollBy({
                left: -scrollDistance,
                behavior: 'smooth'
            });
        });

        legalitasNavRight.addEventListener('click', () => {
            legalitasWrapper.scrollBy({
                left: scrollDistance,
                behavior: 'smooth'
            });
        });

        // Logika untuk menyembunyikan/menampilkan panah saat di ujung scroll
        const updateLegalitasNavVisibility = () => {
             if (window.innerWidth <= 1024) {
                 const maxScroll = legalitasWrapper.scrollWidth - legalitasWrapper.clientWidth;
                 
                 // Panah Kiri
                 legalitasNavLeft.style.opacity = legalitasWrapper.scrollLeft === 0 ? '0' : '1';
                 legalitasNavLeft.style.pointerEvents = legalitasWrapper.scrollLeft === 0 ? 'none' : 'auto';

                 // Panah Kanan
                 const isAtEnd = legalitasWrapper.scrollLeft >= (maxScroll - 5); 
                 legalitasNavRight.style.opacity = isAtEnd ? '0' : '1';
                 legalitasNavRight.style.pointerEvents = isAtEnd ? 'none' : 'auto';
             }
        };

        // Jalankan saat load, scroll, dan resize
        updateLegalitasNavVisibility();
        legalitasWrapper.addEventListener('scroll', updateLegalitasNavVisibility);
        window.addEventListener('resize', updateLegalitasNavVisibility);
    }
    // =======================================
    // SINKRONISASI INDIKATOR DOT GALERI (Estimasi)
    // =======================================
    const galleryDots = document.querySelectorAll('.gallery-indicator .indicator-dot');
    const totalItems = galleryDots.length;
    const animationDuration = 45000; // 45s dalam milidetik (Lihat CSS)

    if (galleryDots.length > 0) {
        // Hitung waktu per slide (total durasi dibagi jumlah item)
        const timePerItem = animationDuration / totalItems;
        let currentActive = 0;

        setInterval(() => {
            // Hapus kelas 'active' dari semua titik
            galleryDots.forEach(dot => dot.classList.remove('active'));

            // Tentukan titik aktif berikutnya
            currentActive = (currentActive + 1) % totalItems;

            // Tambahkan kelas 'active' ke titik baru
            galleryDots[currentActive].classList.add('active');
            
        }, timePerItem);
    }