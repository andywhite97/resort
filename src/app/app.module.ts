import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './restaurant/menu/menu.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';
import { InfoComponent } from './contact/info/info.component';
import { QuoteFormComponent } from './accomodation/quote-form/quote-form.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { RoomPricingComponent } from './accomodation/room-pricing/room-pricing.component';
import { ReservationComponent } from './restaurant/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    RestaurantComponent,
    MenuComponent,
    AccomodationComponent,
    TestimonialsComponent,
    ContactComponent,
    MapComponent,
    FormComponent,
    InfoComponent,
    QuoteFormComponent,
    NewsletterComponent,
    RoomsComponent,
    RoomPricingComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
