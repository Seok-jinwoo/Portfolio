function startLoader() {
    let counterElement = document.querySelector(".counter");
    let overlayElement = document.querySelector(".overlay");
    let currentValue = 0;
    let animationsTriggered = false; // Track if animations have been triggered

    function updateCounter() {
        if (currentValue >= 100 && !animationsTriggered) {
            animationsTriggered = true; // Prevent further updates once 100 is reached

            console.log("Triggering animations at 100");

            gsap.to(".counter", {
                duration: 0.25,
                opacity: 0,
                onComplete: () => {
                    counterElement.style.display = "none";
                    console.log("Counter animation completed");
                }
            });

            gsap.to(".bar", {
                duration: 1.5,
                height: 0,
                stagger: 0.1,
                ease: "power4.inOut",
                onComplete: () => {
                    overlayElement.style.display = "none";
                    console.log("Bar animation completed");
                }
            });
            return;
        }

        // Increment counter with random value
        currentValue += Math.floor(Math.random() * 20) + 1;

        // Limit counter to max 100
        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        // Set random delay for the next update
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();
