import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LoginService {

  public baseUrl = "http://backend.outletcontrol.in/public/api/web/" 

  constructor(public httpClient : HttpClient) { }

  async login(credentials: any) : Promise<any>{
    var url = this.baseUrl + 'login'
    try {
      const res = await this.httpClient.post(url, credentials).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }


  async getClientList() : Promise<any>{
    var url = this.baseUrl + 'client/getAll'
    try {
      const res = await this.httpClient.post(url,{}).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async getClientListForPage(pageNumber) : Promise<any>{
    var url = this.baseUrl + 'client/getAll?page=' + pageNumber
    try {
      const res = await this.httpClient.post(url,{}).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async registerClients(dataObject : any): Promise<any>{
    var url = this.baseUrl + 'client/store'
    try {


      var objectModel = {
        "company_id":"15",
        "location_id":"14",
        "email":dataObject.email,
        "fname":dataObject.fname,
        "lname":dataObject.lname,
        "mobile":dataObject.mobile
      }

      const res = await this.httpClient.post(url,objectModel).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }
  
  async getServiceList() : Promise<any>{
    var url = this.baseUrl + 'services/getAll'
    try {
      const res = await this.httpClient.post(url,{}).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async getServiceListByPageNumber(pageNumber) : Promise<any>{
    var url = this.baseUrl + 'services/getAll?page=' + pageNumber
    try {
      const res = await this.httpClient.post(url,{}).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async getUserList() : Promise<any>{
    var url = this.baseUrl + 'user/getAll'
    try {
      const res = await this.httpClient.post(url,{}).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async getUserListByPageNumber(pageNumber) : Promise<any>{
    var url = this.baseUrl + 'user/getAll?page=' + pageNumber
    try {
      const res = await this.httpClient.post(url,{}).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async getServiceCategory(): Promise<any>{
    var url = this.baseUrl + 'service-category/getAll'
    try {
      const res = await this.httpClient.post(url,{}).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async getServiceSubCategory():  Promise<any>{
    var url = this.baseUrl + 'service-subcategory/getAll'
    try {
      const res = await this.httpClient.post(url,{}).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async saveServices(dataObject : any):  Promise<any>{
    var url = this.baseUrl + 'services/store'
    try {
      const res = await this.httpClient.post(url,dataObject).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async saveStaffUser(userBody : any) :  Promise<any>{
    var url = this.baseUrl + 'user/store'



    var objectToSend = {
      "company_id": userBody.company_id,
      "location_id": userBody.location_id,
      "email": userBody.email,
      "username": userBody.username,
      "password": "",
      "status": "",
      "designation_id": "",
      "first_name": userBody.first_name,
      "last_name": userBody.last_name,
      "mobile": userBody.mobile,
      "image": "",
      "date_of_birth": "",
      "date_of_anniversary": "",
      "gender": "1",
      "marital_status": "",
      "address_line_1": "",
      "address_line_2": "",
      "zipcode": "",
      "city": "",
      "state": "",
      "country": "",
      "facebook": "",
      "twitter": "",
      "google_plus": "",
      "salon_service": [
           { "salon_service_details_ids":"125", "gender_id":"1" },
           { "salon_service_details_ids":"127", "gender_id":"1" }
      ],
      "from_date": userBody.from_date,
      "to_date": userBody.to_date
    }

    try {
      const res = await this.httpClient.post(url,objectToSend).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

  async createAppointment(appointmentBody :  any) : Promise<any>{
    var url = this.baseUrl + 'booking/bookings'
    try {
      const res = await this.httpClient.post(url,appointmentBody).toPromise();
      return res;
    }
    catch (error) {
      return error;
    }
  }

}
