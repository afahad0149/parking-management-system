import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from './vehicleInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  baseUrl = 'http://localhost:3000/vehicles';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  createVehicleInfo(vInfo: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.baseUrl, vInfo, this.httpOptions);
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }
}
