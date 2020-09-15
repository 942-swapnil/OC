import { filter } from "rxjs/operators";
import { isArray } from "util";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from "@angular/forms";
import { element } from "protractor";
import { Observable } from "rxjs";
@Component({
  selector: "app-add-service-box",
  templateUrl: "./add-service-box.component.html",
  styleUrls: ["./add-service-box.component.scss"],
})
export class AddServiceBoxComponent implements OnInit {
  time: string;
  // service = new FormGroup({
  //   ServiceName: new FormControl(""),
  //   Group: new FormControl(""),
  //   Portion: new FormControl(""),
  //   Objective: new FormControl(""),
  //   Activity: new FormControl(""),
  //   ServiceClass: new FormControl(""),
  //   SubClass: new FormControl(""),
  //   Gender: new FormControl(""),
  //   Stage: new FormControl(""),
  //   Size: new FormControl(""),
  //   SubSize: new FormControl(""),
  //   ParentCategory: new FormControl(""),
  //   Category: new FormControl(""),
  //   SubCategory: new FormControl(""),
  //   Duration: new FormControl(""),
  //   DurationMinut: new FormControl(""),
  //   preservicesearchbox: new FormControl(""),
  //   postservicesearchbox: new FormControl(""),
  //   MaleSpecific: new FormControl("General"),
  //   FemaleSpecific: new FormControl("General"),
  //   ThirdGenderSpecific: new FormControl("General"),
  //   Malerate: new FormControl(""),
  //   Femalerate: new FormControl(""),
  //   ThirdGenderrate: new FormControl(""),
  //   MaleNewbornsSpecific: new FormControl("General"),
  //   MaleInfantsSpecific: new FormControl("General"),
  //   MaleToddlersSpecific: new FormControl("General"),
  //   MalePreschoolersSpecific: new FormControl("General"),
  //   MaleGradeschoolersSpecific: new FormControl("General"),
  //   MaleTeenagersSpecific: new FormControl("General"),
  //   MaleAdultsSpecific: new FormControl("General"),
  //   MaleSeniorCitizensSpecific: new FormControl("General"),
  //   FemaleNewbornsSpecific: new FormControl("General"),
  //   FemaleInfantsSpecific: new FormControl("General"),
  //   FemaleToddlersSpecific: new FormControl("General"),
  //   FemalePreschoolersSpecific: new FormControl("General"),
  //   FemaleGradeschoolersSpecific: new FormControl("General"),
  //   FemaleTeenagersSpecific: new FormControl("General"),
  //   FemaleAdultsSpecific: new FormControl("General"),
  //   FemaleSeniorCitizensSpecific: new FormControl("General"),
  //   ThirdGenderNewbornsSpecific: new FormControl("General"),
  //   ThirdGenderInfantsSpecific: new FormControl("General"),
  //   ThirdGenderToddlersSpecific: new FormControl("General"),
  //   ThirdGenderPreschoolersSpecific: new FormControl("General"),
  //   ThirdGenderGradeschoolersSpecific: new FormControl("General"),
  //   ThirdGenderTeenagersSpecific: new FormControl("General"),
  //   ThirdGenderAdultsSpecific: new FormControl("General"),
  //   ThirdGenderSeniorCitizensSpecific: new FormControl("General"),
  //   MaleNewbornsRate: new FormControl(""),
  //   MaleInfantsRate: new FormControl(""),
  //   MaleToddlersRate: new FormControl(""),
  //   MalePreschoolersRate: new FormControl(""),
  //   MaleGradeschoolersRate: new FormControl(""),
  //   MaleTeenagersRate: new FormControl(""),
  //   MaleAdultsRate: new FormControl(""),
  //   MaleSeniorCitizensRate: new FormControl(""),
  //   FemaleNewbornsRate: new FormControl(""),
  //   FemaleInfantsRate: new FormControl(""),
  //   FemaleToddlersRate: new FormControl(""),
  //   FemalePreschoolersRate: new FormControl(""),
  //   FemaleGradeschoolersRate: new FormControl(""),
  //   FemaleTeenagersRate: new FormControl(""),
  //   FemaleAdultsRate: new FormControl(""),
  //   FemaleSeniorCitizensRate: new FormControl(""),
  //   ThirdGenderNewbornsRate: new FormControl(""),
  //   ThirdGenderInfantsRate: new FormControl(""),
  //   ThirdGenderToddlersRate: new FormControl(""),
  //   ThirdGenderPreschoolersRate: new FormControl(""),
  //   ThirdGenderGradeschoolersRate: new FormControl(""),
  //   ThirdGenderTeenagersRate: new FormControl(""),
  //   ThirdGenderAdultsRate: new FormControl(""),
  //   ThirdGenderSeniorCitizensRate: new FormControl(""),
  // });

