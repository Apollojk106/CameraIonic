import { Component } from '@angular/core';
import { CamServiceService } from '../cam-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public CamService: CamServiceService) {}

}
