import { Component, OnInit } from '@angular/core';
import { WorkerService } from './worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = "bruh";

  workerMessage1: any;
  workerMessage2: any;

  constructor(private workerService: WorkerService) {
    this.workerService.listenToWorkerMessages1((message1) => {
      this.workerMessage1 = message1;
    });
    this.workerService.listenToWorkerMessages2((message2) => {
      this.workerMessage2 = message2;
    });
  }

  ngOnInit(): void {
    //this.startCounting();
  }

  startCounting1() {
    this.workerService.startCounting1();
  }

  stopCounting1() {
    this.workerService.stopCounting1();
  }

  startCounting2() {
    this.workerService.startCounting2();
  }

  stopCounting2() {
    this.workerService.stopCounting2();
  }

  alert() {
    alert("bruh");
  }

  inputValue: string = ''; // Khai báo biến để lưu giá trị từ trường đầu vào

  showInputValue() {
    console.log(this.inputValue); // In giá trị từ trường đầu vào ra console
  }

}