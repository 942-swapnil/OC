import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  Form,
} from "@angular/forms";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { DataService } from "src/app/services/data.service";
import csc from "country-state-city";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  noShow: boolean = true;
  clochange: boolean = false;
  given: any;
  marked = false;
  theCheckbox = false;


  myControl = new FormControl();
  options: string[] = ['Abhay Sharma', 'Bala Das', 'Chetan Gawande'];
  filteredOptions: Observable<string[]>;

  movies = [
    {
      id: 2,
      option1: "Gender",
      option2: "Since",
    },
    {
      id: 3,
      option1: "Mobile No.",
      option2: "Email",
    },
    {
      id: 4,
      option1: "Labels",
      option2: "Facebook",
      option3: "Twitter",
    },
    {
      id: 5,
      option1: "Frequency",
      option2: "Whats App",
      option3: "Linkedin",
    },
  ];
  fields = [];
  contactForm: FormGroup;
  submitted: boolean = false;
  eventshow: boolean = false;
  phoneshow: boolean = false;
  emailshow: boolean = false;
  countryList: any;
  stateList: any;
  city: any;
  cityList: any;
  sat: (
    | { name: string; status: boolean; isFocuse: boolean }
    | { name: string; status: boolean; isFocuse?: undefined }
  )[];
  da:
    | { name: string; status: boolean; isFocuse: boolean }
    | { name: string; status: boolean; isFocuse?: undefined };
  dat: string;
  hiddd: boolean = false;
  checked: boolean = false;
  contactList: FormArray;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService,
    public fb: FormBuilder
  ) {
    this.fields = this.dataService.field;
    console.log(
      "ContactFormComponent -> constructor ->this.dataService.field",
      this.dataService.field
    );
    this.given = data;
    console.log("ContactFormComponent -> @Inject ->  this.given", this.given);
  }

  getCountry() {
    this.countryList = csc.getAllCountries();
    console.log(
      "ContactFormComponent -> getCountry -> this.countryList",
      this.countryList
    );
  }

  CountryId(event) {
    const countryId = event.value;
    this.stateList = csc.getStatesOfCountry(countryId);
  }

  StateId(event) {
    const stateId = event.value;
    this.cityList = csc.getCitiesOfState(stateId);
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      prefix:  ['Mr'],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      suffix: [''],
      phoneticFirst: [''],
      phoneticMiddle: [''],
      phoneticLast: [''],
      gender: ['Male'],
      nickname: [''],
      relateds: this.fb.array([this.createRelated()]),
      Companys: this.fb.array([this.createCompanys()]),
      emails: this.fb.array([this.createEmail()]),
      contacts: this.fb.array([this.createContact()]),
      // addresss: this.fb.array([]),
      addresssOne: this.fb.array([this.createAddress()]),
      Events: this.fb.array([this.createEvents()]),
      Websites: this.fb.array([this.createWebsites()]),
      notes: ['']
    });
    console.log("skdhsnjdsdbnjn j", this.contactForm);

    this.getCountry();


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  emails(): FormArray {
    return this.contactForm.get("emails") as FormArray;
  }

  createEmail(): FormGroup {
    return this.fb.group({
      emailLable: ["Home"],
      email: [""],
    });
  }

  addQuantity() {
    this.emails().push(this.createEmail());
  }
  removeQuantity(i: number) {
    this.emails().removeAt(i);
    this.hiddd = true;
  }

  createContact(): FormGroup {
    return this.fb.group({
      flagcountry: ["101"],
      phone: [""],
      phoneLabel: ["Home"],
    });
  }

  contacts() {
    return this.contactForm.get("contacts") as FormArray;
  }

  addContact() {
    this.contacts().push(this.createContact());
  }

  deleteContact(i: number) {
    this.contacts().removeAt(i);
  }

  createRelated() {
    return this.fb.group({
      related: ["Friend"],
      relatedName: [""],
    });
  }

  relateds() {
    return this.contactForm.get("relateds") as FormArray;
  }

  addRelateds() {
    this.relateds().push(this.createRelated());
  }

  deleteRelateds(i: number) {
    this.relateds().removeAt(i);
  }

  createEvents(): FormGroup {
    return this.fb.group({
      eventLabel: ["Birthday"],
      event: [],
    });
  }

  Events() {
    return this.contactForm.get("Events") as FormArray;
  }

  addEvent() {
    this.Events().push(this.createEvents());
  }

  deletEvent(i: number) {
    this.Events().removeAt(i);
  }


  createWebsites(): FormGroup {
    return this.fb.group({
      website: ['Website'],
      websiteurl: [''],
    });
  }

  Websites() {
    return this.contactForm.get("Websites") as FormArray;
  }

  addWebsites() {
    this.Websites().push(this.createWebsites());
  }

  deletWebsites(i: number) {
    this.Websites().removeAt(i);
  }

  // createCompanys(): FormGroup {
  //   return this.fb.group({
  //     companyName: new FormControl(""),
  //     GSTNumber: new FormControl(""),
  //     jobTitle: new FormControl(""),
  //     department: new FormControl(""),
  //     Workinglabel: new FormControl(""),
  //     workingTo: new FormControl(" "),
  //     presentlylabel: new FormControl("Present"),
  //   });
  // }

  // Companys() {
  //   return this.contactForm.get("Companys") as FormArray;
  // }

  // addCompany() {
  //   this.Companys().push(this.createCompanys());
  // }

  // deleteCompany(i: number) {
  //   this.Companys().removeAt(i);
  // }

  Companys() {
      return this.contactForm.get("Companys") as FormArray;
    }

  createCompanys(): FormGroup {
    return this.fb.group({
      companyName: [''],
      GSTNumber: [''],
      jobTitle: [''],
      workingTitle : ['Present'],
      workingCheck : [''],
      Datefrom : ['']
    });
  }

  addCompany() {
    this.Companys().push(this.createCompanys());
  }

  deleteCompany(i: number) {
    this.Companys().removeAt(i);
  }


  createAddress(): FormGroup {
    return this.fb.group({
      Landmarks: this.fb.array([this.createLandmarks()]),
      Plots: this.fb.array([this.createPlots()]),
      Country: new FormControl(""),
      streetAddress: new FormControl(""),
      Floors: this.fb.array([this.createFloor()]),
      Blooks: this.fb.array([this.createBlooks()]),
      Complexs: this.fb.array([this.createComplexs()]),
      Colonies: this.fb.array([this.createColonies()]),
      Roads: this.fb.array([this.createRoads()]),
      Squares: this.fb.array([this.createSquares()]),
      Areas: this.fb.array([this.createAreas()]),
      city: new FormControl(""),
      pinCode: new FormControl(""),
      state: new FormControl(""),
      poBox: new FormControl(""),
      label: new FormControl(""),
      
    });
  }

  addAddresssOne() {
    this.addresssOne().push(this.createAddress());
  }

  deleteAddresssOne(index) {
    this.addresssOne().removeAt(index);
  }


  createPlots(): FormGroup {
    return this.fb.group({
      plotNoLabel: ["Plot no."],
      plotNumber: [""],
    });
  }

  Plots(index = 0) {
    var array = this.contactForm.get("addresssOne") as FormArray;
    const resFloors = array.controls[index].get("Plots") as FormArray;
    return resFloors;
  }

  addPlots(index) {
    this.Plots(index).push(this.createPlots());
  }

  deletePlots(index:number,i:number) {
    this.Plots(index).removeAt(i);
  }



  createFloor(): FormGroup {
    return this.fb.group({
      FloorLabel: ["Floor"],
      FloorNumber: [""],
    });
  }

  addresssOne() {
    return this.contactForm.get("addresssOne") as FormArray;
  }

  Floors(index = 0) {
    var array = this.contactForm.get("addresssOne") as FormArray;
    const resFloors = array.controls[index].get("Floors") as FormArray;
    return resFloors;
  }

  addFloors(index) {
    this.Floors(index).push(this.createFloor());
  }

  removeFloors(index:number,i: number) {
    this.Floors(index).removeAt(i);
  }

  createBlooks(): FormGroup {
    return this.fb.group({
      BlockLabel: ["Block"],
      Blooks: [""],
    });
  }

  Blooks(index = 0) {
    var array = this.contactForm.get("addresssOne") as FormArray;
    const resFloors = array.controls[index].get("Blooks") as FormArray;
    return resFloors;
  }

  addBlock(index) {
    this.Blooks(index).push(this.createBlooks());
  }

  deleteBlock(index:number,i:number) {
    this.Blooks(index).removeAt(i);
  }

  createComplexs(): FormGroup {
    return this.fb.group({
      ComplexLabel: ["Complex"],
      Complex: [],
    });
  }

  Complexs(index = 0) {
    var array = this.contactForm.get("addresssOne") as FormArray;
    const resFloors = array.controls[index].get("Complexs") as FormArray;
    return resFloors;
  }

  addComplex(index) {
    this.Complexs(index).push(this.createComplexs());
  }

  deleteComplexs(index:number,i: number) {
    this.Complexs(index).removeAt(i);
  }

  createColonies(): FormGroup {
    return this.fb.group({
      ColonyLabel: ["Colony"],
      Colony: [],
    });
  }

  Colonies(index = 0) {
    var array = this.contactForm.get("addresssOne") as FormArray;
    const resFloors = array.controls[index].get("Colonies") as FormArray;
    return resFloors;
  }

  addColony(index) {
    this.Colonies(index).push(this.createColonies());
  }

  deleteColony(index:number,i: number) {
    this.Colonies(index).removeAt(i);
  }

  createRoads(): FormGroup {
    return this.fb.group({
      RoadLabel: ["Road"],
      Road: [],
    });
  }

  Roads(index = 0) {
    var array = this.contactForm.get("addresssOne") as FormArray;
    const resFloors = array.controls[index].get("Roads") as FormArray;
    return resFloors;
  }

  addRoad(index) {
    this.Roads(index).push(this.createRoads());
  }

  deleteRoad(index:number,i: number) {
    this.Roads(index).removeAt(i);
  }

  createSquares(): FormGroup {
    return this.fb.group({
      SquareLabel: ["Square"],
      Square: [],
    });
  }

  Squares(index = 0) {
    var array = this.contactForm.get("addresssOne") as FormArray;
    const resFloors = array.controls[index].get("Squares") as FormArray;
    return resFloors;
  }

  addSquares(index) {
    this.Squares(index).push(this.createSquares());
  }

  deleteSquares(index:number,i: number) {
    this.Squares(index).removeAt(i);
  }

  createAreas(): FormGroup {
    return this.fb.group({
      Area: [],
    });
  }

  Areas(index = 0) {
    var array = this.contactForm.get("addresssOne") as FormArray;
    const resFloors = array.controls[index].get("Areas") as FormArray;
    return resFloors;
  }

  addArea(index) {
    this.Areas(index).push(this.createAreas());
  }

  deleteArea(index:number,i: number) {
    this.Areas(index).removeAt(i);
  }

  createLandmarks(): FormGroup {
    return this.fb.group({
      Landmark: [],
    });
  }

  Landmarks(index = 0) {
    var array = this.contactForm.get("addresssOne") as FormArray;
    const resFloors = array.controls[index].get("Landmarks") as FormArray;
    return resFloors;
  }

  addLandmark(index) {
    this.Landmarks(index).push(this.createLandmarks());
  }

  deleteLandmark(index:number,i: number) {
    this.Landmarks(index).removeAt(i);
  }



  getFields(name) {
    var result = false;
    this.dataService.field.forEach((ele) => {
      if (ele.name === name) {
        result = ele.status;
      }
    });
    return result;
  }

  prifs: any = [
    { name: "Mast." },
    { name: "Mr." },
    { name: "Mrs." },
    { name: "Ms." },
    { name: "Dr." },
    { name: "Prof." },
    { name: "Dean" },
    { name: "Adv." },
    { name: "Rev." },
    { name: "Fr." },
    { name: "Sir" },
    { name: "Brother" },
    { name: "Sister" },
    { name: "Pt." },
    { name: "1st Lt." },
    { name: "2nd Lt." },
    { name: "Lt Col." },
    { name: "Capt." },
    { name: "Col." },
    { name: "Maj." },
    { name: "MSgt." },
    { name: "Chief" },
    { name: "Cmdr." },
    { name: "Gen." },
    { name: "Adm." },
  ];
  Relates: any = [
    { name: "Husband" },
    { name: "Wife" },
    { name: "Father" },
    { name: "Mother" },
    { name: "Son" },
    { name: "Daughter" },
    { name: "Brother" },
    { name: "Sister" },
    { name: "Grandpa" },
    { name: "Grandma" },
    { name: "Grandson" },
    { name: "Granddaughter" },
    { name: "Uncle" },
    { name: "Aunty" },
    { name: "Nephew" },
    { name: "Niece" },
    { name: "Cousin" },
    { name: "Father-in-law" },
    { name: "Mother-in-law" },
    { name: "Son-in-law" },
    { name: "Daughter-in-law" },
    { name: "Brother-in-law" },
    { name: "Sister-in-law" },
    { name: "Boy Friend" },
    { name: "Girl Friend" },
    { name: "Friend" },
    { name: "Partner" },
    { name: "Colleague" },
    { name: "Boss" },
    { name: "Aquaintance" },
    { name: "Dada" },
    { name: "Dadi" },
    { name: "Chacha" },
    { name: "Chachi" },
    { name: "Taau" },
    { name: "Taayi" },
    { name: "Phoopha" },
    { name: "Phoophi" },
    { name: "Nana" },
    { name: "Nani" },
    { name: "Mausa" },
    { name: "Mausi" },
    { name: "Mama" },
    { name: "Mami" },
  ];

  onFocuse(name) {
    var result = false;
    this.dataService.field.forEach((ele) => {
      if (ele.name === name) {
        result = ele.isFocuse;
      }
    });
    return result;
  }

  updateItem(item) {
    let index = this.dataService.field.indexOf(item);
    item.status = "true";
    this.dataService.field[index] = item;
    console.log(this.fields);
  }

  toggleVisibility(item) {
    console.log("ContactFormComponent -> toggleVisibility -> item", item);
    this.sat = this.dataService.field;
    console.log(
      "ContactFormComponent -> toggleVisibility -> this.sat",
      this.sat
    );

    for (let i = 0; i < this.sat.length; i++) {
      this.da = this.sat[i];

      if (this.da.name === item) {
        this.da.status = true;
        this.given = "popup1";
      }
    }
  }

  browser(event) {
    console.log("ContactFormComponent -> browser -> event", event);
  }

  eventChange() {
    this.eventshow = true;
  }

  onphoneshow() {
    this.phoneshow = true;
  }

  Onemailshow() {
    this.emailshow = true;
  }

  checkboxClicked(item) {
    console.log("ContactFormComponent -> checkboxClicked -> item", item);
    let index = this.dataService.field.indexOf(item);
    item.status = "true";
    this.dataService.field[index] = item;
    console.log(this.fields);
  }

  checkValue(value, item) {
    console.log(
      "ContactFormComponent -> checkValue -> value,item",
      value,
      item
    );
    if (value == "true") {
      let index = this.dataService.field.indexOf(item);
      item.status = "true";
      this.dataService.field[index] = item;
      console.log(this.fields);
    } else {
      let index = this.dataService.field.indexOf(item);
      item.status = "false";
      this.dataService.field[index] = item;
      console.log(this.fields);
    }
  }

  onShow() {
    this.noShow = !this.noShow;
    this.clochange = !this.clochange;
  }

  onlabels() {
    this.given = "labels";
  }

  funn() {
    this.given = "popup1";
  }

  onSubmit() {
    this.submitted = true;
    const data = {
      ...this.contactForm.value,
    };
    alert("this.contactForm");
  }

  changedate() {
    this.checked = !this.checked;
  }
}
export interface PeriodicElement {
  name: string;
}
