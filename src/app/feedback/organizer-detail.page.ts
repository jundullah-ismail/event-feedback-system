import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Organizer} from './organizer.model';
import {Observable} from 'rxjs';
import {EventService} from '../../services/event.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'trg-organizer-detail',
  templateUrl: './organizer-detail.page.html',
  styleUrls: ['./organizer-detail.page.scss']
})
export class OrganizerDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  organizer$: Observable<Organizer> = null;

  constructor(
    private form: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: { code: string }) => {
      console.log(params);
    });
    this.mainForm = this.form.group({
      name: ['', Validators.required],
      commiteeNum: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.organizer$ = this.eventService.findOrganizerById();

    // patch form values
    this.organizer$.subscribe(organizer => this.mainForm.patchValue(organizer));
  }

  onSubmit() {
    console.log('');
    this.submitted = true;
  }


}
