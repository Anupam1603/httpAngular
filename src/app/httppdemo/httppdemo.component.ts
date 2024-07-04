import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-httppdemo',
  templateUrl: './httppdemo.component.html',
  styleUrl: './httppdemo.component.css'
})
export class HttppdemoComponent {

  allUser = new Array<any>;
   constructor(private dataService : DataService) {

   }
  onGetUserButtonClick()
  {
      this.dataService.getUser().subscribe((data)=>this.allUser = data);
  }
}
