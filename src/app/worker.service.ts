import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private worker1: Worker;
  private worker2: Worker;

  constructor() {
    this.worker1 = new Worker('./my-worker1.js');
    this.worker2 = new Worker('./my-worker2.js');
  }

  startCounting1() {
    this.worker1.postMessage('startCounting');
  }

  stopCounting1() {
    this.worker1.postMessage('stopCounting');
  }

  listenToWorkerMessages1(callback: (message: any) => void) {
    this.worker1.addEventListener('message', (event) => {
      const data = event.data;
      callback(data);
    });
  }

  startCounting2() {
    this.worker2.postMessage('startCounting');
  }

  stopCounting2() {
    this.worker2.postMessage('stopCounting');
  }

  listenToWorkerMessages2(callback: (message: any) => void) {
    this.worker2.addEventListener('message', (event) => {
      const data = event.data;
      callback(data);
    });
  }

}