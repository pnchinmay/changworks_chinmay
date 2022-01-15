import confetti from "canvas-confetti";

var skew = 1;

const myConfetti = () => {
    var duration = 2 * 1000;
    var end = Date.now() + duration;
    skew = Math.max(0.8, skew - 0.001);


    // console.log(end);
    // if(timeLeft<=0)
    //     return 0;
    function randomxPosition(min,max) {
        let x = Math.random() * (max-min) + min;
        return x;
    }
    // function randomyPosition() {
    //     return Math.random() - 0.1;
    // }
    var interval = setInterval(function() {
    var timeLeft = end - Date.now();
    if(timeLeft<=0) {
        clearInterval(interval);
    }
    var defaults = { startVelocity: 20, spread: 360, particleCount: 60, gravity: 1.0};
    confetti(
        Object.assign({}, defaults, {
        origin: {
            x: randomxPosition(0.1,0.4),
            y: (Math.random() * skew) - 0.2,
            // y: randomyPosition(),
        },
        })
    )
    confetti(
        Object.assign({}, defaults, {
        origin: {
            x: randomxPosition(0.6,0.9),
            y: (Math.random() * skew) - 0.2,
            // y: randomyPosition(),
        },
        })
    )
    },150);
}
export default myConfetti;