  service = this.fb.group({
    ServiceName: [""],
    Group: [""],
    Portion: [""],
    Objective: [""],
    Activity: [""],
    ServiceClass: [""],
    SubClass: [""],
    Gender: [""],
    Stage: [""],
    Size: [""],
    SubSize: [""],
    ParentCategory: [""],
    Category: [""],
    SubCategory: [""],
    Duration: [""],
    DurationMinut: [""],
    preservicesearchbox: [""],
    postservicesearchbox: [""],
    MaleSpecific: ["General"],
    FemaleSpecific: ["General"],
    ThirdGenderSpecific: ["General"],
    Malerate: [""],
    Femalerate: [""],
    ThirdGenderrate: [""],
    MaleNewbornsSpecific: ["General"],
    MaleInfantsSpecific: ["General"],
    MaleToddlersSpecific: ["General"],
    MalePreschoolersSpecific: ["General"],
    MaleGradeschoolersSpecific: ["General"],
    MaleTeenagersSpecific: ["General"],
    MaleAdultsSpecific: ["General"],
    MaleSeniorCitizensSpecific: ["General"],
    FemaleNewbornsSpecific: ["General"],
    FemaleInfantsSpecific: ["General"],
    FemaleToddlersSpecific: ["General"],
    FemalePreschoolersSpecific: ["General"],
    FemaleGradeschoolersSpecific: ["General"],
    FemaleTeenagersSpecific: ["General"],
    FemaleAdultsSpecific: ["General"],
    FemaleSeniorCitizensSpecific: ["General"],
    ThirdGenderNewbornsSpecific: ["General"],
    ThirdGenderInfantsSpecific: ["General"],
    ThirdGenderToddlersSpecific: ["General"],
    ThirdGenderPreschoolersSpecific: ["General"],
    ThirdGenderGradeschoolersSpecific: ["General"],
    ThirdGenderTeenagersSpecific: ["General"],
    ThirdGenderAdultsSpecific: ["General"],
    ThirdGenderSeniorCitizensSpecific: ["General"],
    MaleNewbornsRate: [""],
    MaleInfantsRate: [""],
    MaleToddlersRate: [""],
    MalePreschoolersRate: [""],
    MaleGradeschoolersRate: [""],
    MaleTeenagersRate: [""],
    MaleAdultsRate: [""],
    MaleSeniorCitizensRate: [""],
    FemaleNewbornsRate: [""],
    FemaleInfantsRate: [""],
    FemaleToddlersRate: [""],
    FemalePreschoolersRate: [""],
    FemaleGradeschoolersRate: [""],
    FemaleTeenagersRate: [""],
    FemaleAdultsRate: [""],
    FemaleSeniorCitizensRate: [""],
    ThirdGenderNewbornsRate: [""],
    ThirdGenderInfantsRate: [""],
    ThirdGenderToddlersRate: [""],
    ThirdGenderPreschoolersRate: [""],
    ThirdGenderGradeschoolersRate: [""],
    ThirdGenderTeenagersRate: [""],
    ThirdGenderAdultsRate: [""],
    ThirdGenderSeniorCitizensRate: [""],
    Weight: ["Weight"],
    Height: ["Height"],
    Length: ["Length"],
  });

