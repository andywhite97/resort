import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ContactComponent } from './contact/contact.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'activities', component: ActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
