import { Component } from '@angular/core';
import { ServicesModule } from '../services/services.module';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  constructor(private services: UserServiceService){}
  processForm(fData: any){
    console.log(JSON.stringify(fData.value));
    // this.services.addUsers(JSON.stringify(fData.value))
  }

}
