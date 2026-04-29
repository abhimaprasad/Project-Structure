gsap.registerPlugin(ScrollTrigger);

/* Fade Up Animation */
gsap.utils.toArray(".fade-up").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1
  });
});
