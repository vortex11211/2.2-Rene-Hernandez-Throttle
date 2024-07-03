function throttle(callBack, delay) {
    let shouldWait = false
    let waitingArgs

    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            callBack(...waitingArgs)
            waitingArgs = null;
            setTimeout(timeoutFunc, delay)
        }
    };

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        }
        callBack(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
};

function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1;
};


const defaultMouseMovement = document.getElementById("default");
const throttleMouseMovement = document.getElementById("throttle");
const inputElement = document.getElementById("input");

function updateThrottleMouseMovement() {
    let delay = parseInt(inputElement.value);

    throttleMouseMovement.updateThrottle = throttle(() => {
        incrementCount(throttleMouseMovement);
    }, delay);
};


inputElement.addEventListener('input', updateThrottleMouseMovement);


updateThrottleMouseMovement();

document.addEventListener("mousemove", () => {
    incrementCount(defaultMouseMovement);

    throttleMouseMovement.updateThrottle();
});