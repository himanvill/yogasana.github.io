import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './home/classes/classes.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { YogaComponent } from './home/yoga/yoga.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { ContactComponent } from './home/contact/contact.component';
import { SubscribeComponent } from './footer/subscribe/subscribe.component';
import { LinksComponent } from './footer/links/links.component';
import { MatIconModule } from '@angular/material/icon';
import { ReviewComponent } from './home/review/review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClassesComponent,
    AboutUsComponent,
    YogaComponent,
    PricingComponent,
    ContactComponent,
    SubscribeComponent,
    LinksComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