  step = 0;
  servicename: any;
  Gendervalue: any;
  form: any;
  Stagevalue: any[];
  data: any;
  ParentCategoryArrayForSize: any;
  AddControllersForSize: any;
  Weight: any;
  Height: any;
  Length: any;
  stageFind: any;
  costomeCheck: false;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  constructor(public fb: FormBuilder) {



    const element2 = []
    for (let index = 0; index < this.Stage.length; index++) {
      const element = this.Stage[index]['category'];
      console.log("AddServiceBoxComponent -> constructor -> element", element)
      for (let i = 0; i < element.length; i++) {
        element2.push(element[i]);

      }
    }
    this.stageFind = element2

    this.service.valueChanges.subscribe((selectedValue) => {
      this.form = selectedValue;
      this.Weight = selectedValue.Weight;
      this.Height = selectedValue.Height;
      this.Length = selectedValue.Length;

      // console.log(
      //   "AddServiceBoxComponent -> constructor -> this.form ",
      //   this.form
      // );
      const Activity = selectedValue.Activity;
      const Category = selectedValue.Category;
      const Gender = selectedValue.Gender;
      const Group = selectedValue.Group;
      const Objective = selectedValue.Objective;
      const ParentCategory = selectedValue.ParentCategory;
      const Portion = selectedValue.Portion;
      const ServiceClass = selectedValue.ServiceClass;
      const ServiceName = selectedValue.ServiceName;
      const Size = selectedValue.Size;
      const Stage = selectedValue.Stage;
      const SubCategory = selectedValue.SubCategory;
      const SubClass = selectedValue.SubClass;
      const SubSize = selectedValue.SubSize;
      if (
        Activity != "" &&
        Category != "" &&
        Gender != "" &&
        Group != "" &&
        Objective != "" &&
        ParentCategory != "" &&
        Portion != "" &&
        ServiceClass != "" &&
        ServiceName != "" &&
        Size != "" &&
        Stage != "" &&
        SubCategory != "" &&
        SubClass != "" &&
        SubSize != ""
      ) {
        this.formData = true;
        // console.log("hello");
      } else {
        this.formData = false;
        // console.log("hello2");
      }
    });
    this.service.controls["Group"].valueChanges.subscribe((selectedValue) => {
      this.group = [];
      for (let i = 0; i < selectedValue.length; i++) {
        this.treatment.forEach((element) => {
          var tempData = element.BodyPart.filter(
            (x) => x.id == selectedValue[i]
          );
          if (tempData.length > 0) {
            this.group.push(tempData);
          }
        });
        // console.log(
        //   "AddServiceBoxComponent -> constructor -> Group",
        //   this.group
        // );
      }
    });
    this.setNow();
  }
  setNow() {
    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let str = hours + ":" + minutes;
    this.time = str;
  }
  options: string[] = ["One", "Two", "Three"];
  filteredOptions: string[] = ["One", "Two", "Three"];
  ParentCategory: any[] = [
    {
      id: "1",
      name: "Hair",
      size: [
        { id: "1000", name: "Length", condtion: true },
        { id: "1001", name: "weight", condtion: true },
        { id: "1002", name: "height", condtion: true },
      ],
      category: [
        {
          id: "2",
          name: "Hair Colouring",
          subCat: [
            {
              ParentCategory_id: "1",
              category_id: "2",
              id: "100",
              name: "Global",
            },
            {
              ParentCategory_id: "1",
              category_id: "2",
              id: "101",
              name: "Touch Up",
            },
            {
              ParentCategory_id: "1",
              category_id: "2",
              id: "102",
              name: "Highlights Single",
            },
            {
              ParentCategory_id: "1",
              category_id: "2",
              id: "103",
              name: "Highlights Multiple",
            },
          ],
        },
        { id: "3", name: "Hair Cuts" },
        { id: "4", name: "Hair Styling" },
        { id: "5", name: "Hair Treatment" },
        { id: "6", name: "Hair Updos" },
        { id: "7", name: "Hair Wash" },
      ],
    },
    {
      id: "8",
      name: "Skin Beauty",
      size: [
        { id: "1000", name: "Length", condtion: false },
        { id: "1001", name: "weight", condtion: true },
        { id: "1002", name: "height", condtion: true },
      ],
      category: [
        {
          id: "9",
          name: "Clean Ups",
          subCat: [
            {
              ParentCategory_id: "1",
              category_id: "2",
              id: "100",
              name: "Global",
            },
            {
              ParentCategory_id: "1",
              category_id: "2",
              id: "101",
              name: "Touch Up",
            },
            {
              ParentCategory_id: "1",
              category_id: "2",
              id: "102",
              name: "Highlights Single",
            },
            {
              ParentCategory_id: "1",
              category_id: "2",
              id: "103",
              name: "Highlights Multiple",
            },
          ],
        },
        { id: "10", name: "Facials" },
        { id: "11", name: "Make Ups" },
        { id: "12", name: "Skin Treatment" },
        { id: "13", name: "Threading" },
        { id: "14", name: "Waxing" },
      ],
    },
    {
      id: "15",
      name: "Nails",
      category: [
        { id: "16", name: "Art", tooltip: "Art, Paint & Polish" },
        { id: "17", name: "Cleaning" },
        { id: "18", name: "Cutting", tooltip: "Cutting,Trimming & Filing" },
        { id: "19", name: "Extensions" },
        { id: "20", name: "Refills" },
        { id: "21", name: "Removals" },
      ],
    },
    {
      id: "22",
      name: "Rejuvenation",
      category: [
        { id: "23", name: "Spa" },
        { id: "24", name: "Massage" },
        { id: "25", name: "Hair Spa" },
        { id: "26", name: "Pedicure" },
        { id: "27", name: "Manicure" },
      ],
    },
    {
      id: "28",
      name: "MakeUps",
      category: [
        { id: "29", name: "Bridal" },
        { id: "30", name: "Non-Bridal" },
      ],
    },
    {
      id: "31",
      name: "Piercing",
      category: [],
    },
    {
      id: "32",
      name: "Tatoos",
      category: [],
    },
  ];
  preservisList: any[] = [
    {
      id: "1",
      name: "one",
    },
    {
      id: "2",
      name: "Two",
    },
    {
      id: "3",
      name: "three",
    },
    {
      id: "4",
      name: "four",
    },
    {
      id: "5",
      name: "five",
    },
  ];
  SubSize: any[] = [
    {
      id: "1",
      name: "Hairline",
    },
    {
      id: "2",
      name: "Up To 1/4",
    },
    {
      id: "3",
      name: "Up To 1/2",
    },
    {
      id: "3",
      name: "Up To 3/4 Inch ",
    },
    {
      id: "3",
      name: "Up To 1 Inch ",
    },
    {
      id: "3",
      name: "Fringes ",
    },
    {
      id: "3",
      name: "Chunks ",
    },
    {
      id: "3",
      name: "Up To Neck ",
    },
  ];
  Size: any[] = [
    {
      id: "1",
      name: "Range",
    },
    {
      id: "2",
      name: "Height",
    },
    {
      id: "3",
      name: "Weight ",
    },
  ];
  Stage: any[] = [
    {
      id: "1",
      shortName: "Kids",
      name: "Kids",
      category: [
        { id: "2", dis: "false", shortName: "Newborns", name: "Newborns (0-3 months)" },
        { id: "3", dis: "false", shortName: "Infants", name: "Infants (4-11 months) Up" },
        { id: "4", dis: "false", shortName: "Toddlers", name: "Toddlers (1-3) Years)" },
        {
          id: "5",
          dis: "false", shortName: "Preschoolers",
          name: "Preschoolers (3-5) Years)",
        },
        {
          id: "6",
          dis: "false", shortName: "Gradeschoolers",
          name: "Gradeschoolers (6-12) Years)",
        },
        { id: "7", dis: "false", shortName: "Teenagers", name: "Teenagers (13-19 Years +)" },
        { id: "8", shortName: "Custome", name: "Custome" },
      ],
    },


    {
      id: "9",
      shortName: "Above18",
      name: "Above(18 Years +)",
      category: [
        {
          id: "10",
          shortName: "Adults",
          name: "Adults (18 Years +)",
        },
        {
          id: "11",
          shortName: "SeniorCitizens",
          name: "Senior Citizens",
        },


      ],
    },



  ];
  Gender: any[] = [
    {
      id: "1",
      name: "Male",
      shortName: "Male",
    },
    {
      id: "2",
      name: "Female",
      shortName: "Female",
    },
    {
      id: "3",
      name: "Third Gender",
      shortName: "ThirdGender",
    },
  ];
  SubClass: any[] = [
    {
      id: "1",
      name: "Ammonia-Free",
    },
    {
      id: "2",
      name: "Aroma",
    },
    {
      id: "3",
      name: "Conditioning",
    },
    {
      id: "4",
      name: "Crystal",
    },
    {
      id: "5",
      name: "Deep Conditioning",
    },
    {
      id: "6",
      name: "Dry",
    },
    {
      id: "7",
      name: "Gold",
    },
    {
      id: "8",
      name: "Herbal",
    },
    {
      id: "9",
      name: "Luxury",
    },
    {
      id: "10",
      name: "Oily",
    },
    {
      id: "11",
      name: "Sensitive",
    },
    {
      id: "12",
      name: "Shampoo",
    },
    {
      id: "13",
      name: "Free Edge",
    },
    {
      id: "14",
      name: "Cuticle",
    },
    {
      id: "15",
      name: "Ammonia Regular",
    },
  ];
  ServiceClass: any[] = [
    {
      id: "1",
      name: "	 Nourishment",
      category: [{ id: "2", name: "Facial" }],
    },
    {
      id: "3",
      name: "	 Cleansing",
      category: [
        { id: "4", name: "Wash" },
        { id: "5", name: "Clean Up" },
        { id: "6", name: "Moistening" },
      ],
    },
    {
      id: "7",
      name: "	 Massage",
      category: [
        { id: "8", name: "DE-Stress" },
        { id: "9", name: "Deep Tissue" },
        { id: "10", name: "Luxury" },
        { id: "11", name: "Manicure" },
        { id: "12", name: "Pedicure" },
        { id: "13", name: "Premium" },
        { id: "14", name: "Royal" },
        { id: "15", name: "Spa" },
        { id: "16", name: "Swedish" },
        { id: "17", name: "Thai" },
      ],
    },
  ];
  Activity: any[] = [
    {
      id: "1",
      name: "	Care (Select All)",
      category: [
        { id: "2", name: "Nourishment" },
        { id: "3", name: "Cleansing" },
        { id: "4", name: "Moistening" },
        { id: "5", name: "NEW" },
      ],
    },
    {
      id: "6",
      name: "	Rejuvenate (Select All)",
      category: [
        { id: "7", name: "Massage" },
        { id: "8", name: "Reflexology" },
      ],
    },
    {
      id: "9",
      name: "	Removal (Select All)",
      category: [
        { id: "10", name: "Threading" },
        { id: "11", name: "Waxing" },
        { id: "12", name: "Shaving" },
        { id: "13", name: "NEW" },
      ],
    },
    {
      id: "14",
      name: "	Styling (Select All)",
      category: [
        { id: "15", name: "Threading" },
        { id: "16", name: "Waxing" },
        { id: "17", name: "Shaving" },
        { id: "18", name: "NEW" },
      ],
    },
    {
      id: "19",
      name: "	Treatment (Select All)",
      category: [
        { id: "20", name: "Polishing" },
        { id: "21", name: "Reconstruct" },
        { id: "22", name: "Refilling" },
        { id: "23", name: "Repair" },
        { id: "24", name: "Straightening" },
      ],
    },
  ];
  Objective: any[] = [
    { id: "1", name: "Care" },
    { id: "2", name: "Rejuvenate" },
    { id: "3", name: "Removal" },
    { id: "4", name: "Styling" },
    { id: "5", name: "Treatment" },
  ];
  treatment: any[] = [
    {
      id: "1",
      groupname: "Scalp",
      shortname: "Scalp",
      PortionInput: "DropDown",
      checked: false,
      indeterminate: false,
      BodyPart: [
        {
          id: "2",
          pid: "1",
          name: "Crown",
          checked: false,
          Portion: [
            { bid: "2", id: "4", name: "N/A", shortName: "N/A", disable: true },
          ],
        },
        {
          id: "5",
          pid: "1",
          name: "Mid Scalp",
          checked: false,
          Portion: [
            { bid: "5", id: "6", name: "N/A", shortName: "N/A", disable: true },
          ],
        },
        {
          id: "7",
          pid: "1",
          name: "Forelock",
          checked: false,
          Portion: [
            { bid: "7", id: "8", name: "N/A", shortName: "N/A", disable: true },
          ],
        },
        {
          id: "9",
          pid: "1",
          name: "Temple",
          checked: false,
          Portion: [
            {
              bid: "9",
              id: "10",
              name: "Right",
              shortName: "Right",
              disable: true,
            },
            {
              bid: "9",
              id: "11",
              name: "Left",
              shortName: "Left",
              disable: true,
            },
          ],
        },
        {
          id: "12",
          pid: "1",
          name: "Parietal",
          checked: false,
          Portion: [
            {
              bid: "12",
              id: "13",
              name: "Right",
              shortName: "Right",
              disable: true,
            },
            {
              bid: "12",
              id: "14",
              name: "Left",
              shortName: "Left",
              disable: true,
            },
          ],
        },
        {
          id: "15",
          name: "Occipital",
          pid: "1",
          checked: false,
          Portion: [
            {
              bid: "15",
              id: "16",
              name: "Right",
              shortName: "Right",
              disable: true,
            },
            {
              bid: "15",
              id: "17",
              name: "Left",
              shortName: "Left",
              disable: true,
            },
          ],
        },
        {
          id: "18",
          name: "Nuchal",
          pid: "1",
          checked: false,
          Portion: [
            {
              bid: "18",
              id: "19",
              name: "N/A",
              shortName: "N/A",
              disable: true,
            },
          ],
        },
      ],
    },
    {
      id: "20",
      groupname: "Face",
      shortname: "Face",
      checked: false,
      indeterminate: false,
      PortionInput: "DropDown",
      BodyPart: [
        {
          id: "21",
          name: "Eyebrow",
          checked: false,
          pid: "20",
          Portion: [
            {
              id: "22",
              name: "Right",
              shortName: "Right",
              bid: "21",
              disable: true,
            },
            {
              id: "23",
              name: "Left",
              shortName: "Left",
              bid: "21",
              disable: true,
            },
          ],
        },
        {
          id: "24",
          name: "Eyelid",
          pid: "20",
          checked: false,
          Portion: [
            {
              id: "25",
              name: "Right",
              shortName: "Right",
              bid: "24",
              disable: true,
            },
            {
              id: "26",
              name: "Left",
              shortName: "Left",
              bid: "24",
              disable: true,
            },
          ],
        },
        {
          id: "27",
          pid: "20",
          name: "Eyelashe",
          checked: false,
          Portion: [
            {
              id: "28",
              name: "Right",
              shortName: "Right",
              bid: "27",
              disable: true,
            },
            {
              id: "29",
              name: "Left",
              shortName: "Left",
              bid: "27",
              disable: true,
            },
          ],
        },
        {
          id: "30",
          name: "Cheek",
          pid: "20",
          checked: false,
          Portion: [
            {
              id: "31",
              name: "Right",
              shortName: "Right",
              bid: "30",
              disable: true,
            },
            {
              id: "32",
              name: "Left",
              shortName: "Left",
              bid: "30",
              disable: true,
            },
          ],
        },
        {
          id: "33",
          pid: "20",
          name: "Sideburn",
          checked: false,
          Portion: [
            {
              id: "34",
              name: "Right",
              shortName: "Right",
              bid: "33",
              disable: true,
            },
            {
              id: "35",
              name: "Left",
              shortName: "Left",
              bid: "33",
              disable: true,
            },
          ],
        },
        {
          id: "36",
          pid: "20",
          name: "Moustache",
          checked: false,
          Portion: [
            {
              id: "37",
              name: "N/A",
              shortName: "N/A",
              bid: "36",
              disable: true,
            },
          ],
        },
        {
          id: "38",
          pid: "20",
          name: "Lip",
          checked: false,
          Portion: [
            {
              id: "39",
              name: "Upper ",
              shortName: "Upper ",
              bid: "38",
              disable: true,
            },
            {
              id: "40",
              name: "Lower ",
              shortName: "Lower ",
              bid: "38",
              disable: true,
            },
          ],
        },
        {
          id: "41",
          pid: "20",
          name: "Jawline",
          checked: false,
          Portion: [
            {
              id: "42",
              name: "Right",
              shortName: "Right",
              bid: "41",
              disable: true,
            },
            {
              id: "43",
              name: "Left",
              shortName: "Left",
              bid: "41",
              disable: true,
            },
          ],
        },
        {
          id: "44",
          name: "Beard",
          pid: "20",
          checked: false,
          Portion: [
            {
              id: "45",
              name: "N/A",
              shortName: "N/A",
              bid: "44",
              disable: true,
            },
          ],
        },
        {
          id: "46",
          name: "Chin",
          pid: "20",
          checked: false,
          Portion: [
            {
              id: "47",
              name: "N/A",
              shortName: "N/A",
              bid: "46",
              disable: true,
            },
          ],
        },
      ],
    },
    {
      id: "48",
      groupname: "Thorax",
      shortname: "Thorax",
      checked: false,
      indeterminate: false,
      PortionInput: "DropDown",
      BodyPart: [
        {
          id: "49",
          name: "Neck",
          pid: "48",
          checked: false,
          Portion: [
            {
              id: "50",
              name: "N/A",
              shortName: "N/A",
              bid: "49",
              disable: true,
            },
          ],
        },
        {
          id: "51",
          checked: false,
          pid: "48",
          name: "Shoulder",
          Portion: [
            {
              id: "52",
              name: "Right",
              shortName: "Right",
              bid: "51",
              disable: true,
            },
            {
              id: "53",
              name: "Left",
              shortName: "Left",
              bid: "51",
              disable: true,
            },
          ],
        },
        {
          id: "54",
          checked: false,
          pid: "48",
          name: "Chest",
          Portion: [
            {
              id: "55",
              name: "LOWER",
              shortName: "LOWER",
              bid: "54",
              disable: true,
            },
            {
              id: "56",
              name: "UPPER",
              shortName: "UPPER",
              bid: "54",
              disable: true,
            },
            {
              id: "57",
              name: "RIGHT",
              shortName: "RIGHT",
              bid: "54",
              disable: true,
            },
            {
              id: "58",
              name: "LOWER",
              shortName: "LOWER",
              bid: "54",
              disable: true,
            },
          ],
        },
        {
          id: "59",
          checked: false,
          pid: "48",
          name: "Breast",
          Portion: [
            {
              id: "60",
              name: "Right",
              shortName: "Right",
              bid: "59",
              disable: true,
            },
            {
              id: "61",
              name: "Left",
              shortName: "Left",
              bid: "59",
              disable: true,
            },
          ],
        },
      ],
    },
  ];
  group: any[];
  SelectedArray: any = [];
  ParentCategoryArrayForCategory: any[];
  preservisListoption: any[];
  postservisListoption: any[];
  CategoryArrayForCategory: any;
  formData: any = false;
  onSelectionChanged(event) {
    console.log(
      "AddServiceBoxComponent -> onSelectionChange -> event",
      event.source
    );
    if (event.value && event.value.length > 0) {
      var count = 0;
      var pids = [];
      event.value.forEach((element) => {
        var pid;
        this.treatment.forEach((elementTreatement, i) => {
          elementTreatement.BodyPart.forEach((bodyPart) => {
            if (element === bodyPart.id) {
              count += 1;
              pid = bodyPart.pid;
              if (pids.length > 0) {
                pids.forEach((ele) => {
                  if (ele !== bodyPart.pid) {
                    pids.push(bodyPart.pid);
                  }
                });
              } else {
                pids.push(bodyPart.pid);
              }
            }
          });
          if (pid === elementTreatement.id) {
            if (elementTreatement.BodyPart.length === count) {
              this.treatment[i].indeterminate = false;
              this.treatment[i].checked = true;
            } else {
              this.treatment[i].indeterminate = true;
              this.treatment[i].checked = false;
            }
          }
        });
      });
      this.treatment.forEach((elementTreatement, i) => {
        var found = 0;
        pids.forEach((ele) => {
          if (ele === elementTreatement.id) {
            found = 1;
          }
        });
        if (!found) {
          this.treatment[i].indeterminate = false;
          this.treatment[i].checked = false;
        }
      });
    } else {
      this.treatment.forEach((elementTreatement, i) => {
        this.treatment[i].indeterminate = false;
        this.treatment[i].checked = false;
      });
    }
  }
  onSelectAll(group) {
    console.log(
      "AddServiceBoxComponent -> onSelectAll -> this.service.value.Group",
      group
    );
    this.treatment.forEach((element, index) => {
      if (group.id === element.id) {
        this.treatment[index].indeterminate = false;
        this.treatment[index].checked = !this.treatment[index].checked;
        if (this.treatment[index].checked) {
          group.BodyPart.forEach((element) => {
            this.SelectedArray.push(element.id);
          });
          this.service.patchValue({
            Group: this.SelectedArray,
          });
        } else {
          group.BodyPart.forEach((element) => {
            var index = this.SelectedArray.indexOf(element.id);
            this.SelectedArray.splice(index, 1);
          });
          this.service.patchValue({
            Group: this.SelectedArray,
          });
        }
      }
    });
  }
  ngOnInit() {
    this.forPortion();
    this.PreServiceSearch();
    this.PostServiceSearch();
    this.FnParentCategory();
    this.CatDropDown();
    this.getSereviceName();
    this.getGender();
    this.getStage();
    this.addSizeControllers();
    // this.getWeight();
    // this.getHeight();
    // this.getLength();
    this.preservisListoption = this.preservisList;
  }
  // getWeight(){
  //   this.service.controls['Weight'].valueChanges.subscribe((val)=>{
  //   console.log("AddServiceBoxComponent -> getWeight -> val", val)

