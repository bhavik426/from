import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent {

  relation: string[] = ['Mother', 'Father', 'Son', 'Daughter', 'Uncle', 'Aunty']
  alldata:Array<student>=[]

  form: FormGroup
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        name: this.fb.group({
            first: ['',[Validators.required,Validators.minLength(3)]],
            middle: ['',[Validators.required,Validators.minLength(3)]],
            last: ['',[Validators.required,Validators.minLength(3)]]
          }),
        dob: ['',Validators.required],
        placeofbirth: ['',Validators.required],
        firstlanguage: ['',Validators.required],
        address: this.fb.group({
          city: ['',Validators.required],
          state: ['',Validators.required],
          country: ['',Validators.required],
          pin: ['',[Validators.required,Validators.pattern('^[1-9]{1}[0-9]{2}[0-9]{3}$'),Validators.minLength(6),Validators.maxLength(6)]]
        }),
        father: this.fb.group({
          fullname: this.fb.group({
            first: ['',[Validators.required,Validators.minLength(3)]],
            middle: ['',[Validators.required,Validators.minLength(3)]],
            last: ['',[Validators.required,Validators.minLength(3)]]
          }),
          email: ['',Validators.required],
          education: ['',Validators.required],
          profession: ['',Validators.required],
          designation: ['',Validators.required],
          phone: ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),Validators.minLength(10),Validators.maxLength(10)]]
        }),
        mother: this.fb.group({
          fullname: this.fb.group({
            first: ['',[Validators.required,Validators.minLength(3)]],
            middle: ['',[Validators.required,Validators.minLength(3)]],
            last: ['',[Validators.required,Validators.minLength(3)]]
          }),
          email: ['',Validators.required],
          education: ['',Validators.required],
          profession: ['',Validators.required],
          designation: ['',Validators.required],
          phone: ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),Validators.minLength(10),Validators.maxLength(10)]]
        }),
        emergency: this.fb.array([
          this.fb.group({
            relation: ['',Validators.required],
            number: ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),Validators.minLength(10),Validators.maxLength(10)]]
          })
        ])
      }
    )
  }

  get name() {
    return this.form.get('name')
  }

  get firstn()
  {
    return this.name?.get('first')
  }

  get middlen()
  {
    return this.name?.get('middle')
  }

  get lastn()
  {
    return this.name?.get('last')
  }

  get dob() {
    return this.form.get('dob')
  }

  get placeofbirth() {
    return this.form.get('placeofbirth')
  }

  get firstlanguage() {
    return this.form.get('firstlanguage')
  }

  get address() {
    return this.form.get('address')
  }

  get city() {
    return this.address?.get('city')
  }

  get state() {
    return this.address?.get('state')
  }

  get country() {
    return this.address?.get('country')
  }

  get pin() {
    return this.address?.get('pin')
  }
  //father------------------------------------------------------------------
  get father() {
    return this.form.get('father')
  }

  get fullnamef() {
    return this.father?.get('fullname')
  }

  get firstf() {
    return this.fullnamef?.get('first')
  }

  get middlef() {
    return this.fullnamef?.get('middle')
  }

  get lastf() {
    return this.fullnamef?.get('last')
  }

  get emailf() {
    return this.father?.get('email')
  }

  get educationf() {
    return this.father?.get('education')
  }

  get professionf() {
    return this.father?.get('profession')
  }

  get designationf() {
    return this.father?.get('designation')
  }

  get phonef() {
    return this.father?.get('phone')
  }
  //mother----------------------------------------------------------------
  get mother() {
    return this.form.get('mother')
  }

  get fullnamem() {
    return this.mother?.get('fullname')
  }

  get firstm() {
    return this.fullnamem?.get('first')
  }

  get middlem() {
    return this.fullnamem?.get('middle')
  }

  get lastm() {
    return this.fullnamem?.get('last')
  }

  get emailm() {
    return this.mother?.get('email')
  }

  get educationm() {
    return this.mother?.get('education')
  }

  get professionm() {
    return this.mother?.get('profession')
  }

  get designationm() {
    return this.mother?.get('designation')
  }

  get phonem() {
    return this.mother?.get('phone')
  }

  get emergency() {
    return this.form.get('emergency') as FormArray
  }

  get relations() {
    return this.emergency?.get('relation')
  }

  get number() {
    return this.emergency?.get('number')
  }



  data() {
    let firstn = this.firstn?.value
    let middlen = this.middlen?.value
    let lastn = this.lastn?.value
    let dob = this.dob?.value
    let placeofbirth = this.placeofbirth?.value
    let firstlanguage = this.firstlanguage?.value
    let city = this.city?.value
    let state = this.state?.value
    let country = this.country?.value
    let pin = this.pin?.value
    let firstf = this.firstf?.value
    let middlef = this.middlef?.value
    let lastf = this.lastf?.value
    let emailf = this.emailf?.value
    let educationf = this.educationf?.value
    let professionf = this.professionf?.value
    let designationf = this.designationf?.value
    let phonef = this.phonef?.value
    let firstm = this.firstm?.value
    let middlem = this.middlem?.value
    let lastm = this.lastm?.value
    let emailm = this.emailm?.value
    let educationm = this.educationm?.value
    let professionm = this.professionm?.value
    let designationm = this.designationm?.value
    let phonem = this.phonem?.value
    let relations = this.relations?.value
    let number = this.number?.value

        let newname = {first:firstn,middle:middlen,last:lastn}
        let address={city:city, state:state, country:country,pin:pin}

        let fullnamef = {first:firstf, middle:middlef, last:lastf}

        let father={
          fullname:fullnamef,
          email:emailf,
          education:educationf,
          profession:professionf,
          designation:designationf,
          phone:phonef}

          let fullnamem = {first:firstm, middle:middlem, last:lastm}

        let mother={
          fullname:fullnamem,
          email:emailm,
          education:educationm,
          profession:professionm,
          designation:designationm,
          phone:phonem}
          
          let newemergency: Array<contact>=[]

          this.emergency.value.forEach((element: any) => {
            newemergency.push(element);
          });
          console.log(newemergency)    
          
          
        this.alldata.push({name:newname,dob:dob,placeofbirth:placeofbirth,firstlanguage:firstlanguage,address:address,father:father,mother:mother,emergency:newemergency})
    
      console.log(this.alldata)
  }


  newcontact()
  {
    this.emergency.push(
      this.fb.group({
      relation: ['',Validators.required],
      number: ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),Validators.minLength(10),Validators.maxLength(10)]]
    })
    )
  }




}

export interface student {
  name: fullname,
  dob: string,
  placeofbirth: string,
  firstlanguage: string,
  address: address,
  father: father,
  mother: father,
  emergency: contact[]
}
export interface address {
  city: string,
  state: string,
  country: string,
  pin: number
}
export interface father {
  fullname: fullname,
  email: string,
  education: string,
  profession: string,
  designation: string,
  phone: number
}
export interface contact {
  relation: string,
  number: number
}
export interface fullname {
  first: string,
  middle: string,
  last: string
}
