import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicleInfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  currentDate = new Date(Date.now());
  PARKING_SPOTS = 50;
  vehicles: Vehicle[] = [];
  filteredVehicles: Vehicle[] = [];

  filterForm = this.fb.group({
    dateFilter: new FormControl(
      `${
        this.currentDate.getMonth() + 1
      }/${this.currentDate.getDate()}/${this.currentDate.getFullYear()}`
    ),
  });
  constructor(private fb: FormBuilder, private vService: VehicleService) {}
  ngOnInit() {
    this.getVehicles();
    this.filterForm.valueChanges.subscribe((cng) => {
      const date = new Date(cng.dateFilter || '').toISOString().slice(0, 10);
      // console.log(date);
      this.filteredVehicles = this.filterVehicles(date);
      // console.log(this.filteredVehicles.length);
    });
  }

  getVehicles() {
    this.vService.getAllVehicles().subscribe((vehicles) => {
      // console.log(vehicles);
      this.vehicles = vehicles;
    });
  }

  filterVehicles(date: string) {
    return this.vehicles.filter(
      (v) => v.entryTime.toLocaleString().includes(date) && v.status === 'in'
    );
  }

  vehiclesParked() {
    return this.vehicles.filter((v) => v.status === 'in').length;
  }

  vehiclesParkedByType(type: string) {
    return this.vehicles.filter((v) => v.status === 'in' && v.type === type)
      .length;
  }
}
