import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  displayedColumns: string[] = ['name','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15','a16','a17','a18','a19','a20','a21','a22','a23','a24','a25','a26','a27','a28','a29','a30','a31','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  openDialog(status) {
    console.log("ProductsComponent -> openDialog -> status", status)
    const dialogRef = this.dialog.open(AddAttendanceComponent , {
      // width: '80vh',
      data : status
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };

}

export interface PeriodicElement {
  name: string;
 a1:any;  a2:any; a3:any; a4:any; a5:any; a6:any; a7:any; a8:any; a9:any; a10:any; a11:any; a12:any; a13:any; a14:any; a15:any; 
 a16:any; a17:any; a18:any; a19:any; a20:any; a21:any; a22:any; a23:any; a24:any; a25:any; a26:any; a27:any; a28:any; a29:any;
 a30:any; a31:any;        
 
 
 
  action:any;
  


}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {name: 'mike litorus', action:'',a1:'',a2:'',a3:'',a4:'',a5:'',a6:'',a7:'',a8:'',a9:'',a10:'',a11:'',a12:'',a13:'',a14:'',a15:'',a16:'',a17:'',a18:'',a19:'',a20:'',a21:'',a22:'',a23:'',a24:'',a25:'',a26:'',a27:'',a28:'',a29:'',a30:'',a31:''},
  {name: 'sunit devdha', action:'',a1:'',a2:'',a3:'',a4:'',a5:'',a6:'',a7:'',a8:'',a9:'',a10:'',a11:'',a12:'',a13:'',a14:'',a15:'',a16:'',a17:'',a18:'',a19:'',a20:'',a21:'',a22:'',a23:'',a24:'',a25:'',a26:'',a27:'',a28:'',a29:'',a30:'',a31:''},
  {name: 'john pandeyion', action:'',a1:'',a2:'',a3:'',a4:'',a5:'',a6:'',a7:'',a8:'',a9:'',a10:'',a11:'',a12:'',a13:'',a14:'',a15:'',a16:'',a17:'',a18:'',a19:'',a20:'',a21:'',a22:'',a23:'',a24:'',a25:'',a26:'',a27:'',a28:'',a29:'',a30:'',a31:''},
  {name: 'mady miles',action:'',a1:'',a2:'',a3:'',a4:'',a5:'',a6:'',a7:'',a8:'',a9:'',a10:'',a11:'',a12:'',a13:'',a14:'',a15:'',a16:'',a17:'',a18:'',a19:'',a20:'',a21:'',a22:'',a23:'',a24:'',a25:'',a26:'',a27:'',a28:'',a29:'',a30:'',a31:''},
  {name: 'john smith', action:'',a1:'',a2:'',a3:'',a4:'',a5:'',a6:'',a7:'',a8:'',a9:'',a10:'',a11:'',a12:'',a13:'',a14:'',a15:'',a16:'',a17:'',a18:'',a19:'',a20:'',a21:'',a22:'',a23:'',a24:'',a25:'',a26:'',a27:'',a28:'',a29:'',a30:'',a31:''},
  {name: 'sam deluna', action:'',a1:'',a2:'',a3:'',a4:'',a5:'',a6:'',a7:'',a8:'',a9:'',a10:'',a11:'',a12:'',a13:'',a14:'',a15:'',a16:'',a17:'',a18:'',a19:'',a20:'',a21:'',a22:'',a23:'',a24:'',a25:'',a26:'',a27:'',a28:'',a29:'',a30:'',a31:''},
  {name: 'sunny sharma', action:'',a1:'',a2:'',a3:'',a4:'',a5:'',a6:'',a7:'',a8:'',a9:'',a10:'',a11:'',a12:'',a13:'',a14:'',a15:'',a16:'',a17:'',a18:'',a19:'',a20:'',a21:'',a22:'',a23:'',a24:'',a25:'',a26:'',a27:'',a28:'',a29:'',a30:'',a31:''},
  
];
