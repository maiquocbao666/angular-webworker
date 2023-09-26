/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log("Received from Main Thread ", data);
  setTimeout(() => {
    postMessage('Hi From Worker!');
  }, 4000);
});
