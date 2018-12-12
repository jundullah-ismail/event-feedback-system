import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule
} from '@angular/material';

import {MatTableModule} from '@angular/material/table';
import {EventService} from '../../services/event.service';
import {OrganizerDetailPage} from './organizer-detail.page';
import {OrganizerSourceCode} from './organizer.source-code';
import {OrganizerListPage} from './organizer-list.page';
import {EventDetailPage} from './event-detail.page';
import {EventListPage} from './event-list.page';
import {EventDataSource} from './event.data-source';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
  ],
  declarations: [
    EventListPage,
    OrganizerDetailPage,
    OrganizerSourceCode,
    OrganizerListPage,
    EventDetailPage,
    EventDataSource,
  ],
  exports: [],

  providers: [
    EventService
  ]

})
export class FeedbackModule {
}


