export interface IFamily {
  id: number;
  name: string;
  gender: number;
  dateOfBirth: number;
  relationShip: number;
  citizenIdentificationNumber: string;
  address: string;
  email: string;
  phoneNumber: string;
  employeeId: number;
}

export interface IFamilyRes {
  code: number;
  message: string;
  data: IFamily[];
}
