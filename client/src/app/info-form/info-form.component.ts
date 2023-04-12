import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss'],
})
export class InfoFormComponent {
  infoForm = this.fb.group({
    licenseNo: new FormControl(''),
    type: new FormControl(''),
    ownerName: new FormControl(''),
    ownerPhone: new FormControl(''),
    status: new FormControl(''),
    ownerAddress: new FormControl(''),
    entyTime: new FormControl(''),
    exitTime: new FormControl(''),
    parkingCharge: new FormControl(0),
  });

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
