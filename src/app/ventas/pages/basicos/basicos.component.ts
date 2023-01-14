import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{
  public lowerCase : string = "gabriel";
  public upperCase : string = "GABRIEL";
  public caseTitle : string = "gAbRiEL";

  public fecha : Date = new Date();
}
