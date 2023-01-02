import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CommunitiesComponent } from './pages/communities/communities.component';
import { DrsComponent } from './pages/drs/drs.component';
import { FederatedServerListComponent } from './pages/federated-server-list/federated-server-list.component';
import { FediverseComponent } from './pages/fediverse/fediverse.component';
import { HowToComponent } from './pages/how-to/how-to.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

const routes: Routes = [

  { path: '*', component: FederatedServerListComponent },
  { path: 'servers', component: FederatedServerListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'how-to', component: HowToComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'communities', component: CommunitiesComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'drs', component: DrsComponent },
  { path: 'fediverse', component: FediverseComponent },
  { path: '**', component: FederatedServerListComponent }   


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
