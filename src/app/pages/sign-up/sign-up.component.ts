import { User } from './../../models/user.model';
import { ToastService } from './../../services/toast.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    private apiService: ApiService,
    private toastService: ToastService
  ) {}

  onSubmit(signUpForm: NgForm) {
    const { username, password, confirmPassword } = signUpForm.value;

    this.apiService.signUpUser(username, password, confirmPassword).subscribe({
      next: () => {
        this.toastService.add('Success. Please login to your new account!');
      },
      error: (error) => {
        let errors = Object.values(error.error.errors);

        errors = errors.map((element: any) => element.join('. '));

        errors.forEach((element: any) => this.toastService.add(element));
      },
    });
  }
}
