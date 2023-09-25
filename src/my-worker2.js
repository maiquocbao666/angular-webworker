let count2 = 0;
let intervalId2;

function startCounting2() {
    intervalId2 = setInterval(() => {
        count2++;
        self.postMessage(`Count2: ${count2}`);
    }, 1000);
}

function stopCounting2() {
    clearInterval(intervalId2);
}

self.addEventListener('message', (event) => {
    const data = event.data;
    if (data === 'startCounting') {
        startCounting2();
    } else if (data === 'stopCounting') {
        stopCounting2();
    }
});