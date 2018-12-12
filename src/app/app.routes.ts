import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EventListPage} from './feedback/event-list.page';
import {EventDetailPage} from './feedback/event-detail.page';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'feedback/events/list', component: EventListPage},
    {path: 'academy/apprentices/:code', component: EventDetailPage},
  ]
}];
