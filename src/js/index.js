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

gsap.fromTo(
  ".loader__line--accent",
  {
    width: "0",
  },
  {
    width: "100%",
    duration: 4,
    ease: "circ.out",
    delay: 0.2,
  }
);

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
    .to(
      ".loader__line--accent",

      {
        width: "100%",
        duration: 4,
        ease: "circ.out",
        delay: 0.2,
      }
    )
    .fromTo(
      ".loader",
      {
        opacity: 1,
      },
      {
        opacity: 0,

        duration: 0.5,
        ease: "circ.out",
        delay: 0.2,
      }
    )
    // Header
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
    )
    // SCENE 1
    // Image Reveal
    .fromTo(
      ".hero__image-container--1",
      {
        opacity: 0,
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      },
      {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
        // duration: 2,
      },
      "<0.2"
    )

    // Lines
    .fromTo(
      ".hero__line",
      {
        opacity: 0,
        x: "100vw",
      },
      {
        opacity: 1,
        x: 0,
        ease: "circ.out",
        duration: 1.4,
        stagger: 0.2,
      },
      "<"
    )
    // Elements
    .fromTo(
      ".hero__element-container-1--sphere",
      {
        opacity: 0,
        x: "-100vw",
      },
      {
        opacity: 1,
        x: 0,
        ease: "expo.out",
        duration: 2.5,
      },
      "<+0.2"
    )
    .fromTo(
      ".hero__element-container-1--molecule",
      {
        opacity: 0,
        x: "100vw",
      },
      {
        opacity: 1,
        x: 0,
        ease: "expo.out",
        duration: 2.5,
      },
      "<+0.2"
    )

    // Image Mask
    .fromTo(
      ".hero__image-container--1",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 10%, 100% 10%, 100% 90%, 0% 90%)",
        ease: "back.out(1.7)",
        // duration: 2,
      },
      "<0.5"
    )

    // Word
    .fromTo(
      ".hero__word--lpc-is",
      {
        // opacity: 0,
        x: "100vw",
      },
      {
        // opacity: 1,
        x: 0,
        ease: "back.out(0.7)",
        duration: 1.4,
      },
      "<0.2"
    );

  // SCENE 2
  // Lines
  heroTimeline
    .to(".hero__line", {
      opacity: 0,
      x: "-100vw",
      ease: "circ.in",
      duration: 1.4,
      stagger: 0.2,
    })
    // Elements 1 Out
    .to(
      ".hero__element-container-1--sphere",
      {
        opacity: 0,
        x: "-100vw",
        ease: "expo.in",
        duration: 2.5,
      },
      "<+0.2"
    )
    .to(
      ".hero__element-container-1--molecule",

      {
        opacity: 0,
        x: "100vw",
        ease: "expo.in",
        duration: 2.5,
      },
      "<+0.2"
    )
    // Image 1 Out
    .to(
      ".hero__image-container--1",

      {
        opacity: 0,
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
        ease: "circ.out",

        // duration: 2,
      },
      "<0.2"
    )
    // Word 1 Out
    .to(
      ".hero__word--lpc-is",

      {
        opacity: 0,
        x: "-100vw",
        ease: "back.in(0.7)",
        duration: 1.4,
      },
      "<0.2"
    )

    // Word 2 In
    .fromTo(
      ".hero__word--sustainable",
      {
        // opacity: 0,
        x: "-100vw",
      },
      {
        // opacity: 1,
        x: 0,
        ease: "back.out(0.7)",
        duration: 1.4,
      },
      "<0.8"
    )
    // Lines 2 In
    .fromTo(
      ".hero__line",
      {
        opacity: 0,
        x: "100vw",
      },
      {
        opacity: 1,
        x: 0,
        ease: "circ.out",
        duration: 1.4,
        stagger: 0.2,
      },
      "<"
    )
    // Image 2 Reveal
    .fromTo(
      ".hero__image-container--2",
      {
        opacity: 0,
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      },
      {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
        // duration: 2,
      }
    )
    .fromTo(
      ".hero__image-container--2",
      {
        x: 0,
      },
      {
        x: "-10vw",
        ease: "circ.out",
        // duration: 2,
      },
      "<0.3"
    )
    // Elements 2 In
    .fromTo(
      ".hero__element-container-2",
      {
        opacity: 0,
        x: "-100vw",
      },
      {
        opacity: 1,
        x: 0,
        ease: "expo.out",
        duration: 2.5,
        stagger: 0.3,
      },
      "<+0.2"
    )
    .addLabel("scene1")

    // SCENE 3
    // Lines
    .to(".hero__line", {
      opacity: 0,
      x: "-100vw",
      ease: "circ.in",
      duration: 1.4,
      stagger: 0.2,
    })
    // Elements 2 Out
    .to(
      ".hero__element-container-2",

      {
        opacity: 0,
        x: "100vw",
        ease: "expo.in",
        duration: 2.5,
        stagger: 0.3,
      },
      "<+0.8"
    )
    // Image 2 Out
    .to(
      ".hero__image-container--2",

      {
        opacity: 0,
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
        ease: "circ.out",

        // duration: 2,
      },
      "<0.2"
    )
    // Word 2 Out
    .to(
      ".hero__word--sustainable",

      {
        opacity: 0,
        x: "100vw",
        ease: "back.in(0.7)",
        duration: 1.4,
      },
      "<0.2"
    )
    // Image 3 In
    .fromTo(
      ".hero__image-container--3",
      {
        opacity: 0,
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      },
      {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
        // duration: 2,
      }
    )
    .fromTo(
      ".hero__image-container--3",
      {
        x: 0,
      },
      {
        x: "10vw",
        ease: "circ.out",
        // duration: 2,
      },
      "<0.3"
    )
    // Lines 2 In
    .fromTo(
      ".hero__line",
      {
        opacity: 0,
        x: "100vw",
      },
      {
        opacity: 1,
        x: 0,
        ease: "circ.out",
        duration: 1.4,
        stagger: 0.2,
      },
      "<"
    )

    // Word 3 In
    .fromTo(
      ".hero__word--producer",
      {
        // opacity: 0,
        x: "100vw",
      },
      {
        // opacity: 1,
        x: 0,
        ease: "back.out(0.7)",
        duration: 1.4,
      },
      "<0.2"
    )

    // Elements 3 In
    .fromTo(
      ".hero__element-container-3",
      {
        opacity: 0,
        y: "-100vh",
      },
      {
        opacity: 1,
        y: 0,
        ease: "expo.out",
        duration: 2.5,
        stagger: 0.3,
      },
      "<+0.2"
    )
    .addLabel("scene3")

    // SCENE 4
    // Lines 3 Out
    .to(".hero__line", {
      opacity: 0,
      x: "-100vw",
      ease: "circ.in",
      duration: 1.4,
      stagger: 0.2,
    })
    // Elements 3 Out
    .to(
      ".hero__element-container-3",

      {
        opacity: 0,
        y: "100vh",
        ease: "expo.in",
        duration: 2.5,
        stagger: 0.3,
      },
      "<+0.8"
    )
    // Image 3 Out
    .to(
      ".hero__image-container--3",

      {
        opacity: 0,
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
        ease: "circ.out",

        // duration: 2,
      },
      "<0.2"
    )
    // Word 3 Out
    .to(
      ".hero__word--producer",

      {
        opacity: 0,
        x: "-100vw",
        ease: "back.in(0.7)",
        duration: 1.4,
      },
      "<0.2"
    )
    // Image 4 In
    .fromTo(
      ".hero__image-container--4",
      {
        opacity: 0,
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      },
      {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
        // duration: 2,
      }
    )
    .fromTo(
      ".hero__image-container--4",
      {
        x: 0,
      },
      {
        x: "-10vw",
        ease: "circ.out",
        // duration: 2,
      },
      "<0.3"
    )
    // Lines 4 In
    .fromTo(
      ".hero__line",
      {
        opacity: 0,
        x: "100vw",
      },
      {
        opacity: 1,
        x: 0,
        ease: "circ.out",
        duration: 1.4,
        stagger: 0.2,
      },
      "<"
    )

    // Word 4 In
    .fromTo(
      ".hero__word--exporter",
      {
        // opacity: 0,
        x: "-100vw",
      },
      {
        // opacity: 1,
        x: 0,
        ease: "back.out(0.7)",
        duration: 1.4,
      },
      "<0.2"
    )
    .addLabel("scene4");

  // Whole Page

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
});
