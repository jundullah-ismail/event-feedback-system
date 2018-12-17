import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'trg-card-list',
  templateUrl: './card-list-dialog.html',
})
export class CardListDialog implements OnInit{

  mainForm  : FormGroup;
  submitted = false;

  constructor(private dialogRef: MatDialogRef<CardListDialog> ,
              private form : FormBuilder){

    this.mainForm = this.form.group({
      name: ['',Validators.required],
      cmc:  [0,Validators.required],
      type: ['',Validators.required],
    });
  }

  ngOnInit() {

  }

  onSubmit(value:any) {
    console.log(JSON.stringify(value));
    this.submitted = true;
    this.dialogRef.close();
  }

}
