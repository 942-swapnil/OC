import { Component, OnInit, ViewChild, Inject, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})




export class AddProductComponent implements OnInit {

  AddProduct=new FormGroup({
    AgeRbtn:new FormControl(""),
    AgeRng:new FormControl(""),
    HairType:new FormControl(""),
    Substance:new FormControl(""),
  });

  panelOpenState = false;


  gstCP: number = 100;
  gstSP: number = 100;
  selectedYears: any[];
  toppings = new FormControl();
  toppingList: string[] = ['Salable', 'Consumable', 'Both'];
  values: any = 0;
  val: any;
  val2: any;
  value11: any;
  value112: any;
  value22: any;
  val22: any;
  
  
  checked = false;

  // 1Year: any;
  //  2Year:any; 3Year:any; 4Year:any; 5Year:any; 6Year:any; 7Year:any; 8Year:any; 9Year:any; 10Year:any; 11Year:any; 12Year:any; 13Year:any; 14Year:any; 15Year:any; 16Year:any; 17Year:any; 18Year:any;
   
  //   subtasks:Element[][
  //     {name:['1Year', '2Year', '3Year', '4Year', '5Year', '6Year', '7Year','8Year','9Year','10Year','11Year','12Year','13Year','14Year','15Year','16Year','17Year','18Year']}
  //   ]

  // displayedColumns: string[] = ['position', 'name', 'weight','input1','input2','input3', 'symbol','Rate','RateGst'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'input1', 'input2', 'input3', 'symbol', 'Rate', 'RateGst', 'GstPrice', 'RateTotal'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  displayedColumns1: string[] = ['Substance', 'shade', 'shadeName', 'shadeNo', 'hexcode', 'input1', 'input2', 'Rate1','RateGst1','GstPrice1','RateTotal1','input3'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA12);



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  val3: any;
  clk: boolean=false;
  clk11: boolean=false;
  clk22: boolean=false;
  clk112: boolean=false;
  ageupto: any=[];
  Wavy: boolean=false;
  Curly: boolean=false;
  Coils: boolean=false;
  kit: boolean=false;
  kitno: boolean=false;
  Hair: boolean=false;
  Skin: boolean=false;
  Nail: boolean=false;
  SelectedSubstance: any;
  datad: any[];
  colorshow: boolean =false;
  Accessories: boolean=false;
  Cosmetic: boolean=false;
  Equipments: boolean=false;
  Tools: boolean=false;
  Inventory: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.ageupto.length=59

    this.datad = ['Acetone', 'Activator', 'Ampoules', 'Bleach', 'Body Wash', 'Capsule', 'Cleanser', 'Color', 'Complex', 'Concentrate', 'Conditioner', 'Cream', 'Developer', 'Face Wash', 'Gel', 'Lotion', 'Mask', 'Moisturizer', 'Nail Paint', 'Oil', 'Pack', 'Peel', 'Powder', 'Salt', 'Scrub', 'Serum', 'Shampoo', 'Skin Remover', 'Spray', 'Toner', 'Wax', 'Add New' ]
    
   }


  // years: any[];
  // equals(objOne, objTwo) {
  //   if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
  //     return objOne.id === objTwo.id;
  //   }
  // }

  // selectAll(checkAll,  {
  //   //this.toCheck = !this.toCheck;
  //   if(checkAll){
  //     select.update.emit(); 
  //   }
  //   else{
  //     select.update.emit([]);
  //   }
  // }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

