import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicleInfo';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss'],
})
export class InfoFormComponent {

  @Input() update: boolean = false;

  infoForm = this.fb.group({
    licenseNo: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    ownerName: new FormControl('', [Validators.required]),
    ownerPhone: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    ownerAddress: new FormControl('', [Validators.required]),
    entryTime: new FormControl('', [Validators.required]),
    exitTime: new FormControl(''),
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

  constructor(private fb: FormBuilder, private vService: VehicleService) {}

  ngOnInit(): void {}

  handleSubmit() {
    // console.log(this.infoForm.value);

    const {
      licenseNo,
      type,
      ownerName,
      ownerAddress,
      ownerPhone,
      status,
      entryTime,
      parkingCharge,
    } = this.infoForm.value;

    if (
      licenseNo &&
      type &&
      ownerName &&
      ownerAddress &&
      ownerPhone &&
      status &&
      entryTime &&
      parkingCharge
    ) {
      if (!this.update)
      this.vService
      .createVehicleInfo({
        licenseNo,
        type,
        ownerName,
        ownerAddress,
        ownerPhone,
        status,
        entryTime,
        parkingCharge,
      })
      .subscribe((v) => v);
    } else {
      
    }
  }
}
  