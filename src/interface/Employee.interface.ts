import { ICertificate } from "./Certificate.interface"
import { IFamily } from "./Family.interface"

export interface IEmployeeFamilyDtos {
  id: number;
  name: string;
  gender: number;
  dateOfBirth: number;
  relationShip: number;
  citizenIdentificationNumber: string;
  address: string;
  email: string;
  employeeId: number;
  phoneNumber: string;
}

export interface ICertificatesDto {
  id: number;
  certificateName: string;
  issueDate: number;
  content: string;
  field: string;
  employeeId: number;
}

export interface IEployeeRes {
  code: number;
  message: string;
  data: {
    id: number;
    name: string;
    code: string;
    gender: number;
    dateOfBirth: number;
    address: string;
    team: number;
    email: string;
    image: string;
    phone: string;
    citizenIdentificationNumber: string;
    dateOfIssuanceCard: number;
    placeOfIssueCard: string;
    submitDay: number;
    leaderName: string;
    leaderPosition: number;
    submitContent: string;
    knowledge: null;
    activity: string;
    skill: string;
    submitProfileStatus: string;
    currentPosition: number;
    employeeFamilyDtos: null;
    certificatesDto: null;
    ethnic: string;
    religion: string;
    appointmentDate: number;
    additionalRequest: null;
    rejectionDate: null;
    reasonForRejection: null;
    additionalRequestTermination: null;
    terminationAppointmentDate: null;
    refuseEndProfileDay: null;
    reasonForRefuseEndProfile: null;
    endDay: number;
    reasonForEnding: string;
    numberSaved: null;
    decisionDay: null;
    leaderId: number;
  }[];
  totalElements: number;
}

export interface IEmployeeApiResByID {
  code: number;
  message: string;
  data: {
    id: number;
    name: string;
    code: string;
    gender: number;
    dateOfBirth: number;
    address: string;
    team: number;
    email: string;
    image: string;
    phone: string;
    citizenIdentificationNumber: string;
    dateOfIssuanceCard: number;
    placeOfIssueCard: string;
    submitDay: number;
    leaderName: string;
    leaderPosition: number;
    submitContent: string;
    knowledge: null;
    activity: string;
    skill: string;
    submitProfileStatus: string;
    currentPosition: null;
    employeeFamilyDtos: IEmployeeFamilyDtos[];
    certificatesDto: ICertificatesDto[];
    ethnic: string;
    religion: string;
    appointmentDate: null;
    additionalRequest: null;
    rejectionDate: null;
    reasonForRejection: string;
    additionalRequestTermination: null;
    terminationAppointmentDate: null;
    refuseEndProfileDay: null;
    reasonForRefuseEndProfile: null;
    endDay: null;
    reasonForEnding: null;
    numberSaved: null;
    decisionDay: null;
    leaderId: number;
  };
}

export interface IUser {
  id: number;
  name: string;
  code: string | number;
  gender: string;
  dateOfBirth: string;
  address: string;
  team: string;
  email: string;
  image: string;
  phone: string;
  ethnic: string;
  religion: string;
  dateOfIssuanceCard: string;
  placeOfIssueCard: string;
  citizenIdentificationNumber: string;
  certificatesDto: [];
  employeeFamilyDtos: []

}


export interface IUpdateImage {
  contentSize: number;
  contentType: string;
  createDate: string;
  createdBy: string;
  extension: string;
  filePath: string;
  id: string;
  modifiedBy: string;
  modifyDate: string;
  name: string;
  voided: boolean;

}

export interface IResponse {
  Code: number;
  data: {
    activity: string;
    additionalRequest: string;
    additionalRequestTermination: string;
    address: string;
    appointmentDate: string;
    certificatesDto: string;
    citizenIdentificationNumber: string;
    code: string;
    currentPosition: string;
    dateOfBirth: number;
    dateOfIssuanceCard: number;
    decisionDay: string;
    email: string;
    employeeFamilyDtos: string;
    endDay: string;
    ethnic: string;
    gender: number;
    id: number;
    image: string;
    knowledge: string;
    leaderId: number;
    leaderName: string;
    leaderPosition: number;
    name: string;
    numberSaved: string;
    phone: string;
    placeOfIssueCard: string;
    reasonForEnding: string;
    reasonForRefuseEndProfile: string;
    reasonForRejection: string;
    refuseEndProfileDay: string;
    rejectionDate: string;
    religion: string;
    skill: string;
    submitContent: string;
    submitDay: string;
    submitProfileStatus: string;
    team: number;
    terminationAppointmentDate: string
  };
  message: string
}
export interface IUserUpdate {
  id: number;
  name: string;
  code: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  team: string;
  email: string;
  image: string;
  phone: string;
  ethnic: string;
  religion: string;
  dateOfIssuanceCard: string;
  placeOfIssueCard: string;
  citizenIdentificationNumber: string;
  certificatesDto: ICertificate[];
  employeeFamilyDtos: IFamily[]

}
