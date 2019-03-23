import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HivPrevComponent } from './hiv-prev/hiv-prev.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ResultComponent } from './result/result.component';
import { CriticalPersonComponent } from './critical-person/critical-person.component';
import { ChatComponent } from './chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HivPrevComponent,
    EnquiryComponent,
    ResultComponent,
    CriticalPersonComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
