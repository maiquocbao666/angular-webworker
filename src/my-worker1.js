let count1 = 0;
let intervalId1;

function startCounting1() {
    intervalId1 = setInterval(() => {
        count1++;
        self.postMessage(`Count1: ${count1}`);
    }, 1000);
}

function stopCounting1() {
    clearInterval(intervalId1);
}

self.addEventListener('message', (event) => {
    const data = event.data;
    if (data === 'startCounting') {
        startCounting1();
    } else if (data === 'stopCounting') {
        stopCounting1();
    }
});