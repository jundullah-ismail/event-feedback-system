import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EventListPage} from './feedback/event-list.page';
import {SponsorListPage} from './feedback/sponsor-list.page';
import {SponsorDetailPage} from './feedback/sponsor-detail.page';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'feedback/events/list', component: EventListPage},
    {path: 'feedback/sponsors/list', component: SponsorListPage},
    {path: 'feedback/sponsors/:code', component: SponsorDetailPage},
  ]
}];
