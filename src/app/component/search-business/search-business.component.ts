import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-search-business',
  templateUrl: './search-business.component.html',
  styleUrls: ['./search-business.component.scss']
})
export class SearchBusinessComponent implements OnInit {
  Slide: boolean =false;

  constructor() { }

  ngOnInit(): void {
   
  }

  changebg(value){
    console.log("SearchBusinessComponent -> changebg -> value", value)
    if(value === 'map'){
      this.Slide = false;
    }
    else if(value === 'carousel'){
      this.Slide = true;
    }
  }

  customOptions: OwlOptions = {
    loop : true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag : false,
    touchDrag : false,
    pullDrag : false,
    dots : false,
    
    // navSpeed: 500,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}