  //   })
  // }
  // getHeight(){
  //   this.service.controls['Height'].valueChanges.subscribe((val)=>{
  //   console.log("AddServiceBoxComponent -> getHeight -> val", val)

  //   })
  // }
  // getLength(){
  //   this.service.controls['Length'].valueChanges.subscribe((val)=>{
  //   console.log("AddServiceBoxComponent -> getLength -> val", val)

  //   })
  // }

  addSizeControllers() {
    let element = [];
    let element2 = [];
    if (this.Gendervalue != null) {
      for (let index = 0; index < this.Gendervalue.length; index++) {
        element.push(this.Gendervalue[index][0].shortName);
      }
    } else {
      element = [];
    }
    if (this.Stagevalue != null) {
      for (let x = 0; x < this.Stagevalue.length; x++) {
        element2.push(this.Stagevalue[x][0].shortName);
      }
    } else {
      element2 = [];
    }

    if (this.Stagevalue != null && this.Gendervalue != null) {
      this.AddControllersForSize = [];
      for (let index = 0; index < element.length; index++) {
        const data = element[index];

        for (let y = 0; y < element2.length; y++) {
          const data2 = element2[y];
          this.service.addControl(
            data + "" + data2 + "" + "SizePrize",
            this.fb.group({})
          );

          this.service.addControl(
            data + "" + data2 + "" + "Height",
            this.fb.group({})
          );
          this.service.addControl(
            data + "" + data2 + "" + "Length",
            this.fb.group({})
          );
          this.service.addControl(
            data + "" + data2 + "" + "Weight",
            this.fb.group({})
          );
          this.form;
          console.log(
            "AddServiceBoxComponent -> addSizeControllers -> this.form",
            this.form
          );
        }
      }
      console.log(
        "AddServiceBoxComponent -> addSizeControllers -> this.AddControllersForSize",
        this.AddControllersForSize
      );
    } else {
      this.AddControllersForSize = [];
      // console.log(
      //   "AddServiceBoxComponent -> addSizeControllers -> this.AddControllersForSize = [];",
      //   this.AddControllersForSize
      // );
    }
  }
  durationChage(event) {
    const data1 = event.target.value;
    var data;
    let format2 = (n) =>
      `0${(n / 60) ^ 0}`.slice(-2) + ":" + ("0" + (n % 60)).slice(-2);
    data = format2(data1); // "00:05"
    this.service.patchValue({
      Duration: data,
    });
  }
  timeChage(event) {
    const data1 = event.target.value;
    var data = data1.charAt(0) + data1.charAt(1);
    var data2 = data1.charAt(3) + data1.charAt(4);
    var h = parseInt(data) * 60 + parseInt(data2);
    this.service.patchValue({ DurationMinut: h });
  }
  getStage() {
    this.service.controls["Stage"].valueChanges.subscribe((value) => {
      let data = []
      let data2 = []
      this.costomeCheck = false
      this.Stagevalue = []
      for (let index = 0; index < value.length; index++) {
        const element = value[index];
        data = this.stageFind.filter((x) => x.id == element)
        this.Stagevalue.push(data)
      }
      data2 = this.Stagevalue.filter((x) => x[0].id == '8')
      if (data2.length != 0) {
        const x = [2, 3, 4, 5, 6, 7]
        console.log("AddServiceBoxComponent -> getStage -> x", x)
        console.log("AddServiceBoxComponent -> getStage -> this.service.value.Stage", this.service.value.Stage)

       for (let index = 0; index < x.length; index++) {
         const element = x[index];
         this.service.value.Stage.pop(element)
       }
       
        this.Stage[1].category.length
        for (let j = 0; j < 6; j++) {
          this.Stage[0].category[j].dis = "true"
        }


      }
      else {
        for (let j = 0; j < 6; j++) {
          this.Stage[0].category[j].dis = "false"


        }
      }
    })

  }
  getGender() {
    this.service.controls["Gender"].valueChanges.subscribe((value) => {
      // // console.log("AddServiceBoxComponent -> value", value);
      this.Gendervalue = [];
      value.forEach((element, index) => {
        this.Gendervalue.push(this.Gender.filter((x) => x.id == value[index]));
        this.addSizeControllers();
      });
    });
  }
  getSereviceName() {
    this.service.controls["ServiceName"].valueChanges.subscribe((value) => {
      // console.log("AddServiceBoxComponent -> value", value);
      this.servicename = value;
    });
  }
  CatDropDown() {
    this.service.controls["Category"].valueChanges.subscribe((value) => {
      let data = this.ParentCategoryArrayForCategory.filter(
        (x) => x.id == value
      );
      this.CategoryArrayForCategory = data[0].subCat;
    });
  }
  FnParentCategory() {
    this.service.controls["ParentCategory"].valueChanges.subscribe((value) => {
      let data = this.ParentCategory.filter((x) => x.id == value);
      this.ParentCategoryArrayForCategory = data[0].category;
      this.ParentCategoryArrayForSize = data[0].size;
      console.log(
        "AddServiceBoxComponent -> FnParentCategory -> this.ParentCategoryArrayForSize",
        this.ParentCategoryArrayForSize
      );
    });
  }
  PostServiceSearch() {
    this.service.controls[
      "postservicesearchbox"
    ].valueChanges.subscribe((value) => { });
  }
  PreServiceSearch() {
    this.service.controls["preservicesearchbox"].valueChanges.subscribe(
      (value) => {
        console.log(
          "AddServiceBoxComponent -> PreServiceSearch -> value",
          value
        );
        if (value == "") {
          this.preservisListoption = [];
          this.preservisListoption = this.preservisList;
        } else {
          this.preservisListoption = [];
          const data = this.preservisList.filter((x) =>
            x.name.toLowerCase().includes(value)
          );
          this.preservisListoption.push(data);
          // console.log(
          //   "AddServiceBoxComponent -> PreServiceSearch -> this.preservisListoption",
          //   this.preservisListoption[0]
          // );
        }
      }
    );
  }
  forPortion() {
    this.service.controls["Portion"].valueChanges.subscribe((event) => {
      if (event && event.length > 0) {
        var count = 0;
        var pids = [];
        this.treatment.forEach((element, i) => {
          var pid;
          element.BodyPart.forEach((element1, j) => {
            element1.Portion.forEach((element2, x) => {
              // console.log(
              //   "AddServiceBoxComponent -> forPortion -> element2",
              //   element2
              // );
              if (element === element2.id) {
                count += 1;
                pid = element2.bid;
                // console.log("AddServiceBoxComponent -> forPortion -> pid", pid);
              }
            });
          });
        });
      }
    });
  }
  onSave() { }
}
