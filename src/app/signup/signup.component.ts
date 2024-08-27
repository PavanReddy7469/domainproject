// import { Component } from '@angular/core';
// import { NavbarComponent } from "../navbar/navbar.component";
// import { FooterComponent } from '../footer/footer.component';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [NavbarComponent,FooterComponent,ReactiveFormsModule],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {
//   signUp:any=new FormGroup({
//     name:new FormControl('',[Validators.required]),
//     email:new FormControl('',[Validators.required,Validators.email]),
//     password:new FormControl('',[Validators.required,Validators.minLength(8)]),
//     confirmpassword:new FormControl('',[Validators.required,Validators.minLength(8)]),

//   })

//   submit(){
//     console.log(this.signUp.value)
    
//   }

// }
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUp = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  submit() {
    
      console.log(this.signUp.value);
    
  }
}

