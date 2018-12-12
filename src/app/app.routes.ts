import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EventListPage} from './feedback/event-list.page';
import {EventDetailPage} from './feedback/event-detail.page';
import {OrganizerListPage} from './feedback/organizer-list.page';
import {OrganizerDetailPage} from './feedback/organizer-detail.page';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'feedback/events/list', component: EventListPage},
    {path: 'feedback/events/:code', component: EventDetailPage},
    {path: 'feedback/organizer/list', component: OrganizerListPage},
    {path: 'feedback/organizer/:code', component: OrganizerDetailPage},
  ]
}];
