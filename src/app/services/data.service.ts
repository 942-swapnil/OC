import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  field = [
      { name: "Prefix", status: true },
      { name: "First Name", status: true },
      { name: "Middle Name", status: true,isFocuse:false },
      { name: "Last Name", status: true },
      { name: "Suffix", status: false,isFocuse:false },
      { name: "Phonetic First", status: false,isFocuse:false },
      { name: "Phonetic Middle", status: false,isFocuse:false },
      { name: "Phonetic Last", status: false,isFocuse:false },
      { name: "Nickname", status: false,isFocuse:false },
      { name: "Gender", status: true,isFocuse:false },
      { name: "Relation", status: false,isFocuse:true },
      // { name: "Related Name" , status: true,isFocuse:true },
      // { name: "File as", status: false,isFocuse:false },
      { name: "Company Name" , status: true },
      { name: "GST" , status: true },
      { name: "Job title" , status: true},
      { name: "Department", status: false },
      { name: "Email" , status : true},
      { name: "Phone" , status: true},
      { name: "Address", status: false },
      // { name: "Flat No" , status: false,isFocuse:false },
      // { name: "Floor Number" , status : false,isFocuse:false},
      // { name: "Building/Complex" , status : false,isFocuse:false },
      // { name: "Road/Street" , status: false,isFocuse:false },
      // { name: "Area" , status: false,isFocuse:false },
      // { name: "City", status: false,isFocuse:false },
      // { name: "Direction" , status : false,isFocuse:false},
      // { name: "Lat/log" , status: false,isFocuse:false},
      // { name: "Pincode", status: false,isFocuse:false },
      // { name: "Country", status: false,isFocuse:false },
      // { name: "State", status: false ,isFocuse:false},
      // { name: "PO Box", status: false },
      // { name: "Label", status: false,isFocuse:false },
      // { name: "Birthday" , status: false,isFocuse:false },
      { name: "Event", status: false,isFocuse:false },
      { name: "Website", status: false,isFocuse:false },
      // { name: "Website", status: false,isFocuse:false },
      // { name: "Relationship", status: false,isFocuse:false },
      // { name: "Chat", status: false,isFocuse:false },
      // { name: "InternetCall", status: false,isFocuse:false },
      // { name: "CustomField", status: false,isFocuse:false },
      { name : "Notes" , status:true}
    ];
  constructor() { }

  
}
