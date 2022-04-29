//hero carousel
// const slider1 = document.getElementById("glide1");
const slider = new Glide(".glide1", {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    gap: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
}).mount();
