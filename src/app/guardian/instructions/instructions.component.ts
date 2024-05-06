import { Component } from '@angular/core';
import { GuardianService } from '../guardian.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent 
{

  constructor(private guardianservice:GuardianService,private router:Router)
  {
  
  }
  
  goToHomePage():void
  {
    this.router.navigate(["/login"])
  }

}
