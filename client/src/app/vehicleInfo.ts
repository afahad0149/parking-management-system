export interface Vehicle {
  licenseNo: string;
  type: string;
  ownerName: string;
  ownerPhone: string;
  status: string;
  ownerAddress: string;
  entryTime: Date | string;
  exitTime?: Date | string;
  parkingCharge: number;
}
