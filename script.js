$(document).ready(function () {
    $(window).scroll(function () {
        // script navbar menempel saat di scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // script tombol scroll-up muncul/hilang
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // script slide-up
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // menghapus smooth scroll saat tombol slide-up di klik
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // menambahkan kembali smooth scroll saat menu item di klik
        $('html').css("scrollBehavior", "smooth");
    });

    // script toggle menu/navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // script animasi pengetikan teks
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var fadeIns = document.querySelectorAll('.fade-in');

    // Fungsi untuk mengecek apakah elemen sudah masuk ke dalam viewport
    function checkFadeIns() {
        fadeIns.forEach(function (fadeIn) {
            var bounding = fadeIn.getBoundingClientRect();
            if (bounding.top < window.innerHeight * 0.5 && bounding.bottom > 0) { // Ubah nilai 0.5 sesuai dengan kebutuhan
                fadeIn.classList.add('show');
            } else {
                fadeIn.classList.remove('show');
            }
        });
    }

    // Panggil fungsi checkFadeIns saat halaman dimuat dan di-scroll
    window.addEventListener('DOMContentLoaded', checkFadeIns);
    window.addEventListener('scroll', checkFadeIns);


    // script owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});