gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);


// ============== LOAD ANIMATION ============== //
window.onload = () => {
    document.body.classList.remove("loading");

    // Decide whether to display HELLO or Hi.
    const vWidth = document.documentElement.clientWidth;
    if (vWidth > 480) {
        const helloText = document.querySelector('.landingCover__hello');
        helloText.classList.add('.show');
        // Animate text.
        animHello()
    } else {
        const hiText = document.querySelector('.landingCover__hi');
        hiText.classList.add('.show');
        // Animate text.
        animHi()
    }
};
// ============================================ //

// ============= HELLO ANIMATION ============== //
function animHello() {
    const tl_hello = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl_hello
        .from("#hello-h > *", { duration: 0.6, stagger: 0.2, drawSVG: "0%" }, 0.25)
        .from("#hello-e > *", { duration: 0.6, stagger: 0.2, drawSVG: "0%" }, "-=0.7")
        .from("#hello-l_1 > *", { duration: 0.6, stagger: 0.4, drawSVG: "0%" }, "-=1.2")
        .from("#hello-l_2 > *", { duration: 0.6, stagger: 0.4, drawSVG: "0%" }, "-=1")
        .from("#hello-o > *", { duration: 1.2, drawSVG: "0%" }, "-=1.2")
        .from("#hello-dot > *", { duration: 0.6, scale: 0, transformOrigin: "50% 50%" }, "-=0.8");
}
// ============================================ //

// ============== HI ANIMATION ================ //
function animHi() {
    const tl_hi = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl_hi
        .from("#hi-h > *", { duration: 0.6, stagger: 0.2, drawSVG: "0%" }, 0.25)
        .from("#hi-i > .hi-alph", { duration: 0.6, stagger: 0.4, drawSVG: "0%" }, "-=0.7")
        .from("#hi-i > .i-dot", { duration: 0.6, scale: 0, transformOrigin: "50% 50%" }, "-=0.4")
        .from("#hi-dot > *", { duration: 0.6, scale: 0, transformOrigin: "50% 50%" }, "-=0.8");
}
// ============================================ //

// ============== BLOB ANIMATION ============== //
// Changes the shape of the blob to one of the 6 predefined shapes.
const blobScene = document.getElementById('blob__scene');
blobScene.addEventListener('mouseenter', throttle(morphBlob, 1000));
blobScene.addEventListener('click', morphBlob);

let indx = 0;
function morphBlob() {
    const minIndex = 0;
    const maxIndex = 5;
    indx = rng(minIndex, maxIndex, indx);

    let tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: "elastic.out(1, 1)",
            transformOrigin: "center"
        }
    });

    //Morph blobs.
    tl.to("#blob0-2", { morphSVG: `#blob${indx}-2` }, 0)
        .to("#blob0-1", { morphSVG: `#blob${indx}-1` }, 0.08)
        .to("#blob0-0", { morphSVG: `#blob${indx}-0` }, 0.2);

    //Coordinates translating dots.
    const gBlob0 = [
        [0, 0], [50, 250], [0, -50],
        [200, 0], [100, 0], [75, -30]
    ];
    const gBlob1 = [
        [0, 0], [-35, -200], [0, -100],
        [-200, 10], [-50, 100], [-30, -25]
    ];

    tl.to("#g-blob0", { xPercent: gBlob0[indx][0], yPercent: gBlob0[indx][1] }, 0.25)
        .to("#g-blob1", { xPercent: gBlob1[indx][0], yPercent: gBlob1[indx][1] }, 0.20)
        .to("#g-blob1", { duration: 0.4, scale: 1, opacity: 0.5 }, 0.1)
        .to("#g-blob0", { duration: 0.4, scale: 1, opacity: 0.5 }, 0.15)
        .to("#g-blob1", { duration: 0.5, scale: 1, opacity: 1 }, ">")
        .to("#g-blob0", { duration: 0.5, scale: 1, opacity: 1 }, "<0.1");



}
// ============================================ //



// Random integer generator : prevents consecutive duplicates
function rng(min: number, max: number, prev = undefined): number {

    let rnum: number;
    if (prev === undefined) {
        rnum = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        rnum = Math.floor(Math.random() * (max - min)) + min;
        if (rnum >= prev) rnum += 1;
    }

    return rnum
}

//Re-usable throttle function for event listeners.
function throttle(callback: EventListener, interval: number) {
    let enableCall = true;

    return function (...args: any) {
        if (!enableCall) return;

        enableCall = false;
        callback.apply(this, args);
        setTimeout(() => enableCall = true, interval);
    }
}