import { KeyValuePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass, NgFor, KeyValuePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private router: Router){}
  // redirectPage(page: string){}
  
  // onSubmit(form: NgForm){
    //   console.log(form.value);
    //   this.router.navigate(['/']);
    // }
    @Input() StrongPassword: RegExp = /(?!.* )(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/
    
    loginForm!:FormGroup
    ngOnInit(){
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        // password: new FormControl('', [Validators.required, Validators.minLength(6)])
        password: new FormControl('', [Validators.required, 
          Validators.pattern(this.StrongPassword)])
      })
    }
    onSubmit(){
      console.log(this.loginForm.value);
      // this.router.navigate(['/']);
      
      // this.api.sendData(this.loginForm.value).subscribe(data => {
      //   console.log(data);
      // })
    }
    get password() {
      return this.loginForm.get('password');
    }
    get passwordErrors() {
      const password = this.password?.value || '';
      return {
        hasWhiteSpace: !/(?!.* )/.test(password),
        hasLowerCase: !/(?=.*[a-z])/.test(password),
        hasUpperCase: !/(?=.*[A-Z])/.test(password),
        hasNumber: !/(?=.*[0-9])/.test(password),
        hasSpecialChar: !/(?=.*[$@!%*?&])/.test(password),
        minLength: password.length < 7,
        maxLength: password.length > 20,
      };
    }

    getErrorMessage(errorKey: string): string {
      switch (errorKey) {
        case 'hasWhiteSpace':
          return 'Password cannot contain white spaces';
        case 'hasLowerCase':
          return 'Must contain at least one lowercase letter';
        case 'hasUpperCase':
          return 'Must contain at least one uppercase letter';
        case 'hasNumber':
          return 'Must contain at least one numeric character';
        case 'hasSpecialChar':
          return 'Must contain at least one special character ($@$!%*?&)';
        case 'minLength':
          return 'Must be at least 8 characters in length';
        case 'maxLength':
          return 'Must be no more than 20 characters in length';
        default:
          return '';
      }
    }
    
    
}
