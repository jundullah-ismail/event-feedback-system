import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Sponsor} from './sponsor.model';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'trg-sponsor-detail',
  templateUrl: './sponsor-detail.page.html',
  styleUrls: ['./sponsor-detail.page.scss']
})
export class SponsorDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  sponsor$: Observable<Sponsor> = null;

  constructor(private form: FormBuilder,
              private eventService: EventService) {
    this.mainForm = this.form.group({
      companyName: ['', Validators.required],
      sponsorshipType: ['', Validators.required],
      amountSponsored: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.sponsor$ = this.eventService.findSponsorById();

    // patch form values
    this.sponsor$.subscribe(sponsor => this.mainForm.patchValue(sponsor));
  }

  onSubmit() {
    console.log('');
    this.submitted = true;
  }


}
