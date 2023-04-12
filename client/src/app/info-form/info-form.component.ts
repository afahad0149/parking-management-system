import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss'],
})
export class InfoFormComponent {
  infoForm = this.fb.group({
    licenseNo: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    ownerName: new FormControl('', [Validators.required]),
    ownerPhone: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    ownerAddress: new FormControl('', [Validators.required]),
    entryTime: new FormControl('', [Validators.required]),
    exitTime: new FormControl('', [Validators.required]),
    parkingCharge: new FormControl(100, [Validators.required]),
  });

  types: { value: string; viewValue: string }[] = [
    { value: 'microbus', viewValue: 'Microbus' },
    { value: 'car', viewValue: 'Car' },
    { value: 'truck', viewValue: 'Truck' },
  ];

  status: { value: string; viewValue: string }[] = [
    { value: 'in', viewValue: 'In' },
    { value: 'out', viewValue: 'Out' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  // handleSubmit() {
  //   const { email, password } = this.loginForm.value;
  //   if (email && password) {
  //     this.auth.login(email, password).subscribe({
  //       next: (res) => {
  //         localStorage.setItem('user', JSON.stringify(res));
  //         const user = res.body;
  //         if (user && user.userType === 'client') {
  //           this.router.navigate(['client-search']);
  //           // console.log('user', user.userType);
  //         } else if (user && user.userType === 'lawyer') {
  //           this.router.navigate(['lawyer-dashboard']);
  //           // console.log('user', user.userType);
  //         } else this.router.navigate(['admin-dashboard']);
  //       },
  //       error: (err) => {
  //         this.errorMessage = err.error;
  //         setTimeout(() => {
  //           this.errorMessage = '';
  //         }, 3000);
  //       },
  //     });
  //   }
  // }

  handleSubmit() {}
}
