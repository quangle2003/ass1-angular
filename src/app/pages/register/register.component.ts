import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    credentials = {
      username: '',
      password: '',
      confirmpassword: '',
    };
    onSubmit() {
      console.log('Login submitted', this.credentials)
    }
}
