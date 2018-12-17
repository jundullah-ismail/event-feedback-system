import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector:'trg-salam-world-dialog',
  templateUrl: './salam-world.dialog.html'
  })
export class SalamWorldDialog implements OnInit {

  mainForm:FormGroup;

  constructor(private myForm: FormBuilder) {
    this.mainForm = this.myForm.group({
      text: [''],
      rate: [5],
      })
  }

  ngOnInit(): void {
  }

  onSubmit (value: any) {
    console.log(JSON.stringify(value));
  }
 }