this.getValueAgeRbtn();
this.getValueAgeRng();
this.getValueHairType();
this.getSubstance();
this.getValueInventory();



  }
  getSubstance(){
    this.AddProduct.controls['Substance'].valueChanges.subscribe((value)=>{
      this.SelectedSubstance=value
      console.log("AddProductComponent -> getSubstance -> SelectedSubstance", this.SelectedSubstance)

    })
  }

  HairTypes:any;
  getValueHairType(){
    this.AddProduct.controls["HairType"].valueChanges.subscribe((value)=>{
 
      this.HairTypes=value
    })

  }

  getValueInventory(){
    this.AddProduct.controls["Inventory"].valueChanges.subscribe((value)=>{
 
      this.Inventory=value
    })

  }


  selection(event){
    console.log("AddProductComponent -> selection -> event", event)
    const da = event.target.value;
    console.log("AddProductComponent -> selection -> da", da)


    if(da === 'Color'){
      this.colorshow = true;
    }else{
      this.colorshow = false;
    }



  }







  checkAge:any;
    getValueAgeRbtn(){
    this.AddProduct.controls["AgeRbtn"].valueChanges.subscribe((value)=>{
 
      this.checkAge=value
    })

  }


  checkAgerng:any;
  getValueAgeRng(){
    this.AddProduct.controls["AgeRng"].valueChanges.subscribe((value)=>{
 
      this.checkAgerng=value
    })

  }



  onKey11(event: any){
    console.log("AddProductComponent -> onKey11 -> event", event)
    this.value11 = event.target.value;
    console.log("AddProductComponent -> onKey11 -> this.value11", this.value11)
  }

  onKey112(event:any){
    console.log("AddProductComponent -> constructor -> event", event)
    this.value112 = event.target.value;
    console.log("AddProductComponent -> constructor -> this.value112", this.value112)
  
  this.value22 = (parseInt(this.value11)) * (parseInt(this.value112)) / 100;

  console.log("AddProductComponent -> onKey11 -> this.value11", this.val22)
    this.val22 = (parseInt(this.value11)) + (parseInt(this.value22));
    console.log("AddProductComponent -> onKey11 -> this.val22", this.val22)

}

  onKey(event: any) {
    console.log("AddProductComponent -> onKey -> event", event)
    this.val = event.target.value;
    console.log("AddProductComponent -> onKey -> this.val", this.val)
  }


  onKey1(event: any) {
    console.log("AddProductComponent -> constructor -> event", event)
    this.val3 = event.target.value;
    console.log("AddProductComponent -> constructor -> this.val3", this.val3)

    this.values = (parseInt(this.val)) * (parseInt(this.val3)) / 100;

    console.log("AddProductComponent -> onKey -> this.val", this.val2)
    this.val2 = (parseInt(this.val)) + (parseInt(this.values));
    console.log("AddProductComponent -> onKey -> this.val2", this.val2)
  }

  onClickkit(value){
    if(value=="kit"){
      this.kit=true;
    }
    else{
      this.kit= false;
    }
  }

  onClickTools(value){
    if(value=="Tools"){
      this.Tools=true;
    }
    else{
      this.Tools=false;
    }
  }

  onClickEquipments(value){
    if(value=="Equipments"){
      this.Equipments=true;
    }
    else{
      this.Equipments=false;
    }
  }

  onClickCosmetic(value){
    if(value=="Cosmetic"){
      this.Cosmetic=true;
    }
    else{
      this.Cosmetic=false;
    }
  }

  onClickAccessories(value){
    if(value=="Accessories"){
      this.Accessories=true;
    }
    else{
      this.Accessories=false;
    }
  }



  onClickkino(value){
    if(value=="kitno"){
      this.kitno=true;

    }
    else{
      this.kitno= !this.kitno;
    }
  }

  onClickHair(value){
    if(value=="Hair"){
      this.Hair=true;
    }
    else{
      this.Hair= !this.Hair;
    }
  }

  onClickSkin(value){
    if(value=="Skin"){
      this.Skin=true;
    }
    else{
      this.Skin= !this.Skin; 
    }
  }

  onClickNail(value){
    if(value=="Nail"){
      this.Nail=true;
    }
    else{
      this.Nail= !this.Nail; 
    }
  }
  

  onClick(value){
    if(value=="t"){
      this.clk=true;
    }
    else{
      this.clk= !this.clk;
    }
  }

  onClickWavy(value){
    if(value=="Wavy"){
      this.Wavy=true;
    }
    else{
      this.Wavy= !this.Wavy;
    }
  }

  onClickCurly(value){
    if(value=="Curly"){
      this.Curly=true;
    }
    else{
      this.Curly= !this.Curly;
    }
  }

  onClickCoils(value){
    if(value=="Coils"){
      this.Coils=true;
    }
    else{
      this.Coils= !this.Coils;
    }
  }

  onClick11(value){
    if(value=="range"){
      this.clk11=true;
    }
    else{
      this.clk112=true;
    }

    
    }
    onClick112(value){
      if(value=="Specific"){
        this.clk112=true;
      }
      else{
        this.clk112= !this.clk112;
      }
  
      
      }
  }

  




