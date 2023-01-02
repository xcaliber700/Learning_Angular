import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: '',component:StudentsComponent, pathMatch:'full'},
  {path: 'about-us', component:AboutComponent, pathMatch: 'prefix'},
  {path: 'services', component:HomeComponent, pathMatch: 'prefix'},
  {path: 'contact-us', component:ContactsComponent, pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
