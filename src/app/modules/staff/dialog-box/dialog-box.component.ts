import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  given: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.given = data;
      console.log("ContactFormComponent -> @Inject ->  this.given",  this.given)
    }

  ngOnInit(): void {
  }

  onlocation(){
    this.given = 'Location';
  }
  onDetails(){
    this.given = 'Details';
  }

}