export interface Task {
  name: string;
 
  subtasks?: Task[];
}
export interface PeriodicElement1 {

  Substance: any;
  shade: any;
  shadeName: any;
  shadeNo: any;
  hexcode: any;
  input1: any;
  input2: any;
  Rate1: any;
  RateGst1: any;
  GstPrice1: any;
  RateTotal1: any;
  input3: any;
  

  

 

}


export interface PeriodicElement {
  name: any;
  position: any;
  weight: any;
  symbol: any;
  input1: any;
  input2: any;
  input3: any;
  Rate: any;
  RateGst: any;

}


export class DatepickerOverviewExample { }
export class TooltipOverviewExample { }

const ELEMENT_DATA12: PeriodicElement1[] = [
  { Substance: ['Acetone', 'Activator', 'Ampoules', 'Bleach', 'Body Wash', 'Capsule', 'Cleanser', 'Color', 'Complex', 'Concentrate', 'Conditioner', 'Cream', 'Developer', 'Face Wash', 'Gel', 'Lotion', 'Mask', 'Moisturizer', 'Nail Paint', 'Oil', 'Pack', 'Peel', 'Powder', 'Salt', 'Scrub', 'Serum', 'Shampoo', 'Skin Remover', 'Spray', 'Toner', 'Wax', 'Add New'], shade: ['shade1', 'shade2', 'shade3'], shadeName: '', shadeNo: '', hexcode: '', input1: '', input2: '', Rate1: '',RateGst1:'',GstPrice1:'',RateTotal1:'',input3:''}

];

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Packaging -2', name: 'level 3', weight: ['Ampoule', 'Bottle', 'Box', 'Box Mini', 'Box Small', 'Blister', 'Can', 'Carton', 'Case', 'Jar', 'Paper Bag', 'Polybag', 'Pouch', 'Sachet', 'Shrink Pack', 'Tube', 'Custom Label'], input1: '', input2: '', input3: '', symbol: ['sale', 'Salable', 'Consumable', 'Both'], Rate: '', RateGst: '' },
  { position: '', name: 'level 2', weight: ['Ampoule', 'Bottle', 'Box', 'Box Small', 'Box Mini', 'Can', 'Carton', 'Case', 'Jar', 'Polybag', 'Pouch', 'Sachet', 'Tube', 'Custom Label'], input1: '', input2: '', input3: '', symbol: ['sale', 'Salable', 'Consumable', 'Both'], Rate: '', RateGst: '' },
  { position: '', name: 'level 1', weight: ['Ampoule', 'Bottle', 'Box', 'Box Small', 'Box Mini', 'Can', 'Carton', 'Case', 'Jar', 'Polybag', 'Pouch', 'Sachet', 'Tube', 'Custom Label'], input1: '', input2: '', input3: '', symbol: ['sale', 'Salable', 'Consumable', 'Both'], Rate: '', RateGst: '' },
  { position: 'Packaging -1', name: ['level 1'], weight: ['Ampoule', 'Bottle', 'Box', 'Box Small', 'Box Mini', 'Can', 'Carton', 'Case', 'Jar', 'Polybag', 'Pouch', 'Sachet', 'Tube', 'Custom Label'], input1: '', input2: '', input3: '', symbol: ['sale', 'Salable', 'Consumable', 'Both'], Rate: '', RateGst: '' }
]; 

