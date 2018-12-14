import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EventListPage} from './feedback/event-list.page';
import {SponsorListPage} from './feedback/sponsor-list.page';
import {SponsorDetailPage} from './feedback/sponsor-detail.page';
import {EventDetailPage} from './feedback/event-detail.page';
import {OrganizerListPage} from './feedback/organizer-list.page';
import {OrganizerDetailPage} from './feedback/organizer-detail.page';
import {AlbumListPage} from './academy/album-list.page';
import {AlbumDetailPage} from './academy/album-detail.page';
import {CardListPage} from './magic/card-list.page';
import {CardDetailPage} from './magic/card-detail.page';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'feedback/events/list', component: EventListPage},
    {path: 'feedback/sponsors/list', component: SponsorListPage},
    {path: 'feedback/sponsors/:code', component: SponsorDetailPage},
    {path: 'feedback/events/:code', component: EventDetailPage},
    {path: 'feedback/organizers/list', component: OrganizerListPage},
    {path: 'feedback/organizers/:code', component: OrganizerDetailPage},
    {path: 'albums/list', component: AlbumListPage},
    {path: 'albums/:id', component: AlbumDetailPage},
    {path: 'magic/cards/list', component: CardListPage},
    {path: 'magic/cards/:id', component: CardDetailPage},
  ]
}];
