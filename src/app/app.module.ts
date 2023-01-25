import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewRentalsComponent} from './new-rentals/new-rentals.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {RentalSolutionComponent} from './rental-solution/rental-solution.component';
import {ChooseUsComponent} from './choose-us/choose-us.component';
import {FaqComponent} from './faq/faq.component';
import {FormComponent} from './form/form.component';
import {FooterComponent} from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkAccordionModule} from "@angular/cdk/accordion";

@NgModule({
  declarations: [
    AppComponent,
    NewRentalsComponent,
    RentalSolutionComponent,
    ChooseUsComponent,
    FaqComponent,
    FormComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        BrowserAnimationsModule,
        CdkAccordionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
