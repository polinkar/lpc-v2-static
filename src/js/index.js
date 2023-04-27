gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Smooth Scroll
const smoothScroll = () => {
  let smoother = ScrollSmoother.create({
    smooth: 1,
    content: ".scroll-smoother-container",
  });
};
smoothScroll();

// Images Loaded
const main = document.querySelector(".main");

// Get all images
const imgLoad = imagesLoaded(main);

imgLoad.on("done", (instance) => {
  const heroSection = document.querySelector(".hero");
  const earth = document.querySelector(".spheres__image-container--earth");
  const green = document.querySelector(".spheres__image-container--green");
  const blue = document.querySelector(".spheres__image-container--blue");

  const accentText = document.querySelectorAll(".hero__word span");

  const sustainable = document.querySelector(".hero__sustainable span");
  const producer = document.querySelector(".hero__producer span");
  const trader = document.querySelector(".hero__trader span");

  // Hero Scene
  const heroTimeline = gsap.timeline({
    paused: true,
    onComplete: () => {
      // Make sure the user can't scroll during the observer scene
      document.querySelector("body").style.overflowY = "visible";
    },
  });

  const normalScroll = () => {
    intentObserver.disable();
  };

  let intentObserver = ScrollTrigger.observe({
    type: "wheel,touch",

    onDown: () => {
      heroTimeline.tweenTo(heroTimeline.nextLabel());
      console.log(heroTimeline.nextLabel());
      if (
        heroTimeline.nextLabel() === "reset" ||
        heroTimeline.nextLabel() === undefined
      )
        normalScroll();
    },
    tolerance: 10,
    preventDefault: true,
  });

  intentObserver.disable();

  // Intro
  const introTimeline = gsap.timeline({
    onUpdate: () => {
      const progress = introTimeline.progress();
      if (progress >= 0.7) {
        // Enable observer at the right moment for better UX
        intentObserver.enable();
      }
    },

    onComplete: () => {
      // Mouse Move
      heroSection.addEventListener("mousemove", (e) => {
        // Spheres
        gsap.to(".spheres-small__image-container", {
          x: -e.clientX / 50,
          y: -(e.clientX / 75),
          duration: 5,
          ease: "expo.out",
          stagger: 0.1,
        });
      });

      // Scroll
      window.addEventListener("scroll", (e) => {
        // Spheres
        gsap.to(".spheres-small__image-container", {
          y: -window.scrollY / 2,
          duration: 5,
          ease: "expo.out",
        });
      });
    },
  });

  introTimeline

    // Loader
    .fromTo(
      ".loader",
      {
        x: "0",
      },
      {
        x: "-200%",
        duration: 4,
        ease: "circ.out",
        delay: 0.2,
        display: "none",
      }
    )
    .fromTo(
      ".loader",
      {
        opacity: 1,
      },
      {
        opacity: 0,

        duration: 4,
        ease: "circ.out",
        delay: 0.2,
        display: "none",
      },
      "<+0.3"
    )
    .fromTo(
      ".hero__heading",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<0.6"
    )
    .fromTo(
      ".header",
      {
        opacity: 0,
        duration: 2,
        ease: "circ.out",
      },
      {
        opacity: 1,
      }
    );

  // Whole Page
  // Mouse Move Gradient Glow
  window.addEventListener("mousemove", (e) => {
    // Gradient
    gsap.to(".gradient-bg", {
      x: e.clientX,

      duration: 5,
      ease: "expo.out",
    });
  });

  // Scroll
  window.addEventListener("scroll", (e) => {
    // Gradient
    gsap.to(".gradient-bg", {
      y: window.scrollY,
      duration: 5,
      ease: "expo.out",
    });
  });

  // Entrances Gradient Glow

  const fadeInOnScroll = document.querySelectorAll(".fade-in");
  const fadeInUpOnScroll = document.querySelectorAll(".fade-in-up");
  const fadeInStaggerOnScroll = document.querySelectorAll(".fade-in-stagger");

  fadeInOnScroll.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          // markers: true,
          trigger: item,
          duration: 2,
          start: "-130% 50%",
          // end: "600% 50%",
          // toggleActions: "play none restart none",
        },
      }
    );
  });

  fadeInUpOnScroll.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          // markers: true,
          trigger: item,
          duration: 2,
          start: "-110% 60%",
          // end: "600% 50%",
          // toggleActions: "play none restart none",
        },
      }
    );
  });

  gsap.fromTo(
    ".fade-in-stagger",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 3,
      ease: "expo.out",
      scrollTrigger: {
        // markers: true,
        trigger: ".news",

        start: "top 60%",

        // end: "600% 50%",
        // toggleActions: "play none restart none",
      },
    }
  );

  // Click Events

  sustainable.addEventListener("click", () => {
    // const time = heroTimeline.getTweensOf(green)[0].endTime() + 0.5; // subtract 0.1 seconds as an offset
    // console.log(heroTimeline);
    // console.log(heroTimeline.labels);
    // heroTimeline.play("start");
    heroTimeline.tweenFromTo(0, "greenTimeline");
  });

  producer.addEventListener("click", () => {
    heroTimeline.tweenFromTo("greenTimeline", "blueTimeline");
  });
  trader.addEventListener("click", () => {
    heroTimeline.tweenFromTo("blueTimeline", "earthTimeline");
  });
});
