/*
@format
*/

gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);

const body = document.body;
window.onload = () => {
body.classList.remove("loading");
};

// ============== BLOB ANIMATION ============== //
// Changes the shape of the blob to one of the 6 predefined shapes.
let prevBlob = 0;
function morphBlob() {
  const min = 0,
    max = 5;
  let nos = Math.floor(Math.random() * (max - min + 1) + min);

  while (nos == prevBlob) {
    nos = Math.floor(Math.random() * (max - min + 1) + min);
  }

  let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "elastic.out(1, 1)",
      transformOrigin: "center"
    }
  });
  //Morph blobs.
  tl.to("#blob0-2", { morphSVG: `#blob${nos}-2` }, 0)
    .to("#blob0-1", { morphSVG: `#blob${nos}-1` }, 0.15)
    .to("#blob0-0", { morphSVG: `#blob${nos}-0` }, 0.3);

  //Translate grouped blob dots.
  const translateBlob1 = [
    [0, 0],
    [-35, -200],
    [0, -100],
    [-200, 10],
    [-50, 100],
    [-30, -25]
  ];
  const translateBlob0 = [
    [0, 0],
    [50, 250],
    [0, -50],
    [200, 0],
    [100, 0],
    [75, -30]
  ];
  tl.to(
    "#group-blob0-1",
    { xPercent: translateBlob1[nos][0], yPercent: translateBlob1[nos][1] },
    0.2
  )
    .to(
      "#group-blob0-0",
      { xPercent: translateBlob0[nos][0], yPercent: translateBlob0[nos][1] },
      0.25
    )
    .to("#group-blob0-1", { duration: 0.4, scale: 1, opacity: 0.5 }, 0.1)
    .to("#group-blob0-0", { duration: 0.4, scale: 1, opacity: 0.5 }, 0.15)
    .to("#group-blob0-1", { duration: 0.5, scale: 1, opacity: 1 }, ">")
    .to("#group-blob0-0", { duration: 0.5, scale: 1, opacity: 1 }, "<0.1");

  prevBlob = nos;
}

const blobScene = document.getElementById('blob__scene');

blobScene.addEventListener('mouseenter', throttle(morphBlob, 1000))
blobScene.addEventListener('click', morphBlob)
// ============================================ //


// ============= HELLO ANIMATION ============== //
const tl_hello = gsap.timeline({ defaults: { ease: "power3.out" } });
tl_hello
    .from("#h > *", { duration: 0.6, stagger: 0.2, drawSVG: "0%" }, 0.25)
    .from("#e > *", { duration: 0.6, stagger: 0.2, drawSVG: "0%" }, "-=0.7")
    .from("#l_1 > *", { duration: 0.6, stagger: 0.4, drawSVG: "0%" }, "-=1.2")
    .from("#l_2 > *", { duration: 0.6, stagger: 0.4, drawSVG: "0%" }, "-=1")
    .from("#o > *", { duration: 1.2, drawSVG: "0%" }, "-=1.2")
    .from("#dot > *", { duration: 0.6, scale: 0, transformOrigin: "50% 50%" }, "-=0.8");
// ============================================ //


// ============= BOUNCY DOTS ================== //
// Bouncing dots for brand name and HELLO text
const hello_text = document.getElementById('hello');
const hello_dot = document.querySelector('.hello__dot');
const brand_text = document.querySelector('.brand__box');
const brand_dot = document.querySelector('.brand__dot');

['click', 'mouseenter'].forEach(event => {
    hello_text.addEventListener(event, () => {
        hello_dot.classList.add('animate');
    })
    brand_text.addEventListener(event, () => {
        brand_dot.classList.add('animate');
    })
})
    
hello_dot.addEventListener('animationend', () => {
    hello_dot.classList.remove('animate');
});
brand_dot.addEventListener('animationend', () => {
    brand_dot.classList.remove('animate');
});
// ======================================== //

// ================ MENU-BTN ==============//
const menuBtn = document.querySelector('.menu__btn');
const menuOverlay = document.querySelector('.menu__overlay');
menuBtn.addEventListener("click", () => {
    body.classList.toggle("menu--open");
})
menuOverlay.addEventListener("click", () => {
    if (body.classList.contains("menu--open"))
        body.classList.remove("menu--open")
})
// ======================================== //

//Re-usable throttle function for event listeners.
function throttle(callback, interval) {
  let enableCall = true;

  return function(...args) {
    if (!enableCall) return;

    enableCall = false;
    callback.apply(this, args);
    setTimeout(() => enableCall = true, interval);
  }
}

// Load HTML inside <div> https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript