import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HivPrevComponent } from './hiv-prev/hiv-prev.component';
import { PatientComponent } from './patient/patient.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ResultComponent } from './result/result.component';
import { CriticalPersonComponent } from './critical-person/critical-person.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: 'preventive_hiv', component: HivPrevComponent },
  { path: 'patient_contact', component: PatientComponent },
  { path: 'search', component: EnquiryComponent },
  { path: 'result', component: ResultComponent },
  { path: 'critical_person', component: CriticalPersonComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: '/patient_contact', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
