import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicleInfo';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
  constructor(private vService: VehicleService) {}

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.vService.getAllVehicles().subscribe((vehicles) => {
      // console.log(vehicles);
      this.vehicles = vehicles;
    });
  }

  updateVehicle(license: string) {
    
  }
}
