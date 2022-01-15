import confetti from "canvas-confetti";

const myConfetti = () => {
    var duration = 2 * 10;
    var end = Date.now() + duration;
    console.log(end);
    function randomxPosition(min,max) {
        let x = Math.random() * (max-min) + min;
        return x;
    }
    function randomyPosition() {
        return Math.random() - 0.1;
    }
    var defaults = { startVelocity: 40, spread: 360, particleCount: 20, gravity: 0.8};
    confetti(
        Object.assign({}, defaults, {
        origin: {
            x: randomxPosition(0.1,0.4),
            y: randomyPosition(),
        },
        })
    )
    confetti(
        Object.assign({}, defaults, {
        origin: {
            x: randomxPosition(0.6,0.9),
            y: randomyPosition(),
        },
        })
    )
    if (Date.now() < end) {
        requestAnimationFrame(myConfetti);
    }
}

export default myConfetti;