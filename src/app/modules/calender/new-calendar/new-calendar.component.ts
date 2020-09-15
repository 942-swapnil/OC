import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import { EventInput } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular'

import { LoginService } from '../../../services/login.service'
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { isArray } from 'util';

@Component({
  selector: 'app-new-calendar',
  templateUrl: './new-calendar.component.html',
  styleUrls: ['./new-calendar.component.scss']
})
export class NewCalendarComponent implements OnInit, AfterViewInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarVisible = true;
  calendarViewType = "day";
  addEventEnable : Boolean = false;
  views = {
    resourceTimelineTenDay: {
      type: 'resourceTimeGridDay',
      duration: { days: 3 },
    }  
  }
  
  showOverlay : boolean = false;
  showUserList : boolean = false;
  userDetailsShow : boolean = false;
  selectedUser : any = {}
  selectedStaff : any = {}
  clientList : any = [];
  serviceList : any = [];
  userList : any = [];
  selectedDuration : any = "";
  selectedService : any = {}
  selectedDateForAppointment : any = new Date().toDateString();
  timeSelectedForAppointment : any = ""
  appointmentNotes : string = "";

  calendarPlugins = [timeGridPlugin, interactionPlugin, dayGridPlugin,resourceTimeGridPlugin, resourceTimelinePlugin];
  calendarWeekends = true;
  defaultDate = new Date();
  duration = { days: 4 }
  nowIndicator = true ;
  schedulerLicenseKey = "0260487724-fcs-1585395100";
  rangeValues = (new Date()).toLocaleDateString();
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() },
    {
      id: '1',
      resourceIds: ['a', 'b'],
      title: 'Meeting',
      start: '2020-04-19'
    }
  ];

  resourcesCache = [
    { id: 'a', title: 'Test test' },
    { id: 'b', title: 'Sanket Shah' },
    { id: 'c', title: 'Wendy Smith' },
  ];

  resources = [
    { id: 'a', title: 'Test test' },
    { id: 'b', title: 'Sanket Shah' },
    { id: 'c', title: 'Wendy Smith' },
  ];

  constructor( public loginService : LoginService, public spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.getServiceList();
    this.getUserList(1);
  }

  ngAfterViewInit(): void{
    let calendarAPI = this.calendarComponent.getApi();
    // calendarAPI.addResource();
  }

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  eventClicked(arg){
    console.log("arg- event",arg)
    this.addEventEnable = true;
  }

  handleDateClick(arg) {
    this.addEventEnable = true;
    console.log("arg", (new Date(arg.date)).toLocaleString())
    this.timeSelectedForAppointment = (new Date(arg.date)).toLocaleString()
    // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //   console.log("arg",arg, arg.resource.id)
    //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
    //     resourceId :  arg.resource.id,
    //     title: 'New Event',
    //     start: arg.date,
    //     allDay: arg.allDay
    //   })
    // }
  }

  durationSelectionChangedEvent(event: any){
    var caseValue = event.target.value;
    var vsd  = this.calendarComponent.getApi();
    switch(caseValue){
      case "day" : 
      vsd.changeView("resourceTimeGridDay")
      vsd.render()
      break;
      case "duration" :  
      vsd.changeView("resourceTimelineTenDay");
      vsd.render()
      break;
      case "week" : 
      vsd.changeView("resourceTimeGridWeek")
      vsd.render()
      break;
      default : 
      vsd.changeView("resourceTimeGridWeek")
      vsd.render()
      break;
    }
  }

  resourcesChanges(event: any){
    var caseValue = event.target.value
    var vsd  = this.calendarComponent.getApi();
    switch(caseValue){
      case "w" : 
      this.resources =   [
        { id: 'b', title: 'Sanket Shah' },
        { id: 'c', title: 'Wendy Smith' },
      ];
      this.calendarViewType = "day"
      vsd.changeView("resourceTimeGridDay")
      vsd.render()
      break;
      case "all" :
        this.resources = this.resourcesCache;
        this.calendarViewType = "day"
        vsd.changeView("resourceTimeGridDay")
        vsd.render()
        break;
      case "a" :
        this.resources = [{ id: 'a', title: 'Test test' }]   
        break;
      case "b" :
        this.resources = [{ id: 'b', title: 'Sanket Shah' }]   
        break;  
      case "c" :
        this.resources = [{ id: 'c', title: 'Wendy Smith' }]   
        break;  
      default :
        this.resources = this.resourcesCache
        break;
    }
  }

  nextCalendar(){
    var vsd  = this.calendarComponent.getApi();
    vsd.next();
    this.rangeValues = (vsd.view.activeStart).toLocaleDateString();
  }

  previousCalendar(){
    var vsd  = this.calendarComponent.getApi();    
    vsd.prev();
    this.rangeValues = (vsd.view.activeStart).toLocaleDateString();
  }

  closeAddEevent(event: any){
    this.addEventEnable = false;
  }

  getClientList(){
    
    this.showOverlay = true;

    this.spinner.show("calendarSpinner")

    this.loginService.getClientList().then(res => {
      this.showUserList = true;
      if(res.error == 0 ){        
        if(res.data != null && res.data.items != null){
        
          this.clientList = res.data.items.data; 
          
          console.log("res",res, this.clientList)          
        }else{
        
          this.clientList = [];
         
        }
        this.spinner.hide("calendarSpinner");
        this.showOverlay = false;
      }else{
        this.spinner.hide("calendarSpinner");
        this.showOverlay = false;
        Swal.fire({
          position: 'top-end',     
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.clientList = [];
        
      }
    }).catch(error => {
      this.spinner.hide("calendarSpinner");
      this.showOverlay = false;
      Swal.fire({
        position: 'top-end',     
        title: 'Something went wrong!!!',
        showConfirmButton: false,
        timer: 1500
      })
    })


    setTimeout(() => {
      this.spinner.hide("calendarSpinner")
      

    }, 5000);
  }

  getServiceList(){
    // this.spinner.show()
    this.loginService.getServiceList().then(res => {
    
      if(res.error == 0 ){        
        if(res.data != null && res.data.items != null){
          this.serviceList = res.data.items.data
        }else{
          this.serviceList = []
        }
        // this.spinner.hide()
      }else{
        // this.spinner.hide()
        Swal.fire({
          position: 'top-end',     
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.serviceList = []
      }
    }).catch(error => {
      // this.spinner.hide()
      Swal.fire({
        position: 'top-end',     
        title: 'Something went wrong!!!',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  userSelected(user : any){
    this.userDetailsShow = true;
    this.showUserList = false;
    this.selectedUser = user;
    console.log("user", this.selectedUser);
  }

  getUserList(pageNumber : any){
    this.spinner.show()
    this.loginService.getUserListByPageNumber(pageNumber).then(res => {
     
      if(res.error == 0 ){        
        if(res.data != null && res.data.items != null){
    
          this.userList = res.data.items.data;
          console.log("this.userList",this.userList)
          this.spinner.hide()       
         
        }else{
          this.spinner.hide()
          this.userList = []
        }
       
      }else{
        this.spinner.hide()
        Swal.fire({
          position: 'top-end',     
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.userList = []
      }
    }).catch(error => {
      this.spinner.hide()
      Swal.fire({
        position: 'top-end',     
        title: 'Something went wrong!!!',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  calculateDuration(service : any){
      if(service){
        if(service.duration > 60){
          

          var hours  = Math.trunc(service.duration / 60)
          var mins = service.duration % 60;

          return hours + " h " + mins + "  mins" 
        }else{
          return service.duration + " " + " mins" 
        }
      }else{
        return "";
      }
  }

  serviceChangeEvent(event : any){
    console.log("event", event.target.value)
    var index = this.serviceList.findIndex((element : any) => {
      
      return element.id == event.target.value
    })
    console.log("index", index)
    if(index >= 0) {
      this.selectedDuration =  this.calculateDuration(this.serviceList[index])
      this.selectedService = this.serviceList[index]
    }else{
      this.selectedDuration = ""
    }


  }

  saveBooking(){
   var userId =  sessionStorage.getItem('userId')
    console.log("userId", userId);
    
    var appointmentObject = {
      "location_id": "14",
      "company_id": "15",
      "user_id": sessionStorage.getItem('userId'),
      "notes": this.appointmentNotes,
      "book_datetime": this.formatSelectedDateForAppointment(this.timeSelectedForAppointment),
      "service_id": [
        {
          "salon_service_details_id": this.selectedService ? this.selectedService.id : null,
          "rate": this.selectedService ? this.selectedService.rate : null,
          "technician_id": this.selectedStaff ? this.selectedStaff.id : null,
          "client_id": this.selectedUser ? this.selectedUser.id : null,
          "promo_code": "",
          "seat_id": ""
        }
      ]
    }
    this.spinner.show()
    this.loginService.createAppointment(appointmentObject).then(res => {
      this.spinner.hide();
      this.closeAddEevent(false);
      this.resetCalendarAppointmentParameters();
        if(res.error == 0 ){        
          if(res.data != null && res.data.items != null){
            
          }else{
           
          }
          // this.spinner.hide()
        }else{
          // this.spinner.hide()
          Swal.fire({
            position: 'top-end',     
            title: 'Something went wrong!!!',
            showConfirmButton: false,
            timer: 1500
          })
         
        }
      }).catch(error => {
        // this.spinner.hide()
        Swal.fire({
          position: 'top-end',     
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
      })


  }

  selectStaffChangeEvent(event : any){
    console.log("event", event.target.value)
    var index = this.userList.findIndex((element : any) => {
      
      return element.id == event.target.value
    })
    console.log("index", index)
    if(index >= 0) {
     
      this.selectedStaff = this.userList[index]
    }
  }

  resetCalendarAppointmentParameters(){
    this.showOverlay = false;
    this.showUserList = false;
    this.userDetailsShow = false;
    this.selectedUser = {}
    this.selectedStaff = {}
   
    this.selectedDuration = "";
    this.selectedService  = {}
    this.selectedDateForAppointment  = new Date().toDateString();
    this.timeSelectedForAppointment  = ""
    this.appointmentNotes = "";
    
  }

  formatSelectedDateForAppointment(date : any){
    var dateToRetun = new Date(date);
    return  dateToRetun.getFullYear() + '-' + dateToRetun.getMonth() + '-' + dateToRetun.getDate() + " " + dateToRetun.toLocaleTimeString()
  }

}
