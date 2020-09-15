import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dialog-box',
  templateUrl: './add-dialog-box.component.html',
  styleUrls: ['./add-dialog-box.component.scss']
})
export class AddDialogBoxComponent implements OnInit {
  noShow: boolean = false;
  clochange: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }


  onShow(){
    this.noShow = !this.noShow;
    this.clochange=!this.clochange;
  }
}
