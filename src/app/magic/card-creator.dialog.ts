import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'trg-card-creator',
  templateUrl: './card-creator.dialog.html'
})
export class CardCreatorDialog implements OnInit{

  mainForm: FormGroup;
  submitted = false;

  constructor(private dialogRef: MatDialogRef<CardCreatorDialog>,
              private form: FormBuilder) {
    this.mainForm = this.form.group({
      name: ['', Validators.required],
      cmc: [0, Validators.required],
      type: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    console.log(JSON.stringify(value));
    this.submitted = true;
    this.dialogRef.close();
  }

}

