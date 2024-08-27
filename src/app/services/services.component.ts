import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
//import { StudentinformationsystemComponent } from "../studentinformationsystem/studentinformationsystem.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FooterComponent, NavbarComponent,RouterLink,RouterLinkActive],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
