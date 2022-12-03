import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators,} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    form: FormGroup  = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      userContactInfo: new FormGroup({
        email: new FormControl('',
          [
            Validators.required,
            Validators.pattern('^\\w+([\\.-]?\\w+)*@(gmail.com)+$')
          ]),
        phone: new FormControl('',
          [
            Validators.required,
            Validators.pattern('1?(\\+?995)[\\s]?\\d{3}[\\s]?\\d{2}[\\s]?\\d{2}[\\s]?\\d{2}')
          ])
      }),
      resources: new FormGroup({
        github: new FormControl('', Validators.pattern('^(https?:\\/\\/)?(www\\.)?github\\.com\\/[a-zA-Z0-9_]{1,25}$')),
        linkedin: new FormControl('', Validators.pattern('^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$')),
      }),
      experience: new FormArray([]),
      education: new FormArray([]),
    })

  submit() {
    console.log(this.form)
  }


  //for experience
  get expFormArray() {
    return this.form.get('experience') as FormArray;
  }
  addExp() {
    this.expFormArray.push(new FormGroup({
      company: new FormControl('', Validators.required),
      years: new FormControl('', Validators.required),
    }))
  }
  removeExp(i:number) {
    this.expFormArray.removeAt(i);
  }
  //for education

  get eduFormArray() {
    return this.form.get('education') as FormArray;
  }
  addEdu() {
    this.eduFormArray.push(new FormGroup({
      place: new FormControl('', Validators.required),
      yearsFrom: new FormControl('', Validators.required),
      yearsTill: new FormControl('', Validators.required),
    }))
  }
  removeEdu(i:number) {
    this.eduFormArray.removeAt(i);
  }
}
