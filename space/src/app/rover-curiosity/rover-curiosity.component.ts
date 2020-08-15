import { Component, OnInit } from '@angular/core';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { InfoRenderComponent } from './info-render/info-render.component';
@Component({
  selector: 'app-rover-curiosity',
  templateUrl: './rover-curiosity.component.html',
  styleUrls: ['./rover-curiosity.component.css'],
})
export class RoverCuriosityComponent implements OnInit {
  constructor() {}
  //buttons inport json info
  ngOnInit(): void {}
  rovorPhotoIndex = 0;
  roverPhotoArrLength = 10; // needs info from the info render componet

  backButton(length) {
    if (length <= 0) {
      this.rovorPhotoIndex = this.roverPhotoArrLength;
    } else {
      this.rovorPhotoIndex--;
    }
  }

  forwardButton(length) {
    if (length <= this.rovorPhotoIndex) {
      this.rovorPhotoIndex = 0;
    } else {
      this.rovorPhotoIndex++;
    }
  }
  logIndex() {
    console.log(this.rovorPhotoIndex);
  }
}
