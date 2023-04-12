import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  filterForm = this.fb.group({
    dateFilter: new FormControl(''),
  });
  constructor(private fb: FormBuilder) {}
}
