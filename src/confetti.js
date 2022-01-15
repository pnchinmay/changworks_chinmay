import confetti from "canvas-confetti";

const myConfetti = () => {
    var duration = 2 * 1000;
    var end = Date.now() + duration;
    function randomxPosition(num) {
        let x = Math.random() * (num-1) + num;
        console.log("x = " + x);
        return x;
    }
    function randomyPosition() {
        return Math.random() - 0.2;
    }
    var defaults = { startVelocity: 40, spread: 360, particleCount: 20, gravity: 0.8};
    confetti(
        Object.assign({}, defaults, {
        origin: {
            x: randomxPosition(0.4),
            y: randomyPosition(),
        },
        })
    )
    confetti(
        Object.assign({}, defaults, {
        origin: {
            x: randomxPosition(0.6),
            y: randomyPosition(),
        },
        })
    )
    if (Date.now() < end) {
        requestAnimationFrame(myConfetti);
    }
}

export default myConfetti;