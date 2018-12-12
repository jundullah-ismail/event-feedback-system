import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Event} from './event.model';
import {Observable} from 'rxjs';
import {EventService} from '../../services/event.service';
@Component({
  selector: 'trg-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss']
})
export class EventDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  event$: Observable<Event> = null;

  constructor(private form: FormBuilder,
              private eventService: EventService) {
    this.mainForm = this.form.group({
      name: ['', Validators.required],
      venue: ['', Validators.minLength(6)],
      //email: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.event$ = this.eventService.findEventById();

    // patch form values
    this.event$.subscribe(event => this.mainForm.patchValue(event));
  }

  onSubmit() {
    console.log('');
    this.submitted = true;
  }


}
