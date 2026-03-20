$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  if (document.querySelector(".typing")) {
    var typed = new Typed(".typing", {
      strings: [
        "Software Developer",
        "Java FullStack Developer",
        "AWS Cloud Developer",
        "Innovation Awardee @ VWGDS",
        "INSTAPAT Awardee @ VWGDS",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  if (document.querySelector(".typing-2")) {
    var typed2 = new Typed(".typing-2", {
      strings: [
        "Software Developer",
        "Java FullStack Developer",
        "AWS Developer Associate",
        "Innovation Awardee @ VWITS",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
      1400: {
        items: 5,
        nav: false,
      },
    },
  });

  emailjs.init("5MdPMN2b13N8CVX7X");

  $("#contact-form").on("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_1b8dkfa", "template_l73agcu", this).then(
      function () {
        alert("✅ Message sent successfully!");
        $("#contact-form")[0].reset();
      },
      function (error) {
        console.error("❌ Failed to send message:", error);
        alert("❌ Failed to send message. Please try again.");
      }
    );
  });

  // ✅ Dynamically set the current year in the footer
  $("#year").text(new Date().getFullYear());
});
