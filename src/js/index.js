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
  // Loader
  const loaderTimeline = gsap.timeline({
    onComplete: () => {
      introTimeline.play();
      document.querySelector("body").style.overflowY = "visible";
      document.querySelector(".loader").style.display = " none";
    },
  });
  loaderTimeline
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
    );

  // Intro
  const introTimeline = gsap.timeline({
    paused: true,
  });

  introTimeline

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
      }
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
        delay: 0.3,
      },
      "<.5"
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
        stagger: 0.3,
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
      "<-0.2"
    )

    // SCENE 2
    // Lines

    .to(
      ".hero__line",
      {
        opacity: 0,
        x: "-100vw",
        ease: "circ.in",
        duration: 1.4,
        stagger: 0.2,
      },
      "<0.3"
    )
    // Elements 1 Out
    .to(
      ".hero__element-container-1--sphere",
      {
        opacity: 0,
        x: "-100vw",
        ease: "expo.in",
        duration: 2.5,
      },
      "<+0.8"
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
      },
      "<1.2"
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
      "<-0.2"
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
      "<1"
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
      },
      "<1"
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
        duration: 2,
        stagger: 0.3,
      },
      "<+0.2"
    )
    .addLabel("scene1")

    // SCENE 3
    // Lines
    .to(
      ".hero__line",
      {
        opacity: 0,
        x: "-100vw",
        ease: "circ.in",
        duration: 1.4,
        stagger: 0.2,
      },
      "<0.3"
    )
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
      "<0.8"
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
      "<1.2"
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
      "<-0.2"
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
      },
      "<1"
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
    .to(
      ".hero__line",
      {
        opacity: 0,
        x: "-100vw",
        ease: "circ.in",
        duration: 1.4,
        stagger: 0.2,
      },
      "<0.3"
    )
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
      "<1.2"
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
      "<-0.2"
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
      },
      "<1.2"
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
    // Elements 4 In
    .fromTo(
      ".hero__element-container-4",
      {
        opacity: 0,
        x: "-100vh",
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
    .addLabel("scene4")

    // SCENE 4 - FINAL

    // Elements 4 Out
    .to(
      ".hero__element-container-4",

      {
        opacity: 0,
        y: "-50vh",
        x: "100vh",
        ease: "expo.in",
        duration: 2,
        stagger: 0.3,
      },
      "<+0.5"
    )
    // Lines 4 Out
    .to(
      ".hero__line",
      {
        opacity: 0,
        x: "-100vw",
        ease: "circ.in",
        duration: 1.4,
        stagger: 0.2,
      },
      "<0.3"
    )

    // Image 3 Out
    .to(
      ".hero__image-container--4",

      {
        opacity: 0,
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
        ease: "circ.out",

        // duration: 2,
      },
      "<0.8"
    )
    // Word 3 Out
    .to(
      ".hero__word--exporter",

      {
        opacity: 0,
        x: "-100vw",
        ease: "back.in(0.7)",
        duration: 1.4,
      },
      "<0.2"
    );

  introTimeline.repeat(-1);

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

  // Stagger
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

  // Sustainability
  gsap.fromTo(
    ".up",
    {
      y: 0,
    },
    {
      y: -100,
      duration: 3,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".sustainability",
        start: "top 80%",
        // markers: true,
        scrub: 3,
      },
    }
  );

  gsap.fromTo(
    ".down",
    {
      y: 0,
    },
    {
      y: 100,
      duration: 3,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".sustainability",
        start: "top 80%",
        // markers: true,
        scrub: 1,
      },
    }
  );
});
